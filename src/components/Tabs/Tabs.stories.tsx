import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { Tabs } from './Tabs';
const items = [
  { id: 'overview', label: 'Overview', content: 'Overview of the project.' },
  { id: 'members', label: 'Members', content: 'A list of 12 members.' },
  { id: 'history', label: 'History', content: 'Recent changes.' },
  { id: 'billing', label: 'Billing', content: '', disabled: true },
];
const meta: Meta<typeof Tabs> = { title: 'Components/Tabs', component: Tabs, tags: ['autodocs'], args: { items, defaultSelected: 'overview', variant: 'line' }, argTypes: { variant: { control: 'radio', options: ['line', 'pill'] }, items: { control: false } }, decorators: [(S) => <div style={{ width: 480 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Tabs>;
export const Line: Story = {};
export const Pill: Story = { args: { variant: 'pill' } };

/** More tabs than width: the tab list scrolls sideways, and tabs stay keyboard reachable. */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  args: { items: [...items, { id: 'files', label: 'Documents', content: 'Project documents.' }, { id: 'logs', label: 'Logs', content: 'System logs.' }] },
  decorators: [frame(390)], parameters: { controls: { disable: true } },
};
