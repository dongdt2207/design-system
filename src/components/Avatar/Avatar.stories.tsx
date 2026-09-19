import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from './Avatar';
const meta: Meta<typeof Avatar> = { title: 'Components/Avatar', component: Avatar, tags: ['autodocs'], args: { name: 'Nguyễn Văn An', size: 'md' }, argTypes: { size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] }, status: { control: 'radio', options: [undefined, 'online', 'offline', 'busy'] } } };
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Initials: Story = {};
export const WithStatus: Story = { args: { status: 'online' } };
export const Sizes: Story = { render: () => <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => <Avatar key={s} name="Trần Thu Hà" size={s} />)}</div>, parameters: { controls: { disable: true } } };
export const Group: Story = { render: () => <AvatarGroup people={[{ name: 'Nguyễn Văn An' }, { name: 'Trần Thu Hà' }, { name: 'Lê Minh' }, { name: 'Phạm Dũng' }, { name: 'Vũ Hải' }, { name: 'Đỗ Nga' }]} max={4} />, parameters: { controls: { disable: true } } };
