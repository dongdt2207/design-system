import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { DivergingBar } from './DivergingBar';

const meta: Meta<typeof DivergingBar> = { title: 'Components/Charts/DivergingBar', component: DivergingBar, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DivergingBar>;

export const SoVoiChiTieu: Story = {
  name: 'Variance against target',
  args: { data: [{ label: 'Portland', value: 240 }, { label: 'Austin', value: 580 }, { label: 'Boulder', value: -120 }, { label: 'Tucson', value: -310 }], poles: { negative: 'Below target', positive: 'Above target' } },
};
export const TangTruong: Story = {
  name: 'Growth by month',
  args: { data: [{ label: 'Jun', value: 8 }, { label: 'Jul', value: -3 }, { label: 'Aug', value: 12 }, { label: 'Sep', value: 24 }], formatValue: (n) => `${n}%`, poles: { negative: 'Down', positive: 'Up' } },
};
export const AllNegative: Story = { name: 'All negative', args: { data: [{ label: 'Portland', value: -40 }, { label: 'Austin', value: -180 }], poles: { negative: 'Down', positive: 'Up' } } };

/** Narrow: row labels move to their own line and the zero axis stays put. */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: { data: [{ label: 'Portland', value: 240 }, { label: 'Austin', value: 580 }, { label: 'Boulder', value: -120 }, { label: 'Tucson', value: -310 }], poles: { negative: 'Below target', positive: 'Above target' } },
  decorators: [frame(390)],
};
