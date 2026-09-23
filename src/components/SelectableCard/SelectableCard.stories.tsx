import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectableCard } from './SelectableCard';

const meta: Meta<typeof SelectableCard> = { title: 'Components/SelectableCard', component: SelectableCard, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof SelectableCard>;

export const NhomRadio: Story = {
  name: 'Nhóm radio — chọn một',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard name="package" value="design" title="Design only" description="You have a builder already and just need drawings." meta="$3,400 per room" defaultChecked />
      <SelectableCard name="package" value="full" title="Full package" description="Design and build under one contract." meta="from $52,000 per home" />
      <SelectableCard name="package" value="reno" title="Renovation" description="Room by room, with the owners still living there." meta="quoted per item" />
    </div>
  ),
};
export const NhieuLuaChon: Story = {
  name: 'Checkbox — chọn nhiều',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard type="checkbox" name="extras" value="joinery" title="Custom joinery" description="Kitchen units, wardrobes, built-in shelving." defaultChecked />
      <SelectableCard type="checkbox" name="extras" value="services" title="Rewiring and plumbing" />
      <SelectableCard type="checkbox" name="extras" value="soft" title="Curtains and upholstery" />
    </div>
  ),
};
export const Khoa: Story = {
  name: 'Disabled option',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard name="availability" value="a" title="Standard package" description="Still taking bookings this month." defaultChecked />
      <SelectableCard name="availability" value="b" title="Premium package" description="Fully booked through December." disabled />
    </div>
  ),
};
export const SingleCard: Story = { name: 'A single card', args: { name: 'newsletter', value: 'x', title: 'Get the monthly newsletter', description: 'One email a month, unsubscribe anytime.', type: 'checkbox' } };
