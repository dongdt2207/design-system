import type { ReactNode } from 'react';
import '../chart.css';
import './ChartFrame.css';
import { EmptyState } from '../EmptyState/EmptyState';
import { Skeleton } from '../Skeleton/Skeleton';
import { Button } from '../Button/Button';

export interface ChartLegendItem { name: string; color: string }
export interface ChartFrameProps {
  title?: string;
  /** Một câu: kỳ dữ liệu, đơn vị, nguồn. */
  subtitle?: string;
  /** Bắt buộc từ 2 series trở lên — danh tính không được chỉ dựa vào màu. */
  legend?: ChartLegendItem[];
  state?: 'ready' | 'loading' | 'empty' | 'error';
  emptyTitle?: string;
  errorTitle?: string;
  onRetry?: () => void;
  /** Chiều cao vùng vẽ, giữ nguyên qua mọi trạng thái để trang không nhảy. */
  height?: number;
  children?: ReactNode;
}

/** Khung chung của mọi biểu đồ: tiêu đề, legend, và bốn trạng thái theo mục 9.3/9.5. */
export function ChartFrame({ title, subtitle, legend, state = 'ready', emptyTitle = 'Chưa có dữ liệu', errorTitle = 'Không tải được dữ liệu', onRetry, height = 200, children }: ChartFrameProps) {
  return (
    <figure className="eb-chart" style={{ margin: 0 }}>
      {(title || subtitle) && (
        <figcaption className="eb-chart__head">
          <div>
            {title && <h3 className="eb-chart__title">{title}</h3>}
            {subtitle && <p className="eb-chart__subtitle">{subtitle}</p>}
          </div>
        </figcaption>
      )}
      {state === 'ready' && legend && legend.length > 1 && (
        <ul className="eb-chart__legend">
          {legend.map((l) => <li key={l.name}><span className="eb-chart__swatch" style={{ background: l.color }} aria-hidden="true" />{l.name}</li>)}
        </ul>
      )}
      <div className="eb-chart__body" style={{ minHeight: height }}>
        {state === 'loading' && <Skeleton shape="block" height={height} />}
        {state === 'empty' && <EmptyState size="compact" title={emptyTitle} description="Chọn khoảng thời gian khác hoặc bỏ bớt bộ lọc." />}
        {state === 'error' && <EmptyState size="compact" title={errorTitle} description="Kết nối bị gián đoạn." action={onRetry && <Button variant="secondary" size="sm" onClick={onRetry}>Thử lại</Button>} />}
        {state === 'ready' && children}
      </div>
    </figure>
  );
}
