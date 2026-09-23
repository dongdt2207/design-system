import './Pagination.css';
export interface PaginationProps { page: number; pageCount: number; onChange: (page: number) => void; /** Total records, used to show "1–20 of 240". */ total?: number; pageSize?: number }
const range = (page: number, count: number): (number | '…')[] => {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const s = new Set([1, count, page - 1, page, page + 1].filter((n) => n >= 1 && n <= count));
  const out: (number | '…')[] = []; let prev = 0;
  for (const n of [...s].sort((a, b) => a - b)) { if (n - prev > 1) out.push('…'); out.push(n); prev = n; }
  return out;
};
const Chev = ({ dir }: { dir: 'l' | 'r' }) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{dir === 'l' ? <path d="M10 4l-4 4 4 4" /> : <path d="M6 4l4 4-4 4" />}</svg>;
/** Pagination. Below 640 (container width) the number row collapses to "Page 3 of 12" with previous/next only. */
export function Pagination({ page, pageCount, onChange, total, pageSize }: PaginationProps) {
  const from = total && pageSize ? (page - 1) * pageSize + 1 : null; const to = total && pageSize ? Math.min(page * pageSize, total) : null;
  return (
    <nav className="eb-pager" aria-label="Pagination">
      {from && <span className="eb-pager__info">{from}–{to} / {total}</span>}
      <div className="eb-pager__pages">
        <button className="eb-pager__btn" onClick={() => onChange(page - 1)} disabled={page <= 1} aria-label="Previous page"><Chev dir="l" /></button>
        <span className="eb-pager__nums">
          {range(page, pageCount).map((n, i) => n === '…' ? <span key={`e${i}`} className="eb-pager__gap">…</span> : <button key={n} className={`eb-pager__btn${n === page ? ' eb-pager__btn--current' : ''}`} onClick={() => onChange(n)} aria-current={n === page ? 'page' : undefined}>{n}</button>)}
        </span>
        <span className="eb-pager__compact">Page {page} of {pageCount}</span>
        <button className="eb-pager__btn" onClick={() => onChange(page + 1)} disabled={page >= pageCount} aria-label="Next page"><Chev dir="r" /></button>
      </div>
    </nav>
  );
}
