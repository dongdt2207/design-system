import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatMessage } from './ChatMessage';
import { AgentTrace } from '../AgentTrace/AgentTrace';
import { Button } from '../Button/Button';

/** Một lượt trong hội thoại với trợ lý. Người dùng là bong bóng ngắn bên phải; trợ lý là khối chữ rộng bên trái, đọc như văn bản. */
const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage', component: ChatMessage, tags: ['autodocs'],
  args: { role: 'agent', time: '09:12', children: 'Doanh thu tháng 8 đạt 1.250.000.000 ₫, tăng 12% so với tháng 7. Mức tăng đến từ nhóm khách hàng doanh nghiệp.' },
  argTypes: { role: { control: 'radio', options: ['user', 'agent'] }, status: { control: 'radio', options: ['idle', 'sending', 'streaming', 'error'] }, trace: { control: false }, actions: { control: false } },
  decorators: [(S) => <div style={{ width: 640 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof ChatMessage>;

export const Agent: Story = {};
export const User: Story = { args: { role: 'user', children: 'Doanh thu tháng 8 thế nào?' } };

/** Tin của người dùng chưa gửi xong — không khoá giao diện, chỉ ghi chú dưới bong bóng. */
export const Sending: Story = { args: { role: 'user', status: 'sending', children: 'So sánh với cùng kỳ năm ngoái.' } };

/** Trợ lý đang trả lời: con trỏ nhấp nháy ở cuối, vùng nội dung là `aria-live="polite"`. */
export const Streaming: Story = { args: { status: 'streaming', children: 'Đang tổng hợp số liệu từ ba nguồn' } };

/** Lỗi nói cái gì sai và cách sửa, kèm hành động thử lại. */
export const Error: Story = {
  args: { status: 'error', error: 'Không đọc được bảng đơn hàng. Thử lại hoặc chọn nguồn dữ liệu khác.', children: 'Mình dừng ở bước đọc dữ liệu.', actions: <Button variant="secondary" size="sm">Trả lời lại</Button> },
};

/** Hành động trên tin hiện khi hover hoặc khi focus bằng bàn phím. */
export const WithActions: Story = {
  args: { actions: <><Button variant="ghost" size="sm">Sao chép</Button><Button variant="ghost" size="sm">Trả lời lại</Button></> },
};

/** Trợ lý chạy công cụ trước khi trả lời — nhật ký bước đặt trên nội dung, đóng mặc định. */
export const WithTrace: Story = {
  args: {
    trace: <AgentTrace steps={[
      { id: '1', label: 'Đọc bảng đơn hàng', detail: 'orders.month = 2026-08', status: 'done', meta: '0,8s' },
      { id: '2', label: 'Tính tổng doanh thu', status: 'done', meta: '0,3s' },
      { id: '3', label: 'So sánh với tháng trước', status: 'done', meta: '0,4s' },
    ]} />,
  },
};

/** Dữ liệu dài: đoạn văn, danh sách, khối mã đều nằm trong cùng một khối nội dung. */
export const LongContent: Story = {
  args: {
    children: (
      <>
        <p>Có ba nguyên nhân làm chi phí băng thông tăng trong tháng 8:</p>
        <ul>
          <li>Lưu lượng từ khu vực Singapore tăng 41% sau đợt ra mắt.</li>
          <li>Tỉ lệ cache hit giảm từ 94% xuống 81% do đổi quy tắc purge.</li>
          <li>Hai job đồng bộ chạy lặp mỗi giờ thay vì mỗi ngày.</li>
        </ul>
        <p>Đổi lại quy tắc purge là việc đáng làm trước:</p>
        <pre><code>{`cdn purge --rule "static/*" --ttl 86400`}</code></pre>
        <p>Sau khi đổi, chi phí ước tính giảm khoảng 18% ngay trong chu kỳ tính cước kế tiếp.</p>
      </>
    ),
  },
};

/** Một lượt hỏi đáp đầy đủ. */
export const Conversation: Story = {
  render: () => (
    <div>
      <ChatMessage role="user" time="09:11">Doanh thu tháng 8 thế nào?</ChatMessage>
      <ChatMessage
        role="agent" time="09:12"
        trace={<AgentTrace steps={[{ id: '1', label: 'Đọc bảng đơn hàng', detail: 'orders.month = 2026-08', status: 'done', meta: '0,8s' }, { id: '2', label: 'Tính tổng doanh thu', status: 'done', meta: '0,3s' }]} />}
        actions={<Button variant="ghost" size="sm">Sao chép</Button>}
      >
        Doanh thu tháng 8 đạt 1.250.000.000 ₫, tăng 12% so với tháng 7.
      </ChatMessage>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
