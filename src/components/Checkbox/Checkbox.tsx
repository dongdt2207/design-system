import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import './Checkbox.css';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Câu khẳng định, không phải câu hỏi. */
  label: string; description?: string;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ label, description, id, className, ...rest }, ref) {
  const autoId = useId(); const inputId = id ?? autoId;
  return (
    <label className={['eb-check', className].filter(Boolean).join(' ')} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" className="eb-check__input" {...rest} />
      <span className="eb-check__box" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5 5 9l4.5-6" /></svg></span>
      <span className="eb-check__text"><span className="eb-check__label">{label}</span>{description && <span className="eb-check__desc">{description}</span>}</span>
    </label>
  );
});
