import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button/Button';
import './PromptInput.css';

export interface PromptInputProps {
  /** Nhãn cho trình đọc màn hình. Mặc định "Câu hỏi cho trợ lý". */
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Gọi khi bấm Gửi hoặc nhấn Enter. Nhận nội dung đã cắt khoảng trắng. */
  onSend?: (value: string) => void;
  /** Trợ lý đang trả lời — nút Gửi đổi thành Dừng. */
  busy?: boolean;
  onStop?: () => void;
  disabled?: boolean;
  maxLength?: number;
  /** Điều cần biết trước khi gõ. Mặc định nói phím tắt. */
  hint?: string;
  /** Cái gì sai + cách sửa. */
  error?: string;
  /** Nút phụ bên trái: chọn mô hình, đính kèm tệp. Dùng Button ghost/secondary size sm. */
  toolbar?: ReactNode;
  /** Số dòng tối đa trước khi ô tự cuộn. */
  maxRows?: number;
  /** Hiện nút ghi âm. Việc thu âm và chuyển thành chữ do bên gọi làm. */
  voice?: boolean;
  /** Trạng thái ghi âm — bên gọi điều khiển. */
  voiceState?: 'idle' | 'recording' | 'transcribing' | 'error';
  /** Số giây đã ghi, hiện dạng 0:07. */
  voiceDuration?: number;
  /** Cái gì sai + cách sửa khi không ghi âm được. */
  voiceError?: string;
  onVoiceStart?: () => void;
  /** Kết thúc ghi và chuyển thành chữ. */
  onVoiceStop?: () => void;
  /** Bỏ bản ghi, không chuyển thành chữ. */
  onVoiceCancel?: () => void;
}

const SendIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V3M4 7l4-4 4 4" /></svg>;
const StopIcon = () => <svg viewBox="0 0 16 16" fill="currentColor"><rect x="4.5" y="4.5" width="7" height="7" rx="1" /></svg>;
const MicIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="4" height="7" rx="2" /><path d="M3.5 7.5a4.5 4.5 0 009 0M8 12v2" /></svg>;

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/** Ô soạn câu hỏi gửi cho trợ lý. Enter gửi, Shift + Enter xuống dòng, ô cao dần theo nội dung tới `maxRows`. Bật `voice` để thêm ghi âm. */
export function PromptInput({
  label = 'Câu hỏi cho trợ lý', placeholder = 'Hỏi trợ lý một việc…', value, defaultValue = '', onValueChange, onSend,
  busy = false, onStop, disabled = false, maxLength, hint = 'Enter để gửi, Shift + Enter để xuống dòng.', error, toolbar, maxRows = 8,
  voice = false, voiceState = 'idle', voiceDuration = 0, voiceError, onVoiceStart, onVoiceStop, onVoiceCancel,
}: PromptInputProps) {
  const id = useId(); const descId = `${id}-desc`;
  const ref = useRef<HTMLTextAreaElement>(null);
  const [inner, setInner] = useState(defaultValue);
  const text = value ?? inner;
  const canSend = text.trim().length > 0 && !disabled;

  const recording = voice && voiceState === 'recording';
  const transcribing = voice && voiceState === 'transcribing';
  const listening = recording || transcribing;
  const shownError = voice && voiceState === 'error' ? voiceError ?? 'Không ghi âm được. Cấp quyền micro cho trình duyệt rồi thử lại.' : error;
  const shownHint = recording ? 'Nói xong bấm Xong, hoặc Huỷ để bỏ bản ghi.' : transcribing ? 'Đang chuyển lời nói thành chữ.' : hint;

  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.height = 'auto';
    const line = parseFloat(getComputedStyle(el).lineHeight) || 24;
    const pad = el.offsetHeight - el.clientHeight + parseFloat(getComputedStyle(el).paddingTop) + parseFloat(getComputedStyle(el).paddingBottom);
    el.style.height = `${Math.min(el.scrollHeight, line * maxRows + pad)}px`;
  }, [text, maxRows, listening]);

  const change = (v: string) => { if (value === undefined) setInner(v); onValueChange?.(v); };
  const send = () => {
    if (!canSend || busy) return;
    onSend?.(text.trim());
    if (value === undefined) setInner('');
  };
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey || e.nativeEvent.isComposing) return;
    e.preventDefault(); send();
  };

  return (
    <div className={`eb-prompt${shownError ? ' eb-prompt--error' : ''}${disabled ? ' eb-prompt--disabled' : ''}${listening ? ' eb-prompt--listening' : ''}`}>
      <label className="eb-prompt__label" htmlFor={id}>{label}</label>
      <div className="eb-prompt__box">
        {listening ? (
          <p className="eb-prompt__voice" aria-live="polite">
            <span className={`eb-prompt__rec${transcribing ? ' eb-prompt__rec--off' : ''}`} aria-hidden="true" />
            <span className="eb-prompt__voice-label">{recording ? 'Đang nghe' : 'Đang chuyển thành chữ'}</span>
            {recording && <span className="eb-prompt__voice-time">{clock(voiceDuration)}</span>}
          </p>
        ) : (
          <textarea
            ref={ref} id={id} className="eb-prompt__input" rows={1} placeholder={placeholder} value={text} disabled={disabled} maxLength={maxLength}
            onChange={(e) => change(e.target.value)} onKeyDown={onKeyDown}
            aria-invalid={shownError ? true : undefined} aria-describedby={shownHint || shownError ? descId : undefined}
          />
        )}
        <div className="eb-prompt__bar">
          <div className="eb-prompt__tools">
            {voice && !listening && <Button variant="ghost" size="sm" iconStart={<MicIcon />} aria-label="Ghi âm câu hỏi" onClick={onVoiceStart} disabled={disabled} />}
            {!listening && toolbar}
          </div>
          <div className="eb-prompt__end">
            {listening ? (
              <>
                <Button variant="ghost" size="sm" onClick={onVoiceCancel}>Huỷ</Button>
                <Button variant="primary" size="sm" onClick={onVoiceStop} loading={transcribing}>Xong</Button>
              </>
            ) : (
              <>
                {maxLength && <span className="eb-prompt__count">{text.length}/{maxLength}</span>}
                {busy
                  ? <Button variant="secondary" size="sm" iconStart={<StopIcon />} onClick={onStop}>Dừng</Button>
                  : <Button variant="primary" size="sm" iconStart={<SendIcon />} onClick={send} disabled={!canSend}>Gửi</Button>}
              </>
            )}
          </div>
        </div>
      </div>
      {(shownError || shownHint) && <p id={descId} className={shownError ? 'eb-prompt__error' : 'eb-prompt__hint'}>{shownError ?? shownHint}</p>}
    </div>
  );
}
