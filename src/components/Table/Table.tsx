import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, type ColumnDef, type SortingState, type RowSelectionState } from '@tanstack/react-table';
import { useState, type ReactNode } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import './Table.css';

export interface TableProps<T> {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  /** Row selection: a checkbox in the first column, and a bulk-action bar once more than zero are selected. */
  selectable?: boolean;
  /** Renders the bulk-action bar. */
  bulkActions?: (selected: T[], clear: () => void) => ReactNode;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  /** Nội dung khi rỗng — dùng EmptyState. */
  empty?: ReactNode;
  /** The first column sticks during horizontal scroll. */
  stickyFirst?: boolean;
  /** Name of the table region, for screen readers and for the horizontal scroll area. */
  label?: string;
  getRowId?: (row: T) => string;
}
/** Data table. Sorting and selection come from TanStack Table; markup and styling are ours.
 * Below 640 (container width) it becomes a card list per section 9.6; the horizontal scroll area carries `tabindex` so it scrolls by keyboard. */
export function Table<T>({ columns, data, selectable, bulkActions, size = 'md', loading, empty, stickyFirst, label = 'Data table', getRowId }: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const cols: ColumnDef<T, unknown>[] = selectable
    ? [{ id: '_select', size: 40, enableSorting: false,
        header: ({ table }) => <Checkbox label="" aria-label="Select all rows" checked={table.getIsAllRowsSelected()} ref={(el) => { if (el) el.indeterminate = table.getIsSomeRowsSelected(); }} onChange={table.getToggleAllRowsSelectedHandler()} />,
        cell: ({ row }) => <Checkbox label="" aria-label="Select row" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} /> }, ...columns]
    : columns;
  const table = useReactTable({ data, columns: cols, state: { sorting, rowSelection }, onSortingChange: setSorting, onRowSelectionChange: setRowSelection, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel(), enableRowSelection: !!selectable, getRowId });
  const selected = table.getSelectedRowModel().rows.map((r) => r.original);
  return (
    <div className={`eb-table-wrap eb-table--${size}${stickyFirst ? ' eb-table--sticky' : ''}`} role="region" aria-label={label} tabIndex={0}>
      {selectable && selected.length > 0 && bulkActions && <div className="eb-table__bulk"><span>{selected.length} selected</span><div className="eb-table__bulk-actions">{bulkActions(selected, () => setRowSelection({}))}</div></div>}
      <table className="eb-table">
        <thead>
          {table.getHeaderGroups().map((hg) => <tr key={hg.id}>{hg.headers.map((h) => {
            const sortable = h.column.getCanSort(); const dir = h.column.getIsSorted();
            return <th key={h.id} style={{ width: h.getSize() !== 150 ? h.getSize() : undefined }} className={(h.column.columnDef.meta as { align?: string } | undefined)?.align === 'right' ? 'eb-table__th--right' : undefined} aria-sort={dir === 'asc' ? 'ascending' : dir === 'desc' ? 'descending' : undefined}>
              {sortable ? <button className="eb-table__sort" onClick={h.column.getToggleSortingHandler()}>{flexRender(h.column.columnDef.header, h.getContext())}<span className={`eb-table__sort-icon${dir ? ' eb-table__sort-icon--on' : ''}`} aria-hidden="true">{dir === 'desc' ? '↓' : '↑'}</span></button> : flexRender(h.column.columnDef.header, h.getContext())}
            </th>; })}</tr>)}
        </thead>
        <tbody>
          {loading ? Array.from({ length: 5 }).map((_, i) => <tr key={i} className="eb-table__skel">{cols.map((_, j) => <td key={j}><span className="eb-skel eb-skel--text" style={{ width: `${40 + ((i * 7 + j * 13) % 45)}%` }} /></td>)}</tr>)
          : table.getRowModel().rows.length === 0 ? <tr><td colSpan={cols.length} className="eb-table__empty">{empty ?? 'No data'}</td></tr>
          : table.getRowModel().rows.map((row) => <tr key={row.id} data-selected={row.getIsSelected() || undefined}>{row.getVisibleCells().map((cell) => <td key={cell.id} data-label={typeof cell.column.columnDef.header === 'string' ? cell.column.columnDef.header : undefined} className={(cell.column.columnDef.meta as { align?: string } | undefined)?.align === 'right' ? 'eb-table__td--right' : undefined}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}
