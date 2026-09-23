import { ProgressBar } from 'react-aria-components';
import './Progress.css';
export interface ProgressProps { /** 0–100; omit for indeterminate. */ value?: number; label?: string; /** Show the percentage on the right. */ showValue?: boolean; size?: 'sm' | 'md' }
/** Measurable progress. Under 300ms, show nothing; over 10s, add a message. */
export function Progress({ value, label, showValue, size = 'md' }: ProgressProps) {
  return (
    <ProgressBar className={`eb-progress eb-progress--${size}`} value={value} isIndeterminate={value == null} aria-label={label ?? 'Tiến trình'}>
      {({ percentage, valueText }) => (
        <>
          {(label || showValue) && <div className="eb-progress__head">{label && <span>{label}</span>}{showValue && value != null && <span className="eb-progress__val">{valueText}</span>}</div>}
          <div className="eb-progress__track"><div className="eb-progress__fill" style={{ width: value == null ? undefined : `${percentage}%` }} /></div>
        </>
      )}
    </ProgressBar>
  );
}
