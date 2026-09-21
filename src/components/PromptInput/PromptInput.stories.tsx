import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PromptInput } from './PromptInput';
import { Button } from '../Button/Button';

const ClipIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.5 5.5l-4 4a1.5 1.5 0 002 2l4.5-4.5a3 3 0 10-4.2-4.2L4 7.6a4.5 4.5 0 006.4 6.4l3.6-3.6" /></svg>;

/** Ô soạn câu hỏi cho trợ lý. Enter gửi, Shift + Enter xuống dòng; ô cao dần theo nội dung rồi tự cuộn. */
const meta: Meta<typeof PromptInput> = {
  title: 'Components/PromptInput', component: PromptInput, tags: ['autodocs'],
  argTypes: { toolbar: { control: false }, onSend: { action: 'send' }, onStop: { action: 'stop' } },
  decorators: [(S) => <div style={{ width: 560 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof PromptInput>;

/** Rỗng — nút Gửi khoá cho tới khi có nội dung. */
export const Empty: Story = {};
export const HasText: Story = { args: { defaultValue: 'Doanh thu tháng 8 thế nào?' } };

/** Nút phụ bên trái: đính kèm tệp, chọn phạm vi dữ liệu. */
export const WithToolbar: Story = {
  args: { defaultValue: 'Tổng hợp doanh thu theo tuần', toolbar: <><Button variant="ghost" size="sm" iconStart={<ClipIcon />}>Đính kèm</Button><Button variant="ghost" size="sm">Nguồn dữ liệu</Button></> },
};

/** Trợ lý đang trả lời: nút đổi thành Dừng, ô vẫn gõ được để soạn câu tiếp theo. */
export const Busy: Story = { args: { busy: true, defaultValue: '' } };

export const WithCount: Story = { args: { maxLength: 500, defaultValue: 'So sánh doanh thu tháng 8 với cùng kỳ năm ngoái.' } };

/** Lỗi nói cái gì sai và cách sửa. */
export const Error: Story = { args: { defaultValue: '', error: 'Câu hỏi dài quá 500 ký tự. Rút ngắn rồi gửi lại.' } };

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Không gửi được khi mất kết nối.' } };

/** Nội dung dài — ô cao tối đa 8 dòng rồi cuộn trong ô. */
export const LongText: Story = {
  args: { defaultValue: Array.from({ length: 10 }, (_, i) => `Dòng ${i + 1}: mô tả thêm ngữ cảnh cho trợ lý.`).join('\n') },
};

/** Bật `voice` để thêm nút ghi âm bên trái thanh công cụ. */
export const Voice: Story = { args: { voice: true } };

/** Đang ghi: ô gõ nhường chỗ cho dải trạng thái có chấm đỏ và đồng hồ; nút đổi thành Huỷ / Xong. */
export const VoiceRecording: Story = { args: { voice: true, voiceState: 'recording', voiceDuration: 7 } };

/** Đã dừng ghi, đang chuyển lời nói thành chữ. */
export const VoiceTranscribing: Story = { args: { voice: true, voiceState: 'transcribing' } };

/** Không ghi âm được — nói cách sửa, ô gõ vẫn dùng bình thường. */
export const VoiceError: Story = { args: { voice: true, voiceState: 'error' } };

/** Bản chạy thử: bấm micro để ghi, đồng hồ chạy, bấm Xong để nhận bản chữ. */
export const VoiceDemo: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [state, setState] = useState<'idle' | 'recording' | 'transcribing' | 'error'>('idle');
    const [secs, setSecs] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
      if (state !== 'recording') return;
      const t = window.setInterval(() => setSecs((s) => s + 1), 1000);
      return () => window.clearInterval(t);
    }, [state]);
    return (
      <PromptInput
        voice value={text} onValueChange={setText} voiceState={state} voiceDuration={secs}
        onVoiceStart={() => { setSecs(0); setState('recording'); }}
        onVoiceCancel={() => setState('idle')}
        onVoiceStop={() => {
          setState('transcribing');
          window.setTimeout(() => { setText((t) => `${t}${t ? ' ' : ''}Doanh thu tháng 8 thế nào?`); setState('idle'); }, 1200);
        }}
        onSend={() => setText('')}
      />
    );
  },
};
