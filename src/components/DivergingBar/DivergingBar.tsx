import '../chart.css';
import './DivergingBar.css';

export interface DivergingDatum { label: string; value: number }
export interface DivergingBarProps {
  /** Giá trị âm và dương quanh mốc 0. */
  data: DivergingDatum[];
  formatValue?: (n: number) => string;
  /** Nhãn hai cực, dùng cho legend và cho screen reader. */
  poles?: { negative: string; positive: string };
}

/** Trên/dưới một mốc: chênh lệch so với chỉ tiêu, tăng trưởng âm dương. Điểm giữa là 0. */
export function DivergingBar({ data, formatValue = (n) => n.toLocaleString('vi-VN'), poles = { negative: 'Dưới mốc', positive: 'Trên mốc' } }: DivergingBarProps) {
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
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Hạng mục</th><th scope="col">Chênh lệch</th></tr></thead>
        <tbody>{data.map((d) => <tr key={d.label}><th scope="row">{d.label}</th><td>{d.value > 0 ? '+' : ''}{formatValue(d.value)}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
