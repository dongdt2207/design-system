import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline, TeamBlock } from './index';
import { renderLanding, type LandingSpec, type LandingSection } from './renderLanding';
import { useScrollReveal } from './landingMotion';
import './landing-motion.css';
import spec from '../content/landing.internor.json';

const s = spec as LandingSpec;
type PropsOf<T extends LandingSection['type']> = Extract<LandingSection, { type: T }>['props'];
const pick = <T extends LandingSection['type']>(type: T, n = 0): PropsOf<T> => (s.sections.filter((x) => x.type === type)[n] as Extract<LandingSection, { type: T }>).props as PropsOf<T>;

/** .lp-motion + useScrollReveal are opt-in: drop both and the page renders with no motion. */
function InternorLanding({ motion }: { motion: boolean }) {
  useScrollReveal(motion);
  return motion ? <div className="lp-motion">{renderLanding(s)}</div> : renderLanding(s);
}

const meta: Meta = { title: 'Sections/Landing — Internor', parameters: { layout: 'fullscreen' }, decorators: [(S) => <div className="lp"><S /></div>], tags: ['autodocs'] };
export default meta;

export const FullPage: StoryObj = { name: '0. Full page — Internor', render: () => <InternorLanding motion />, decorators: [] };
export const NoMotion: StoryObj = { name: '1. Full page — no motion', render: () => <InternorLanding motion={false} />, decorators: [] };
export const TimelineStory: StoryObj = { name: '2. Timeline', render: () => <Timeline {...pick('timeline')} /> };
export const TeamStory: StoryObj = { name: '3. Team', render: () => <TeamBlock {...pick('team')} /> };
export const TeamNoLink: StoryObj = { name: '3b. Team — no link', render: () => <TeamBlock {...{ ...pick('team'), link: undefined }} /> };
export const TimelineThree: StoryObj = { name: '2b. Timeline — 3 items', render: () => <Timeline {...{ ...pick('timeline'), items: pick('timeline').items.slice(0, 3) }} /> };
