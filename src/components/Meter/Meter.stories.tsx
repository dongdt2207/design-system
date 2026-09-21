import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './Meter';

const meta: Meta<typeof Meter> = { title: 'Components/Meter', component: Meter, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Meter>;

export const HanMuc: Story = { name: 'Trong hạn mức', args: { label: 'Dung lượng đã dùng', value: 412, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const SapCham: Story = { name: 'Sắp chạm mốc', args: { label: 'Dung lượng đã dùng', value: 760, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const VuotMoc: Story = { name: 'Đã vượt mốc', args: { label: 'Dung lượng đã dùng', value: 910, max: 1000, limit: 800, formatValue: (n) => `${n} GB` } };
export const ChiTieu: Story = { name: 'Vượt mốc là tốt (chỉ tiêu)', args: { label: 'Doanh số quý', value: 1240, max: 1500, limit: 1000, overIs: 'good', formatValue: (n) => `${n} triệu` } };
export const KhongMoc: Story = { name: 'Không có mốc', args: { label: 'Tiến độ nhập liệu', value: 48, max: 120, formatValue: (n) => `${n} hồ sơ` } };
