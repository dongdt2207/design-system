import './StatTile.css';
import { Sparkline } from '../Sparkline/Sparkline';

export interface StatDelta {
  /** Đã định dạng sẵn: "+12,4%". */
  value: string;
  direction: 'up' | 'down' | 'flat';
  /** Tăng không phải lúc nào cũng tốt (tỉ lệ rời bỏ tăng là xấu). Mặc định up = tốt. */
  meaning?: 'good' | 'bad' | 'neutral';
}
export interface StatTileProps {
  label: string;
  /** Đã định dạng sẵn, kèm đơn vị. */
  value: string;
  delta?: StatDelta;
  /** So với kỳ nào — luôn nói rõ, "+12%" một mình là vô nghĩa. */
  caption?: string;
  spark?: number[];
}

/** Một con số là đủ thì đừng vẽ biểu đồ. Mũi tên + chữ mang nghĩa, màu chỉ là lớp thứ hai. */
export function StatTile({ label, value, delta, caption, spark }: StatTileProps) {
  const meaning = delta ? (delta.meaning ?? (delta.direction === 'flat' ? 'neutral' : delta.direction === 'up' ? 'good' : 'bad')) : undefined;
  const tone = meaning === 'good' ? 'good' : meaning === 'bad' ? 'bad' : 'flat';
  const arrow = delta?.direction === 'up' ? '↑' : delta?.direction === 'down' ? '↓' : '→';
  const word = delta?.direction === 'up' ? 'tăng' : delta?.direction === 'down' ? 'giảm' : 'đi ngang';
  return (
    <div className="eb-stat">
      <span className="eb-stat__label">{label}</span>
      <span className="eb-stat__value">{value}</span>
      <div className="eb-stat__foot">
        <div>
          {delta && (
            <span className={`eb-stat__delta eb-stat__delta--${tone}`}>
              <span aria-hidden="true">{arrow}</span>
              <span className="eb-chart__table">{word} </span>
              {delta.value}
            </span>
          )}
          {caption && <div className="eb-stat__caption">{caption}</div>}
        </div>
        {spark && spark.length > 1 && <Sparkline data={spark} label={`Xu hướng ${label}`} width={72} height={20} />}
      </div>
    </div>
  );
}
