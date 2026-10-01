/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    { to: '/solutions', label: 'Solutions' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/training', label: 'Training' },
    { to: '/blog', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'var(--white)',
          borderBottom: '1px solid var(--gray-200)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container" style={{ padding: '0 1rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
              minHeight: '70px',
              gap: '1rem',
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#b8860b',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                BB
              </div>
              <div>
                <div
                  style={{
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    color: '#000000',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '0.5px',
                  }}
                >
                  BB AI TECH
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    color: '#b8860b',
                    fontStyle: 'italic',
                    fontWeight: '600',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            {!isMobile && (
              <div
                style={{
                  display: 'flex',
                  gap: '1.75rem',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{
                        position: 'relative',
                        color: isActive ? '#b8860b' : '#000000',
                        fontWeight: isActive ? '600' : '500',
                        fontFamily: 'var(--font-serif)',
                        transition: 'color 0.2s ease',
                        textDecoration: 'none',
                        fontSize: '0.98rem',
                        whiteSpace: 'nowrap',
                        paddingBottom: '4px',
                        borderBottom: isActive
                          ? '2px solid #b8860b'
                          : '2px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#b8860b';
                        if (!isActive) {
                          e.currentTarget.style.borderBottom =
                            '2px solid rgba(184,134,11,0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive
                          ? '#b8860b'
                          : '#000000';
                        e.currentTarget.style.borderBottom = isActive
                          ? '2px solid #b8860b'
                          : '2px solid transparent';
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Desktop CTA — GOLD button */}
            {!isMobile && (
              <Link
                to="/request-demo"
                style={{ flexShrink: 0, textDecoration: 'none' }}
              >
                <button
                  style={{
                    padding: '0.65rem 1.35rem',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-sans)',
                    whiteSpace: 'nowrap',
                    backgroundColor: '#b8860b',
                    color: '#ffffff',
                    border: '2px solid #b8860b',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 24px -10px rgba(184,134,11,0.55)',
                    transition:
                      'transform 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.borderColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow =
                      '0 12px 26px -10px rgba(0,0,0,0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#b8860b';
                    e.currentTarget.style.borderColor = '#b8860b';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow =
                      '0 10px 24px -10px rgba(184,134,11,0.55)';
                  }}
                >
                  Let&rsquo;s Build One for You
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#000000',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'var(--gray-100)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 999,
              }}
            />

            {/* Mobile Menu Panel */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '280px',
                backgroundColor: 'white',
                zIndex: 1000,
                boxShadow: '2px 0 12px rgba(0,0,0,0.15)',
                transform: isMobileMenuOpen
                  ? 'translateX(0)'
                  : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
                overflowY: 'auto',
              }}
            >
              {/* Mobile Menu Header */}
              <div
                style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--gray-200)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '35px',
                    height: '35px',
                    backgroundColor: '#b8860b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}
                >
                  BB
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    color: '#000000',
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div style={{ padding: '1rem 0' }}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.85rem 1rem',
                        color: isActive ? '#b8860b' : '#000000',
                        fontWeight: isActive ? '600' : '500',
                        fontFamily: 'var(--font-serif)',
                        textDecoration: 'none',
                        fontSize: '1.05rem',
                        borderLeft: isActive
                          ? `3px solid #b8860b`
                          : '3px solid transparent',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = 'var(--gray-50)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                      }
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu CTA — GOLD button */}
              <div
                style={{ padding: '1rem', borderTop: '1px solid var(--gray-200)' }}
              >
                <Link
                  to="/request-demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      fontFamily: 'var(--font-sans)',
                      backgroundColor: '#b8860b',
                      color: '#ffffff',
                      border: '2px solid #b8860b',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 10px 24px -10px rgba(184,134,11,0.55)',
                    }}
                  >
                    Let&rsquo;s Build One for You
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Global styles for mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .section {
            padding: 2rem 0 !important;
          }

          h1 {
            font-size: 2rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }

          .grid-2, .grid-3, .grid-4 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .card {
            padding: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}