import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heatmap } from './Heatmap';

const gio = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];
const ngay = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const rows = ngay.map((d, i) => ({ label: d, values: gio.map((_, h) => Math.round(20 + 60 * Math.sin((h + i) / 2.2) ** 2 + (i > 4 ? -15 : 0))) }));

const meta: Meta<typeof Heatmap> = { title: 'Components/Heatmap', component: Heatmap, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Heatmap>;

export const TheoGio: Story = { name: 'Lưu lượng theo giờ', args: { columns: gio, rows, unit: ' đơn' } };
export const CoONhungTrong: Story = {
  name: 'Có ô thiếu dữ liệu',
  args: { columns: gio, rows: rows.map((r, i) => (i === 2 ? { ...r, values: r.values.map((v, j) => (j < 3 ? null : v)) } : r)), unit: ' đơn' },
};
export const LuoiNho: Story = { name: 'Lưới nhỏ', args: { columns: ['Q1', 'Q2', 'Q3'], rows: [{ label: 'Bắc', values: [12, 40, 66] }, { label: 'Nam', values: [30, 22, 88] }] } };
