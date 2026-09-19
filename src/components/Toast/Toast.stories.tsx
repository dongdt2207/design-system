import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toaster, toast } from './Toast';
import { Button } from '../Button/Button';
const meta: Meta = { title: 'Components/Toast', tags: ['autodocs'], parameters: { layout: 'fullscreen' }, decorators: [(S) => <div style={{ padding: 32, minHeight: 240 }}><S /><Toaster /></div>] };
export default meta;
/** Xác nhận sau hành động vừa xong. Không cần nếu kết quả đã nhìn thấy (mục mới hiện trong danh sách). */
export const Demo: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="secondary" onClick={() => toast('Đã lưu thay đổi')}>Neutral</Button>
      <Button variant="secondary" onClick={() => toast.success('Đã gửi lời mời tới 3 người')}>Success</Button>
      <Button variant="secondary" onClick={() => toast.error('Không tải được danh sách. Thử lại hoặc kiểm tra kết nối.')}>Error</Button>
      <Button variant="secondary" onClick={() => toast('Đã lưu trữ dự án Alpha', { action: { label: 'Hoàn tác', onClick: () => toast('Đã khôi phục') } })}>Có hoàn tác</Button>
    </div>
  ),
};
