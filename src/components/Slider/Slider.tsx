import { Slider as ASlider, Label, SliderOutput, SliderTrack, SliderThumb } from 'react-aria-components';
import './Slider.css';
export interface SliderProps { label: string; value?: number; defaultValue?: number; onChange?: (v: number) => void; min?: number; max?: number; step?: number; /** Định dạng giá trị hiển thị. */ format?: (v: number) => string; disabled?: boolean }
/** Chọn giá trị trong dải liên tục. Khi cần chính xác, kèm ô nhập số bên cạnh. */
export function Slider({ label, value, defaultValue, onChange, min = 0, max = 100, step = 1, format = (v) => String(v), disabled }: SliderProps) {
  return (
    <ASlider className="eb-slider" value={value} defaultValue={defaultValue ?? min} onChange={(v) => onChange?.(v as number)} minValue={min} maxValue={max} step={step} isDisabled={disabled}>
      <div className="eb-slider__head"><Label className="eb-field__label">{label}</Label><SliderOutput className="eb-slider__out">{({ state }) => format(state.getThumbValue(0))}</SliderOutput></div>
      <SliderTrack className="eb-slider__track">{({ state }) => (<><div className="eb-slider__fill" style={{ width: `${state.getThumbPercent(0) * 100}%` }} /><SliderThumb className="eb-slider__thumb" /></>)}</SliderTrack>
    </ASlider>
  );
}
