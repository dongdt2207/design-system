import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import './Modal.css';

export interface ModalProps {
  open: boolean; onOpenChange: (open: boolean) => void;
  /** Bắt buộc. Với xác nhận xoá: nói rõ đối tượng. */
  title: string; description?: string;
  /** sm 400 xác nhận · md 560 form ngắn · lg 800 nội dung phức tạp */
  size?: 'sm' | 'md' | 'lg';
  /** Huỷ trái, chính phải. */
  footer?: ReactNode;
  /** Chặn đóng khi bấm ra ngoài (form có dữ liệu chưa lưu). */
  preventOutsideClose?: boolean; children?: ReactNode;
}
/** Hộp thoại lớp 2. Focus trap, Esc, aria từ Radix; hình thức từ token. Không mở modal từ modal. */
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
            <Dialog.Close className="eb-modal__close" aria-label="Đóng"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg></Dialog.Close>
          </div>
          {children && <div className="eb-modal__body">{children}</div>}
          {footer && <div className="eb-modal__footer">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
