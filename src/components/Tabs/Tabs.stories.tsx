import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
const items = [
  { id: 'overview', label: 'Tổng quan', content: 'Nội dung tổng quan của dự án.' },
  { id: 'members', label: 'Thành viên', content: 'Danh sách 12 thành viên.' },
  { id: 'history', label: 'Lịch sử', content: 'Các thay đổi gần đây.' },
  { id: 'billing', label: 'Thanh toán', content: '', disabled: true },
];
const meta: Meta<typeof Tabs> = { title: 'Components/Tabs', component: Tabs, tags: ['autodocs'], args: { items, defaultSelected: 'overview', variant: 'line' }, argTypes: { variant: { control: 'radio', options: ['line', 'pill'] }, items: { control: false } }, decorators: [(S) => <div style={{ width: 480 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Tabs>;
export const Line: Story = {};
export const Pill: Story = { args: { variant: 'pill' } };
