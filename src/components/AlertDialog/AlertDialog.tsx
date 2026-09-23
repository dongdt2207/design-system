import { DialogTrigger, Modal as AModal, ModalOverlay, Dialog, Heading, Pressable } from 'react-aria-components';
import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './AlertDialog.css';
export interface AlertDialogProps {
  trigger: ReactNode;
  /** Names the object: "Delete project Alpha?" */
  title: string;
  /** States the consequence; never asks "are you sure". */
  description: string;
  /** Verb + object: "Delete project". */
  confirmLabel: string;
  cancelLabel?: string;
  /** danger for irreversible actions (default). */
  tone?: 'danger' | 'primary';
  onConfirm?: () => void | Promise<void>;
}
/** Confirms an important action. Unlike Modal: no dismiss on outside click, focus starts on Cancel. */
export function AlertDialog({ trigger, title, description, confirmLabel, cancelLabel = 'Cancel', tone = 'danger', onConfirm }: AlertDialogProps) {
  return (
    <DialogTrigger>
      <Pressable><span style={{ display: 'inline-flex' }}>{trigger}</span></Pressable>
      <ModalOverlay className="eb-alert__overlay" isDismissable={false}>
        <AModal className="eb-alert">
          <Dialog role="alertdialog" className="eb-alert__dialog">
            {({ close }) => (
              <>
                <Heading slot="title" className="eb-alert__title">{title}</Heading>
                <p className="eb-alert__desc">{description}</p>
                <div className="eb-alert__actions">
                  <Button variant="secondary" onClick={close} autoFocus>{cancelLabel}</Button>
                  <Button variant={tone} onClick={async () => { await onConfirm?.(); close(); }}>{confirmLabel}</Button>
                </div>
              </>
            )}
          </Dialog>
        </AModal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
