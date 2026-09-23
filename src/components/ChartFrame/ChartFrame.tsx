import type { ReactNode } from 'react';
import '../chart.css';
import './ChartFrame.css';
import { EmptyState } from '../EmptyState/EmptyState';
import { Skeleton } from '../Skeleton/Skeleton';
import { Button } from '../Button/Button';

export interface ChartLegendItem { name: string; color: string }
export interface ChartFrameProps {
  title?: string;
  /** One sentence: period, unit, source. */
  subtitle?: string;
  /** Required from 2 series up — identity must not rest on color alone. */
  legend?: ChartLegendItem[];
  state?: 'ready' | 'loading' | 'empty' | 'error';
  emptyTitle?: string;
  errorTitle?: string;
  onRetry?: () => void;
  /** Plot height, held constant across states so the page doesn't jump. */
  height?: number;
  children?: ReactNode;
}

/** The shared frame for every chart: title, legend, and the four states from sections 9.3 and 9.5. */
export function ChartFrame({ title, subtitle, legend, state = 'ready', emptyTitle = 'No data yet', errorTitle = 'Couldn\u2019t load the data', onRetry, height = 200, children }: ChartFrameProps) {
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
        {state === 'empty' && <EmptyState size="compact" title={emptyTitle} description="Pick a different period, or remove some filters." />}
        {state === 'error' && <EmptyState size="compact" title={errorTitle} description="The connection dropped." action={onRetry && <Button variant="secondary" size="sm" onClick={onRetry}>Try again</Button>} />}
        {state === 'ready' && children}
      </div>
    </figure>
  );
}
