import type { ReactNode } from 'react';

/**
 * Fixed frame for responsive stories (DESIGN-RULES section 3.5).
 * Use a frame instead of resizing the browser: components follow their container, not the window.
 *
 *     decorators: [frame(390)]
 */
export const frame = (width: number, height?: number) => (Story: () => ReactNode) => (
  <div style={{ width, maxWidth: '100%', height, margin: '0 auto', padding: 'var(--space-4)', border: '1px solid var(--color-border-default)', borderRadius: 12, background: 'var(--color-bg-page)', overflow: 'hidden' }}>
    <Story />
  </div>
);
