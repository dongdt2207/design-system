import { DialogTrigger, ModalOverlay, Modal as AModal, Dialog, Heading, Pressable } from 'react-aria-components';
import type { ReactNode } from 'react';
import './Drawer.css';
export interface DrawerProps {
  trigger: ReactNode; title: string; description?: string;
  /** Slides in from the right (detail, secondary form) or the bottom (mobile). */
  side?: 'right' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
  footer?: ReactNode | ((close: () => void) => ReactNode);
  children: ReactNode | ((close: () => void) => ReactNode);
}
/** A panel sliding in from the edge that keeps page context. For viewing or editing one item; not for confirmations (AlertDialog). */
export function Drawer({ trigger, title, description, side = 'right', size = 'md', footer, children }: DrawerProps) {
  return (
    <DialogTrigger>
      <Pressable><span style={{ display: 'inline-flex' }}>{trigger}</span></Pressable>
      <ModalOverlay className={`eb-drawer__overlay eb-drawer__overlay--${side}`} isDismissable>
        <AModal className={`eb-drawer eb-drawer--${side} eb-drawer--${size}`}>
          <Dialog className="eb-drawer__dialog">
            {({ close }) => (
              <>
                <div className="eb-drawer__header"><div><Heading slot="title" className="eb-drawer__title">{title}</Heading>{description && <p className="eb-drawer__desc">{description}</p>}</div><button className="eb-modal__close" onClick={close} aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg></button></div>
                <div className="eb-drawer__body">{typeof children === 'function' ? children(close) : children}</div>
                {footer && <div className="eb-drawer__footer">{typeof footer === 'function' ? footer(close) : footer}</div>}
              </>
            )}
          </Dialog>
        </AModal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
