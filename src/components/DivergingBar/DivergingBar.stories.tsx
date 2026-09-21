import type { Meta, StoryObj } from '@storybook/react-vite';
import { DivergingBar } from './DivergingBar';

const meta: Meta<typeof DivergingBar> = { title: 'Components/DivergingBar', component: DivergingBar, parameters: { layout: 'padded' }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DivergingBar>;

export const SoVoiChiTieu: Story = {
  name: 'Chênh lệch so với chỉ tiêu',
  args: { data: [{ label: 'Hà Nội', value: 240 }, { label: 'TP.HCM', value: 580 }, { label: 'Đà Nẵng', value: -120 }, { label: 'Cần Thơ', value: -310 }], poles: { negative: 'Dưới chỉ tiêu', positive: 'Vượt chỉ tiêu' } },
};
export const TangTruong: Story = {
  name: 'Tăng trưởng theo tháng',
  args: { data: [{ label: 'T6', value: 8 }, { label: 'T7', value: -3 }, { label: 'T8', value: 12 }, { label: 'T9', value: 24 }], formatValue: (n) => `${n}%`, poles: { negative: 'Giảm', positive: 'Tăng' } },
};
export const TatCaAm: Story = { name: 'Tất cả đều âm', args: { data: [{ label: 'Hà Nội', value: -40 }, { label: 'TP.HCM', value: -180 }], poles: { negative: 'Giảm', positive: 'Tăng' } } };
