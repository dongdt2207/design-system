import { Breadcrumbs, Breadcrumb as ABreadcrumb, Link } from 'react-aria-components';
import './Breadcrumb.css';
export interface Crumb { label: string; href?: string }
export interface BreadcrumbProps { /** Mục cuối là trang hiện tại, không phải link. */ items: Crumb[] }
/** Dùng khi sâu hơn 2 cấp. Tối đa 4 mục; nhiều hơn thì rút gọn giữa. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumbs className="eb-crumbs">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return <ABreadcrumb key={i} className="eb-crumbs__item"><Link className="eb-crumbs__link" href={last ? undefined : c.href}>{c.label}</Link>{!last && <span className="eb-crumbs__sep" aria-hidden="true">/</span>}</ABreadcrumb>;
      })}
    </Breadcrumbs>
  );
}
