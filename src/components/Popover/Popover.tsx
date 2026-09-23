import { DialogTrigger, Popover as APopover, Dialog, Pressable, OverlayArrow } from 'react-aria-components';
import type { ReactNode } from 'react';
import '../aria.css';
import './Popover.css';
export interface PopoverProps {
  trigger: ReactNode;
  /** Short title (aria). */
  title?: string;
  placement?: 'bottom start' | 'bottom end' | 'bottom' | 'top' | 'left' | 'right';
  children: ReactNode | ((close: () => void) => ReactNode);
}
/** Temporary content in context: filters, small forms. With actions it needs an explicit close button; without actions, use Tooltip. */
export function Popover({ trigger, title, placement = 'bottom start', children }: PopoverProps) {
  return (
    <DialogTrigger>
      <Pressable><span style={{ display: 'inline-flex' }}>{trigger}</span></Pressable>
      <APopover className="eb-popover eb-popover--dialog" placement={placement} offset={6}>
        <OverlayArrow className="eb-popover__arrow"><svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 6 L5 0 L10 6" /></svg></OverlayArrow>
        <Dialog className="eb-popover__dialog" aria-label={title}>{({ close }) => (<>{title && <h3 className="eb-popover__title">{title}</h3>}{typeof children === 'function' ? children(close) : children}</>)}</Dialog>
      </APopover>
    </DialogTrigger>
  );
}
