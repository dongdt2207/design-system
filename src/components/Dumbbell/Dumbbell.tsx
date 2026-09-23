import '../chart.css';
import './Dumbbell.css';

export interface DumbbellDatum { label: string; from: number; to: number }
export interface DumbbellProps {
  data: DumbbellDatum[];
  /** The two period names: "August" → "September". */
  labels?: { from: string; to: string };
  formatValue?: (n: number) => string;
}

/** Before → after per category. It shows the shift, which two bars side by side do not. */
export function Dumbbell({ data, labels = { from: 'Before', to: 'After' }, formatValue = (n) => n.toLocaleString('en-US') }: DumbbellProps) {
  const all = data.flatMap((d) => [d.from, d.to]);
  const min = Math.min(...all), max = Math.max(...all), span = max - min || 1;
  const pos = (v: number) => ((v - min) / span) * 100;
  return (
    <div className="eb-dumb">
      <ul className="eb-chart__legend">
        <li><span className="eb-chart__swatch" style={{ background: 'var(--color-text-muted)' }} aria-hidden="true" />{labels.from}</li>
        <li><span className="eb-chart__swatch" style={{ background: 'var(--viz-cat-1)' }} aria-hidden="true" />{labels.to}</li>
      </ul>
      {data.map((d) => {
        const a = pos(Math.min(d.from, d.to)), b = pos(Math.max(d.from, d.to));
        return (
          <div className="eb-dumb__row" key={d.label}>
            <span className="eb-dumb__label" title={d.label}>{d.label}</span>
            <div className="eb-dumb__track">
              <span className="eb-dumb__line" style={{ left: `${a}%`, width: `${b - a}%` }} />
              <span className="eb-dumb__dot eb-dumb__dot--from" style={{ left: `${pos(d.from)}%` }} title={`${labels.from}: ${formatValue(d.from)}`} />
              <span className="eb-dumb__dot eb-dumb__dot--to" style={{ left: `${pos(d.to)}%` }} title={`${labels.to}: ${formatValue(d.to)}`} />
            </div>
            <span className="eb-dumb__delta">{d.to - d.from > 0 ? '+' : ''}{formatValue(d.to - d.from)}</span>
          </div>
        );
      })}
      <table className="eb-chart__table">
        <caption>Data table</caption>
        <thead><tr><th scope="col">Category</th><th scope="col">{labels.from}</th><th scope="col">{labels.to}</th><th scope="col">Variance</th></tr></thead>
        <tbody>{data.map((d) => <tr key={d.label}><th scope="row">{d.label}</th><td>{formatValue(d.from)}</td><td>{formatValue(d.to)}</td><td>{d.to - d.from > 0 ? '+' : ''}{formatValue(d.to - d.from)}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
