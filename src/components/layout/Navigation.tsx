/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

// Drop your logo file into src/assets/logos/bb-logo.png
// If the file isn't there yet, the component falls back to a text badge.
import logoImg from '../../assets/logos/bb-logo.png';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if mobile on window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/solutions', label: 'Projects' },   // ← renamed
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/training', label: 'Training' },
    { to: '/blog', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* ---------- Logo ---------- */}
        <Link to="/" className="nav-logo">
          {!logoFailed ? (
            <img
              src={logoImg}
              alt="BB AI Tech Solutions"
              className="nav-logo-img"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="nav-logo-badge">BB</div>
          )}
        </Link>

        {/* ---------- Desktop Menu ---------- */}
        {!isMobile && (
          <div className="nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* ---------- Desktop CTA ---------- */}
        {!isMobile && (
          <Link to="/request-demo" className="nav-cta-wrap">
            <button className="nav-cta">Let&rsquo;s Build One for You</button>
          </Link>
        )}

        {/* ---------- Mobile Toggle ---------- */}
        {isMobile && (
          <button
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div
            className="nav-mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="nav-mobile-panel">
            <div className="nav-mobile-head">
              {!logoFailed ? (
                <img
                  src={logoImg}
                  alt="BB AI Tech Solutions"
                  className="nav-mobile-logo-img"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="nav-logo-badge nav-logo-badge--sm">BB</div>
              )}
              <button
                className="nav-mobile-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="nav-mobile-links">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-mobile-link ${isActive ? 'is-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="nav-mobile-cta-wrap">
              <Link
                to="/request-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-cta-wrap"
              >
                <button className="nav-cta nav-cta--block">
                  Let&rsquo;s Build One for You
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}