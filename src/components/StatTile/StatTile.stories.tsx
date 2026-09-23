import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatTile } from './StatTile';

const meta: Meta<typeof StatTile> = { title: 'Components/Charts/StatTile', component: StatTile, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof StatTile>;

export const Up: Story = { name: 'Up — good', args: { label: 'September revenue', value: '$1.24M', delta: { value: '12.4%', direction: 'up' }, caption: 'vs. August' } };
export const DownButGood: Story = { name: 'Down — but good', args: { label: 'Churn rate', value: '2.1%', delta: { value: '0.6 pt', direction: 'down', meaning: 'good' }, caption: 'vs. August' } };
export const UpButBad: Story = { name: 'Up — but bad', args: { label: 'Response time', value: '840 ms', delta: { value: '18%', direction: 'up', meaning: 'bad' }, caption: 'vs. last week' } };
export const Flat: Story = { name: 'Flat', args: { label: 'Active users', value: '8,420', delta: { value: '0.2%', direction: 'flat' }, caption: 'vs. last week' } };
export const WithSparkline: Story = { name: 'With a sparkline', args: { label: 'Orders', value: '1,245', delta: { value: '8.1%', direction: 'up' }, caption: 'last 7 days', spark: [12, 18, 15, 22, 19, 28, 31] } };
export const NoDelta: Story = { name: 'Without a delta', args: { label: 'Stock on hand', value: '312 items' } };
export const Luoi: Story = {
  name: 'KPI row',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
      <StatTile label="Revenue" value="$1.24M" delta={{ value: '12.4%', direction: 'up' }} caption="vs. August" spark={[8, 12, 10, 16, 14, 19, 24]} />
      <StatTile label="Orders" value="1,245" delta={{ value: '8.1%', direction: 'up' }} caption="vs. August" spark={[12, 18, 15, 22, 19, 28, 31]} />
      <StatTile label="Average order value" value="$996" delta={{ value: '3.9%', direction: 'down', meaning: 'bad' }} caption="vs. August" />
      <StatTile label="Churn rate" value="2.1%" delta={{ value: '0.6 pt', direction: 'down', meaning: 'good' }} caption="vs. August" />
    </div>
  ),
};
