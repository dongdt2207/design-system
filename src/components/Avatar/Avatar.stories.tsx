import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from './Avatar';
const meta: Meta<typeof Avatar> = { title: 'Components/Avatar', component: Avatar, tags: ['autodocs'], args: { name: 'Alex Morgan', size: 'md' }, argTypes: { size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] }, status: { control: 'radio', options: [undefined, 'online', 'offline', 'busy'] } } };
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Initials: Story = {};
export const WithStatus: Story = { args: { status: 'online' } };
export const Sizes: Story = { render: () => <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => <Avatar key={s} name="Priya Raman" size={s} />)}</div>, parameters: { controls: { disable: true } } };
export const Group: Story = { render: () => <AvatarGroup people={[{ name: 'Alex Morgan' }, { name: 'Priya Raman' }, { name: 'Jonas Weber' }, { name: 'Mia Castillo' }, { name: 'Tom Okafor' }, { name: 'Sara Lind' }]} max={4} />, parameters: { controls: { disable: true } } };
