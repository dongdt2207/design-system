import { TooltipTrigger, Tooltip as ATooltip, OverlayArrow, Focusable } from 'react-aria-components';
import type { ReactNode } from 'react';
import './Tooltip.css';
export interface TooltipProps {
  /** One line, no actions. Never hide important information in a tooltip. */
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: ReactNode;
}
export function Tooltip({ content, placement = 'top', delay = 400, children }: TooltipProps) {
  return (
    <TooltipTrigger delay={delay}>
      <Focusable><span style={{ display: 'inline-flex' }}>{children}</span></Focusable>
      <ATooltip className="eb-tooltip" placement={placement} offset={6}>
        <OverlayArrow className="eb-tooltip__arrow"><svg width="8" height="8" viewBox="0 0 8 8"><path d="M0 0 L4 4 L8 0" /></svg></OverlayArrow>
        {content}
      </ATooltip>
    </TooltipTrigger>
  );
}
