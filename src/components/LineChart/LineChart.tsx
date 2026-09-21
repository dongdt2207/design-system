import { useState } from 'react';
import '../chart.css';
import './LineChart.css';

export interface LineSeries { name: string; values: number[] }
export interface LineChartProps {
  series: LineSeries[];
  /** Nhãn trục x, cùng độ dài với mỗi series. */
  labels: string[];
  /** Tô vùng dưới đường. Chỉ dùng khi có đúng một series. */
  area?: boolean;
  formatValue?: (n: number) => string;
  height?: number;
  /** Bắt đầu trục y từ 0. Tắt khi dao động nhỏ trên nền lớn — và nói rõ trong subtitle. */
  zeroBased?: boolean;
}

const colorOf = (i: number) => `var(--viz-cat-${(i % 8) + 1})`;
const W = 640, PAD_L = 8, PAD_R = 8, PAD_B = 22;

/** Thay đổi theo thời gian. Một thang y duy nhất — hai đại lượng khác thang thì tách hai biểu đồ. */
export function LineChart({ series, labels, area = false, formatValue = (n) => n.toLocaleString('vi-VN'), height = 200, zeroBased = true }: LineChartProps) {
  const [hover, setHover] = useState<number | null>(null);
  const all = series.flatMap((s) => s.values);
  const max = Math.max(...all), min = zeroBased ? 0 : Math.min(...all);
  const span = max - min || 1;
  const H = height;
  const x = (i: number) => PAD_L + (i / Math.max(1, labels.length - 1)) * (W - PAD_L - PAD_R);
  const y = (v: number) => (H - PAD_B) - ((v - min) / span) * (H - PAD_B - 8);

  return (
    <div style={{ position: 'relative' }} onMouseLeave={() => setHover(null)}>
      <svg className="eb-line" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label={`Biểu đồ đường: ${series.map((s) => s.name).join(', ')}`}>
        {[0, 0.5, 1].map((t) => <line key={t} className="eb-chart__grid" x1={PAD_L} x2={W - PAD_R} y1={y(min + span * t)} y2={y(min + span * t)} />)}
        {series.map((s, si) => {
          const d = s.values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
          return (
            <g key={s.name}>
              {area && series.length === 1 && <path className="eb-line__area" d={`${d} L${x(s.values.length - 1)} ${H - PAD_B} L${x(0)} ${H - PAD_B} Z`} fill={colorOf(si)} />}
              <path className="eb-line__path" d={d} stroke={colorOf(si)} />
            </g>
          );
        })}
        {hover !== null && (
          <g>
            <line className="eb-line__cross" x1={x(hover)} x2={x(hover)} y1={4} y2={H - PAD_B} />
            {series.map((s, si) => <circle key={s.name} className="eb-line__dot" cx={x(hover)} cy={y(s.values[hover])} r={4} fill={colorOf(si)} />)}
          </g>
        )}
        {labels.map((l, i) => (i === 0 || i === labels.length - 1 || i === Math.floor(labels.length / 2)) && (
          <text key={l} className="eb-chart__axis" x={x(i)} y={H - 6} textAnchor={i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'}>{l}</text>
        ))}
        {labels.map((_, i) => <rect key={i} className="eb-line__hit" x={x(i) - (W / labels.length) / 2} y={0} width={W / labels.length} height={H - PAD_B} onMouseEnter={() => setHover(i)} />)}
      </svg>

      {hover !== null && (
        <div className="eb-chart__tip" style={{ left: `${(x(hover) / W) * 100}%`, top: 0 }} role="presentation">
          <div className="eb-chart__tip-head">{labels[hover]}</div>
          {series.map((s, si) => (
            <div className="eb-chart__tip-row" key={s.name}>
              <span className="eb-chart__swatch" style={{ background: colorOf(si) }} aria-hidden="true" />
              <span>{s.name}</span><span className="eb-chart__tip-value">{formatValue(s.values[hover])}</span>
            </div>
          ))}
        </div>
      )}

      <table className="eb-chart__table">
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Mốc</th>{series.map((s) => <th scope="col" key={s.name}>{s.name}</th>)}</tr></thead>
        <tbody>{labels.map((l, i) => <tr key={l}><th scope="row">{l}</th>{series.map((s) => <td key={s.name}>{formatValue(s.values[i])}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
