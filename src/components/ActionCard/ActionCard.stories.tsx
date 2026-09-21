import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionCard } from './ActionCard';
import { Button } from '../Button/Button';

const meta: Meta<typeof ActionCard> = { title: 'Components/ActionCard', component: ActionCard, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ActionCard>;

export const MacDinh: Story = {
  name: 'Mặc định',
  args: {
    title: 'Đặt lịch khảo sát',
    description: 'Một buổi tại nhà để đo đạc và nghe nếp sinh hoạt, trước khi vẽ bất cứ thứ gì.',
    action: <Button variant="primary">Đặt lịch</Button>,
    note: 'Miễn phí, không cần cọc',
  },
  render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div>,
};
export const Nhat: Story = {
  name: 'Nền nhạt — đặt trong trang dày đặc',
  args: {
    variant: 'subtle',
    title: 'Nhập dữ liệu từ bảng tính',
    description: 'Tải lên tệp .xlsx, hệ thống khớp cột rồi hỏi lại trước khi ghi.',
    action: <Button variant="secondary">Chọn tệp</Button>,
  },
  render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div>,
};
export const KhongMoTa: Story = { name: 'Không có mô tả', args: { title: 'Tạo báo cáo mới', action: <Button variant="primary">Tạo báo cáo</Button> }, render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div> };
export const Hang: Story = {
  name: 'Hai thẻ cạnh nhau',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
      <ActionCard title="Mời đồng nghiệp" description="Gửi lời mời qua email, họ tự đặt mật khẩu." action={<Button variant="secondary">Mời</Button>} />
      <ActionCard title="Kết nối kho dữ liệu" description="Đọc trực tiếp từ kho, không phải tải tệp thủ công." action={<Button variant="secondary">Kết nối</Button>} />
    </div>
  ),
};
