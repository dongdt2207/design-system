import type { ReactNode } from 'react';
import './SelectableCard.css';

export interface SelectableCardProps {
  /** Group name. Required for radios, so arrow keys move between options. */
  name: string;
  value: string;
  type?: 'radio' | 'checkbox';
  title: string;
  description?: string;
  /** The bottom line: price, term, note. */
  meta?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

/** Choose one of several options with the whole card as the hit area. Under the visual layer sits a real input. */
export function SelectableCard({ name, value, type = 'radio', title, description, meta, checked, defaultChecked, disabled, onChange }: SelectableCardProps) {
  return (
    <label className={`eb-sel-card eb-sel-card--${type}`}>
      <input
        className="eb-sel-card__input"
        type={type}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.currentTarget.checked)}
      />
      <span className="eb-sel-card__box">
        <span className="eb-sel-card__mark" aria-hidden="true" />
        <span>
          <span className="eb-sel-card__title">{title}</span>
          {description && <p className="eb-sel-card__desc">{description}</p>}
          {meta && <div className="eb-sel-card__meta">{meta}</div>}
        </span>
      </span>
    </label>
  );
}
