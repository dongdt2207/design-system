import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = { title: 'Components/BarChart', component: BarChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof BarChart>;

export const MotSeries: Story = {
  name: 'Một series',
  args: { data: [{ label: 'Hà Nội', values: [1240] }, { label: 'TP.HCM', values: [1890] }, { label: 'Đà Nẵng', values: [640] }, { label: 'Cần Thơ', values: [310] }] },
};
export const Nhom: Story = {
  name: 'Nhiều series — nhóm',
  args: {
    series: ['Trực tuyến', 'Tại quầy'],
    data: [{ label: 'Hà Nội', values: [820, 420] }, { label: 'TP.HCM', values: [1190, 700] }, { label: 'Đà Nẵng', values: [400, 240] }],
  },
};
export const ChongLop: Story = {
  name: 'Cộng dồn',
  args: {
    stacked: true,
    series: ['Trực tuyến', 'Tại quầy', 'Đại lý'],
    data: [{ label: 'Hà Nội', values: [820, 420, 180] }, { label: 'TP.HCM', values: [1190, 700, 260] }, { label: 'Đà Nẵng', values: [400, 240, 90] }],
  },
};
export const NhanDai: Story = {
  name: 'Nhãn dài',
  args: { data: [{ label: 'Chi nhánh Hà Nội — Cầu Giấy', values: [1240] }, { label: 'Chi nhánh TP.HCM — Quận 1', values: [1890] }] },
};
export const MotHangDuyNhat: Story = { name: 'Một hạng mục', args: { data: [{ label: 'Tổng', values: [1240] }] } };
