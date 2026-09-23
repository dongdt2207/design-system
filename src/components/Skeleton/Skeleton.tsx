import './Skeleton.css';
export interface SkeletonProps { /** text = một dòng chữ; block = khối; circle = avatar */ shape?: 'text' | 'block' | 'circle'; width?: number | string; height?: number | string; lines?: number }
/** A placeholder while loading. Shaped like the real content, with no strong shimmer. */
export function Skeleton({ shape = 'text', width, height, lines = 1 }: SkeletonProps) {
  if (shape === 'text' && lines > 1) return <div className="eb-skel-lines" aria-hidden="true">{Array.from({ length: lines }).map((_, i) => <span key={i} className="eb-skel eb-skel--text" style={{ width: i === lines - 1 ? '60%' : width ?? '100%' }} />)}</div>;
  return <span className={`eb-skel eb-skel--${shape}`} style={{ width, height }} aria-hidden="true" />;
}
export function SkeletonCard() {
  return <div className="eb-skel-card"><div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Skeleton shape="circle" width={36} height={36} /><div style={{ flex: 1 }}><Skeleton width="40%" /><Skeleton width="25%" /></div></div><Skeleton lines={3} /></div>;
}
