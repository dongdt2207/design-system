import { Fragment } from 'react';
import '../chart.css';
import './Heatmap.css';

export interface HeatmapProps {
  /** Nhãn cột, ví dụ giờ trong ngày. */
  columns: string[];
  /** Mỗi hàng: nhãn + một giá trị cho mỗi cột. null = không có dữ liệu. */
  rows: { label: string; values: (number | null)[] }[];
  max?: number;
  formatValue?: (n: number) => string;
  unit?: string;
}

/** Độ lớn trên một lưới hai chiều. Thang một tông, đậm = lớn — không dùng cầu vồng. */
const STEPS = ['var(--viz-seq-100)', 'var(--viz-seq-200)', 'var(--viz-seq-300)', 'var(--viz-seq-400)', 'var(--viz-seq-500)', 'var(--viz-seq-600)', 'var(--viz-seq-700)'];

export function Heatmap({ columns, rows, max, formatValue = (n) => n.toLocaleString('vi-VN'), unit = '' }: HeatmapProps) {
  const all = rows.flatMap((r) => r.values).filter((v): v is number => v !== null);
  const ceiling = max ?? Math.max(...all, 1);
  const stepOf = (v: number) => STEPS[Math.min(STEPS.length - 1, Math.floor((v / ceiling) * STEPS.length))];

  return (
    <div className="eb-heat">
      <div className="eb-heat__grid" style={{ gridTemplateColumns: `auto repeat(${columns.length}, minmax(18px, 1fr))` }}>
        <span />
        {columns.map((c) => <span className="eb-heat__colhead" key={c}>{c}</span>)}
        {rows.map((r) => (
          <Fragment key={r.label}>
            <span className="eb-heat__rowhead">{r.label}</span>
            {r.values.map((v, i) => (
              <span
                key={`${r.label}-${i}`}
                className={`eb-heat__cell${v === null ? ' eb-heat__cell--empty' : ''}`}
                style={v === null ? undefined : { background: stepOf(v) }}
                title={v === null ? `${r.label} · ${columns[i]}: không có dữ liệu` : `${r.label} · ${columns[i]}: ${formatValue(v)}${unit}`}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <div className="eb-heat__scale">
        <span>Thấp</span>
        <span className="eb-heat__swatches" aria-hidden="true">{STEPS.map((s) => <span key={s} style={{ background: s }} />)}</span>
        <span>Cao · tới {formatValue(ceiling)}{unit}</span>
      </div>

      <table className="eb-chart__table">
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Hàng</th>{columns.map((c) => <th scope="col" key={c}>{c}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r.label}><th scope="row">{r.label}</th>{r.values.map((v, i) => <td key={i}>{v === null ? '—' : formatValue(v) + unit}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
