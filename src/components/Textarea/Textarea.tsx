import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import './Textarea.css';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; hint?: string; error?: string;
  /** Initial number of visible rows. */
  rows?: number;
  /** Show the character count when maxLength is set. */
  showCount?: boolean;
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ label, hint, error, rows = 4, showCount, id, className, disabled, maxLength, value, defaultValue, onChange, ...rest }, ref) {
  const autoId = useId(); const inputId = id ?? autoId; const descId = `${inputId}-desc`;
  const cls = ['eb-field', error && 'eb-field--error', disabled && 'eb-field--disabled', className].filter(Boolean).join(' ');
  const len = String(value ?? defaultValue ?? '').length;
  return (
    <div className={cls}>
      {label && <label className="eb-field__label" htmlFor={inputId}>{label}</label>}
      <div className="eb-field__control eb-textarea__control">
        <textarea ref={ref} id={inputId} className="eb-field__input eb-textarea__input" rows={rows} disabled={disabled} maxLength={maxLength} value={value} defaultValue={defaultValue} onChange={onChange} aria-invalid={error ? true : undefined} aria-describedby={hint || error ? descId : undefined} {...rest} />
      </div>
      <div className="eb-textarea__foot">
        {(error || hint) ? <p id={descId} className={error ? 'eb-field__error' : 'eb-field__hint'}>{error ?? hint}</p> : <span />}
        {showCount && maxLength && <span className="eb-textarea__count">{len}/{maxLength}</span>}
      </div>
    </div>
  );
});
