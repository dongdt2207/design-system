import { useEffect, useState, useSyncExternalStore } from 'react';
import './Toast.css';
export interface ToastItem { id: number; message: string; tone?: 'neutral' | 'success' | 'danger'; action?: { label: string; onClick: () => void }; duration?: number }
let seq = 0; let items: ToastItem[] = []; const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());
/** Gọi từ bất kỳ đâu: toast('Đã lưu'), toast.success(...), toast.error(..., { action }). Một dòng, tự đóng sau 5s, cái mới thay cái cũ. */
export function toast(message: string, opts: Partial<Omit<ToastItem, 'id' | 'message'>> = {}) {
  const t: ToastItem = { id: ++seq, message, duration: 5000, tone: 'neutral', ...opts };
  items = [t]; emit();
  return t.id;
}
toast.success = (m: string, o?: Partial<ToastItem>) => toast(m, { ...o, tone: 'success' });
toast.error = (m: string, o?: Partial<ToastItem>) => toast(m, { ...o, tone: 'danger', duration: 8000 });
toast.dismiss = (id?: number) => { items = id ? items.filter((t) => t.id !== id) : []; emit(); };
const subscribe = (f: () => void) => { subs.add(f); return () => subs.delete(f); };
/** Đặt một lần ở gốc app. */
export function Toaster() {
  const list = useSyncExternalStore(subscribe, () => items, () => items);
  return <div className="eb-toaster" aria-live="polite">{list.map((t) => <ToastView key={t.id} item={t} />)}</div>;
}
function ToastView({ item }: { item: ToastItem }) {
  const [leaving, setLeaving] = useState(false);
  useEffect(() => { const a = setTimeout(() => setLeaving(true), (item.duration ?? 5000) - 200); const b = setTimeout(() => toast.dismiss(item.id), item.duration ?? 5000); return () => { clearTimeout(a); clearTimeout(b); }; }, [item]);
  return (
    <div className={`eb-toast eb-toast--${item.tone}${leaving ? ' eb-toast--leaving' : ''}`} role={item.tone === 'danger' ? 'alert' : 'status'}>
      <span className="eb-toast__dot" aria-hidden="true" />
      <span className="eb-toast__msg">{item.message}</span>
      {item.action && <button className="eb-toast__action" onClick={() => { item.action?.onClick(); toast.dismiss(item.id); }}>{item.action.label}</button>}
    </div>
  );
}
