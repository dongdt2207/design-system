import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartFrame } from './ChartFrame';
import { BarChart } from '../BarChart/BarChart';

const data = [
  { label: 'Hà Nội', values: [1240] },
  { label: 'TP.HCM', values: [1890] },
  { label: 'Đà Nẵng', values: [640] },
];

const meta: Meta<typeof ChartFrame> = {
  title: 'Components/Charts/ChartFrame',
  component: ChartFrame,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ChartFrame>;

export const Ready: Story = {
  args: { title: 'Đơn hàng theo chi nhánh', subtitle: 'Tháng 9/2026 · đơn vị: đơn', children: <BarChart data={data} /> },
};
export const CoLegend: Story = {
  name: 'Có legend (2 series trở lên)',
  args: {
    title: 'Đơn hàng theo kênh',
    subtitle: 'Tháng 9/2026',
    legend: [{ name: 'Trực tuyến', color: 'var(--viz-cat-1)' }, { name: 'Tại quầy', color: 'var(--viz-cat-2)' }],
    children: <BarChart series={['Trực tuyến', 'Tại quầy']} stacked data={[{ label: 'Hà Nội', values: [820, 420] }, { label: 'TP.HCM', values: [1190, 700] }]} />,
  },
};
export const DangTai: Story = { name: 'Đang tải', args: { title: 'Đơn hàng theo chi nhánh', state: 'loading' } };
export const Rong: Story = { name: 'Rỗng', args: { title: 'Đơn hàng theo chi nhánh', state: 'empty' } };
export const Loi: Story = { name: 'Lỗi tải', args: { title: 'Đơn hàng theo chi nhánh', state: 'error', onRetry: () => {} } };
