import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
/** A short status label. Never a button. At most 2 badges on one object. */
const meta: Meta<typeof Badge> = { title: 'Components/Badge', component: Badge, tags: ['autodocs'], args: { children: 'Active', tone: 'success' }, argTypes: { tone: { control: 'radio', options: ['neutral', 'brand', 'success', 'warning', 'danger'] } } };
export default meta;
type Story = StoryObj<typeof Badge>;
export const Default: Story = {};
export const WithDot: Story = { args: { dot: true } };
export const AllTones: Story = { render: () => <div style={{ display: 'flex', gap: 8 }}><Badge tone="neutral">Draft</Badge><Badge tone="brand">New</Badge><Badge tone="success" dot>Active</Badge><Badge tone="warning" dot>Pending</Badge><Badge tone="danger" dot>Locked</Badge></div>, parameters: { controls: { disable: true } } };
