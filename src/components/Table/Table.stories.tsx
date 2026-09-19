import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { EmptyState } from '../EmptyState/EmptyState';
type Member = { id: string; name: string; email: string; role: string; status: 'active' | 'pending' | 'locked'; tasks: number; joined: string };
const data: Member[] = [
  { id: '1', name: 'Nguyễn Văn An', email: 'an@ebig.co', role: 'Quản trị viên', status: 'active', tasks: 12, joined: '03/01/2026' },
  { id: '2', name: 'Trần Thu Hà', email: 'ha@ebig.co', role: 'Biên tập', status: 'active', tasks: 27, joined: '14/02/2026' },
  { id: '3', name: 'Lê Minh', email: 'minh@ebig.co', role: 'Chỉ xem', status: 'pending', tasks: 0, joined: '02/09/2026' },
  { id: '4', name: 'Phạm Dũng', email: 'dung@ebig.co', role: 'Biên tập', status: 'locked', tasks: 4, joined: '21/05/2026' },
  { id: '5', name: 'Vũ Đức Hải', email: 'hai@ebig.co', role: 'Biên tập', status: 'active', tasks: 9, joined: '30/06/2026' },
];
const tone = { active: 'success', pending: 'warning', locked: 'danger' } as const;
const labels = { active: 'Đang hoạt động', pending: 'Chờ duyệt', locked: 'Bị khoá' };
const columns: ColumnDef<Member, unknown>[] = [
  { accessorKey: 'name', header: 'Thành viên', cell: ({ row }) => <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Avatar name={row.original.name} size="sm" /><div><div style={{ fontWeight: 500 }}>{row.original.name}</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{row.original.email}</div></div></div> },
  { accessorKey: 'role', header: 'Vai trò' },
  { accessorKey: 'status', header: 'Trạng thái', cell: ({ getValue }) => { const s = getValue() as Member['status']; return <Badge tone={tone[s]} dot>{labels[s]}</Badge>; } },
  { accessorKey: 'tasks', header: 'Việc', meta: { align: 'right' } },
  { accessorKey: 'joined', header: 'Tham gia', enableSorting: false },
  { id: 'actions', header: '', size: 48, enableSorting: false, cell: () => <Menu placement="bottom end" trigger={<Button variant="ghost" size="sm" aria-label="Hành động">⋯</Button>} items={[{ id: 'edit', label: 'Chỉnh sửa' }, { id: 'role', label: 'Đổi vai trò' }, { type: 'separator' }, { id: 'remove', label: 'Gỡ khỏi dự án', danger: true }]} /> },
];
const meta: Meta<typeof Table<Member>> = { title: 'Components/Table', component: Table, tags: ['autodocs'], parameters: { layout: 'padded' }, args: { columns, data, size: 'md' }, argTypes: { columns: { control: false }, data: { control: false }, size: { control: 'radio', options: ['sm', 'md', 'lg'] } } };
export default meta;
type Story = StoryObj<typeof Table<Member>>;
export const Default: Story = {};
export const Selectable: Story = { args: { selectable: true, getRowId: (r) => r.id, bulkActions: (sel, clear) => <><Button size="sm" variant="secondary" onClick={clear}>Bỏ chọn</Button><Button size="sm" variant="danger">Gỡ {sel.length} người</Button></> } };
export const Loading: Story = { args: { loading: true } };
export const Empty: Story = { args: { data: [], empty: <EmptyState size="compact" title="Chưa có thành viên nào" description="Mời đồng nghiệp để bắt đầu." action={<Button size="sm">Mời thành viên</Button>} /> } };
