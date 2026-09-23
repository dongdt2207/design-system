import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './Meter';

const meta: Meta<typeof Meter> = { title: 'Components/Charts/Meter', component: Meter, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Meter>;

export const WithinQuota: Story = { name: 'Within quota', args: { label: 'Storage used', value: 412, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const NearLimit: Story = { name: 'Close to the limit', args: { label: 'Storage used', value: 760, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const OverLimit: Story = { name: 'Over the limit', args: { label: 'Storage used', value: 910, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const Target: Story = { name: 'Over is good (a target)', args: { label: 'Quarterly sales', value: 1240, max: 1500, limit: 1000, overIs: 'good', formatValue: (n) => `$${n}K` } };
export const NoLimit: Story = { name: 'No limit', args: { label: 'Records entered', value: 48, max: 120, formatValue: (n) => `${n} records` } };
