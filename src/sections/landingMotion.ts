import { useEffect } from 'react';

/** Elements revealed as they scroll into view. Class names come from sections.css. */
const TARGETS = [
  '.lp-manifesto__text', '.lp-manifesto__aside',
  '.lp-split__text', '.lp-split__visual', '.lp-stat',
  '.lp-timeline__head', '.lp-timeline__item',
  '.lp-feature__head', '.lp-feature__desc', '.lp-feature__visual',
  '.lp-compare__head', '.lp-compare tbody tr',
  '.lp-pricing__head', '.lp-tier',
  '.lp-testimonial__quote', '.lp-testimonial__attr',
  '.lp-team__image', '.lp-team__head', '.lp-team__text', '.lp-team__link',
  '.lp-cta__head', '.lp-cta__note', '.lp-cta__actions',
  '.lp-footer__brand', '.lp-footer__col',
].join(', ');

/**
 * Reveal-on-scroll for the landing page. Off-spec against DESIGN-RULES 9.8
 * ("Motion: none"), so it lives outside the section components and is opt-in.
 * Nothing is hidden until this runs, so no-JS and reduced-motion both render
 * the full page immediately.
 */
export function useScrollReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    for (const node of nodes) {
      const siblings = node.parentElement ? Array.from(node.parentElement.children) : [];
      node.style.setProperty('--reveal-i', String(Math.min(siblings.indexOf(node), 3)));
      node.dataset.reveal = 'out';
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = 'in';
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    for (const node of nodes) io.observe(node);
    return () => io.disconnect();
  }, [enabled]);
}
