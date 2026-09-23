import '../components/Button/Button.css';
import { Nav, HeroEditorial, Manifesto, SplitText, Timeline, FeatureFullBleed, Testimonial, TeamBlock, Pricing, Comparison, CTAFinal, Footer } from './index';
import type { NavProps, HeroEditorialProps, ManifestoProps, SplitTextProps, TimelineProps, FeatureFullBleedProps, TestimonialProps, TeamBlockProps, PricingProps, ComparisonProps, CTAFinalProps, FooterProps } from './index';

/** A landing page = a list of sections plus data. Agents generate only this structure. */
export type LandingSection =
  | { type: 'nav'; props: NavProps } | { type: 'hero'; props: HeroEditorialProps } | { type: 'manifesto'; props: ManifestoProps }
  | { type: 'split'; props: SplitTextProps } | { type: 'timeline'; props: TimelineProps }
  | { type: 'feature'; props: FeatureFullBleedProps } | { type: 'testimonial'; props: TestimonialProps } | { type: 'team'; props: TeamBlockProps }
  | { type: 'pricing'; props: PricingProps } | { type: 'comparison'; props: ComparisonProps }
  | { type: 'cta'; props: CTAFinalProps } | { type: 'footer'; props: FooterProps };
export interface LandingSpec { title: string; sections: LandingSection[] }

const registry = { nav: Nav, hero: HeroEditorial, manifesto: Manifesto, split: SplitText, timeline: Timeline, feature: FeatureFullBleed, testimonial: Testimonial, team: TeamBlock, pricing: Pricing, comparison: Comparison, cta: CTAFinal, footer: Footer } as const;

export function renderLanding(spec: LandingSpec) {
  return (
    <div className="lp">
      {spec.sections.map((s, i) => {
        const C = registry[s.type] as unknown as React.ComponentType<Record<string, unknown>>;
        return <C key={`${s.type}-${i}`} {...(s.props as unknown as Record<string, unknown>)} />;
      })}
    </div>
  );
}
