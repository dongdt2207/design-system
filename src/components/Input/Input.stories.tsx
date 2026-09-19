import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
/** Ô nhập một dòng. Luôn có `label` trừ khi ngữ cảnh đã đủ rõ (ô tìm kiếm). */
const meta: Meta<typeof Input> = {
  title: 'Components/Input', component: Input, tags: ['autodocs'],
  args: { label: 'Email', placeholder: 'ban@ebig.co', size: 'md' },
  argTypes: { size: { control: 'radio', options: ['sm', 'md', 'lg'] }, iconStart: { control: false } },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {};
export const WithHint: Story = { args: { hint: 'Dùng email công ty để nhận thông báo.' } };
export const Error: Story = { args: { error: 'Email không đúng định dạng.', defaultValue: 'dong@ebig' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'dong@ebig.co' } };
const SearchIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5 14 14" /></svg>;
export const WithIcon: Story = { args: { label: undefined, placeholder: 'Tìm thành viên', iconStart: <SearchIcon /> } };
export const Sizes: Story = { render: (a) => <div style={{ display: 'grid', gap: 16 }}><Input {...a} size="sm" label="Nhỏ" /><Input {...a} size="md" label="Vừa" /><Input {...a} size="lg" label="Lớn" /></div>, parameters: { controls: { disable: true } } };
