import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './LineChart';

const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'];

const meta: Meta<typeof LineChart> = { title: 'Components/Charts/LineChart', component: LineChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof LineChart>;

export const MotSeries: Story = {
  name: 'One series, with an area fill',
  args: { labels: months, area: true, series: [{ name: 'Doanh thu', values: [620, 680, 720, 700, 810, 860, 940, 1020, 1240] }] },
};
export const BaSeries: Story = {
  name: 'Ba series',
  args: {
    labels: months,
    series: [
      { name: 'Trực tuyến', values: [320, 380, 420, 410, 480, 520, 580, 640, 780] },
      { name: 'In store', values: [220, 230, 240, 220, 250, 260, 280, 300, 330] },
      { name: 'Resellers', values: [80, 70, 60, 70, 80, 80, 80, 80, 130] },
    ],
  },
};
export const KhongTuKhong: Story = {
  name: 'Y-axis not starting at 0',
  args: { labels: months, zeroBased: false, series: [{ name: 'Completion rate (%)', values: [94.2, 94.6, 94.1, 95.0, 95.4, 95.1, 95.8, 96.2, 96.0] }] },
};
export const MotDiem: Story = { name: 'Dữ liệu ngắn', args: { labels: ['T8', 'T9'], series: [{ name: 'Doanh thu', values: [1020, 1240] }] } };
