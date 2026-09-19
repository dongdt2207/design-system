import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'], argTypes: { size: { control: 'radio', options: ['sm', 'md', 'lg'] }, open: { control: false }, onOpenChange: { control: false }, footer: { control: false } } };
export default meta;
type Story = StoryObj<typeof Modal>;
function Demo({ trigger, ...args }: Partial<ModalProps> & { trigger?: 'danger' }) {
  const [open, setOpen] = useState(false);
  return <><Button variant={trigger === 'danger' ? 'danger' : 'primary'} onClick={() => setOpen(true)}>{trigger === 'danger' ? 'Xoá dự án' : 'Mở hộp thoại'}</Button><Modal open={open} onOpenChange={setOpen} title="Tiêu đề" {...args} /></>;
}
export const Confirm: Story = { name: 'Xác nhận (sm)', render: () => <Demo trigger="danger" size="sm" title="Xoá dự án Alpha?" description="Mọi tài liệu bên trong sẽ mất và không khôi phục được." footer={<><Button variant="secondary">Huỷ</Button><Button variant="danger">Xoá dự án</Button></>} /> };
export const Form: Story = { name: 'Form ngắn (md)', render: () => <Demo size="md" title="Mời thành viên" description="Người được mời sẽ nhận email trong vài phút." preventOutsideClose footer={<><Button variant="secondary">Huỷ</Button><Button>Mời</Button></>}><div style={{ display: 'grid', gap: 16 }}><Input label="Email" placeholder="ten@ebig.co" /><Input label="Ghi chú (tuỳ chọn)" placeholder="Lời nhắn kèm theo lời mời" /></div></Demo> };
export const Large: Story = { name: 'Nội dung dài (lg)', render: () => <Demo size="lg" title="Điều khoản sử dụng" footer={<Button>Đã hiểu</Button>}>{Array.from({ length: 12 }).map((_, i) => <p key={i} style={{ margin: '0 0 12px' }}>Đoạn {i + 1}. Nội dung dài để kiểm tra cuộn trong thân modal. Header và footer đứng yên.</p>)}</Demo> };
