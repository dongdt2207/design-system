import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardMedia {
  src: string;
  /** Empty only when the image is purely decorative and the text already carries the information. */
  alt: string;
  /** Aspect ratio; keep it identical across a grid so rows don't go ragged. */
  ratio?: '16/9' | '4/3' | '1/1';
}
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string; description?: string;
  /** One Badge, or a sm ghost/secondary button. Never a primary in the header. */
  action?: ReactNode; footer?: ReactNode;
  /** flat = hairline (default). raised = a stronger hairline — this system has no shadows. */
  elevation?: 'flat' | 'raised';
  flush?: boolean;
  /** Leading image. On top when vertical, on the left when horizontal. */
  media?: CardMedia;
  /** horizontal is for vertical lists: image left, text right. */
  orientation?: 'vertical' | 'horizontal';
  children?: ReactNode;
}

export function Card({ title, description, action, footer, elevation = 'flat', flush, media, orientation = 'vertical', className, children, ...rest }: CardProps) {
  const hasHeader = title || description || action;
  return (
    <div className={['eb-card', `eb-card--${elevation}`, orientation === 'horizontal' && 'eb-card--horizontal', className].filter(Boolean).join(' ')} {...rest}>
      {media && (
        <div className="eb-card__media" style={orientation === 'vertical' ? { aspectRatio: media.ratio ?? '16/9' } : undefined}>
          <img src={media.src} alt={media.alt} />
        </div>
      )}
      <div className="eb-card__stack">
        {hasHeader && <div className="eb-card__header"><div>{title && <h3 className="eb-card__title">{title}</h3>}{description && <p className="eb-card__desc">{description}</p>}</div>{action && <div className="eb-card__action">{action}</div>}</div>}
        {children && <div className={flush ? 'eb-card__body eb-card__body--flush' : 'eb-card__body'}>{children}</div>}
        {footer && <div className="eb-card__footer">{footer}</div>}
      </div>
    </div>
  );
}
