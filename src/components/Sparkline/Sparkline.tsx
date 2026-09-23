import '../chart.css';
import './Sparkline.css';

export interface SparklineProps {
  /** At least 2 points. No axes, no labels — it shows trend, not values. */
  data: number[];
  variant?: 'line' | 'bar';
  /** Required: a sentence for screen reader users, because this chart has no axes. */
  label: string;
  width?: number;
  height?: number;
  tone?: 'brand' | 'neutral';
  area?: boolean;
}

/** A trend inside a table cell or beside a figure. When exact values matter, use LineChart. */
export function Sparkline({ data, variant = 'line', label, width = 96, height = 24, tone = 'brand', area = false }: SparklineProps) {
  if (data.length < 2) return null;
  const min = Math.min(...data), max = Math.max(...data), span = max - min || 1;
  const x = (i: number) => (i / (data.length - 1)) * width;
  const y = (v: number) => height - 2 - ((v - min) / span) * (height - 4);
  const cls = `eb-spark${tone === 'neutral' ? ' eb-spark--neutral' : ''}`;

  if (variant === 'bar') {
    const w = Math.max(2, width / data.length - 2);
    return (
      <svg className={cls} width={width} height={height} role="img" aria-label={label}>
        {data.map((v, i) => { const h = Math.max(2, ((v - min) / span) * (height - 2)); return <rect key={i} className="eb-spark__bar" x={(i * width) / data.length} y={height - h} width={w} height={h} />; })}
      </svg>
    );
  }
  const d = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  return (
    <svg className={cls} width={width} height={height} role="img" aria-label={label}>
      {area && <path className="eb-spark__area" d={`${d} L${width} ${height} L0 ${height} Z`} />}
      <path className="eb-spark__path" d={d} />
    </svg>
  );
}
