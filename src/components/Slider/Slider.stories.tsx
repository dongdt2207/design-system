import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';
const meta: Meta<typeof Slider> = { title: 'Components/Slider', component: Slider, tags: ['autodocs'], args: { label: 'Compression quality', defaultValue: 70, min: 0, max: 100, format: (v: number) => `${v}%` }, decorators: [(S) => <div style={{ width: 320 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Slider>;
export const Default: Story = {};
export const Steps: Story = { args: { label: 'TTL cache', min: 0, max: 24, step: 1, defaultValue: 6, format: (v: number) => `${v} giờ` } };
export const Disabled: Story = { args: { disabled: true } };
