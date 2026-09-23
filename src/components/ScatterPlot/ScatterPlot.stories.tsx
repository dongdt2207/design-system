import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterPlot } from './ScatterPlot';

const meta: Meta<typeof ScatterPlot> = { title: 'Components/Charts/ScatterPlot', component: ScatterPlot, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ScatterPlot>;

const branches = [
  { label: 'Portland', x: 42, y: 1240 }, { label: 'Austin', x: 68, y: 1890 }, { label: 'Boulder', x: 28, y: 640 },
  { label: 'Tucson', x: 16, y: 310 }, { label: 'Reno', x: 24, y: 520 }, { label: 'Fresno', x: 12, y: 280 },
];

export const MotNhom: Story = {
  name: 'Một nhóm',
  args: { xLabel: 'Headcount', yLabel: 'Orders', series: [{ name: 'Branches', points: branches }] },
};
export const BaNhom: Story = {
  name: 'Three series (the ceiling for this form)',
  args: {
    xLabel: 'Headcount', yLabel: 'Orders',
    series: [
      { name: 'Miền Bắc', points: branches.slice(0, 2) },
      { name: 'Miền Trung', points: branches.slice(2, 4) },
      { name: 'Miền Nam', points: branches.slice(4) },
    ],
  },
};

const markets = [
  { label: 'Portland', x: 42, y: 1240, size: 980 },
  { label: 'TP.HCM', x: 68, y: 1890, size: 1640 },
  { label: 'Boulder', x: 28, y: 640, size: 420 },
  { label: 'Tucson', x: 16, y: 310, size: 180 },
  { label: 'Reno', x: 24, y: 520, size: 310 },
  { label: 'Huế', x: 12, y: 280, size: 140 },
];

export const BongBong: Story = {
  name: 'Bubble — three quantities',
  args: {
    xLabel: 'Headcount',
    yLabel: 'Orders',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{ name: 'Branches', points: markets }],
  },
};

export const BongBongNhieuNhom: Story = {
  name: 'Bong bóng — ba nhóm',
  args: {
    xLabel: 'Headcount',
    yLabel: 'Orders',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [
      { name: 'Miền Bắc', points: markets.slice(0, 2) },
      { name: 'Miền Trung', points: markets.slice(2, 4) },
      { name: 'Miền Nam', points: markets.slice(4) },
    ],
  },
};

export const BongBongChenhLech: Story = {
  name: 'Bubble — a wide spread of values',
  args: {
    xLabel: 'Headcount',
    yLabel: 'Orders',
    sizeLabel: 'Doanh thu (triệu ₫)',
    series: [{ name: 'Branches', points: [...markets, { label: 'Downtown', x: 96, y: 2400, size: 9800 }] }],
  },
};

