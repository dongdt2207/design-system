import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Drawer } from '../Drawer/Drawer';
import { EmptyState } from '../EmptyState/EmptyState';
import { PromptInput, type PromptInputProps } from '../PromptInput/PromptInput';
import { Skeleton } from '../Skeleton/Skeleton';
import './AgentAssistant.css';

export interface AgentConversation {
  id: string;
  /** A noun summarizing the question: "Q3 revenue". */
  title: string;
  /** Relative time or turn count: "2 hours ago". */
  meta?: string;
  /** Group heading in the list: "Today", "Previous 7 days". */
  group?: string;
}

export interface AgentAssistantProps {
  /** Title of the open conversation (heading-03 per section 3.3). */
  title: string;
  /** Badge beside the title: the model in use, or connection status. */
  status?: ReactNode;
  /** Secondary actions on the right of the header: a "⋯" menu, a share button. Never a primary here. */
  headerActions?: ReactNode;
  conversations?: AgentConversation[];
  activeConversation?: string;
  onSelectConversation?: (id: string) => void;
  onNewConversation?: () => void;
  /** State of the thread area: `ready` renders `children`. */
  state?: 'ready' | 'loading' | 'empty' | 'error';
  /** A sequence of `<ChatMessage />`. */
  children?: ReactNode;
  /** Suggested questions for the empty state. At most 4. */
  suggestions?: string[];
  onSuggestion?: (text: string) => void;
  /** Retry when `state="error"`. */
  onRetry?: () => void;
  /** The assistant is answering — the composer swaps Send for Stop. */
  busy?: boolean;
  onSend?: (text: string) => void;
  onStop?: () => void;
  /** Secondary controls in the composer: model picker, attachments. */
  composerToolbar?: ReactNode;
  /** Extra props for the composer (placeholder, maxLength, error). Dictation is on by default — turn it off with `{ voice: false }`. */
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

/** The agent assistant screen: conversation list, message thread, composer. Composed from existing components — thread content comes in through `children`. */
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
      {conversations.length === 0 && <p className="eb-agent__group-title">No conversations yet.</p>}
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
      <EmptyState title="Couldn’t load the conversation" description="Check your connection, then try again." action={<Button variant="secondary" onClick={onRetry}>Try again</Button>} />
    );
    if (state === 'empty') return (
      <div className="eb-agent__empty">
        <EmptyState
          icon={<ChatIcon />} title="No questions yet" description="Ask the assistant something, or start from one of the suggestions below."
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
      <div className="eb-agent__shell">
        <aside className="eb-agent__side">
          <div className="eb-agent__side-head">
            <span className="eb-agent__side-title">Conversations</span>
            <Button variant="secondary" size="sm" iconStart={<PlusIcon />} onClick={onNewConversation}>New conversation</Button>
          </div>
          <nav className="eb-agent__nav" aria-label="Recent conversations">{list()}</nav>
        </aside>

        <div className="eb-agent__main">
          <header className="eb-agent__head">
            <div className="eb-agent__head-start">
              <span className="eb-agent__side-open">
                <Drawer side="bottom" size="lg" title="Conversations" trigger={<Button variant="ghost" size="md" iconStart={<ListIcon />} aria-label="Open the conversation list" />}>
                  {(close) => <nav className="eb-agent__nav" aria-label="Recent conversations">{list(close)}</nav>}
                </Drawer>
              </span>
              <h1 className="eb-agent__title">{title}</h1>
              {status}
            </div>
            {headerActions && <div className="eb-agent__head-end">{headerActions}</div>}
          </header>

          <div className="eb-agent__thread" tabIndex={0} role="log" aria-label="Conversation content" aria-busy={busy || state === 'loading' || undefined}>
            {thread()}
          </div>

          <div className="eb-agent__composer">
            <PromptInput voice busy={busy} onSend={onSend} onStop={onStop} toolbar={composerToolbar} disabled={state === 'error'} {...promptProps} />
          </div>
        </div>
      </div>
    </div>
  );
}
