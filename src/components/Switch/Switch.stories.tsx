import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';
const meta: Meta<typeof Switch> = { title: 'Components/Switch', component: Switch, tags: ['autodocs'], args: { label: 'Thông báo email', size: 'md' }, argTypes: { size: { control: 'radio', options: ['sm', 'md'] } } };
export default meta;
type Story = StoryObj<typeof Switch>;
export const Default: Story = {};
export const On: Story = { args: { defaultSelected: true } };
export const Small: Story = { args: { size: 'sm' } };
export const Disabled: Story = { args: { disabled: true } };
