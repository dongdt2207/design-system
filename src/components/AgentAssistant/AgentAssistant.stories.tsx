import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { frame } from '../../story-frame';
import { AgentAssistant, type AgentConversation } from './AgentAssistant';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { AgentTrace } from '../AgentTrace/AgentTrace';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

const conversations: AgentConversation[] = [
  { id: 'rev', title: 'Q3 revenue', meta: '2 hours ago', group: 'Today' },
  { id: 'cdn', title: 'Bandwidth cost increase', meta: 'Yesterday', group: 'Previous 7 days' },
  { id: 'churn', title: 'Churn by plan', meta: 'Sep 17, 2026', group: 'Previous 7 days' },
  { id: 'onboard', title: 'Onboarding completion rate', meta: 'Sep 12, 2026', group: 'Earlier' },
];

const MoreIcon = () => <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="3" cy="8" r="1.4" /><circle cx="8" cy="8" r="1.4" /><circle cx="13" cy="8" r="1.4" /></svg>;

const headerActions = (
  <>
    <Badge tone="neutral">Ebig Agent 2</Badge>
    <Menu placement="bottom end" trigger={<Button variant="ghost" size="sm" iconStart={<MoreIcon />} aria-label="More actions" />} items={[
      { id: 'rename', label: 'Rename' }, { id: 'export', label: 'Export transcript' }, { type: 'separator' }, { id: 'delete', label: 'Delete conversation', danger: true },
    ]} />
  </>
);

const trace = <AgentTrace steps={[
  { id: '1', label: 'Read the orders table', detail: 'orders.quarter = 2026Q3', status: 'done', meta: '0.8s' },
  { id: '2', label: 'Sum revenue by month', status: 'done', meta: '0.3s' },
  { id: '3', label: 'Compare with the previous quarter', status: 'done', meta: '0.4s' },
]} />;

const thread = (
  <>
    <ChatMessage role="user" time="9:11 AM">How did Q3 revenue compare with Q2?</ChatMessage>
    <ChatMessage role="agent" time="9:12 AM" trace={trace} actions={<><Button variant="ghost" size="sm">Copy</Button><Button variant="ghost" size="sm">Try again</Button></>}>
      <p>Q3 revenue came to $3,480,000, up 9% from Q2. August contributed the most at $1,250,000.</p>
      <p>The growth came from enterprise accounts; individual accounts stayed flat across all three months.</p>
    </ChatMessage>
    <ChatMessage role="user" time="9:14 AM">Break out the enterprise segment for me.</ChatMessage>
  </>
);

/**
 * The agent assistant screen — composed from existing components: Drawer, EmptyState, Skeleton, Menu, Badge, Button,
 * cùng ba component mới ChatMessage, AgentTrace, PromptInput.
 *
 * States handled: loading, empty (with suggestions), load error, answering, a failed turn, long content.
 * Below 1024px the sidebar collapses into a drawer opened from the header (section 3.3).
 */
const meta: Meta<typeof AgentAssistant> = {
  title: 'Patterns/Agent assistant', component: AgentAssistant, tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(S) => <div style={{ height: '100vh', minHeight: 640 }}><S /></div>],
  args: { title: 'Q3 revenue', conversations, activeConversation: 'rev', headerActions, status: undefined },
  argTypes: { headerActions: { control: false }, status: { control: false }, conversations: { control: false }, children: { control: false }, state: { control: 'radio', options: ['ready', 'loading', 'empty', 'error'] } },
};
export default meta;
type Story = StoryObj<typeof AgentAssistant>;

export const Ready: Story = { args: { children: thread } };

/** The assistant is answering: the run log is live, a caret sits at the end of the sentence, and Send becomes Stop. */
export const Answering: Story = {
  args: {
    busy: true,
    children: (
      <>
        <ChatMessage role="user" time="9:14 AM">Break out the enterprise segment for me.</ChatMessage>
        <ChatMessage role="agent" status="streaming" trace={<AgentTrace defaultExpanded steps={[{ id: '1', label: 'Filter enterprise customers', detail: 'customers.segment = "enterprise"', status: 'done', meta: '0.9s' }, { id: '2', label: 'Sum revenue by month', status: 'running' }]} />}>
          Enterprise accounts contributed $2,140,000 in Q3
        </ChatMessage>
      </>
    ),
  },
};

/** A new conversation: suggested questions instead of a blank screen. */
export const Empty: Story = {
  args: {
    title: 'New conversation', activeConversation: undefined, state: 'empty',
    suggestions: ['Revenue this month', 'Customers who churned last week', 'Infrastructure cost by service', 'Onboarding completion rate'],
  },
};

/** Loading the conversation history — skeletons shaped like real messages. */
export const Loading: Story = { args: { state: 'loading' } };

/** Load failure: it says how to fix it, and the composer stays disabled until a retry succeeds. */
export const LoadError: Story = { args: { state: 'error' } };

/** A failed turn mid-conversation — earlier turns stay readable, and the error carries an action. */
export const TurnError: Story = {
  args: {
    children: (
      <>
        <ChatMessage role="user" time="9:20 AM">Add exchange-rate figures to the report.</ChatMessage>
        <ChatMessage role="agent" time="9:20 AM" status="error" error="The exchange-rate API failed (HTTP 503). Try again, or enter the rate by hand." actions={<Button variant="secondary" size="sm">Try again</Button>}
          trace={<AgentTrace defaultExpanded steps={[{ id: '1', label: 'Read the revenue table', status: 'done', meta: '0.5s' }, { id: '2', label: 'Call the exchange-rate API', detail: 'HTTP 503', status: 'error', meta: '2.1s' }]} />}>
          I stopped at the exchange-rate step.
        </ChatMessage>
      </>
    ),
  },
};

/** Recording a question: the composer becomes a "Listening" strip with a timer, and the buttons become Cancel / Done. */
export const Voice: Story = {
  args: { children: thread, promptProps: { voice: true, voiceState: 'recording', voiceDuration: 5 } },
};

/** Live demo: send a question to walk the flow from empty → answering → answered. */
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
        setItems((p) => [...p, { id: id + 1, role: 'agent', text: 'This is a sample answer. Real data comes in through the screen\u2019s props.' }]);
        setBusy(false);
      }, 1200);
    };
    return (
      <AgentAssistant
        {...args} busy={busy} state={items.length === 0 ? 'empty' : 'ready'}
        suggestions={['Revenue this month', 'Customers who churned last week']}
        onSuggestion={ask} onSend={ask} onStop={() => setBusy(false)}
        promptProps={{
          voice: true, value: draft, onValueChange: setDraft, voiceState, voiceDuration: secs,
          onVoiceStart: () => { setSecs(0); setVoiceState('recording'); },
          onVoiceCancel: () => setVoiceState('idle'),
          onVoiceStop: () => {
            setVoiceState('transcribing');
            window.setTimeout(() => { setDraft((d) => `${d}${d ? ' ' : ''}How did August revenue do?`); setVoiceState('idle'); }, 1200);
          },
        }}
      >
        {items.map((m) => <ChatMessage key={m.id} role={m.role} time="09:30">{m.text}</ChatMessage>)}
        {busy && <ChatMessage role="agent" status="streaming">Working on it</ChatMessage>}
      </AgentAssistant>
    );
  },
};

/** 820px wide: the sidebar folds into a header button, content keeps 16px padding. */
export const Tablet: Story = { name: 'Tablet — 820px', args: { children: thread }, decorators: [frame(820)], parameters: { controls: { disable: true } } };

/** 390px wide: tighter header, messages closer to the edge, stacked suggestions, 40px hit areas. */
export const Phone: Story = { name: 'Phone — 390px', args: { children: thread }, decorators: [frame(390, 760)], parameters: { controls: { disable: true } } };

/** A new conversation on a phone — one suggestion per line. */
export const PhoneEmpty: Story = {
  name: 'Phone — empty',
  args: { title: 'New conversation', activeConversation: undefined, state: 'empty', suggestions: ['Revenue this month', 'Customers who churned last week', 'Infrastructure cost by service'] },
  decorators: [frame(390, 760)], parameters: { controls: { disable: true } },
};

/** Embedded in a 480px panel — the layout follows the container, not the window. */
export const NarrowPanel: Story = { name: 'Narrow panel — 480px', args: { children: thread }, decorators: [frame(480)], parameters: { controls: { disable: true } } };
