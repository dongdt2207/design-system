import '../chart.css';
import './DonutChart.css';

export interface DonutDatum { label: string; value: number }
export interface DonutChartProps {
  /** At most 5 slices. Beyond that, group the small ones into "Other" before passing them in. */
  data: DonutDatum[];
  /** The word under the center figure: "orders", "users". */
  caption?: string;
  /** Tổng hiển thị ở giữa. Bỏ trống = cộng dữ liệu. */
  total?: number;
  formatValue?: (n: number) => string;
  size?: number;
}

const colorOf = (i: number) => `var(--viz-cat-${(i % 8) + 1})`;

/** Share of a total. When slices need precise comparison, use BarChart. */
export function DonutChart({ data, caption, total, formatValue = (n) => n.toLocaleString('en-US'), size = 160 }: DonutChartProps) {
  const sum = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - 18) / 2, C = 2 * Math.PI * r;
  const GAP = 2; // a 2px gap between slices so neighboring colors don't touch
  let offset = 0;

  return (
    <div className="eb-donut">
      <div className="eb-donut__wrap" style={{ width: size, height: size }}>
        <svg className="eb-donut__svg" width={size} height={size} role="img" aria-label={`Share chart, ${data.length} slices`}>
          {data.map((d, i) => {
            const len = (d.value / sum) * C;
            const seg = (
              <circle
                key={d.label}
                className="eb-donut__seg"
                cx={size / 2} cy={size / 2} r={r}
                stroke={colorOf(i)}
                strokeDasharray={`${Math.max(0, len - GAP)} ${C - Math.max(0, len - GAP)}`}
                strokeDashoffset={-offset}
              >
                <title>{`${d.label}: ${formatValue(d.value)} (${Math.round((d.value / sum) * 100)}%)`}</title>
              </circle>
            );
            offset += len;
            return seg;
          })}
        </svg>
        <div className="eb-donut__center">
          <span className="eb-donut__total">{formatValue(total ?? sum)}</span>
          {caption && <span className="eb-donut__caption">{caption}</span>}
        </div>
      </div>

      <ul className="eb-donut__list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {data.map((d, i) => (
          <li className="eb-donut__item" key={d.label}>
            <span className="eb-chart__swatch" style={{ background: colorOf(i) }} aria-hidden="true" />
            <span>{d.label}</span>
            <span className="eb-donut__item-value">{formatValue(d.value)} · {Math.round((d.value / sum) * 100)}%</span>
          </li>
        ))}
      </ul>

      <table className="eb-chart__table">
        <caption>Data table</caption>
        <thead><tr><th scope="col">Slice</th><th scope="col">Value</th><th scope="col">Share</th></tr></thead>
        <tbody>{data.map((d) => <tr key={d.label}><th scope="row">{d.label}</th><td>{formatValue(d.value)}</td><td>{Math.round((d.value / sum) * 100)}%</td></tr>)}</tbody>
      </table>
    </div>
  );
}
