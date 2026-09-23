import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { Dumbbell } from './Dumbbell';

const meta: Meta<typeof Dumbbell> = { title: 'Components/Charts/Dumbbell', component: Dumbbell, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Dumbbell>;

export const TruocSau: Story = {
  name: 'Before → after',
  args: {
    labels: { from: 'August', to: 'September' },
    data: [{ label: 'Portland', from: 980, to: 1240 }, { label: 'Austin', from: 1620, to: 1890 }, { label: 'Boulder', from: 700, to: 640 }, { label: 'Tucson', from: 280, to: 310 }],
  },
};
export const PhanTram: Story = {
  name: 'Percentage units',
  args: { labels: { from: 'Before the change', to: 'After the change' }, formatValue: (n) => `${n}%`, data: [{ label: 'Completion rate', from: 72, to: 88 }, { label: 'Drop-off rate', from: 28, to: 12 }] },
};

/** Narrow: row labels move to their own line, and the two dots keep room to separate. */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: { labels: { from: 'August', to: 'September' }, data: [{ label: 'Portland', from: 980, to: 1240 }, { label: 'Austin', from: 1620, to: 1890 }, { label: 'Boulder', from: 700, to: 640 }] },
  decorators: [frame(390)],
};
