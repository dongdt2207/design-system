import type { ReactNode } from 'react';
import { Avatar } from '../Avatar/Avatar';
import './ChatMessage.css';

export interface ChatMessageProps {
  /** Who is speaking: `user` is a short bubble on the right, `agent` is a wide block on the left. */
  role: 'user' | 'agent';
  /** Display name. Defaults to "You" / "Assistant". */
  author?: string;
  avatarSrc?: string;
  /** Clock time ("9:12 AM") or relative ("2 minutes ago"). */
  time?: string;
  /** `sending` for a user message in flight; `streaming` while the assistant answers; `error` when it failed. */
  status?: 'idle' | 'sending' | 'streaming' | 'error';
  /** What went wrong plus how to fix it. Goes with `status="error"`. */
  error?: string;
  /** The run log — usually `<AgentTrace />`. Sits above the content. */
  trace?: ReactNode;
  /** Actions on the message (Copy, Try again). Appear on hover or when the message takes focus. */
  actions?: ReactNode;
  children: ReactNode;
}

const ErrorIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="8" cy="8" r="6.25" /><path d="M8 5v4M8 11h.01" /></svg>;

/** One turn in a conversation with the assistant. Long content wraps freely; lines cap at ~70 characters per section 4.2. */
export function ChatMessage({ role, author, avatarSrc, time, status = 'idle', error, trace, actions, children }: ChatMessageProps) {
  const name = author ?? (role === 'user' ? 'You' : 'Assistant');
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
        {status === 'sending' && <p className="eb-msg__note">Sending…</p>}
        {status === 'error' && error && <p className="eb-msg__error"><ErrorIcon />{error}</p>}
        {actions && <div className="eb-msg__actions">{actions}</div>}
      </div>
    </article>
  );
}
