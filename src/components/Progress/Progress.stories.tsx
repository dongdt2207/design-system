import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';
const meta: Meta<typeof Progress> = { title: 'Components/Progress', component: Progress, tags: ['autodocs'], args: { value: 64, label: 'Đang tải lên', showValue: true }, decorators: [(S) => <div style={{ width: 320 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Progress>;
export const Default: Story = {};
export const Indeterminate: Story = { args: { value: undefined, label: 'Đang xử lý', showValue: false } };
export const Small: Story = { args: { size: 'sm', label: undefined, showValue: false } };
