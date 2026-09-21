import type { Meta, StoryObj } from '@storybook/react-vite';
import { renderLanding, type LandingSpec } from './renderLanding';
import spec from '../content/landing.ebig-os.json';

/** Trang thử cho ebig.co. Nội dung lấy từ ebig.co/llms.txt; chỗ thiếu số thật để "[cần số thật]". */
const s = spec as LandingSpec;

const meta: Meta = { title: 'Sections/Landing — Ebig OS', parameters: { layout: 'fullscreen' }, decorators: [(S) => <div className="lp"><S /></div>], tags: ['autodocs'] };
export default meta;

export const FullPage: StoryObj = { name: '0. Full page — Ebig OS', render: () => renderLanding(s) };
