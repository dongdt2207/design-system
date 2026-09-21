import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sparkline } from './Sparkline';

const week = [12, 18, 15, 22, 19, 28, 31];

const meta: Meta<typeof Sparkline> = { title: 'Components/Sparkline', component: Sparkline, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Sparkline>;

export const Duong: Story = { name: 'Đường', args: { data: week, label: 'Đơn hàng 7 ngày qua' } };
export const CoVung: Story = { name: 'Đường có vùng tô', args: { data: week, label: 'Đơn hàng 7 ngày qua', area: true } };
export const Cot: Story = { name: 'Cột', args: { data: week, label: 'Đơn hàng 7 ngày qua', variant: 'bar' } };
export const Xam: Story = { name: 'Tông trung tính', args: { data: week, label: 'Đơn hàng 7 ngày qua', tone: 'neutral' } };
export const DiXuong: Story = { name: 'Xu hướng giảm', args: { data: [31, 28, 19, 22, 15, 18, 12], label: 'Tồn kho 7 ngày qua' } };
export const TrongBang: Story = {
  name: 'Trong ô bảng',
  render: () => (
    <table style={{ borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
      <thead><tr><th style={{ textAlign: 'left', padding: 8 }}>Sản phẩm</th><th style={{ textAlign: 'left', padding: 8 }}>7 ngày</th><th style={{ textAlign: 'right', padding: 8 }}>Tổng</th></tr></thead>
      <tbody>
        {[['Gói Cơ bản', week, 145], ['Gói Team', [8, 9, 14, 12, 20, 24, 26], 113]].map(([name, d, total]) => (
          <tr key={name as string} style={{ borderTop: '1px solid var(--color-border-soft)' }}>
            <td style={{ padding: 8 }}>{name as string}</td>
            <td style={{ padding: 8 }}><Sparkline data={d as number[]} label={`Xu hướng ${name}`} /></td>
            <td style={{ padding: 8, textAlign: 'right' }}>{total as number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
