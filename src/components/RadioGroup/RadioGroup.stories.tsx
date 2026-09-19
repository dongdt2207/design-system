import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';
const options = [
  { value: 'public', label: 'Công khai', description: 'Ai có link đều xem được.' },
  { value: 'team', label: 'Trong công ty', description: 'Chỉ thành viên Ebig.' },
  { value: 'private', label: 'Riêng tư', description: 'Chỉ bạn và người được mời.' },
];
const meta: Meta<typeof RadioGroup> = { title: 'Components/RadioGroup', component: RadioGroup, tags: ['autodocs'], args: { label: 'Quyền xem', options, defaultValue: 'team' }, argTypes: { options: { control: false }, orientation: { control: 'radio', options: ['vertical', 'horizontal'] } }, decorators: [(S) => <div style={{ width: 360 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof RadioGroup>;
export const Vertical: Story = {};
export const Horizontal: Story = { args: { orientation: 'horizontal', options: [{ value: 'sm', label: 'Nhỏ' }, { value: 'md', label: 'Vừa' }, { value: 'lg', label: 'Lớn' }], defaultValue: 'md', label: 'Cỡ' } };
export const Error: Story = { args: { defaultValue: undefined, error: 'Chọn một quyền xem để tiếp tục.' } };
export const Disabled: Story = { args: { disabled: true } };
