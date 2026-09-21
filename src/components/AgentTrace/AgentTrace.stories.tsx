import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentTrace } from './AgentTrace';

const steps = [
  { id: '1', label: 'Đọc bảng đơn hàng', detail: 'orders.month = 2026-08', status: 'done' as const, meta: '0,8s' },
  { id: '2', label: 'Tính tổng doanh thu', status: 'done' as const, meta: '0,3s' },
  { id: '3', label: 'So sánh với tháng trước', status: 'done' as const, meta: '0,4s' },
];

/** Nhật ký bước chạy của agent, đặt trên câu trả lời. Đóng mặc định: người dùng mở ra khi cần kiểm chứng. Không đặt thông tin bắt buộc ở đây. */
const meta: Meta<typeof AgentTrace> = {
  title: 'Components/AgentTrace', component: AgentTrace, tags: ['autodocs'],
  args: { steps }, argTypes: { steps: { control: false } },
  decorators: [(S) => <div style={{ width: 520 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof AgentTrace>;

export const Collapsed: Story = {};
export const Expanded: Story = { args: { defaultExpanded: true } };

/** Đang chạy: tóm tắt nói bước thứ mấy, biểu tượng bước hiện tại quay. */
export const Running: Story = {
  args: { defaultExpanded: true, steps: [steps[0], { id: '2', label: 'Tính tổng doanh thu', status: 'running' as const }, { id: '3', label: 'So sánh với tháng trước', status: 'done' as const, meta: '—' }].slice(0, 2) },
};

/** Lỗi ở một bước — trạng thái có biểu tượng riêng và `aria-label`, không chỉ phân biệt bằng màu. */
export const HasError: Story = {
  args: { defaultExpanded: true, steps: [steps[0], { id: '2', label: 'Gọi API tỉ giá', detail: 'HTTP 503', status: 'error' as const, meta: '2,1s' }] },
};

/** Nhiều bước, tham số dài — danh sách xuống dòng, không cuộn ngang. */
export const LongRun: Story = {
  args: {
    defaultExpanded: true,
    steps: [
      ...steps,
      { id: '4', label: 'Lọc khách hàng doanh nghiệp', detail: 'customers.segment = "enterprise" AND customers.status = "active" AND orders.total > 5000000', status: 'done' as const, meta: '1,2s' },
      { id: '5', label: 'Dựng biểu đồ cột theo tuần', status: 'done' as const, meta: '0,6s' },
    ],
  },
};
