import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { Heatmap } from './Heatmap';

const hours = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const rows = days.map((d, i) => ({ label: d, values: hours.map((_, h) => Math.round(20 + 60 * Math.sin((h + i) / 2.2) ** 2 + (i > 4 ? -15 : 0))) }));

const meta: Meta<typeof Heatmap> = { title: 'Components/Charts/Heatmap', component: Heatmap, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Heatmap>;

export const ByHour: Story = { name: 'Traffic by hour', args: { columns: hours, rows, unit: ' orders' } };
export const CoONhungTrong: Story = {
  name: 'With missing cells',
  args: { columns: hours, rows: rows.map((r, i) => (i === 2 ? { ...r, values: r.values.map((v, j) => (j < 3 ? null : v)) } : r)), unit: ' orders' },
};
export const SmallGrid: Story = { name: 'Small grid', args: { columns: ['Q1', 'Q2', 'Q3'], rows: [{ label: 'North', values: [12, 40, 66] }, { label: 'South', values: [30, 22, 88] }] } };

/** Narrow: the grid scrolls sideways inside a bounded area, reachable by keyboard (section 3.5). */
export const Narrow: Story = { name: 'Narrow — 390px', args: { columns: hours, rows, unit: ' orders' }, decorators: [frame(390)] };
