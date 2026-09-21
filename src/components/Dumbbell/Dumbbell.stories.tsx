import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dumbbell } from './Dumbbell';

const meta: Meta<typeof Dumbbell> = { title: 'Components/Dumbbell', component: Dumbbell, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Dumbbell>;

export const TruocSau: Story = {
  name: 'Trước → sau',
  args: {
    labels: { from: 'Tháng 8', to: 'Tháng 9' },
    data: [{ label: 'Hà Nội', from: 980, to: 1240 }, { label: 'TP.HCM', from: 1620, to: 1890 }, { label: 'Đà Nẵng', from: 700, to: 640 }, { label: 'Cần Thơ', from: 280, to: 310 }],
  },
};
export const PhanTram: Story = {
  name: 'Đơn vị phần trăm',
  args: { labels: { from: 'Trước khi đổi', to: 'Sau khi đổi' }, formatValue: (n) => `${n}%`, data: [{ label: 'Tỉ lệ hoàn tất', from: 72, to: 88 }, { label: 'Tỉ lệ bỏ giữa chừng', from: 28, to: 12 }] },
};
