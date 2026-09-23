import './Meter.css';

export interface MeterProps {
  label: string;
  value: number;
  /** Trần của thang. */
  max: number;
  /** A target to reach or a ceiling not to cross — drawn as a vertical tick. */
  limit?: number;
  /** Whether crossing the limit is bad (a quota) or good (a target). Default: bad. */
  overIs?: 'bad' | 'good';
  formatValue?: (n: number) => string;
}

/** One ratio against one baseline. Never a two-slice pie, never a gauge dial. */
export function Meter({ label, value, max, limit, overIs = 'bad', formatValue = (n) => n.toLocaleString('en-US') }: MeterProps) {
  const pct = Math.min(100, (value / max) * 100);
  const over = limit !== undefined && value > limit;
  return (
    <div className={`eb-meter${over && overIs === 'bad' ? ' eb-meter--over' : ''}`}>
      <div className="eb-meter__head">
        <span className="eb-meter__label">{label}</span>
        <span className="eb-meter__value">{formatValue(value)}</span>
      </div>
      <div className="eb-meter__track" role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
        <div className="eb-meter__fill" style={{ width: `${pct}%` }} />
        {limit !== undefined && <span className="eb-meter__limit" style={{ left: `${Math.min(100, (limit / max) * 100)}%` }} title={`Mốc: ${formatValue(limit)}`} />}
      </div>
      <div className="eb-meter__foot">
        <span>0</span>
        {limit !== undefined && <span>{over ? 'Over ' : 'Target '}{formatValue(limit)}</span>}
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}
