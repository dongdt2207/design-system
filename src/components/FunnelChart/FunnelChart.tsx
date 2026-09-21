import '../chart.css';
import './FunnelChart.css';

export interface FunnelStage { label: string; value: number }
export interface FunnelChartProps {
  /** Các bước theo thứ tự, giá trị giảm dần. */
  stages: FunnelStage[];
  formatValue?: (n: number) => string;
  /** Hiện mức rơi giữa hai bước — thường mới là thứ người đọc cần. */
  showDrop?: boolean;
}

/* Bậc rời rạc dùng thang một tông, bắt đầu từ bậc 400 để bước cuối không chìm vào nền. */
const STEPS = ['var(--viz-seq-700)', 'var(--viz-seq-600)', 'var(--viz-seq-500)', 'var(--viz-seq-400)'];

/** Các bước trong một luồng, kèm mức rơi giữa các bước. */
export function FunnelChart({ stages, formatValue = (n) => n.toLocaleString('vi-VN'), showDrop = true }: FunnelChartProps) {
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
              <span className="eb-funnel__drop">rơi {formatValue(drop)} ({Math.round((drop / prev) * 100)}%) so với bước trên</span>
            )}
          </div>
        );
      })}
      <table className="eb-chart__table">
        <caption>Số liệu dạng bảng</caption>
        <thead><tr><th scope="col">Bước</th><th scope="col">Số lượng</th><th scope="col">So với bước đầu</th></tr></thead>
        <tbody>{stages.map((s) => <tr key={s.label}><th scope="row">{s.label}</th><td>{formatValue(s.value)}</td><td>{Math.round((s.value / top) * 100)}%</td></tr>)}</tbody>
      </table>
    </div>
  );
}
