import * as RS from '@radix-ui/react-select';
import { useId } from 'react';
import './Select.css';
export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps {
  label?: string; hint?: string; error?: string; placeholder?: string; options: SelectOption[];
  value?: string; defaultValue?: string; onValueChange?: (v: string) => void; size?: 'sm' | 'md' | 'lg'; disabled?: boolean;
}
const Chevron = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>;
const Check = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3 3 7-7" /></svg>;
/** Pick one from a list. Below 4 options consider Radio; above 15, use a searchable ComboBox. */
export function Select({ label, hint, error, placeholder = 'Chọn…', options, value, defaultValue, onValueChange, size = 'md', disabled }: SelectProps) {
  const id = useId(); const descId = `${id}-desc`;
  const cls = ['eb-field', `eb-field--${size}`, error && 'eb-field--error', disabled && 'eb-field--disabled'].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {label && <label className="eb-field__label" htmlFor={id}>{label}</label>}
      <RS.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
        <RS.Trigger id={id} className="eb-field__control eb-select__trigger" aria-invalid={error ? true : undefined} aria-describedby={hint || error ? descId : undefined}>
          <RS.Value placeholder={placeholder} /><RS.Icon className="eb-select__chevron"><Chevron /></RS.Icon>
        </RS.Trigger>
        <RS.Portal>
          <RS.Content className="eb-select__content" position="popper" sideOffset={4}>
            <RS.Viewport className="eb-select__viewport">
              {options.map((o) => <RS.Item key={o.value} value={o.value} disabled={o.disabled} className="eb-select__item"><RS.ItemText>{o.label}</RS.ItemText><RS.ItemIndicator className="eb-select__check"><Check /></RS.ItemIndicator></RS.Item>)}
            </RS.Viewport>
          </RS.Content>
        </RS.Portal>
      </RS.Root>
      {(error || hint) && <p id={descId} className={error ? 'eb-field__error' : 'eb-field__hint'}>{error ?? hint}</p>}
    </div>
  );
}
