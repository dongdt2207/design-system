import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import './Toggle.css';
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** The thing being switched on: "Dark mode", not "Turn on dark mode". */
  label: string; size?: 'sm' | 'md';
}
/** A switch that takes effect immediately. When a Save button is needed, use Checkbox. */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle({ label, size = 'md', id, className, ...rest }, ref) {
  const autoId = useId(); const inputId = id ?? autoId;
  return (
    <label className={['eb-toggle', `eb-toggle--${size}`, className].filter(Boolean).join(' ')} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" role="switch" className="eb-toggle__input" {...rest} />
      <span className="eb-toggle__track" aria-hidden="true"><span className="eb-toggle__thumb" /></span>
      <span className="eb-toggle__label">{label}</span>
    </label>
  );
});
