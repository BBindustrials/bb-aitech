import { Link } from 'react-router-dom';
import { useState, useEffect, type CSSProperties } from 'react';
import './Hero.css';

// Drop your screenshots into src/assets/projects/
// Recommended: 1600x1000, PNG, retina (2x)
import broadoakShot from '../../assets/projects/broadoak.png';
import iquireShot from '../../assets/projects/iquire.png';
import justcbtShot from '../../assets/projects/justcbt.png';
import aiSoftwareShot from '../../assets/projects/ai-software.png';

// Extend React's CSSProperties to allow CSS custom properties (--var)
type CSSWithVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

const slides = [
  {
    label: 'broadoakschools.com',
    alt: 'Broadoak Schools website',
    src: broadoakShot,
    url: 'https://broadoakschools.com',
    tag: 'School Website',
  },
  {
    label: 'iquire.vercel.app',
    alt: 'iQuire EdTech platform',
    src: iquireShot,
    url: 'https://iquire.vercel.app',
    tag: 'Client — EdTech',
  },
  {
    label: 'justcbtai.com',
    alt: 'JustCBT AI CBT platform',
    src: justcbtShot,
    url: 'https://justcbtai.com',
    tag: 'AI CBT Platform',
  },
  {
    label: 'coming soon',
    alt: 'Teach IDD AI',
    src: aiSoftwareShot,
    url: '/solutions',
    tag: 'AI Software',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate, respecting reduced motion & hover-pause
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || paused) return;

    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) =>
    setActiveIndex((i + slides.length) % slides.length);

  return (
    <section className="hero">
      <div className="hero-bg-gradient" aria-hidden="true" />

      {/* Soft floating blobs behind everything (adds life to the bg) */}
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />
      <div className="hero-blob hero-blob--3" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Trusted by schools, EdTech &amp; enterprises across Africa
        </div>

        <h1 className="hero-title">
          We build{' '}
          <span className="hero-accent">websites, applications</span> &amp;
          AI-powered software solutions
        </h1>

        <p className="hero-subtitle">
          For schools, EdTech institutions and business organizations — from
          pixel-perfect websites to intelligent, production-ready AI systems.
        </p>

        <div className="hero-cta">
          <Link to="/solutions" className="btn btn-dark">
            See Our Work
          </Link>
          <Link to="/request-demo" className="btn btn-light">
            Let&rsquo;s Build One for You
          </Link>
        </div>

        <span className="hero-cta-note">
          No credit card required · Free consultation
        </span>
      </div>

      {/* Sliding showcase */}
      <div
        className="hero-showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero-showcase-track">
          {slides.map((slide, i) => {
            const raw = i - activeIndex;
            const half = slides.length / 2;
            const wrapped =
              raw > half
                ? raw - slides.length
                : raw < -half
                ? raw + slides.length
                : raw;

            const isActive = wrapped === 0;
            const isVisible = Math.abs(wrapped) <= 1;

            return (
              <a
                key={slide.label}
                href={slide.url}
                target={slide.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`hero-slide ${isActive ? 'is-active' : ''} ${
                  !isVisible ? 'is-hidden' : ''
                }`}
                style={
                  {
                    '--offset': wrapped,
                    '--z': isActive ? 3 : 2 - Math.abs(wrapped),
                    '--scale': isActive ? 1 : 0.82,
                    '--opacity': isActive ? 1 : 0.45,
                    '--blur': isActive ? '0px' : '2px',
                  } as CSSWithVars
                }
                aria-label={`${slide.tag}: ${slide.label}`}
              >
                <div className="hero-slide-frame">
                  {/* Moving light flare — Wix-style sheen */}
                  {isActive && (
                    <span className="hero-flare" aria-hidden="true" />
                  )}

                  <div className="hero-slide-bar">
                    <span />
                    <span />
                    <span />
                    <div className="hero-slide-url">{slide.label}</div>
                  </div>
                  <img src={slide.src} alt={slide.alt} loading="lazy" />
                </div>
                <div className="hero-slide-tag">{slide.tag}</div>
              </a>
            );
          })}
        </div>

        {/* Nav dots */}
        <div className="hero-dots" role="tablist" aria-label="Project slides">
          {slides.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Show ${s.tag}`}
              className={`hero-dot ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Trust strip — real project names */}
      <div className="hero-trust">
        <span>Live projects:</span>
        <a href="https://broadoakschools.com" target="_blank" rel="noreferrer">
          Broadoak Schools
        </a>
        <a href="https://iquire.vercel.app" target="_blank" rel="noreferrer">
          iQuire
        </a>
        <a href="https://justcbtai.com" target="_blank" rel="noreferrer">
          JustCBT AI
        </a>
        <a href="/solutions" rel="noreferrer">
          Teach IDD
        </a>
      </div>
    </section>
  );
}