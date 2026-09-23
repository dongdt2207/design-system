import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PromptInput } from './PromptInput';
import { Button } from '../Button/Button';

const ClipIcon = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.5 5.5l-4 4a1.5 1.5 0 002 2l4.5-4.5a3 3 0 10-4.2-4.2L4 7.6a4.5 4.5 0 006.4 6.4l3.6-3.6" /></svg>;

/** The composer for questions to the assistant. Enter sends, Shift + Enter adds a line; the field grows with the content, then scrolls. */
const meta: Meta<typeof PromptInput> = {
  title: 'Components/PromptInput', component: PromptInput, tags: ['autodocs'],
  argTypes: { toolbar: { control: false }, onSend: { action: 'send' }, onStop: { action: 'stop' } },
  decorators: [(S) => <div style={{ width: 560 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof PromptInput>;

/** Empty — Send stays disabled until there is content. */
export const Empty: Story = {};
export const HasText: Story = { args: { defaultValue: 'How did August revenue do?' } };

/** Secondary controls on the left: attach a file, pick a data scope. */
export const WithToolbar: Story = {
  args: { defaultValue: 'Summarize revenue by week', toolbar: <><Button variant="ghost" size="sm" iconStart={<ClipIcon />}>Attach</Button><Button variant="ghost" size="sm">Data source</Button></> },
};

/** The assistant is answering: the button becomes Stop, and the field stays editable for the next question. */
export const Busy: Story = { args: { busy: true, defaultValue: '' } };

export const WithCount: Story = { args: { maxLength: 500, defaultValue: 'Compare August revenue with the same month last year.' } };

/** The error says what went wrong and how to fix it. */
export const Error: Story = { args: { defaultValue: '', error: 'The question is over 500 characters. Shorten it, then send again.' } };

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Can\u2019t send while the connection is down.' } };

/** Long content — the field grows to 8 rows, then scrolls inside itself. */
export const LongText: Story = {
  args: { defaultValue: Array.from({ length: 10 }, (_, i) => `Line ${i + 1}: more context for the assistant.`).join('\n') },
};

/** Set `voice` to add the record button on the left of the toolbar. */
export const Voice: Story = { args: { voice: true } };

/** Recording: the field gives way to a status strip with a red dot and a timer; the buttons become Cancel / Done. */
export const VoiceRecording: Story = { args: { voice: true, voiceState: 'recording', voiceDuration: 7 } };

/** Recording stopped, speech being turned into text. */
export const VoiceTranscribing: Story = { args: { voice: true, voiceState: 'transcribing' } };

/** Recording failed — it says how to fix it, and typing still works. */
export const VoiceError: Story = { args: { voice: true, voiceState: 'error' } };

/** Live demo: press the mic to record, watch the timer, press Done to get the transcript. */
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
          window.setTimeout(() => { setText((t) => `${t}${t ? ' ' : ''}How did August revenue do?`); setState('idle'); }, 1200);
        }}
        onSend={() => setText('')}
      />
    );
  },
};
