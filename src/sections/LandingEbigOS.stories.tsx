import type { Meta, StoryObj } from '@storybook/react-vite';
import { renderLanding, type LandingSpec } from './renderLanding';
import spec from '../content/landing.ebig-os.json';

/** A trial page for ebig.co. Content comes from ebig.co/llms.txt; missing figures are left as "[real number needed]". */
const s = spec as LandingSpec;

const meta: Meta = { title: 'Sections/Landing — Ebig OS', parameters: { layout: 'fullscreen' }, decorators: [(S) => <div className="lp"><S /></div>], tags: ['autodocs'] };
export default meta;

export const FullPage: StoryObj = { name: '0. Full page — Ebig OS', render: () => renderLanding(s) };
