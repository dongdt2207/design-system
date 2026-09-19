import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';
import { Button } from '../Button/Button';
const items = [
  { id: 'edit', label: 'Chỉnh sửa', shortcut: 'E' },
  { id: 'dup', label: 'Nhân bản', shortcut: '⌘D' },
  { id: 'move', label: 'Chuyển thư mục' },
  { type: 'separator' as const },
  { id: 'archive', label: 'Lưu trữ' },
  { id: 'delete', label: 'Xoá', danger: true },
];
const meta: Meta<typeof Menu> = { title: 'Components/Menu', component: Menu, tags: ['autodocs'], args: { items, placement: 'bottom start' }, argTypes: { items: { control: false }, trigger: { control: false }, placement: { control: 'radio', options: ['bottom start', 'bottom end', 'top start', 'top end'] } } };
export default meta;
type Story = StoryObj<typeof Menu>;
export const Default: Story = { render: (a) => <Menu {...a} trigger={<Button variant="secondary">Hành động</Button>} /> };
export const WithSections: Story = { render: (a) => <Menu {...a} trigger={<Button variant="secondary">Sắp xếp</Button>} items={[{ type: 'section', title: 'Theo thời gian', items: [{ id: 'new', label: 'Mới nhất' }, { id: 'old', label: 'Cũ nhất' }] }, { type: 'section', title: 'Theo tên', items: [{ id: 'az', label: 'A → Z' }, { id: 'za', label: 'Z → A' }] }]} /> };
