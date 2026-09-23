import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutChart } from './DonutChart';

const meta: Meta<typeof DonutChart> = { title: 'Components/Charts/DonutChart', component: DonutChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DonutChart>;

export const MacDinh: Story = {
  name: 'Bốn phần',
  args: { caption: 'orders', data: [{ label: 'Online', value: 2410 }, { label: 'In store', value: 1360 }, { label: 'Resellers', value: 530 }, { label: 'Other', value: 180 }] },
};
export const TwoSlices: Story = { name: 'Two slices', args: { caption: 'users', data: [{ label: 'Active', value: 8420 }, { label: 'Dormant', value: 1580 }] } };
export const GomKhac: Story = {
  name: 'Five slices — small ones grouped into Other',
  args: { caption: 'sessions', data: [{ label: 'Direct', value: 4200 }, { label: 'Search', value: 3100 }, { label: 'Referral', value: 1400 }, { label: 'Social', value: 900 }, { label: 'Other', value: 400 }] },
};
export const OneDominant: Story = { name: 'One dominant slice', args: { caption: 'orders', data: [{ label: 'Online', value: 9200 }, { label: 'In store', value: 480 }, { label: 'Resellers', value: 320 }] } };
