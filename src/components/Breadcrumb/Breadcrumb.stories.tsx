import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
const meta: Meta<typeof Breadcrumb> = { title: 'Components/Breadcrumb', component: Breadcrumb, tags: ['autodocs'], args: { items: [{ label: 'Dự án', href: '#' }, { label: 'Alpha', href: '#' }, { label: 'Tài liệu', href: '#' }, { label: 'Kế hoạch Q4' }] } };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;
export const Default: Story = {};
