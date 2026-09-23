import '../chart.css';
import './DivergingBar.css';

export interface DivergingDatum { label: string; value: number }
export interface DivergingBarProps {
  /** Negative and positive values around a zero baseline. */
  data: DivergingDatum[];
  formatValue?: (n: number) => string;
  /** Pole labels, used for the legend and for screen readers. */
  poles?: { negative: string; positive: string };
}

/** Above/below a baseline: variance against target, positive and negative growth. The midpoint is 0. */
export function DivergingBar({ data, formatValue = (n) => n.toLocaleString('en-US'), poles = { negative: 'Below baseline', positive: 'Above baseline' } }: DivergingBarProps) {
  const span = Math.max(...data.map((d) => Math.abs(d.value)), 1);
  return (
    <div className="eb-div">
      <ul className="eb-chart__legend">
        <li><span className="eb-chart__swatch" style={{ background: 'var(--viz-diverge-cool)' }} aria-hidden="true" />{poles.negative}</li>
        <li><span className="eb-chart__swatch" style={{ background: 'var(--viz-diverge-warm)' }} aria-hidden="true" />{poles.positive}</li>
      </ul>
      {data.map((d) => {
        const w = (Math.abs(d.value) / span) * 50;
        return (
          <div className="eb-div__row" key={d.label}>
            <span className="eb-div__label" title={d.label}>{d.label}</span>
            <div className="eb-div__track">
              <span className="eb-div__zero" style={{ left: '50%' }} />
              <span
                className={`eb-div__fill eb-div__fill--${d.value < 0 ? 'neg' : 'pos'}`}
                style={d.value < 0 ? { right: '50%', width: `${w}%` } : { left: '50%', width: `${w}%` }}
              />
            </div>
            <span className="eb-div__value">{d.value > 0 ? '+' : ''}{formatValue(d.value)}</span>
          </div>
        );
      })}
      <table className="eb-chart__table">
        <caption>Data table</caption>
        <thead><tr><th scope="col">Category</th><th scope="col">Variance</th></tr></thead>
        <tbody>{data.map((d) => <tr key={d.label}><th scope="row">{d.label}</th><td>{d.value > 0 ? '+' : ''}{formatValue(d.value)}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
