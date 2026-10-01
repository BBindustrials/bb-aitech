import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import './Footer.css';

// Extend CSSProperties to allow CSS custom properties (--var)
type CSSWithVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links — icons rendered inline (SVG), color set via currentColor
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/profile.php?id=61581528795068',
      hoverColor: '#1877F2',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bb_aitech/',
      hoverColor: '#E4405F',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/bb-aitech-solutions/',
      hoverColor: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCrCfAdEqSKpGOkKTRqBtN-g',
      hoverColor: '#FF0000',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12c0 1.94.17 3.88.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.33-1.92.5-3.86.5-5.8 0-1.94-.17-3.88-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"
          />
        </svg>
      ),
    },
  ];

  // Our own products
  const productLinks = [
    { to: '/solutions/justcbt-ai', label: 'JustCBT AI' },
    { to: '/solutions/teach-idd', label: 'Teach IDD' },
  ];

  // Custom work delivered for clients
  const clientLinks = [
    { to: '/solutions/broadoak-schools', label: 'BroadOak Schools' },
    { to: '/solutions/iquire', label: 'iQuire' },
  ];

  const companyLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link">
              <div className="footer-logo">BB</div>
              <div>
                <div className="footer-brand-name">BB AI TECH</div>
                <div className="footer-brand-sub">Solutions</div>
              </div>
            </Link>

            <p className="footer-brand-desc">
              Building reliable AI technology solutions for schools, businesses
              &amp; rehabilitation centres.
            </p>

            {/* Socials */}
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={social.name}
                  style={{ '--hover-color': social.hoverColor } as CSSWithVars}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Our Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Products</h4>
            <ul className="footer-list">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Client Work — secondary group under the same column */}
            <h4 className="footer-col-title footer-col-title--sub">
              Client Work
            </h4>
            <ul className="footer-list">
              {clientLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-list">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-list footer-list--contact">
              <li>
                <a href="mailto:info@bbaitech.com" className="footer-link">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        fill="currentColor"
                        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 5-8-5V6l8 5 8-5v2.24Z"
                      />
                    </svg>
                  </span>
                  info@bbaitech.com
                </a>
              </li>
              <li>
                <a href="tel:+2348130458020" className="footer-link">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        fill="currentColor"
                        d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z"
                      />
                    </svg>
                  </span>
                  0813 045 8020
                </a>
              </li>
              <li>
                <span className="footer-link footer-link--address">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        fill="currentColor"
                        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                      />
                    </svg>
                  </span>
                  No. 1, Iremo Street, Odo Ado,
                  <br />
                  Ado Ekiti, Ekiti State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} BB AI Tech Solutions. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">
              Privacy
            </Link>
            <Link to="/terms" className="footer-bottom-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}