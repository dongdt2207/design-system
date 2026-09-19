import { DialogTrigger, Modal as AModal, ModalOverlay, Dialog, Heading, Pressable } from 'react-aria-components';
import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './AlertDialog.css';
export interface AlertDialogProps {
  trigger: ReactNode;
  /** Nói rõ đối tượng: "Xoá dự án Alpha?" */
  title: string;
  /** Nói hệ quả, không hỏi "bạn có chắc". */
  description: string;
  /** Động từ + đối tượng: "Xoá dự án". */
  confirmLabel: string;
  cancelLabel?: string;
  /** danger cho không hoàn tác (mặc định). */
  tone?: 'danger' | 'primary';
  onConfirm?: () => void | Promise<void>;
}
/** Xác nhận hành động quan trọng. Khác Modal: không đóng khi bấm ra ngoài, focus mặc định vào nút Huỷ. */
export function AlertDialog({ trigger, title, description, confirmLabel, cancelLabel = 'Huỷ', tone = 'danger', onConfirm }: AlertDialogProps) {
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
