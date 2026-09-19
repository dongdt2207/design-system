import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  /** Điều cần biết trước khi nhập. */
  hint?: string;
  /** Điều sai sau khi nhập — nói cái gì sai và sửa thế nào. */
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  iconStart?: ReactNode;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, hint, error, size = 'md', iconStart, id, className, disabled, ...rest }, ref) {
  const autoId = useId(); const inputId = id ?? autoId; const descId = `${inputId}-desc`;
  const cls = ['eb-field', `eb-field--${size}`, error && 'eb-field--error', disabled && 'eb-field--disabled', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {label && <label className="eb-field__label" htmlFor={inputId}>{label}</label>}
      <div className="eb-field__control">
        {iconStart && <span className="eb-field__icon">{iconStart}</span>}
        <input ref={ref} id={inputId} className="eb-field__input" disabled={disabled} aria-invalid={error ? true : undefined} aria-describedby={hint || error ? descId : undefined} {...rest} />
      </div>
      {(error || hint) && <p id={descId} className={error ? 'eb-field__error' : 'eb-field__hint'}>{error ?? hint}</p>}
    </div>
  );
});
