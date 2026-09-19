import { Switch as ASwitch } from 'react-aria-components';
import './Switch.css';
export interface SwitchProps { label: string; size?: 'sm' | 'md'; selected?: boolean; defaultSelected?: boolean; onChange?: (v: boolean) => void; disabled?: boolean }
/** Công tắc có hiệu lực ngay (React Aria). Cùng vai Toggle; dùng Switch cho component mới. */
export function Switch({ label, size = 'md', selected, defaultSelected, onChange, disabled }: SwitchProps) {
  return (
    <ASwitch className={`eb-switch eb-switch--${size}`} isSelected={selected} defaultSelected={defaultSelected} onChange={onChange} isDisabled={disabled}>
      <span className="eb-switch__track"><span className="eb-switch__thumb" /></span>
      <span className="eb-switch__label">{label}</span>
    </ASwitch>
  );
}
