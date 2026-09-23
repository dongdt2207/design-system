import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
const meta: Meta<typeof Textarea> = { title: 'Components/Textarea', component: Textarea, tags: ['autodocs'], args: { label: 'Description', placeholder: 'Goals and scope of the project…' }, decorators: [(S) => <div style={{ width: 400 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Textarea>;
export const Default: Story = {};
export const WithCount: Story = { args: { maxLength: 200, showCount: true, defaultValue: 'An intranet platform for companies of 50–500 people.' } };
export const Error: Story = { args: { error: 'The description needs at least 20 characters.', defaultValue: 'Too short' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Read-only.' } };
