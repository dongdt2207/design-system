import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { FunnelChart } from './FunnelChart';

const meta: Meta<typeof FunnelChart> = { title: 'Components/Charts/FunnelChart', component: FunnelChart, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof FunnelChart>;

export const MacDinh: Story = {
  name: 'Four steps',
  args: { stages: [{ label: 'Viewed the page', value: 12400 }, { label: 'Added to cart', value: 3800 }, { label: 'Started checkout', value: 1900 }, { label: 'Completed', value: 1245 }] },
};
export const KhongHienRoi: Story = {
  name: 'Without the drop figure',
  args: { showDrop: false, stages: [{ label: 'Viewed the page', value: 12400 }, { label: 'Added to cart', value: 3800 }, { label: 'Completed', value: 1245 }] },
};
export const RoiManh: Story = {
  name: 'A sharp drop at one step',
  args: { stages: [{ label: 'Received the email', value: 20000 }, { label: 'Opened it', value: 6200 }, { label: 'Clicked the link', value: 620 }, { label: 'Signed up', value: 410 }] },
};

/** Narrow: step labels move to their own line. */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: { stages: [{ label: 'Viewed the page', value: 12400 }, { label: 'Added to cart', value: 3800 }, { label: 'Started checkout', value: 1900 }, { label: 'Completed', value: 1245 }] },
  decorators: [frame(390)],
};
