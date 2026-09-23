import { useState } from 'react';
import '../chart.css';
import './ScatterPlot.css';

export interface ScatterPoint {
  x: number;
  y: number;
  label: string;
  /** A third quantity. When present, the chart becomes a bubble chart. */
  size?: number;
}
export interface ScatterSeries { name: string; points: ScatterPoint[] }
export interface ScatterPlotProps {
  /** At most 3 series: this form compares every pair of colors, so the ceiling is lower than for bars and lines. */
  series: ScatterSeries[];
  xLabel: string;
  yLabel: string;
  formatX?: (n: number) => string;
  formatY?: (n: number) => string;
  height?: number;
  /** The quantity mapped to bubble size. Required when points carry `size`. */
  sizeLabel?: string;
  formatSize?: (n: number) => string;
}

const colorOf = (i: number) => `var(--viz-cat-${(i % 8) + 1})`;
const W = 640, PAD = { l: 44, r: 12, t: 12, b: 34 };

/**
 * The relationship between two quantities. Points with `size` make it a bubble chart —
 * the third dimension is encoded as area, with a size legend.
 * Capped at 3 series because here every pair of colors can end up adjacent.
 */
export function ScatterPlot({ series, xLabel, yLabel, formatX = (n) => n.toLocaleString('en-US'), formatY = (n) => n.toLocaleString('en-US'), height = 260, sizeLabel, formatSize = (n) => n.toLocaleString('en-US') }: ScatterPlotProps) {
  const [hover, setHover] = useState<{ x: number; y: number; text: string } | null>(null);
  const pts = series.flatMap((s) => s.points);
  const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(0, ...ys), y1 = Math.max(...ys);
  const px = (v: number) => PAD.l + ((v - x0) / (x1 - x0 || 1)) * (W - PAD.l - PAD.r);
  const py = (v: number) => (height - PAD.b) - ((v - y0) / (y1 - y0 || 1)) * (height - PAD.b - PAD.t);

  // Bubbles: the eye reads AREA, so the radius follows the square root of the value.
  // Mapping the value straight to the radius exaggerates it quadratically.
  const sizes = pts.map((p) => p.size).filter((v): v is number => v !== undefined);
  const bubble = sizes.length > 0;
  const sMin = bubble ? Math.min(...sizes) : 0, sMax = bubble ? Math.max(...sizes) : 1;
  const R_MIN = 5, R_MAX = 22;
  const radius = (v?: number) => {
    if (!bubble || v === undefined) return 5;
    const t = Math.sqrt((v - sMin) / (sMax - sMin || 1));
    return R_MIN + t * (R_MAX - R_MIN);
  };
  const drawOrder = (ps: ScatterPoint[]) => (bubble ? [...ps].sort((a, b) => (b.size ?? 0) - (a.size ?? 0)) : ps);

  return (
    <div style={{ position: 'relative' }} onMouseLeave={() => setHover(null)}>
      {series.length > 1 && (
        <ul className="eb-chart__legend" style={{ marginBottom: 'var(--space-3)' }}>
          {series.map((s, i) => <li key={s.name}><span className="eb-chart__swatch" style={{ background: colorOf(i) }} aria-hidden="true" />{s.name}</li>)}
        </ul>
      )}
      <svg className="eb-scatter" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={`Scatter plot: ${yLabel} against ${xLabel}`}>
        {[0, 0.5, 1].map((t) => <line key={t} className="eb-chart__grid" x1={PAD.l} x2={W - PAD.r} y1={py(y0 + (y1 - y0) * t)} y2={py(y0 + (y1 - y0) * t)} />)}
        <line className="eb-scatter__axis-line" x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={height - PAD.b} />
        <text className="eb-chart__axis" x={PAD.l} y={height - 8}>{formatX(x0)}</text>
        <text className="eb-chart__axis" x={W - PAD.r} y={height - 8} textAnchor="end">{formatX(x1)}</text>
        <text className="eb-chart__axis" x={4} y={py(y1) + 4}>{formatY(y1)}</text>
        <text className="eb-chart__axis" x={4} y={py(y0)}>{formatY(y0)}</text>
        {series.map((s, si) => drawOrder(s.points).map((p) => (
          <circle
            key={`${s.name}-${p.label}`}
            className="eb-scatter__dot"
            cx={px(p.x)} cy={py(p.y)} r={radius(p.size)} fill={colorOf(si)}
            onMouseEnter={() => setHover({
              x: (px(p.x) / W) * 100,
              y: py(p.y) - radius(p.size),
              text: `${p.label} · ${xLabel} ${formatX(p.x)} · ${yLabel} ${formatY(p.y)}${p.size !== undefined && sizeLabel ? ` · ${sizeLabel} ${formatSize(p.size)}` : ''}`,
            })}
          />
        )))}
      </svg>
      {hover && <div className="eb-chart__tip" style={{ left: `${hover.x}%`, top: hover.y }} role="presentation">{hover.text}</div>}

      {bubble && sizeLabel && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
          <span>{sizeLabel}:</span>
          {[sMin, (sMin + sMax) / 2, sMax].map((v) => (
            <span key={v} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <svg width={radius(v) * 2} height={radius(v) * 2} aria-hidden="true">
                <circle cx={radius(v)} cy={radius(v)} r={radius(v) - 1} fill="none" stroke="var(--color-border-strong)" />
              </svg>
              {formatSize(Math.round(v))}
            </span>
          ))}
        </div>
      )}
      <table className="eb-chart__table">
        <caption>Data table</caption>
        <thead><tr><th scope="col">Point</th><th scope="col">{xLabel}</th><th scope="col">{yLabel}</th>{bubble && <th scope="col">{sizeLabel ?? 'Size'}</th>}<th scope="col">Series</th></tr></thead>
        <tbody>{series.flatMap((s) => s.points.map((p) => <tr key={`${s.name}-${p.label}`}><th scope="row">{p.label}</th><td>{formatX(p.x)}</td><td>{formatY(p.y)}</td>{bubble && <td>{p.size === undefined ? '—' : formatSize(p.size)}</td>}<td>{s.name}</td></tr>))}</tbody>
      </table>
    </div>
  );
}
