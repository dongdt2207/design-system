import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = { title: 'Components/Charts/BarChart', component: BarChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof BarChart>;

export const MotSeries: Story = {
  name: 'Một series',
  args: { data: [{ label: 'Portland', values: [1240] }, { label: 'Austin', values: [1890] }, { label: 'Boulder', values: [640] }, { label: 'Tucson', values: [310] }] },
};
export const Nhom: Story = {
  name: 'Nhiều series — nhóm',
  args: {
    series: ['Online', 'In store'],
    data: [{ label: 'Portland', values: [820, 420] }, { label: 'Austin', values: [1190, 700] }, { label: 'Boulder', values: [400, 240] }],
  },
};
export const ChongLop: Story = {
  name: 'Cộng dồn',
  args: {
    stacked: true,
    series: ['Online', 'In store', 'Resellers'],
    data: [{ label: 'Portland', values: [820, 420, 180] }, { label: 'Austin', values: [1190, 700, 260] }, { label: 'Boulder', values: [400, 240, 90] }],
  },
};
export const NhanDai: Story = {
  name: 'Long labels',
  args: { data: [{ label: 'Portland branch — Pearl District', values: [1240] }, { label: 'Austin branch — South Congress', values: [1890] }] },
};
export const SingleCategory: Story = { name: 'One category', args: { data: [{ label: 'Total', values: [1240] }] } };

/** Narrow: category labels move to their own line so bars keep room for comparison (section 3.5). */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: { data: [{ label: 'Portland', values: [1240] }, { label: 'Austin', values: [1890] }, { label: 'Boulder', values: [640] }, { label: 'Tucson', values: [310] }] },
  decorators: [frame(390)],
};
