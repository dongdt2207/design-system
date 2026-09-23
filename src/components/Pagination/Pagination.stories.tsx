import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { useState } from 'react';
import { Pagination } from './Pagination';
const meta: Meta<typeof Pagination> = { title: 'Components/Pagination', component: Pagination, tags: ['autodocs'], decorators: [(S) => <div style={{ width: 560 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Pagination>;
function Demo({ pageCount, total }: { pageCount: number; total?: number }) { const [p, setP] = useState(1); return <Pagination page={p} pageCount={pageCount} onChange={setP} total={total} pageSize={20} />; }
export const Short: Story = { render: () => <Demo pageCount={5} total={92} /> };
export const Long: Story = { render: () => <Demo pageCount={24} total={472} /> };

/** Below 640: the number row collapses to "Page 3 of 24" with previous/next only (section 3.5). */
export const Narrow: Story = { name: 'Narrow — 390px', render: () => <Demo pageCount={24} total={472} />, decorators: [frame(390)] };
