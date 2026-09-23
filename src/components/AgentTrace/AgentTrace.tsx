import { Disclosure, DisclosurePanel, Button, Heading } from 'react-aria-components';
import './AgentTrace.css';

export interface TraceStep {
  id: string;
  /** What the agent did, verb + object: "Read the orders table". */
  label: string;
  /** Parameters or a short result — shown in the mono font. */
  detail?: string;
  status: 'running' | 'done' | 'error';
  /** Run time: "1.2s". */
  meta?: string;
}

export interface AgentTraceProps {
  steps: TraceStep[];
  /** The sentence on the toggle. Defaults to a count of the steps. */
  summary?: string;
  defaultExpanded?: boolean;
}

const icons = {
  running: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="6" strokeDasharray="28" strokeDashoffset="9" strokeLinecap="round" /></svg>,
  done: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.5 3.5L13 5" /></svg>,
  error: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>,
};
const statusLabel = { running: 'Running', done: 'Done', error: 'Failed' };

const defaultSummary = (steps: TraceStep[]) => {
  if (steps.some((s) => s.status === 'error')) return 'A step failed';
  if (steps.some((s) => s.status === 'running')) return `Running step ${steps.findIndex((s) => s.status === 'running') + 1} of ${steps.length}`;
  return `Ran ${steps.length} steps`;
};

/** The agent's run log, shown above its answer. Collapsed by default — open it to check the work, never hide required information here. */
export function AgentTrace({ steps, summary, defaultExpanded = false }: AgentTraceProps) {
  return (
    <Disclosure className="eb-trace" defaultExpanded={defaultExpanded}>
      <Heading className="eb-trace__heading">
        <Button slot="trigger" className="eb-trace__trigger">
          <svg className="eb-trace__chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 4l4 4-4 4" /></svg>
          <span>{summary ?? defaultSummary(steps)}</span>
        </Button>
      </Heading>
      <DisclosurePanel className="eb-trace__panel">
        <ol className="eb-trace__list">
          {steps.map((s) => (
            <li key={s.id} className={`eb-trace__step eb-trace__step--${s.status}`}>
              <span className="eb-trace__icon" role="img" aria-label={statusLabel[s.status]}>{icons[s.status]}</span>
              <span className="eb-trace__label">{s.label}</span>
              {s.meta && <span className="eb-trace__meta">{s.meta}</span>}
              {s.detail && <code className="eb-trace__detail">{s.detail}</code>}
            </li>
          ))}
        </ol>
      </DisclosurePanel>
    </Disclosure>
  );
}
