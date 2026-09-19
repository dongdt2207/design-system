import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Kiểu hiển thị. Tên trùng Figma property "variant". `ink` = CTA lớn nền mực, không thêm màu accent. */
  variant?: 'primary' | 'ink' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Đang xử lý — spinner, khoá tương tác. */
  loading?: boolean;
  fullWidth?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading = false, fullWidth = false, iconStart, iconEnd, disabled, className, children, ...rest }, ref,
) {
  const cls = ['eb-btn', `eb-btn--${variant}`, `eb-btn--${size}`, fullWidth && 'eb-btn--full', loading && 'eb-btn--loading', className].filter(Boolean).join(' ');
  return (
    <button ref={ref} className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading && <span className="eb-btn__spinner" aria-hidden="true" />}
      {iconStart && <span className="eb-btn__icon">{iconStart}</span>}
      {children && <span className="eb-btn__label">{children}</span>}
      {iconEnd && <span className="eb-btn__icon">{iconEnd}</span>}
    </button>
  );
});
