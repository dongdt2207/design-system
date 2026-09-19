import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from './Pagination';
const meta: Meta<typeof Pagination> = { title: 'Components/Pagination', component: Pagination, tags: ['autodocs'], decorators: [(S) => <div style={{ width: 560 }}><S /></div>] };
export default meta;
type Story = StoryObj<typeof Pagination>;
function Demo({ pageCount, total }: { pageCount: number; total?: number }) { const [p, setP] = useState(1); return <Pagination page={p} pageCount={pageCount} onChange={setP} total={total} pageSize={20} />; }
export const Short: Story = { render: () => <Demo pageCount={5} total={92} /> };
export const Long: Story = { render: () => <Demo pageCount={24} total={472} /> };
