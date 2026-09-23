import { Slider as ASlider, Label, SliderOutput, SliderTrack, SliderThumb } from 'react-aria-components';
import './Slider.css';
export interface SliderProps { label: string; value?: number; defaultValue?: number; onChange?: (v: number) => void; min?: number; max?: number; step?: number; /** Format the displayed value. */ format?: (v: number) => string; disabled?: boolean }
/** Pick a value on a continuous range. When precision matters, pair it with a number input. */
export function Slider({ label, value, defaultValue, onChange, min = 0, max = 100, step = 1, format = (v) => String(v), disabled }: SliderProps) {
  return (
    <ASlider className="eb-slider" value={value} defaultValue={defaultValue ?? min} onChange={(v) => onChange?.(v as number)} minValue={min} maxValue={max} step={step} isDisabled={disabled}>
      <div className="eb-slider__head"><Label className="eb-field__label">{label}</Label><SliderOutput className="eb-slider__out">{({ state }) => format(state.getThumbValue(0))}</SliderOutput></div>
      <SliderTrack className="eb-slider__track">{({ state }) => (<><div className="eb-slider__fill" style={{ width: `${state.getThumbPercent(0) * 100}%` }} /><SliderThumb className="eb-slider__thumb" /></>)}</SliderTrack>
    </ASlider>
  );
}
