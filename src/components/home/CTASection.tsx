import { Link } from 'react-router-dom';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="final-cta">
      {/* Soft animated gradient behind everything */}
      <div className="final-cta-bg" aria-hidden="true" />

      {/* Floating blobs for depth (matching Hero/Products/Services) */}
      <div className="final-cta-blob final-cta-blob--1" aria-hidden="true" />
      <div className="final-cta-blob final-cta-blob--2" aria-hidden="true" />

      <div className="final-cta-content">
        <h2 className="final-cta-title">
          This is what{' '}
          <span className="final-cta-accent">ready</span> feels like.
        </h2>

        <p className="final-cta-subtitle">
          Let&rsquo;s build the AI solution your school, business, or
          institution deserves.
        </p>

        <div className="final-cta-actions">
          <Link to="/request-demo" className="final-cta-btn">
            Get Started
          </Link>
        </div>

        <span className="final-cta-note">
          No credit card required · Free consultation
        </span>
      </div>
    </section>
  );
}