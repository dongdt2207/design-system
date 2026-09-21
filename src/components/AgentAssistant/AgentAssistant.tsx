import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Drawer } from '../Drawer/Drawer';
import { EmptyState } from '../EmptyState/EmptyState';
import { PromptInput, type PromptInputProps } from '../PromptInput/PromptInput';
import { Skeleton } from '../Skeleton/Skeleton';
import './AgentAssistant.css';

export interface AgentConversation {
  id: string;
  /** Danh từ, tóm tắt việc đang hỏi: "Doanh thu quý 3". */
  title: string;
  /** Thời gian tương đối hoặc số lượt: "2 giờ trước". */
  meta?: string;
  /** Tiêu đề nhóm trong danh sách: "Hôm nay", "7 ngày trước". */
  group?: string;
}

export interface AgentAssistantProps {
  /** Tiêu đề hội thoại đang mở (heading-03 theo mục 3.3). */
  title: string;
  /** Badge cạnh tiêu đề: mô hình đang dùng hoặc trạng thái kết nối. */
  status?: ReactNode;
  /** Hành động phụ bên phải header: Menu "⋯", nút chia sẻ. Không đặt primary ở đây. */
  headerActions?: ReactNode;
  conversations?: AgentConversation[];
  activeConversation?: string;
  onSelectConversation?: (id: string) => void;
  onNewConversation?: () => void;
  /** Trạng thái vùng hội thoại: `ready` hiện `children`. */
  state?: 'ready' | 'loading' | 'empty' | 'error';
  /** Chuỗi `<ChatMessage />`. */
  children?: ReactNode;
  /** Câu hỏi gợi ý cho trạng thái rỗng. Tối đa 4. */
  suggestions?: string[];
  onSuggestion?: (text: string) => void;
  /** Thử lại khi `state="error"`. */
  onRetry?: () => void;
  /** Trợ lý đang trả lời — ô soạn đổi nút Gửi thành Dừng. */
  busy?: boolean;
  onSend?: (text: string) => void;
  onStop?: () => void;
  /** Nút phụ trong ô soạn: chọn mô hình, đính kèm. */
  composerToolbar?: ReactNode;
  /** Truyền thêm cho ô soạn (placeholder, maxLength, error). Ghi âm bật sẵn — tắt bằng `{ voice: false }`. */
  promptProps?: Partial<PromptInputProps>;
}

const PlusIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" /></svg>;
const ListIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M3 4.5h10M3 8h10M3 11.5h10" /></svg>;
const ChatIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 4V6z" /></svg>;

const groupBy = (items: AgentConversation[]) => {
  const out: { title?: string; items: AgentConversation[] }[] = [];
  for (const c of items) {
    const last = out[out.length - 1];
    if (last && last.title === c.group) last.items.push(c);
    else out.push({ title: c.group, items: [c] });
  }
  return out;
};

/** Màn hình trợ lý agent: danh sách hội thoại, luồng tin nhắn, ô soạn. Ghép từ component có sẵn — nội dung luồng truyền vào qua `children`. */
export function AgentAssistant({
  title, status, headerActions, conversations = [], activeConversation, onSelectConversation, onNewConversation,
  state = 'ready', children, suggestions = [], onSuggestion, onRetry, busy = false, onSend, onStop, composerToolbar, promptProps,
}: AgentAssistantProps) {
  const list = (onPick?: () => void) => (
    <>
      {groupBy(conversations).map((g, i) => (
        <div key={g.title ?? i} className="eb-agent__group">
          {g.title && <p className="eb-agent__group-title">{g.title}</p>}
          <ul className="eb-agent__items">
            {g.items.map((c) => (
              <li key={c.id}>
                <button
                  type="button" className="eb-agent__item" aria-current={c.id === activeConversation ? 'page' : undefined}
                  onClick={() => { onSelectConversation?.(c.id); onPick?.(); }}
                >
                  <span className="eb-agent__item-title">{c.title}</span>
                  {c.meta && <span className="eb-agent__item-meta">{c.meta}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {conversations.length === 0 && <p className="eb-agent__group-title">Chưa có hội thoại nào.</p>}
    </>
  );

  const thread = () => {
    if (state === 'loading') return (
      <div className="eb-agent__loading">
        {[0, 1].map((i) => (
          <div key={i} className="eb-agent__loading-row">
            <Skeleton shape="circle" width={28} height={28} />
            <div className="eb-agent__loading-body"><Skeleton width="30%" /><Skeleton lines={3} /></div>
          </div>
        ))}
      </div>
    );
    if (state === 'error') return (
      <EmptyState title="Không tải được hội thoại" description="Kiểm tra kết nối rồi thử lại." action={<Button variant="secondary" onClick={onRetry}>Thử lại</Button>} />
    );
    if (state === 'empty') return (
      <div className="eb-agent__empty">
        <EmptyState
          icon={<ChatIcon />} title="Chưa có câu hỏi nào" description="Hỏi trợ lý một việc, hoặc bắt đầu từ một gợi ý bên dưới."
          action={suggestions.length > 0 ? (
            <ul className="eb-agent__chips">
              {suggestions.slice(0, 4).map((s) => (
                <li key={s}><button type="button" className="eb-agent__chip" onClick={() => onSuggestion?.(s)}>{s}</button></li>
              ))}
            </ul>
          ) : undefined}
        />
      </div>
    );
    return <div className="eb-agent__messages">{children}</div>;
  };

  return (
    <div className="eb-agent">
      <aside className="eb-agent__side">
        <div className="eb-agent__side-head">
          <span className="eb-agent__side-title">Hội thoại</span>
          <Button variant="secondary" size="sm" iconStart={<PlusIcon />} onClick={onNewConversation}>Hội thoại mới</Button>
        </div>
        <nav className="eb-agent__nav" aria-label="Hội thoại gần đây">{list()}</nav>
      </aside>

      <div className="eb-agent__main">
        <header className="eb-agent__head">
          <div className="eb-agent__head-start">
            <span className="eb-agent__side-open">
              <Drawer side="bottom" size="lg" title="Hội thoại" trigger={<Button variant="ghost" size="md" iconStart={<ListIcon />} aria-label="Mở danh sách hội thoại" />}>
                {(close) => <nav className="eb-agent__nav" aria-label="Hội thoại gần đây">{list(close)}</nav>}
              </Drawer>
            </span>
            <h1 className="eb-agent__title">{title}</h1>
            {status}
          </div>
          {headerActions && <div className="eb-agent__head-end">{headerActions}</div>}
        </header>

        <div className="eb-agent__thread" tabIndex={0} role="log" aria-label="Nội dung hội thoại" aria-busy={busy || state === 'loading' || undefined}>
          {thread()}
        </div>

        <div className="eb-agent__composer">
          <PromptInput voice busy={busy} onSend={onSend} onStop={onStop} toolbar={composerToolbar} disabled={state === 'error'} {...promptProps} />
        </div>
      </div>
    </div>
  );
}
