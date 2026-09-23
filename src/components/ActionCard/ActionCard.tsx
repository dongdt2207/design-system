import type { ReactNode } from 'react';
import './ActionCard.css';

export interface ActionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  /** Exactly one main action. Two equal jobs means two cards. */
  action: ReactNode;
  /** Removes a barrier: "Free for 14 days", "No card required". */
  note?: string;
  variant?: 'default' | 'subtle';
}

/** One card, one job. The description states the outcome the user gets, not the feature. */
export function ActionCard({ title, description, icon, action, note, variant = 'default' }: ActionCardProps) {
  return (
    <div className={`eb-action-card${variant === 'subtle' ? ' eb-action-card--subtle' : ''}`}>
      {icon && <div className="eb-action-card__icon" aria-hidden="true">{icon}</div>}
      <h3 className="eb-action-card__title">{title}</h3>
      {description && <p className="eb-action-card__desc">{description}</p>}
      <div className="eb-action-card__foot">
        {action}
        {note && <span className="eb-action-card__note">{note}</span>}
      </div>
    </div>
  );
}
