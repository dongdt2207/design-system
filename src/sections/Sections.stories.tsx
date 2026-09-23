import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav, HeroEditorial, Manifesto, SplitText, FeatureFullBleed, Testimonial, Pricing, Comparison, CTAFinal, Footer } from './index';
import { renderLanding, type LandingSpec, type LandingSection } from './renderLanding';
import spec from '../content/landing.ebig-cdn.json';

const s = spec as LandingSpec;
type PropsOf<T extends LandingSection['type']> = Extract<LandingSection, { type: T }>['props'];
const pick = <T extends LandingSection['type']>(type: T, n = 0): PropsOf<T> => (s.sections.filter((x) => x.type === type)[n] as Extract<LandingSection, { type: T }>).props as PropsOf<T>;

const meta: Meta = { title: 'Sections/Landing minimal', parameters: { layout: 'fullscreen' }, decorators: [(S) => <div className="lp"><S /></div>], tags: ['autodocs'] };
export default meta;

export const FullPage: StoryObj = { name: '0. Full page — Ebig CDN', render: () => renderLanding(s), decorators: [] };
export const NavStory: StoryObj = { name: '1. Nav', render: () => <Nav {...pick('nav')} /> };
export const Hero: StoryObj = { name: '2. Hero editorial', render: () => <HeroEditorial {...pick('hero')} /> };
export const ManifestoStory: StoryObj = { name: '3. Manifesto', render: () => <Manifesto {...pick('manifesto')} /> };
export const Split: StoryObj = { name: '4. Split text', render: () => <SplitText {...pick('split')} /> };
export const Feature: StoryObj = { name: '5. Feature full-bleed', render: () => <FeatureFullBleed {...pick('feature', 0)} /> };
export const FeatureLeft: StoryObj = { name: '5b. Feature — visual on the left', render: () => <FeatureFullBleed {...pick('feature', 1)} /> };
export const TestimonialSingle: StoryObj = { name: '6. Testimonial — single', render: () => <Testimonial {...pick('testimonial', 0)} /> };
export const TestimonialPair: StoryObj = { name: '6b. Testimonial — pair', render: () => <Testimonial {...pick('testimonial', 1)} /> };
export const ComparisonStory: StoryObj = { name: '6c. Comparison', render: () => <Comparison {...pick('comparison')} /> };
export const PricingStory: StoryObj = { name: '6d. Pricing', render: () => <Pricing {...pick('pricing')} /> };
export const CTA: StoryObj = { name: '7. CTA final', render: () => <CTAFinal {...pick('cta')} /> };
export const FooterStory: StoryObj = { name: '8. Footer', render: () => <Footer {...pick('footer')} /> };
