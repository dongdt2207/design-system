import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterPlot } from './ScatterPlot';

const meta: Meta<typeof ScatterPlot> = { title: 'Components/ScatterPlot', component: ScatterPlot, parameters: { layout: 'padded' }, tags: ['autodocs'] };
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
