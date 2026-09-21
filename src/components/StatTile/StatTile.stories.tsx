import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatTile } from './StatTile';

const meta: Meta<typeof StatTile> = { title: 'Components/StatTile', component: StatTile, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof StatTile>;

export const Tang: Story = { name: 'Tăng — tốt', args: { label: 'Doanh thu tháng 9', value: '1,24 tỷ ₫', delta: { value: '12,4%', direction: 'up' }, caption: 'so với tháng 8' } };
export const GiamTot: Story = { name: 'Giảm — nhưng tốt', args: { label: 'Tỉ lệ rời bỏ', value: '2,1%', delta: { value: '0,6 điểm', direction: 'down', meaning: 'good' }, caption: 'so với tháng 8' } };
export const TangXau: Story = { name: 'Tăng — nhưng xấu', args: { label: 'Thời gian phản hồi', value: '840 ms', delta: { value: '18%', direction: 'up', meaning: 'bad' }, caption: 'so với tuần trước' } };
export const DiNgang: Story = { name: 'Đi ngang', args: { label: 'Số người dùng hoạt động', value: '8.420', delta: { value: '0,2%', direction: 'flat' }, caption: 'so với tuần trước' } };
export const KemSparkline: Story = { name: 'Kèm sparkline', args: { label: 'Đơn hàng', value: '1.245', delta: { value: '8,1%', direction: 'up' }, caption: '7 ngày qua', spark: [12, 18, 15, 22, 19, 28, 31] } };
export const KhongDelta: Story = { name: 'Không có delta', args: { label: 'Tồn kho', value: '312 sản phẩm' } };
export const Luoi: Story = {
  name: 'Hàng KPI',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
      <StatTile label="Doanh thu" value="1,24 tỷ ₫" delta={{ value: '12,4%', direction: 'up' }} caption="so với tháng 8" spark={[8, 12, 10, 16, 14, 19, 24]} />
      <StatTile label="Đơn hàng" value="1.245" delta={{ value: '8,1%', direction: 'up' }} caption="so với tháng 8" spark={[12, 18, 15, 22, 19, 28, 31]} />
      <StatTile label="Giá trị đơn trung bình" value="996.000 ₫" delta={{ value: '3,9%', direction: 'down', meaning: 'bad' }} caption="so với tháng 8" />
      <StatTile label="Tỉ lệ rời bỏ" value="2,1%" delta={{ value: '0,6 điểm', direction: 'down', meaning: 'good' }} caption="so với tháng 8" />
    </div>
  ),
};
