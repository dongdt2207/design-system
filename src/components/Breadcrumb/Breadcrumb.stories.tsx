import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
const meta: Meta<typeof Breadcrumb> = { title: 'Components/Breadcrumb', component: Breadcrumb, tags: ['autodocs'], args: { items: [{ label: 'Projects', href: '#' }, { label: 'Alpha', href: '#' }, { label: 'Documents', href: '#' }, { label: 'Q4 plan' }] } };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;
export const Default: Story = {};
