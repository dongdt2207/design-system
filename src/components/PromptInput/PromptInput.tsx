import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button/Button';
import './PromptInput.css';

export interface PromptInputProps {
  /** Label for screen readers. Defaults to "Question for the assistant". */
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Called on Send or Enter. Receives the trimmed content. */
  onSend?: (value: string) => void;
  /** The assistant is answering — Send becomes Stop. */
  busy?: boolean;
  onStop?: () => void;
  disabled?: boolean;
  maxLength?: number;
  /** What to know before typing. Defaults to the keyboard shortcut. */
  hint?: string;
  /** What went wrong plus how to fix it. */
  error?: string;
  /** Secondary controls on the left: model picker, attachments. Use sm ghost/secondary Buttons. */
  toolbar?: ReactNode;
  /** Maximum rows before the field starts scrolling. */
  maxRows?: number;
  /** Show the record button. Capturing audio and transcribing it is the caller's job. */
  voice?: boolean;
  /** Recording state — controlled by the caller. */
  voiceState?: 'idle' | 'recording' | 'transcribing' | 'error';
  /** Seconds recorded so far, shown as 0:07. */
  voiceDuration?: number;
  /** What went wrong plus how to fix it when recording fails. */
  voiceError?: string;
  onVoiceStart?: () => void;
  /** Stop recording and transcribe. */
  onVoiceStop?: () => void;
  /** Discard the recording without transcribing. */
  onVoiceCancel?: () => void;
}

const SendIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V3M4 7l4-4 4 4" /></svg>;
const StopIcon = () => <svg viewBox="0 0 16 16" fill="currentColor"><rect x="4.5" y="4.5" width="7" height="7" rx="1" /></svg>;
const MicIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="4" height="7" rx="2" /><path d="M3.5 7.5a4.5 4.5 0 009 0M8 12v2" /></svg>;

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/** The composer for questions to the assistant. Enter sends, Shift + Enter adds a line, the field grows to `maxRows`. Set `voice` to add dictation. */
export function PromptInput({
  label = 'Question for the assistant', placeholder = 'Ask the assistant to do something…', value, defaultValue = '', onValueChange, onSend,
  busy = false, onStop, disabled = false, maxLength, hint = 'Enter to send, Shift + Enter for a new line.', error, toolbar, maxRows = 8,
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
  const shownError = voice && voiceState === 'error' ? voiceError ?? 'Couldn’t record. Grant microphone access in your browser, then try again.' : error;
  const shownHint = recording ? 'Press Done when you finish, or Cancel to discard.' : transcribing ? 'Turning speech into text.' : hint;

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
            <span className="eb-prompt__voice-label">{recording ? 'Listening' : 'Transcribing'}</span>
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
            {voice && !listening && <Button variant="ghost" size="sm" iconStart={<MicIcon />} aria-label="Record a question" onClick={onVoiceStart} disabled={disabled} />}
            {!listening && toolbar}
          </div>
          <div className="eb-prompt__end">
            {listening ? (
              <>
                <Button variant="ghost" size="sm" onClick={onVoiceCancel}>Cancel</Button>
                <Button variant="primary" size="sm" onClick={onVoiceStop} loading={transcribing}>Done</Button>
              </>
            ) : (
              <>
                {maxLength && <span className="eb-prompt__count">{text.length}/{maxLength}</span>}
                {busy
                  ? <Button variant="secondary" size="sm" iconStart={<StopIcon />} onClick={onStop}>Stop</Button>
                  : <Button variant="primary" size="sm" iconStart={<SendIcon />} onClick={send} disabled={!canSend}>Send</Button>}
              </>
            )}
          </div>
        </div>
      </div>
      {(shownError || shownHint) && <p id={descId} className={shownError ? 'eb-prompt__error' : 'eb-prompt__hint'}>{shownError ?? shownHint}</p>}
    </div>
  );
}
