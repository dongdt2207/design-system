import type { ReactNode } from 'react';
import { Avatar } from '../Avatar/Avatar';
import './ChatMessage.css';

export interface ChatMessageProps {
  /** Ai nói: `user` = bong bóng bên phải, `agent` = khối rộng bên trái. */
  role: 'user' | 'agent';
  /** Tên hiển thị. Mặc định "Bạn" / "Trợ lý". */
  author?: string;
  avatarSrc?: string;
  /** Giờ 24h ("09:12") hoặc tương đối ("2 phút trước"). */
  time?: string;
  /** `sending` cho tin của người dùng đang gửi; `streaming` khi trợ lý đang trả lời; `error` khi hỏng. */
  status?: 'idle' | 'sending' | 'streaming' | 'error';
  /** Cái gì sai + cách sửa. Đi kèm `status="error"`. */
  error?: string;
  /** Nhật ký bước chạy — thường là `<AgentTrace />`. Đặt trên nội dung. */
  trace?: ReactNode;
  /** Hành động trên tin nhắn (Sao chép, Trả lời lại). Hiện khi hover hoặc khi focus vào tin. */
  actions?: ReactNode;
  children: ReactNode;
}

const ErrorIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="8" cy="8" r="6.25" /><path d="M8 5v4M8 11h.01" /></svg>;

/** Một lượt trong hội thoại với trợ lý. Nội dung dài xuống dòng tự do; giới hạn ~70 ký tự mỗi dòng theo mục 4.2. */
export function ChatMessage({ role, author, avatarSrc, time, status = 'idle', error, trace, actions, children }: ChatMessageProps) {
  const name = author ?? (role === 'user' ? 'Bạn' : 'Trợ lý');
  const streaming = status === 'streaming';
  return (
    <article className={`eb-msg eb-msg--${role}${status !== 'idle' ? ` eb-msg--${status}` : ''}`} aria-busy={streaming || status === 'sending' || undefined}>
      <Avatar name={name} src={avatarSrc} size="sm" />
      <div className="eb-msg__main">
        <p className="eb-msg__meta"><span className="eb-msg__author">{name}</span>{time && <span className="eb-msg__time">{time}</span>}</p>
        {trace && <div className="eb-msg__trace">{trace}</div>}
        <div className="eb-msg__body" aria-live={role === 'agent' ? 'polite' : undefined}>
          {children}
          {streaming && <span className="eb-msg__caret" aria-hidden="true" />}
        </div>
        {status === 'sending' && <p className="eb-msg__note">Đang gửi…</p>}
        {status === 'error' && error && <p className="eb-msg__error"><ErrorIcon />{error}</p>}
        {actions && <div className="eb-msg__actions">{actions}</div>}
      </div>
    </article>
  );
}
