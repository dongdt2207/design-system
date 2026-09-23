import { RadioGroup as ARadioGroup, Radio, Label, Text } from 'react-aria-components';
import './RadioGroup.css';
export interface RadioOption { value: string; label: string; description?: string; disabled?: boolean }
export interface RadioGroupProps {
  label: string; options: RadioOption[];
  value?: string; defaultValue?: string; onChange?: (v: string) => void;
  /** Ngang khi ≤ 3 lựa chọn ngắn. */
  orientation?: 'vertical' | 'horizontal';
  hint?: string; error?: string; disabled?: boolean;
}
/** Pick exactly one. Use for 2–5 options that should all be visible; beyond that use Select. */
export function RadioGroup({ label, options, value, defaultValue, onChange, orientation = 'vertical', hint, error, disabled }: RadioGroupProps) {
  return (
    <ARadioGroup className="eb-radio-group" value={value} defaultValue={defaultValue} onChange={onChange} orientation={orientation} isDisabled={disabled} isInvalid={!!error}>
      <Label className="eb-field__label">{label}</Label>
      <div className={`eb-radio-group__items eb-radio-group__items--${orientation}`}>
        {options.map((o) => (
          <Radio key={o.value} value={o.value} isDisabled={o.disabled} className="eb-radio">
            <span className="eb-radio__dot" aria-hidden="true" />
            <span className="eb-radio__text"><span>{o.label}</span>{o.description && <span className="eb-radio__desc">{o.description}</span>}</span>
          </Radio>
        ))}
      </div>
      {error ? <Text slot="errorMessage" className="eb-field__error">{error}</Text> : hint ? <Text slot="description" className="eb-field__hint">{hint}</Text> : null}
    </ARadioGroup>
  );
}
