import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionCard } from './ActionCard';
import { Button } from '../Button/Button';

const meta: Meta<typeof ActionCard> = { title: 'Components/ActionCard', component: ActionCard, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ActionCard>;

export const MacDinh: Story = {
  name: 'Default',
  args: {
    title: 'Book a site visit',
    description: 'One session at your place to measure up and hear how you live, before anything gets drawn.',
    action: <Button variant="primary">Book a visit</Button>,
    note: 'Free, no deposit',
  },
  render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div>,
};
export const Nhat: Story = {
  name: 'Subtle — inside a dense page',
  args: {
    variant: 'subtle',
    title: 'Import from a spreadsheet',
    description: 'Upload an .xlsx file; the system matches columns and asks before writing anything.',
    action: <Button variant="secondary">Chọn tệp</Button>,
  },
  render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div>,
};
export const NoDescription: Story = { name: 'No description', args: { title: 'Create a report', action: <Button variant="primary">Create report</Button> }, render: (args) => <div style={{ maxWidth: 480 }}><ActionCard {...args} /></div> };
export const Hang: Story = {
  name: 'Two cards side by side',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
      <ActionCard title="Invite a colleague" description="Send an email invitation; they set their own password." action={<Button variant="secondary">Invite</Button>} />
      <ActionCard title="Connect a warehouse" description="Read straight from the warehouse instead of uploading files by hand." action={<Button variant="secondary">Connect</Button>} />
    </div>
  ),
};
