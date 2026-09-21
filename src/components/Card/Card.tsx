import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardMedia {
  src: string;
  /** Rỗng chỉ khi ảnh thuần trang trí và mọi thông tin đã có trong chữ. */
  alt: string;
  /** Tỉ lệ khung, giữ bằng nhau trong cùng một lưới để hàng không so le. */
  ratio?: '16/9' | '4/3' | '1/1';
}
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string; description?: string;
  /** Một Badge hoặc nút ghost/secondary sm. Không đặt primary ở header. */
  action?: ReactNode; footer?: ReactNode;
  /** flat = hairline (mặc định). raised = hairline đậm hơn — hệ này không có bóng. */
  elevation?: 'flat' | 'raised';
  flush?: boolean;
  /** Ảnh dẫn đầu. Đứng trên cùng khi dọc, nằm bên trái khi ngang. */
  media?: CardMedia;
  /** horizontal dùng trong danh sách dọc: ảnh trái, chữ phải. */
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
