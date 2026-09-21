import { useState } from 'react';
import '../chart.css';
import './BarChart.css';

export interface BarDatum {
  label: string;
  /** Một giá trị cho mỗi series, đúng thứ tự `series`. */
  values: number[];
}
export interface BarChartProps {
  data: BarDatum[];
  /** Tên series. Bỏ trống = một series duy nhất, khi đó không cần legend. */
  series?: string[];
  /** Cộng dồn trong một thanh. Chỉ dùng khi tổng có nghĩa. */
  stacked?: boolean;
  /** Trần thang. Bỏ trống = lấy giá trị lớn nhất trong dữ liệu. */
  max?: number;
  formatValue?: (n: number) => string;
}

type TipRow = { name: string; value: string; color: string };
type Tip = { x: number; y: number; head: string; rows: TipRow[] } | null;
const colorOf = (i: number) => `var(--viz-cat-${(i % 8) + 1})`;

/** So sánh giữa các hạng mục. Nằm ngang là mặc định vì nhãn dài vẫn đọc được. */
export function BarChart({ data, series = [], stacked = false, max, formatValue = (n) => n.toLocaleString('vi-VN') }: BarChartProps) {
  const [tip, setTip] = useState<Tip>(null);
  const names = series.length ? series : [''];
  const rowTotal = (d: BarDatum) => d.values.reduce((a, b) => a + b, 0);
  const ceiling = max ?? Math.max(...data.map((d) => (stacked || names.length === 1 ? rowTotal(d) : Math.max(...d.values))));

  const show = (e: React.MouseEvent, head: string, rows: TipRow[]) => {
    const box = (e.currentTarget as HTMLElement).closest('.eb-chart__body, .eb-bar') as HTMLElement | null;
    const r = box?.getBoundingClientRect();
    setTip({ x: e.clientX - (r?.left ?? 0), y: e.clientY - (r?.top ?? 0), head, rows });
  };

  return (
    <div className="eb-bar" onMouseLeave={() => setTip(null)}>
      {data.map((d) => (
        <div className="eb-bar__row" key={d.label}>
          <span className="eb-bar__label" title={d.label}>{d.label}</span>
          <div className="eb-bar__tracks">
            {stacked || names.length === 1 ? (
              <div className="eb-bar__track">
                {d.values.map((v, i) => (
                  <span
                    key={i}
                    className="eb-bar__fill"
                    style={{ width: `${(v / ceiling) * 100}%`, background: colorOf(i) }}
                    onMouseMove={(e) => show(e, d.label, [{ name: names[i] || 'Giá trị', value: formatValue(v), color: colorOf(i) }])}
                  />
                ))}
              </div>
            ) : (
              d.values.map((v, i) => (
                <div className="eb-bar__track eb-bar__track--thin" key={i}>
                  <span
                    className="eb-bar__fill"
                    style={{ width: `${(v / ceiling) * 100}%`, background: colorOf(i) }}
                    onMouseMove={(e) => show(e, d.label, [{ name: names[i], value: formatValue(v), color: colorOf(i) }])}
                  />
                </div>
              ))
            )}
          </div>
          <span className="eb-bar__value">{formatValue(stacked || names.length === 1 ? rowTotal(d) : Math.max(...d.values))}</span>
        </div>
      ))}

      {tip && (
        <div className="eb-chart__tip" style={{ left: tip.x, top: tip.y }} role="presentation">
          <div className="eb-chart__tip-head">{tip.head}</div>
          {tip.rows.map((r) => (
            <div className="eb-chart__tip-row" key={r.name}>
              <span className="eb-chart__swatch" style={{ background: r.color }} aria-hidden="true" />
              <span>{r.name}</span><span className="eb-chart__tip-value">{r.value}</span>
            </div>
          ))}
        </div>
      )}

      <table className="eb-chart__table">
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Hạng mục</th>{names.map((n, i) => <th scope="col" key={i}>{n || 'Giá trị'}</th>)}</tr></thead>
        <tbody>{data.map((d) => <tr key={d.label}><th scope="row">{d.label}</th>{d.values.map((v, i) => <td key={i}>{formatValue(v)}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
