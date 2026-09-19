import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string; description?: string;
  /** Một Badge hoặc nút ghost/secondary sm. Không đặt primary ở header. */
  action?: ReactNode; footer?: ReactNode;
  /** flat = hairline (mặc định). raised = hairline đậm hơn — hệ này không có bóng. */
  elevation?: 'flat' | 'raised';
  flush?: boolean; children?: ReactNode;
}
export function Card({ title, description, action, footer, elevation = 'flat', flush, className, children, ...rest }: CardProps) {
  const hasHeader = title || description || action;
  return (
    <div className={['eb-card', `eb-card--${elevation}`, className].filter(Boolean).join(' ')} {...rest}>
      {hasHeader && <div className="eb-card__header"><div>{title && <h3 className="eb-card__title">{title}</h3>}{description && <p className="eb-card__desc">{description}</p>}</div>{action && <div className="eb-card__action">{action}</div>}</div>}
      {children && <div className={flush ? 'eb-card__body eb-card__body--flush' : 'eb-card__body'}>{children}</div>}
      {footer && <div className="eb-card__footer">{footer}</div>}
    </div>
  );
}
