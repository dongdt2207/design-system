import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';
import { Button } from '../Button/Button';
const items = [
  { id: 'edit', label: 'Chỉnh sửa', shortcut: 'E' },
  { id: 'dup', label: 'Duplicate', shortcut: '⌘D' },
  { id: 'move', label: 'Move to folder' },
  { type: 'separator' as const },
  { id: 'archive', label: 'Archive' },
  { id: 'delete', label: 'Delete', danger: true },
];
const meta: Meta<typeof Menu> = { title: 'Components/Menu', component: Menu, tags: ['autodocs'], args: { items, placement: 'bottom start' }, argTypes: { items: { control: false }, trigger: { control: false }, placement: { control: 'radio', options: ['bottom start', 'bottom end', 'top start', 'top end'] } } };
export default meta;
type Story = StoryObj<typeof Menu>;
export const Default: Story = { render: (a) => <Menu {...a} trigger={<Button variant="secondary">Actions</Button>} /> };
export const WithSections: Story = { render: (a) => <Menu {...a} trigger={<Button variant="secondary">Sort</Button>} items={[{ type: 'section', title: 'By time', items: [{ id: 'new', label: 'Newest' }, { id: 'old', label: 'Oldest' }] }, { type: 'section', title: 'By name', items: [{ id: 'az', label: 'A → Z' }, { id: 'za', label: 'Z → A' }] }]} /> };
