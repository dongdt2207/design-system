import { useState } from 'react';
import '../chart.css';
import './ScatterPlot.css';

export interface ScatterPoint { x: number; y: number; label: string }
export interface ScatterSeries { name: string; points: ScatterPoint[] }
export interface ScatterPlotProps {
  /** Tối đa 3 series: dạng này so mọi cặp màu với nhau, nên trần thấp hơn cột và đường. */
  series: ScatterSeries[];
  xLabel: string;
  yLabel: string;
  formatX?: (n: number) => string;
  formatY?: (n: number) => string;
  height?: number;
}

const colorOf = (i: number) => `var(--viz-cat-${(i % 8) + 1})`;
const W = 640, PAD = { l: 44, r: 12, t: 12, b: 34 };

/** Quan hệ giữa hai đại lượng. Trần 3 series vì mọi cặp màu đều có thể nằm cạnh nhau. */
export function ScatterPlot({ series, xLabel, yLabel, formatX = (n) => n.toLocaleString('vi-VN'), formatY = (n) => n.toLocaleString('vi-VN'), height = 260 }: ScatterPlotProps) {
  const [hover, setHover] = useState<{ x: number; y: number; text: string } | null>(null);
  const pts = series.flatMap((s) => s.points);
  const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(0, ...ys), y1 = Math.max(...ys);
  const px = (v: number) => PAD.l + ((v - x0) / (x1 - x0 || 1)) * (W - PAD.l - PAD.r);
  const py = (v: number) => (height - PAD.b) - ((v - y0) / (y1 - y0 || 1)) * (height - PAD.b - PAD.t);

  return (
    <div style={{ position: 'relative' }} onMouseLeave={() => setHover(null)}>
      {series.length > 1 && (
        <ul className="eb-chart__legend" style={{ marginBottom: 'var(--space-3)' }}>
          {series.map((s, i) => <li key={s.name}><span className="eb-chart__swatch" style={{ background: colorOf(i) }} aria-hidden="true" />{s.name}</li>)}
        </ul>
      )}
      <svg className="eb-scatter" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={`Biểu đồ phân tán: ${yLabel} theo ${xLabel}`}>
        {[0, 0.5, 1].map((t) => <line key={t} className="eb-chart__grid" x1={PAD.l} x2={W - PAD.r} y1={py(y0 + (y1 - y0) * t)} y2={py(y0 + (y1 - y0) * t)} />)}
        <line className="eb-scatter__axis-line" x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={height - PAD.b} />
        <text className="eb-chart__axis" x={PAD.l} y={height - 8}>{formatX(x0)}</text>
        <text className="eb-chart__axis" x={W - PAD.r} y={height - 8} textAnchor="end">{formatX(x1)}</text>
        <text className="eb-chart__axis" x={4} y={py(y1) + 4}>{formatY(y1)}</text>
        <text className="eb-chart__axis" x={4} y={py(y0)}>{formatY(y0)}</text>
        {series.map((s, si) => s.points.map((p) => (
          <circle
            key={`${s.name}-${p.label}`}
            className="eb-scatter__dot"
            cx={px(p.x)} cy={py(p.y)} r={5} fill={colorOf(si)}
            onMouseEnter={() => setHover({ x: (px(p.x) / W) * 100, y: py(p.y), text: `${p.label} · ${xLabel} ${formatX(p.x)} · ${yLabel} ${formatY(p.y)}` })}
          />
        )))}
      </svg>
      {hover && <div className="eb-chart__tip" style={{ left: `${hover.x}%`, top: hover.y }} role="presentation">{hover.text}</div>}
      <table className="eb-chart__table">
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Điểm</th><th scope="col">{xLabel}</th><th scope="col">{yLabel}</th><th scope="col">Nhóm</th></tr></thead>
        <tbody>{series.flatMap((s) => s.points.map((p) => <tr key={`${s.name}-${p.label}`}><th scope="row">{p.label}</th><td>{formatX(p.x)}</td><td>{formatY(p.y)}</td><td>{s.name}</td></tr>))}</tbody>
      </table>
    </div>
  );
}
