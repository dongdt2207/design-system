import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentTrace } from './AgentTrace';

const steps = [
  { id: '1', label: 'Read the orders table', detail: 'orders.month = 2026-08', status: 'done' as const, meta: '0.8s' },
  { id: '2', label: 'Sum revenue', status: 'done' as const, meta: '0.3s' },
  { id: '3', label: 'Compare with last month', status: 'done' as const, meta: '0.4s' },
];

/** The agent's run log, shown above its answer. Collapsed by default: the user opens it to check the work. Never put required information in here. */
const meta: Meta<typeof AgentTrace> = {
  title: 'Components/AgentTrace', component: AgentTrace, tags: ['autodocs'],
  args: { steps }, argTypes: { steps: { control: false } },
  decorators: [(S) => <div style={{ width: 520 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof AgentTrace>;

export const Collapsed: Story = {};
export const Expanded: Story = { args: { defaultExpanded: true } };

/** Running: the summary names the current step, and that step's icon spins. */
export const Running: Story = {
  args: { defaultExpanded: true, steps: [steps[0], { id: '2', label: 'Sum revenue', status: 'running' as const }] },
};

/** A failed step — status carries its own icon and `aria-label`, never color alone. */
export const HasError: Story = {
  args: { defaultExpanded: true, steps: [steps[0], { id: '2', label: 'Call the exchange-rate API', detail: 'HTTP 503', status: 'error' as const, meta: '2.1s' }] },
};

/** Many steps with long parameters — the list wraps instead of scrolling sideways. */
export const LongRun: Story = {
  args: {
    defaultExpanded: true,
    steps: [
      ...steps,
      { id: '4', label: 'Filter enterprise customers', detail: 'customers.segment = "enterprise" AND customers.status = "active" AND orders.total > 5000', status: 'done' as const, meta: '1.2s' },
      { id: '5', label: 'Build a weekly bar chart', status: 'done' as const, meta: '0.6s' },
    ],
  },
};
