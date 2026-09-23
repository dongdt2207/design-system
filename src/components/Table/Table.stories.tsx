import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import type { ColumnDef } from '@tanstack/react-table';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { EmptyState } from '../EmptyState/EmptyState';
type Member = { id: string; name: string; email: string; role: string; status: 'active' | 'pending' | 'locked'; tasks: number; joined: string };
const data: Member[] = [
  { id: '1', name: 'Alex Morgan', email: 'alex@ebig.co', role: 'Administrator', status: 'active', tasks: 12, joined: 'Jan 3, 2026' },
  { id: '2', name: 'Priya Raman', email: 'priya@ebig.co', role: 'Editor', status: 'active', tasks: 27, joined: 'Feb 14, 2026' },
  { id: '3', name: 'Jonas Weber', email: 'jonas@ebig.co', role: 'Viewer', status: 'pending', tasks: 0, joined: 'Sep 2, 2026' },
  { id: '4', name: 'Mia Castillo', email: 'mia@ebig.co', role: 'Editor', status: 'locked', tasks: 4, joined: 'May 21, 2026' },
  { id: '5', name: 'Tom Okafor', email: 'tom@ebig.co', role: 'Editor', status: 'active', tasks: 9, joined: 'Jun 30, 2026' },
];
const tone = { active: 'success', pending: 'warning', locked: 'danger' } as const;
const labels = { active: 'Active', pending: 'Pending', locked: 'Locked' };
const columns: ColumnDef<Member, unknown>[] = [
  { accessorKey: 'name', header: 'Member', cell: ({ row }) => <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Avatar name={row.original.name} size="sm" /><div><div style={{ fontWeight: 500 }}>{row.original.name}</div><div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{row.original.email}</div></div></div> },
  { accessorKey: 'role', header: 'Vai trò' },
  { accessorKey: 'status', header: 'Status', cell: ({ getValue }) => { const s = getValue() as Member['status']; return <Badge tone={tone[s]} dot>{labels[s]}</Badge>; } },
  { accessorKey: 'tasks', header: 'Việc', meta: { align: 'right' } },
  { accessorKey: 'joined', header: 'Tham gia', enableSorting: false },
  { id: 'actions', header: '', size: 48, enableSorting: false, cell: () => <Menu placement="bottom end" trigger={<Button variant="ghost" size="sm" aria-label="Actions">⋯</Button>} items={[{ id: 'edit', label: 'Edit' }, { id: 'role', label: 'Change role' }, { type: 'separator' }, { id: 'remove', label: 'Remove from project', danger: true }]} /> },
];
const meta: Meta<typeof Table<Member>> = { title: 'Components/Table', component: Table, tags: ['autodocs'], parameters: { layout: 'padded' }, args: { columns, data, size: 'md' }, argTypes: { columns: { control: false }, data: { control: false }, size: { control: 'radio', options: ['sm', 'md', 'lg'] } } };
export default meta;
type Story = StoryObj<typeof Table<Member>>;
export const Default: Story = {};
export const Selectable: Story = { args: { selectable: true, getRowId: (r) => r.id, bulkActions: (sel, clear) => <><Button size="sm" variant="secondary" onClick={clear}>Clear selection</Button><Button size="sm" variant="danger">Remove {sel.length} people</Button></> } };
export const Loading: Story = { args: { loading: true } };
export const Empty: Story = { args: { data: [], empty: <EmptyState size="compact" title="No members yet" description="Invite a colleague to get started." action={<Button size="sm">Invite member</Button>} /> } };

/** Below 640 the table becomes a card list: no header row, and each cell carries its column label (sections 9.6 and 3.5). */
export const Narrow: Story = { name: 'Narrow — 390px', decorators: [frame(390)], parameters: { controls: { disable: true } } };
/** 820px: still a table, scrolling sideways inside a bounded frame — the scroll area is reachable with Tab. */
export const Medium: Story = { name: 'Medium — 820px', decorators: [frame(820)], parameters: { controls: { disable: true } } };
