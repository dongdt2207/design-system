import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import './Modal.css';

export interface ModalProps {
  open: boolean; onOpenChange: (open: boolean) => void;
  /** Required. For delete confirmations: name the object. */
  title: string; description?: string;
  /** sm 400 confirmation · md 560 short form · lg 800 complex content */
  size?: 'sm' | 'md' | 'lg';
  /** Cancel left, main action right. */
  footer?: ReactNode;
  /** Block dismissal on outside click (a form with unsaved data). */
  preventOutsideClose?: boolean; children?: ReactNode;
}
/** A layer-2 dialog. Focus trap, Esc, and aria come from Radix; appearance comes from tokens. Never open a modal from a modal. */
export function Modal({ open, onOpenChange, title, description, size = 'md', footer, preventOutsideClose, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="eb-modal__overlay" />
        <Dialog.Content className={`eb-modal eb-modal--${size}`} onInteractOutside={(e) => { if (preventOutsideClose) e.preventDefault(); }}>
          <div className="eb-modal__header">
            <div>
              <Dialog.Title className="eb-modal__title">{title}</Dialog.Title>
              {description ? <Dialog.Description className="eb-modal__desc">{description}</Dialog.Description> : <Dialog.Description hidden />}
            </div>
            <Dialog.Close className="eb-modal__close" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg></Dialog.Close>
          </div>
          {children && <div className="eb-modal__body">{children}</div>}
          {footer && <div className="eb-modal__footer">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
