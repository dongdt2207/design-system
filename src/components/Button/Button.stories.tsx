import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

/** The action button. One `primary` per screen. Use the accent sparingly — consider `ink` for large CTAs. `danger` is for irreversible actions. */
const meta: Meta<typeof Button> = {
  title: 'Components/Button', component: Button, tags: ['autodocs'],
  args: { children: 'Save changes', variant: 'primary', size: 'md' },
  argTypes: { variant: { control: 'radio', options: ['primary', 'ink', 'secondary', 'ghost', 'danger'] }, size: { control: 'radio', options: ['sm', 'md', 'lg'] }, iconStart: { control: false }, iconEnd: { control: false } },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
/** Ink background — for large "Download"-style CTAs. */
export const Ink: Story = { args: { variant: 'ink', size: 'lg', children: 'Download for macOS' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Cancel' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Show more' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete account' } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
export const FullWidth: Story = { args: { fullWidth: true }, decorators: [(S) => <div style={{ width: 320 }}><S /></div>] };
const PlusIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M3 8h10" /></svg>;
export const WithIcon: Story = { args: { iconStart: <PlusIcon />, children: 'Add member' } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {(['primary', 'ink', 'secondary', 'ghost', 'danger'] as const).map((v) => <Button key={v} variant={v} size={size}>{v}</Button>)}
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
