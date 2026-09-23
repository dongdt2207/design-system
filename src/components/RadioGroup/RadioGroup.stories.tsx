import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';
const options = [
  { value: 'public', label: 'Public', description: 'Anyone with the link can view it.' },
  { value: 'team', label: 'Company only', description: 'Ebig members only.' },
  { value: 'private', label: 'Private', description: 'You and the people you invite.' },
];
const meta: Meta<typeof RadioGroup> = { title: 'Components/RadioGroup', component: RadioGroup, tags: ['autodocs'], args: { label: 'Visibility', options, defaultValue: 'team' }, argTypes: { options: { control: false }, orientation: { control: 'radio', options: ['vertical', 'horizontal'] } }, decorators: [(S) => <div style={{ width: 360 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof RadioGroup>;
export const Vertical: Story = {};
export const Horizontal: Story = { args: { orientation: 'horizontal', options: [{ value: 'sm', label: 'Nhỏ' }, { value: 'md', label: 'Vừa' }, { value: 'lg', label: 'Lớn' }], defaultValue: 'md', label: 'Cỡ' } };
export const Error: Story = { args: { defaultValue: undefined, error: 'Pick a visibility level to continue.' } };
export const Disabled: Story = { args: { disabled: true } };
