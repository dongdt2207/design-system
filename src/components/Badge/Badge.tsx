import type { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  /** Chấm tròn — cho trạng thái thay đổi theo thời gian thực. */
  dot?: boolean;
  children: ReactNode;
}
export function Badge({ tone = 'neutral', dot, className, children, ...rest }: BadgeProps) {
  return <span className={['eb-badge', `eb-badge--${tone}`, className].filter(Boolean).join(' ')} {...rest}>{dot && <span className="eb-badge__dot" aria-hidden="true" />}{children}</span>;
}
