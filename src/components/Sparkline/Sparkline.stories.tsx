import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sparkline } from './Sparkline';

const week = [12, 18, 15, 22, 19, 28, 31];

const meta: Meta<typeof Sparkline> = { title: 'Components/Charts/Sparkline', component: Sparkline, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Sparkline>;

export const Line: Story = { name: 'Line', args: { data: week, label: 'Orders over the last 7 days' } };
export const WithArea: Story = { name: 'Line with an area fill', args: { data: week, label: 'Orders over the last 7 days', area: true } };
export const Bars: Story = { name: 'Bars', args: { data: week, label: 'Orders over the last 7 days', variant: 'bar' } };
export const Neutral: Story = { name: 'Neutral tone', args: { data: week, label: 'Orders over the last 7 days', tone: 'neutral' } };
export const Downward: Story = { name: 'Downward trend', args: { data: [31, 28, 19, 22, 15, 18, 12], label: 'Stock over the last 7 days' } };
export const TrongBang: Story = {
  name: 'Inside a table cell',
  render: () => (
    <table style={{ borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
      <thead><tr><th style={{ textAlign: 'left', padding: 8 }}>Product</th><th style={{ textAlign: 'left', padding: 8 }}>7 days</th><th style={{ textAlign: 'right', padding: 8 }}>Total</th></tr></thead>
      <tbody>
        {[['Basic plan', week, 145], ['Team plan', [8, 9, 14, 12, 20, 24, 26], 113]].map(([name, d, total]) => (
          <tr key={name as string} style={{ borderTop: '1px solid var(--color-border-soft)' }}>
            <td style={{ padding: 8 }}>{name as string}</td>
            <td style={{ padding: 8 }}><Sparkline data={d as number[]} label={`${name} trend`} /></td>
            <td style={{ padding: 8, textAlign: 'right' }}>{total as number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
