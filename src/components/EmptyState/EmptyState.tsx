import type { ReactNode } from 'react';
import './EmptyState.css';
export interface EmptyStateProps {
  /** Says what is missing plus what can be done: "No members yet". */
  title: string;
  /** One sentence. */
  description?: string;
  icon?: ReactNode;
  /** A primary action when the user can create data; a search suggestion when results are empty. */
  action?: ReactNode;
  /** compact for small areas inside a card or table. */
  size?: 'default' | 'compact';
}
export function EmptyState({ title, description, icon, action, size = 'default' }: EmptyStateProps) {
  return (
    <div className={`eb-empty eb-empty--${size}`}>
      {icon && <div className="eb-empty__icon" aria-hidden="true">{icon}</div>}
      <h3 className="eb-empty__title">{title}</h3>
      {description && <p className="eb-empty__desc">{description}</p>}
      {action && <div className="eb-empty__action">{action}</div>}
    </div>
  );
}
