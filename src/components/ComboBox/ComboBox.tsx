import { ComboBox as ACombo, Label, Input, Button, Popover, ListBox, ListBoxItem, Text, type Key } from 'react-aria-components';
import '../aria.css';
import './ComboBox.css';
export interface ComboOption { id: string; label: string; description?: string; disabled?: boolean }
export interface ComboBoxProps {
  label?: string; hint?: string; error?: string; placeholder?: string;
  options: ComboOption[];
  selected?: string | null; defaultSelected?: string; onChange?: (id: string | null) => void;
  /** Cho phép nhập giá trị không có trong danh sách. */
  allowCustom?: boolean;
  size?: 'sm' | 'md' | 'lg'; disabled?: boolean;
}
/** Select có tìm kiếm. Dùng khi > 15 lựa chọn hoặc người dùng nhớ tên nhanh hơn cuộn. */
export function ComboBox({ label, hint, error, placeholder = 'Gõ để tìm…', options, selected, defaultSelected, onChange, allowCustom, size = 'md', disabled }: ComboBoxProps) {
  const cls = ['eb-field', `eb-field--${size}`, error && 'eb-field--error', disabled && 'eb-field--disabled'].filter(Boolean).join(' ');
  return (
    <ACombo className={cls} selectedKey={selected} defaultSelectedKey={defaultSelected} onSelectionChange={(k: Key | null) => onChange?.(k == null ? null : String(k))} allowsCustomValue={allowCustom} isDisabled={disabled} isInvalid={!!error} menuTrigger="focus">
      {label && <Label className="eb-field__label">{label}</Label>}
      <div className="eb-field__control eb-combo__control">
        <Input className="eb-field__input" placeholder={placeholder} />
        <Button className="eb-combo__btn" aria-label="Mở danh sách"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg></Button>
      </div>
      {error ? <Text slot="errorMessage" className="eb-field__error">{error}</Text> : hint ? <Text slot="description" className="eb-field__hint">{hint}</Text> : null}
      <Popover className="eb-popover" offset={4} style={{ width: 'var(--trigger-width)' }}>
        <ListBox className="eb-list" renderEmptyState={() => <div className="eb-combo__empty">Không có kết quả</div>}>
          {options.map((o) => (
            <ListBoxItem key={o.id} id={o.id} textValue={o.label} isDisabled={o.disabled} className="eb-list__item eb-combo__item">
              <span className="eb-combo__label">{o.label}</span>{o.description && <span className="eb-combo__desc">{o.description}</span>}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ACombo>
  );
}
