import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectableCard } from './SelectableCard';

const meta: Meta<typeof SelectableCard> = { title: 'Components/SelectableCard', component: SelectableCard, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof SelectableCard>;

export const NhomRadio: Story = {
  name: 'Nhóm radio — chọn một',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard name="goi" value="design" title="Chỉ thiết kế" description="Bạn đã có thầu thi công, chỉ cần bản vẽ." meta="3.400 $ / phòng" defaultChecked />
      <SelectableCard name="goi" value="full" title="Trọn gói" description="Thiết kế và thi công trên một hợp đồng." meta="từ 52.000 $ / căn" />
      <SelectableCard name="goi" value="reno" title="Cải tạo" description="Làm từng phòng, gia chủ vẫn ở lại." meta="báo giá theo hạng mục" />
    </div>
  ),
};
export const NhieuLuaChon: Story = {
  name: 'Checkbox — chọn nhiều',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard type="checkbox" name="them" value="mocs" title="Đồ mộc đặt riêng" description="Tủ bếp, tủ áo, kệ âm tường." defaultChecked />
      <SelectableCard type="checkbox" name="them" value="dien" title="Đi lại điện nước" />
      <SelectableCard type="checkbox" name="them" value="rem" title="Rèm và vải bọc" />
    </div>
  ),
};
export const Khoa: Story = {
  name: 'Bị khoá',
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 420 }}>
      <SelectableCard name="kho" value="a" title="Gói tiêu chuẩn" description="Còn nhận đơn trong tháng này." defaultChecked />
      <SelectableCard name="kho" value="b" title="Gói cao cấp" description="Đã kín lịch tới tháng 12." disabled />
    </div>
  ),
};
export const MotThe: Story = { name: 'Một thẻ đơn lẻ', args: { name: 'don', value: 'x', title: 'Nhận bản tin hàng tháng', description: 'Một email mỗi tháng, huỷ bất cứ lúc nào.', type: 'checkbox' } };
