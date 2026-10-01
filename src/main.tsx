import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// =========================================================
// GLOBAL STYLES
// =========================================================
import './styles/globals.css';

// =========================================================
// COMPONENT STYLES
// Imported here so Vite always includes them — even if
// tree-shaking would otherwise drop them from the build.
// =========================================================

// Layout
import './components/layout/Navigation.css';
import './components/layout/Footer.css';

// Home
import './components/home/Hero.css';
import './components/home/ProductsOverview.css';
import './components/home/ServicesOverview.css';
import './components/home/CTASection.css';

// Public pages
import './pages/public/About.css';
import './pages/public/Solutions.css';
import './pages/public/Services.css';
import './pages/public/Industries.css';
import './pages/public/Training.css';
import './pages/public/Blog.css';
import './pages/public/Contact.css';
import './pages/public/RequestDemo.css';
import './pages/public/TaiwoBrightAjayi.css';
import './pages/public/FounderPortfolio.css';


// =========================================================
// APP ENTRY
// =========================================================
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);