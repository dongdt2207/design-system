import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
const meta: Meta<typeof Tooltip> = { title: 'Components/Tooltip', component: Tooltip, tags: ['autodocs'], args: { content: 'Save and close (⌘S)', placement: 'top' }, argTypes: { placement: { control: 'radio', options: ['top', 'bottom', 'left', 'right'] }, children: { control: false } } };
export default meta;
type Story = StoryObj<typeof Tooltip>;
export const Default: Story = { render: (a) => <Tooltip {...a}><Button variant="secondary">Hover me</Button></Tooltip> };
export const Placements: Story = { render: () => <div style={{ display: 'flex', gap: 12 }}>{(['top', 'bottom', 'left', 'right'] as const).map((p) => <Tooltip key={p} content={`Vị trí ${p}`} placement={p}><Button variant="secondary" size="sm">{p}</Button></Tooltip>)}</div>, parameters: { controls: { disable: true } } };
