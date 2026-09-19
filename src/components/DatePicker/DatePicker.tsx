import { DatePicker as ADatePicker, Label, Group, DateInput, DateSegment, Button, Popover, Dialog, Calendar, CalendarGrid, CalendarGridHeader, CalendarHeaderCell, CalendarGridBody, CalendarCell, Heading, Text, type DateValue } from 'react-aria-components';
import { I18nProvider } from 'react-aria-components';
import '../aria.css';
import './DatePicker.css';
export interface DatePickerProps {
  label?: string; hint?: string; error?: string;
  value?: DateValue | null; defaultValue?: DateValue; onChange?: (v: DateValue | null) => void;
  minValue?: DateValue; maxValue?: DateValue;
  size?: 'sm' | 'md' | 'lg'; disabled?: boolean;
  /** Mặc định vi-VN: dd/mm/yyyy, tuần bắt đầu thứ Hai. */
  locale?: string;
}
const Chevron = ({ dir }: { dir: 'l' | 'r' }) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{dir === 'l' ? <path d="M10 4l-4 4 4 4" /> : <path d="M6 4l4 4-4 4" />}</svg>;
/** Chọn ngày. Gõ trực tiếp từng phần hoặc mở lịch. Định dạng theo locale, không tự viết parser. */
export function DatePicker({ label, hint, error, value, defaultValue, onChange, minValue, maxValue, size = 'md', disabled, locale = 'vi-VN' }: DatePickerProps) {
  const cls = ['eb-field', `eb-field--${size}`, error && 'eb-field--error', disabled && 'eb-field--disabled'].filter(Boolean).join(' ');
  return (
    <I18nProvider locale={locale}>
      <ADatePicker className={cls} value={value} defaultValue={defaultValue} onChange={onChange} minValue={minValue} maxValue={maxValue} isDisabled={disabled} isInvalid={!!error}>
        {label && <Label className="eb-field__label">{label}</Label>}
        <Group className="eb-field__control eb-date__control">
          <DateInput className="eb-date__input">{(seg) => <DateSegment segment={seg} className="eb-date__seg" />}</DateInput>
          <Button className="eb-combo__btn" aria-label="Mở lịch"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" /><path d="M2.5 7h11M5.5 2v3M10.5 2v3" /></svg></Button>
        </Group>
        {error ? <Text slot="errorMessage" className="eb-field__error">{error}</Text> : hint ? <Text slot="description" className="eb-field__hint">{hint}</Text> : null}
        <Popover className="eb-popover" offset={4}>
          <Dialog className="eb-cal">
            <Calendar>
              <header className="eb-cal__head">
                <Button slot="previous" className="eb-cal__nav"><Chevron dir="l" /></Button>
                <Heading className="eb-cal__title" />
                <Button slot="next" className="eb-cal__nav"><Chevron dir="r" /></Button>
              </header>
              <CalendarGrid className="eb-cal__grid">
                <CalendarGridHeader>{(d) => <CalendarHeaderCell className="eb-cal__dow">{d}</CalendarHeaderCell>}</CalendarGridHeader>
                <CalendarGridBody>{(date) => <CalendarCell date={date} className="eb-cal__cell" />}</CalendarGridBody>
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </ADatePicker>
    </I18nProvider>
  );
}
