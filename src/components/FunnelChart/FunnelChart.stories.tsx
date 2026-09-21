import type { Meta, StoryObj } from '@storybook/react-vite';
import { FunnelChart } from './FunnelChart';

const meta: Meta<typeof FunnelChart> = { title: 'Components/Charts/FunnelChart', component: FunnelChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof FunnelChart>;

export const MacDinh: Story = {
  name: 'Bốn bước',
  args: { stages: [{ label: 'Xem trang', value: 12400 }, { label: 'Thêm vào giỏ', value: 3800 }, { label: 'Bắt đầu thanh toán', value: 1900 }, { label: 'Hoàn tất', value: 1245 }] },
};
export const KhongHienRoi: Story = {
  name: 'Không hiện mức rơi',
  args: { showDrop: false, stages: [{ label: 'Xem trang', value: 12400 }, { label: 'Thêm vào giỏ', value: 3800 }, { label: 'Hoàn tất', value: 1245 }] },
};
export const RoiManh: Story = {
  name: 'Rơi mạnh ở một bước',
  args: { stages: [{ label: 'Nhận email', value: 20000 }, { label: 'Mở email', value: 6200 }, { label: 'Bấm vào liên kết', value: 620 }, { label: 'Đăng ký', value: 410 }] },
};
