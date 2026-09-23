import { frame } from '../../story-frame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatMessage } from './ChatMessage';
import { AgentTrace } from '../AgentTrace/AgentTrace';
import { Button } from '../Button/Button';

/** One turn in a conversation with the assistant. The user gets a short bubble on the right; the assistant gets a wide block of text on the left that reads like prose. */
const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage', component: ChatMessage, tags: ['autodocs'],
  args: { role: 'agent', time: '9:12 AM', children: 'August revenue came to $1,250,000, up 12% from July. The growth came from enterprise accounts.' },
  argTypes: { role: { control: 'radio', options: ['user', 'agent'] }, status: { control: 'radio', options: ['idle', 'sending', 'streaming', 'error'] }, trace: { control: false }, actions: { control: false } },
  decorators: [(S) => <div style={{ width: 640 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof ChatMessage>;

export const Agent: Story = {};
export const User: Story = { args: { role: 'user', children: 'How did August revenue do?' } };

/** A user message still in flight — nothing blocks, just a note under the bubble. */
export const Sending: Story = { args: { role: 'user', status: 'sending', children: 'Compare it with the same month last year.' } };

/** The assistant is answering: a blinking caret at the end, and the content area is `aria-live="polite"`. */
export const Streaming: Story = { args: { status: 'streaming', children: 'Pulling the figures from three sources' } };

/** Errors say what went wrong and how to fix it, with an action to retry. */
export const Error: Story = {
  args: { status: 'error', error: 'Couldn’t read the orders table. Try again, or pick a different data source.', children: 'I stopped at the data-reading step.', actions: <Button variant="secondary" size="sm">Try again</Button> },
};

/** Message actions appear on hover, and on keyboard focus. */
export const WithActions: Story = {
  args: { actions: <><Button variant="ghost" size="sm">Copy</Button><Button variant="ghost" size="sm">Try again</Button></> },
};

/** The assistant ran tools before answering — the run log sits above the content, collapsed by default. */
export const WithTrace: Story = {
  args: {
    trace: <AgentTrace steps={[
      { id: '1', label: 'Read the orders table', detail: 'orders.month = 2026-08', status: 'done', meta: '0.8s' },
      { id: '2', label: 'Sum revenue', status: 'done', meta: '0.3s' },
      { id: '3', label: 'Compare with last month', status: 'done', meta: '0.4s' },
    ]} />,
  },
};

/** Long content: paragraphs, lists, and code blocks all live in the same content block. */
export const LongContent: Story = {
  args: {
    children: (
      <>
        <p>Three things drove bandwidth cost up in August:</p>
        <ul>
          <li>Traffic from Singapore rose 41% after the launch.</li>
          <li>Cache hit rate fell from 94% to 81% after the purge rules changed.</li>
          <li>Two sync jobs ran hourly instead of daily.</li>
        </ul>
        <p>Reverting the purge rule is the first thing worth doing:</p>
        <pre><code>{`cdn purge --rule "static/*" --ttl 86400`}</code></pre>
        <p>After that change, cost drops an estimated 18% within the next billing cycle.</p>
      </>
    ),
  },
};

/** A full question-and-answer exchange. */
export const Conversation: Story = {
  render: () => (
    <div>
      <ChatMessage role="user" time="9:11 AM">How did August revenue do?</ChatMessage>
      <ChatMessage
        role="agent" time="9:12 AM"
        trace={<AgentTrace steps={[{ id: '1', label: 'Read the orders table', detail: 'orders.month = 2026-08', status: 'done', meta: '0.8s' }, { id: '2', label: 'Sum revenue', status: 'done', meta: '0.3s' }]} />}
        actions={<Button variant="ghost" size="sm">Copy</Button>}
      >
        August revenue came to $1,250,000, up 12% from July.
      </ChatMessage>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/** Narrow: the user bubble spans the full width and text drops to body-compact (section 3.5). */
export const Narrow: Story = {
  name: 'Narrow — 390px',
  render: () => (
    <div>
      <ChatMessage role="user" time="9:11 AM">How did Q3 revenue compare with Q2?</ChatMessage>
      <ChatMessage role="agent" time="9:12 AM">Q3 revenue came to $3,480,000, up 9% from Q2. August contributed the most.</ChatMessage>
    </div>
  ),
  decorators: [frame(390)], parameters: { controls: { disable: true } },
};
