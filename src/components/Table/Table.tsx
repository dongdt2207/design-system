import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, type ColumnDef, type SortingState, type RowSelectionState } from '@tanstack/react-table';
import { useState, type ReactNode } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import './Table.css';

export interface TableProps<T> {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  /** Chọn hàng: checkbox ở cột đầu, thanh hành động hàng loạt khi chọn > 0. */
  selectable?: boolean;
  /** Render thanh hành động hàng loạt. */
  bulkActions?: (selected: T[], clear: () => void) => ReactNode;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  /** Nội dung khi rỗng — dùng EmptyState. */
  empty?: ReactNode;
  /** Cột đầu dính khi cuộn ngang. */
  stickyFirst?: boolean;
  getRowId?: (row: T) => string;
}
/** Bảng dữ liệu. Logic sort/chọn từ TanStack Table; markup và style là của hệ. Trên mobile app nên chuyển sang danh sách card. */
export function Table<T>({ columns, data, selectable, bulkActions, size = 'md', loading, empty, stickyFirst, getRowId }: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const cols: ColumnDef<T, unknown>[] = selectable
    ? [{ id: '_select', size: 40, enableSorting: false,
        header: ({ table }) => <Checkbox label="" aria-label="Chọn tất cả" checked={table.getIsAllRowsSelected()} ref={(el) => { if (el) el.indeterminate = table.getIsSomeRowsSelected(); }} onChange={table.getToggleAllRowsSelectedHandler()} />,
        cell: ({ row }) => <Checkbox label="" aria-label="Chọn hàng" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} /> }, ...columns]
    : columns;
  const table = useReactTable({ data, columns: cols, state: { sorting, rowSelection }, onSortingChange: setSorting, onRowSelectionChange: setRowSelection, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel(), enableRowSelection: !!selectable, getRowId });
  const selected = table.getSelectedRowModel().rows.map((r) => r.original);
  return (
    <div className={`eb-table-wrap eb-table--${size}${stickyFirst ? ' eb-table--sticky' : ''}`}>
      {selectable && selected.length > 0 && bulkActions && <div className="eb-table__bulk"><span>Đã chọn {selected.length}</span><div className="eb-table__bulk-actions">{bulkActions(selected, () => setRowSelection({}))}</div></div>}
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
          : table.getRowModel().rows.length === 0 ? <tr><td colSpan={cols.length} className="eb-table__empty">{empty ?? 'Không có dữ liệu'}</td></tr>
          : table.getRowModel().rows.map((row) => <tr key={row.id} data-selected={row.getIsSelected() || undefined}>{row.getVisibleCells().map((cell) => <td key={cell.id} className={(cell.column.columnDef.meta as { align?: string } | undefined)?.align === 'right' ? 'eb-table__td--right' : undefined}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}
