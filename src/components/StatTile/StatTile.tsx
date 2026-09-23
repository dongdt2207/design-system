import './StatTile.css';
import { Sparkline } from '../Sparkline/Sparkline';

export interface StatDelta {
  /** Pre-formatted: "+12.4%". */
  value: string;
  direction: 'up' | 'down' | 'flat';
  /** Up isn't always good (rising churn is bad). Default: up = good. */
  meaning?: 'good' | 'bad' | 'neutral';
}
export interface StatTileProps {
  label: string;
  /** Pre-formatted, including the unit. */
  value: string;
  delta?: StatDelta;
  /** Against which period — always say it; "+12%" alone means nothing. */
  caption?: string;
  spark?: number[];
}

/** When one number is enough, don't draw a chart. The arrow and the word carry the meaning; color is the second layer. */
export function StatTile({ label, value, delta, caption, spark }: StatTileProps) {
  const meaning = delta ? (delta.meaning ?? (delta.direction === 'flat' ? 'neutral' : delta.direction === 'up' ? 'good' : 'bad')) : undefined;
  const tone = meaning === 'good' ? 'good' : meaning === 'bad' ? 'bad' : 'flat';
  const arrow = delta?.direction === 'up' ? '↑' : delta?.direction === 'down' ? '↓' : '→';
  const word = delta?.direction === 'up' ? 'up' : delta?.direction === 'down' ? 'down' : 'flat';
  return (
    <div className="eb-stat">
      <span className="eb-stat__label">{label}</span>
      <span className="eb-stat__value">{value}</span>
      <div className="eb-stat__foot">
        <div>
          {delta && (
            <span className={`eb-stat__delta eb-stat__delta--${tone}`}>
              <span aria-hidden="true">{arrow}</span>
              <span className="eb-chart__table">{word} </span>
              {delta.value}
            </span>
          )}
          {caption && <div className="eb-stat__caption">{caption}</div>}
        </div>
        {spark && spark.length > 1 && <Sparkline data={spark} label={`${label} trend`} width={72} height={20} />}
      </div>
    </div>
  );
}
