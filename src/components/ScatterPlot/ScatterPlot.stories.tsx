import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterPlot } from './ScatterPlot';

const meta: Meta<typeof ScatterPlot> = { title: 'Components/Charts/ScatterPlot', component: ScatterPlot, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ScatterPlot>;

const chiNhanh = [
  { label: 'Hà Nội', x: 42, y: 1240 }, { label: 'TP.HCM', x: 68, y: 1890 }, { label: 'Đà Nẵng', x: 28, y: 640 },
  { label: 'Cần Thơ', x: 16, y: 310 }, { label: 'Hải Phòng', x: 24, y: 520 }, { label: 'Huế', x: 12, y: 280 },
];

export const MotNhom: Story = {
  name: 'Một nhóm',
  args: { xLabel: 'Số nhân viên', yLabel: 'Đơn hàng', series: [{ name: 'Chi nhánh', points: chiNhanh }] },
};
export const BaNhom: Story = {
  name: 'Ba nhóm (trần của dạng này)',
  args: {
    xLabel: 'Số nhân viên', yLabel: 'Đơn hàng',
    series: [
      { name: 'Miền Bắc', points: chiNhanh.slice(0, 2) },
      { name: 'Miền Trung', points: chiNhanh.slice(2, 4) },
      { name: 'Miền Nam', points: chiNhanh.slice(4) },
    ],
  },
};

const thiTruong = [
  { label: 'Hà Nội', x: 42, y: 1240, size: 980 },
  { label: 'TP.HCM', x: 68, y: 1890, size: 1640 },
  { label: 'Đà Nẵng', x: 28, y: 640, size: 420 },
  { label: 'Cần Thơ', x: 16, y: 310, size: 180 },
  { label: 'Hải Phòng', x: 24, y: 520, size: 310 },
  { label: 'Huế', x: 12, y: 280, size: 140 },
];

export const BongBong: Story = {
  name: 'Bong bóng (bubble) — ba đại lượng',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{ name: 'Chi nhánh', points: thiTruong }],
  },
};

export const BongBongNhieuNhom: Story = {
  name: 'Bong bóng — ba nhóm',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [
      { name: 'Miền Bắc', points: thiTruong.slice(0, 2) },
      { name: 'Miền Trung', points: thiTruong.slice(2, 4) },
      { name: 'Miền Nam', points: thiTruong.slice(4) },
    ],
  },
};

export const BongBongChenhLech: Story = {
  name: 'Bong bóng — chênh lệch lớn giữa các giá trị',
  args: {
    xLabel: 'Số nhân viên',
    yLabel: 'Đơn hàng',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{ name: 'Chi nhánh', points: [...thiTruong, { label: 'Trung tâm', x: 96, y: 2400, size: 9800 }] }],
  },
};

