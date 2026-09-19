import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
const meta: Meta<typeof Textarea> = { title: 'Components/Textarea', component: Textarea, tags: ['autodocs'], args: { label: 'Mô tả', placeholder: 'Mục tiêu và phạm vi của dự án…' }, decorators: [(S) => <div style={{ width: 400 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Textarea>;
export const Default: Story = {};
export const WithCount: Story = { args: { maxLength: 200, showCount: true, defaultValue: 'Nền tảng intranet cho công ty 50–500 người.' } };
export const Error: Story = { args: { error: 'Mô tả cần ít nhất 20 ký tự.', defaultValue: 'Ngắn quá' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Không sửa được.' } };
