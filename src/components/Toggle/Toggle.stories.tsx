import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';
const meta: Meta<typeof Toggle> = { title: 'Components/Toggle', component: Toggle, tags: ['autodocs'], args: { label: 'Chế độ tối', size: 'md' }, argTypes: { size: { control: 'radio', options: ['sm', 'md'] } } };
export default meta;
type Story = StoryObj<typeof Toggle>;
export const Default: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Small: Story = { args: { size: 'sm' } };
export const Disabled: Story = { args: { disabled: true } };
