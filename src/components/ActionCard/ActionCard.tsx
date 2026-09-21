import type { ReactNode } from 'react';
import './ActionCard.css';

export interface ActionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  /** Đúng một hành động chính. Cần hai việc ngang nhau thì đó là hai thẻ. */
  action: ReactNode;
  /** Xoá rào cản: "Miễn phí 14 ngày", "Không cần thẻ". */
  note?: string;
  variant?: 'default' | 'subtle';
}

/** Một thẻ, một việc. Mô tả nói kết quả người dùng nhận được, không mô tả tính năng. */
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
