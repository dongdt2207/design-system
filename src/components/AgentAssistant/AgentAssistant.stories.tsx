import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentAssistant, type AgentConversation } from './AgentAssistant';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { AgentTrace } from '../AgentTrace/AgentTrace';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

const conversations: AgentConversation[] = [
  { id: 'rev', title: 'Doanh thu quý 3', meta: '2 giờ trước', group: 'Hôm nay' },
  { id: 'cdn', title: 'Chi phí băng thông tăng', meta: 'Hôm qua', group: '7 ngày trước' },
  { id: 'churn', title: 'Khách rời bỏ theo gói', meta: '17/09/2026', group: '7 ngày trước' },
  { id: 'onboard', title: 'Tỉ lệ hoàn tất onboarding', meta: '12/09/2026', group: 'Trước đó' },
];

const MoreIcon = () => <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="3" cy="8" r="1.4" /><circle cx="8" cy="8" r="1.4" /><circle cx="13" cy="8" r="1.4" /></svg>;

const headerActions = (
  <>
    <Badge tone="neutral">Ebig Agent 2</Badge>
    <Menu placement="bottom end" trigger={<Button variant="ghost" size="sm" iconStart={<MoreIcon />} aria-label="Hành động khác" />} items={[
      { id: 'rename', label: 'Đổi tên' }, { id: 'export', label: 'Xuất bản ghi' }, { type: 'separator' }, { id: 'delete', label: 'Xoá hội thoại', danger: true },
    ]} />
  </>
);

const trace = <AgentTrace steps={[
  { id: '1', label: 'Đọc bảng đơn hàng', detail: 'orders.quarter = 2026Q3', status: 'done', meta: '0,8s' },
  { id: '2', label: 'Tính tổng doanh thu theo tháng', status: 'done', meta: '0,3s' },
  { id: '3', label: 'So sánh với quý trước', status: 'done', meta: '0,4s' },
]} />;

const thread = (
  <>
    <ChatMessage role="user" time="09:11">Doanh thu quý 3 ra sao so với quý 2?</ChatMessage>
    <ChatMessage role="agent" time="09:12" trace={trace} actions={<><Button variant="ghost" size="sm">Sao chép</Button><Button variant="ghost" size="sm">Trả lời lại</Button></>}>
      <p>Doanh thu quý 3 đạt 3.480.000.000 ₫, tăng 9% so với quý 2. Tháng 8 đóng góp nhiều nhất với 1.250.000.000 ₫.</p>
      <p>Mức tăng đến từ nhóm khách hàng doanh nghiệp; nhóm cá nhân đi ngang trong cả ba tháng.</p>
    </ChatMessage>
    <ChatMessage role="user" time="09:14">Tách riêng nhóm doanh nghiệp giúp mình.</ChatMessage>
  </>
);

/**
 * Màn hình trợ lý agent — ghép từ component có sẵn: Drawer, EmptyState, Skeleton, Menu, Badge, Button,
 * cùng ba component mới ChatMessage, AgentTrace, PromptInput.
 *
 * Trạng thái đã xử lý: đang tải, rỗng (kèm gợi ý), lỗi tải, đang trả lời, lỗi một lượt, nội dung dài.
 * Dưới 1024px sidebar ẩn thành drawer mở từ header (mục 3.3).
 */
const meta: Meta<typeof AgentAssistant> = {
  title: 'Patterns/Trợ lý agent', component: AgentAssistant, tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(S) => <div style={{ height: '100vh', minHeight: 640 }}><S /></div>],
  args: { title: 'Doanh thu quý 3', conversations, activeConversation: 'rev', headerActions, status: undefined },
  argTypes: { headerActions: { control: false }, status: { control: false }, conversations: { control: false }, children: { control: false }, state: { control: 'radio', options: ['ready', 'loading', 'empty', 'error'] } },
};
export default meta;
type Story = StoryObj<typeof AgentAssistant>;

export const Ready: Story = { args: { children: thread } };

/** Trợ lý đang trả lời: nhật ký bước chạy đang chạy, con trỏ ở cuối câu, nút Gửi thành Dừng. */
export const Answering: Story = {
  args: {
    busy: true,
    children: (
      <>
        <ChatMessage role="user" time="09:14">Tách riêng nhóm doanh nghiệp giúp mình.</ChatMessage>
        <ChatMessage role="agent" status="streaming" trace={<AgentTrace defaultExpanded steps={[{ id: '1', label: 'Lọc khách hàng doanh nghiệp', detail: 'customers.segment = "enterprise"', status: 'done', meta: '0,9s' }, { id: '2', label: 'Tính doanh thu theo tháng', status: 'running' }]} />}>
          Nhóm doanh nghiệp đóng góp 2.140.000.000 ₫ trong quý 3
        </ChatMessage>
      </>
    ),
  },
};

/** Hội thoại mới: gợi ý câu hỏi thay cho màn hình trắng. */
export const Empty: Story = {
  args: {
    title: 'Hội thoại mới', activeConversation: undefined, state: 'empty',
    suggestions: ['Doanh thu tháng này', 'Khách hàng rời bỏ tuần qua', 'Chi phí hạ tầng theo dịch vụ', 'Tỉ lệ hoàn tất onboarding'],
  },
};

/** Đang tải lịch sử hội thoại — skeleton theo hình dạng tin nhắn thật. */
export const Loading: Story = { args: { state: 'loading' } };

/** Không tải được: nói cách sửa, ô soạn khoá cho tới khi thử lại thành công. */
export const LoadError: Story = { args: { state: 'error' } };

/** Một lượt hỏng giữa hội thoại — các lượt trước vẫn đọc được, lỗi kèm hành động. */
export const TurnError: Story = {
  args: {
    children: (
      <>
        <ChatMessage role="user" time="09:20">Nối thêm số liệu tỉ giá vào báo cáo.</ChatMessage>
        <ChatMessage role="agent" time="09:20" status="error" error="Không gọi được API tỉ giá (HTTP 503). Thử lại, hoặc nhập tỉ giá thủ công." actions={<Button variant="secondary" size="sm">Trả lời lại</Button>}
          trace={<AgentTrace defaultExpanded steps={[{ id: '1', label: 'Đọc bảng doanh thu', status: 'done', meta: '0,5s' }, { id: '2', label: 'Gọi API tỉ giá', detail: 'HTTP 503', status: 'error', meta: '2,1s' }]} />}>
          Mình dừng ở bước lấy tỉ giá.
        </ChatMessage>
      </>
    ),
  },
};

/** Ghi âm câu hỏi: ô soạn đổi thành dải "Đang nghe" có đồng hồ, nút thành Huỷ / Xong. */
export const Voice: Story = {
  args: { children: thread, promptProps: { voice: true, voiceState: 'recording', voiceDuration: 5 } },
};

/** Bản chạy thử: gửi câu hỏi để xem luồng rỗng → đang trả lời → có câu trả lời. */
export const Playground: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => {
    const [items, setItems] = useState<{ id: number; role: 'user' | 'agent'; text: string }[]>([]);
    const [busy, setBusy] = useState(false);
    const [draft, setDraft] = useState('');
    const [voiceState, setVoiceState] = useState<'idle' | 'recording' | 'transcribing' | 'error'>('idle');
    const [secs, setSecs] = useState(0);
    useEffect(() => {
      if (voiceState !== 'recording') return;
      const t = window.setInterval(() => setSecs((s) => s + 1), 1000);
      return () => window.clearInterval(t);
    }, [voiceState]);
    const ask = (text: string) => {
      const id = Date.now();
      setItems((p) => [...p, { id, role: 'user', text }]);
      setDraft('');
      setBusy(true);
      window.setTimeout(() => {
        setItems((p) => [...p, { id: id + 1, role: 'agent', text: 'Đây là câu trả lời mẫu. Dữ liệu thật nối vào qua props của màn hình.' }]);
        setBusy(false);
      }, 1200);
    };
    return (
      <AgentAssistant
        {...args} busy={busy} state={items.length === 0 ? 'empty' : 'ready'}
        suggestions={['Doanh thu tháng này', 'Khách hàng rời bỏ tuần qua']}
        onSuggestion={ask} onSend={ask} onStop={() => setBusy(false)}
        promptProps={{
          voice: true, value: draft, onValueChange: setDraft, voiceState, voiceDuration: secs,
          onVoiceStart: () => { setSecs(0); setVoiceState('recording'); },
          onVoiceCancel: () => setVoiceState('idle'),
          onVoiceStop: () => {
            setVoiceState('transcribing');
            window.setTimeout(() => { setDraft((d) => `${d}${d ? ' ' : ''}Doanh thu tháng 8 thế nào?`); setVoiceState('idle'); }, 1200);
          },
        }}
      >
        {items.map((m) => <ChatMessage key={m.id} role={m.role} time="09:30">{m.text}</ChatMessage>)}
        {busy && <ChatMessage role="agent" status="streaming">Đang tổng hợp</ChatMessage>}
      </AgentAssistant>
    );
  },
};
