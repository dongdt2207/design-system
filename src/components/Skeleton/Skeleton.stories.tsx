import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, SkeletonCard } from './Skeleton';
const meta: Meta<typeof Skeleton> = { title: 'Components/Skeleton', component: Skeleton, tags: ['autodocs'], decorators: [(S) => <div style={{ width: 400 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Skeleton>;
export const Lines: Story = { args: { lines: 3 } };
export const Block: Story = { args: { shape: 'block', height: 120 } };
export const Card: Story = { render: () => <SkeletonCard /> };
