import type { ReactNode } from 'react';
import './EmptyState.css';
export interface EmptyStateProps {
  /** Nói chưa có gì + có thể làm gì: "Chưa có thành viên nào". */
  title: string;
  /** Một câu. */
  description?: string;
  icon?: ReactNode;
  /** Hành động primary nếu người dùng tạo được dữ liệu; gợi ý sửa tìm kiếm nếu là kết quả rỗng. */
  action?: ReactNode;
  /** compact cho vùng nhỏ trong card/bảng. */
  size?: 'default' | 'compact';
}
export function EmptyState({ title, description, icon, action, size = 'default' }: EmptyStateProps) {
  return (
    <div className={`eb-empty eb-empty--${size}`}>
      {icon && <div className="eb-empty__icon" aria-hidden="true">{icon}</div>}
      <h3 className="eb-empty__title">{title}</h3>
      {description && <p className="eb-empty__desc">{description}</p>}
      {action && <div className="eb-empty__action">{action}</div>}
    </div>
  );
}
