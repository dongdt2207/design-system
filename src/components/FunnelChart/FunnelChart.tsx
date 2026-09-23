import '../chart.css';
import './FunnelChart.css';

export interface FunnelStage { label: string; value: number }
export interface FunnelChartProps {
  /** Steps in order, with decreasing values. */
  stages: FunnelStage[];
  formatValue?: (n: number) => string;
  /** Show the drop between steps — usually the number the reader actually wants. */
  showDrop?: boolean;
}

/* Ordinal steps use one hue, starting at step 400 so the last stage doesn't sink into the background. */
const STEPS = ['var(--viz-seq-700)', 'var(--viz-seq-600)', 'var(--viz-seq-500)', 'var(--viz-seq-400)'];

/** The steps in a flow, with the drop between them. */
export function FunnelChart({ stages, formatValue = (n) => n.toLocaleString('en-US'), showDrop = true }: FunnelChartProps) {
  const top = stages[0]?.value || 1;
  return (
    <div className="eb-funnel">
      {stages.map((s, i) => {
        const prev = i > 0 ? stages[i - 1].value : null;
        const drop = prev ? prev - s.value : 0;
        return (
          <div key={s.label} style={{ display: 'contents' }}>
            <div className="eb-funnel__row">
              <span className="eb-funnel__label">{s.label}</span>
              <div className="eb-funnel__track">
                <div className="eb-funnel__fill" style={{ width: `${(s.value / top) * 100}%`, background: STEPS[Math.min(i, STEPS.length - 1)] }} />
              </div>
              <span className="eb-funnel__value">{formatValue(s.value)} · {Math.round((s.value / top) * 100)}%</span>
            </div>
            {showDrop && prev !== null && drop > 0 && (
              <span className="eb-funnel__drop">dropped {formatValue(drop)} ({Math.round((drop / prev) * 100)}%) from the step above</span>
            )}
          </div>
        );
      })}
      <table className="eb-chart__table">
        <caption>Data table</caption>
        <thead><tr><th scope="col">Step</th><th scope="col">Count</th><th scope="col">Share of first step</th></tr></thead>
        <tbody>{stages.map((s) => <tr key={s.label}><th scope="row">{s.label}</th><td>{formatValue(s.value)}</td><td>{Math.round((s.value / top) * 100)}%</td></tr>)}</tbody>
      </table>
    </div>
  );
}
