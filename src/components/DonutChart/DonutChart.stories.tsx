import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutChart } from './DonutChart';

const meta: Meta<typeof DonutChart> = { title: 'Components/DonutChart', component: DonutChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DonutChart>;

export const MacDinh: Story = {
  name: 'Bốn phần',
  args: { caption: 'đơn hàng', data: [{ label: 'Trực tuyến', value: 2410 }, { label: 'Tại quầy', value: 1360 }, { label: 'Đại lý', value: 530 }, { label: 'Khác', value: 180 }] },
};
export const HaiPhan: Story = { name: 'Hai phần', args: { caption: 'người dùng', data: [{ label: 'Đang hoạt động', value: 8420 }, { label: 'Ngủ đông', value: 1580 }] } };
export const GomKhac: Story = {
  name: 'Năm phần — phần nhỏ gộp thành Khác',
  args: { caption: 'phiên truy cập', data: [{ label: 'Trực tiếp', value: 4200 }, { label: 'Tìm kiếm', value: 3100 }, { label: 'Giới thiệu', value: 1400 }, { label: 'Mạng xã hội', value: 900 }, { label: 'Khác', value: 400 }] },
};
export const MotPhanApDao: Story = { name: 'Một phần áp đảo', args: { caption: 'đơn hàng', data: [{ label: 'Trực tuyến', value: 9200 }, { label: 'Tại quầy', value: 480 }, { label: 'Đại lý', value: 320 }] } };
