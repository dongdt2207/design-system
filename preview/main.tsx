import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';
import '../src/sections/landing-motion.css';
import { renderLanding, type LandingSpec } from '../src/sections/renderLanding';
import { useScrollReveal } from '../src/sections/landingMotion';
import specJson from '../src/content/landing.internor.json';

/** Preview build: image paths must be relative so the page works under any base path. */
const spec = JSON.parse(JSON.stringify(specJson).replaceAll('"/img/', '"img/')) as LandingSpec;

/** This build is shared with people outside the project, so the page says what it is. */
const footer = spec.sections.find((s) => s.type === 'footer');
if (footer && footer.type === 'footer') {
  footer.props.meta = 'Demo page — Internor is a fictional studio. Every figure, price and quote here is invented. Photos: Wikimedia Commons (CC0, CC BY 2.0).';
  footer.props.place = 'Demo';
}

function Page() {
  useScrollReveal(true);
  return <div className="lp-motion">{renderLanding(spec)}</div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
