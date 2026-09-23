import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartFrame } from './ChartFrame';
import { BarChart } from '../BarChart/BarChart';

const data = [
  { label: 'Portland', values: [1240] },
  { label: 'TP.HCM', values: [1890] },
  { label: 'Boulder', values: [640] },
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
  args: { title: 'Orders by branch', subtitle: 'September 2026 · unit: orders', children: <BarChart data={data} /> },
};
export const CoLegend: Story = {
  name: 'With a legend (2+ series)',
  args: {
    title: 'Orders by channel',
    subtitle: 'September 2026',
    legend: [{ name: 'Online', color: 'var(--viz-cat-1)' }, { name: 'In store', color: 'var(--viz-cat-2)' }],
    children: <BarChart series={['Online', 'In store']} stacked data={[{ label: 'Portland', values: [820, 420] }, { label: 'Austin', values: [1190, 700] }]} />,
  },
};
export const Loading: Story = { name: 'Loading', args: { title: 'Orders by branch', state: 'loading' } };
export const Empty: Story = { name: 'Empty', args: { title: 'Orders by branch', state: 'empty' } };
export const LoadError: Story = { name: 'Load error', args: { title: 'Orders by branch', state: 'error', onRetry: () => {} } };
