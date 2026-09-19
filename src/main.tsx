import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { renderLanding, type LandingSpec } from './sections/renderLanding';
import spec from './content/landing.ebig-cdn.json';
createRoot(document.getElementById('root')!).render(<StrictMode>{renderLanding(spec as LandingSpec)}</StrictMode>);
