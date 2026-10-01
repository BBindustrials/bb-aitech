import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import './RequestDemo.css';

// =========================================================
// CONFIG
// =========================================================
const CONTACT_EMAIL = 'bbaitechofficial@gmail.com';
const WHATSAPP_NUMBER = '2348130458020'; // international format, no +

// =========================================================
// OPTIONS
// =========================================================
const PRODUCTS = [
  { value: 'JustCBT AI', label: 'JustCBT AI — Anti-cheating CBT platform' },
  { value: 'Teach IDD', label: 'Teach IDD — AI assistant for IDD teachers' },
  { value: 'BroadOak Schools', label: 'BroadOak Schools — School website' },
  { value: 'iQuire', label: 'iQuire — Learning & careers platform' },
  { value: 'Custom Project', label: 'Something custom — let’s talk' },
];

const ORG_TYPES = [
  'School / Educational Institution',
  'University / Tertiary',
  'Government Agency',
  'Business / Corporate',
  'Healthcare / Clinic',
  'Rehabilitation Centre',
  'EdTech / Startup',
  'Non-profit / NGO',
  'Other',
];

const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Just exploring',
];

const HEAR_ABOUT_US = [
  'Google search',
  'Social media',
  'A friend / colleague',
  'The Broadoak Schools',
  'iQuire',
  'An event or hackathon',
  'Other',
];

// =========================================================
// SMALL ICONS
// =========================================================
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// =========================================================
// COMPONENT
// =========================================================
export default function RequestDemo() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    orgType: '',
    product: '',
    participants: '',
    timeline: '',
    message: '',
    hearAbout: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildMailto = () => {
    const lines = [
      'New Demo Request',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || '—'}`,
      `Organisation: ${formData.organization || '—'}`,
      `Role: ${formData.role || '—'}`,
      `Organisation Type: ${formData.orgType || '—'}`,
      `Product / Project: ${formData.product || '—'}`,
      `Expected Participants: ${formData.participants || '—'}`,
      `Timeline: ${formData.timeline || '—'}`,
      `Heard About Us Via: ${formData.hearAbout || '—'}`,
      '',
      'Message / Requirements:',
      formData.message || '—',
      '',
      '—',
      'Sent from bbaitech.com/request-demo',
    ];

    const subject = `New Demo Request — ${formData.fullName}${
      formData.product ? ` (${formData.product})` : ''
    }`;
    const body = lines.join('\n');

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.product ||
      !formData.timeline
    ) {
      setError('Please fill in the required fields marked with *');
      return;
    }

    try {
      window.location.href = buildMailto();
      setSubmitted(true);

      // Reset after a moment
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          role: '',
          orgType: '',
          product: '',
          participants: '',
          timeline: '',
          message: '',
          hearAbout: '',
        });
      }, 8000);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please email us directly.');
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi BB AI Tech — I'd like to request a demo${
        formData.product ? ` for ${formData.product}` : ''
      }.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="rd-hero">
          <div className="rd-hero-bg" aria-hidden="true" />
          <div className="rd-hero-blob rd-hero-blob--1" aria-hidden="true" />
          <div className="rd-hero-blob rd-hero-blob--2" aria-hidden="true" />

          <div className="container rd-hero-content">
            <div className="rd-eyebrow">
              <span className="rd-eyebrow-dot" />
              Request a Demo
            </div>

            <h1 className="rd-hero-title">
              See our AI in{' '}
              <span className="rd-gold">action</span>
            </h1>

            <p className="rd-hero-sub">
              Tell us a bit about your organization and what you&rsquo;d like
              to see. We&rsquo;ll get back to you within 24 hours to schedule
              a personalized walkthrough.
            </p>
          </div>
        </section>

        {/* ================= FORM ================= */}
        <section className="section rd-main">
          <div className="container">
            <div className="rd-layout">
              {/* ---------- Side panel ---------- */}
              <aside className="rd-side">
                <h2 className="rd-side-title">
                  What you get in a demo
                </h2>
                <ul className="rd-side-list">
                  <li>
                    <span className="rd-side-check" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <strong>A live walkthrough</strong>
                      <p>
                        See JustCBT AI, Teach IDD, or a custom solution in a
                        30–40 minute session.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="rd-side-check" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <strong>Q&amp;A with the builder</strong>
                      <p>
                        Ask anything — from anti-cheating mechanisms to AI
                        theory grading accuracy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="rd-side-check" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <strong>A tailored proposal</strong>
                      <p>
                        If it&rsquo;s a fit, we&rsquo;ll send a scoped pricing
                        document within a few days.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="rd-side-contact">
                  <div className="rd-side-contact-label">
                    Prefer to talk first?
                  </div>
                  <button
                    type="button"
                    className="rd-btn rd-btn--whatsapp rd-btn--block"
                    onClick={openWhatsApp}
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </button>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="rd-side-email"
                  >
                    Or email us at {CONTACT_EMAIL}
                  </a>
                </div>
              </aside>

              {/* ---------- Form ---------- */}
              <div className="rd-form-wrap">
                {submitted ? (
                  <div className="rd-success">
                    <div className="rd-success-icon">
                      <CheckIcon />
                    </div>
                    <h3>Demo request ready to send</h3>
                    <p>
                      Your email client should have opened with the details.
                      Just hit <strong>Send</strong> in your mail app and
                      we&rsquo;ll get back to you within 24 hours.
                    </p>
                    <p className="rd-success-note">
                      Didn&rsquo;t open? Email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </p>
                  </div>
                ) : (
                  <form className="rd-form" onSubmit={handleSubmit}>
                    {/* Section: About you */}
                    <div className="rd-form-section">
                      <h3 className="rd-form-section-title">About you</h3>

                      <div className="rd-field">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="rd-field-row">
                        <div className="rd-field">
                          <label htmlFor="email">Work Email *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="rd-field">
                          <label htmlFor="phone">Phone</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section: About your org */}
                    <div className="rd-form-section">
                      <h3 className="rd-form-section-title">
                        About your organization
                      </h3>

                      <div className="rd-field">
                        <label htmlFor="organization">Organization</label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. The Broadoak Schools"
                        />
                      </div>

                      <div className="rd-field-row">
                        <div className="rd-field">
                          <label htmlFor="role">Your Role</label>
                          <input
                            id="role"
                            name="role"
                            type="text"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g. Head of Academics"
                          />
                        </div>
                        <div className="rd-field">
                          <label htmlFor="orgType">Organization Type</label>
                          <select
                            id="orgType"
                            name="orgType"
                            value={formData.orgType}
                            onChange={handleChange}
                          >
                            <option value="">Select…</option>
                            {ORG_TYPES.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section: What you want to see */}
                    <div className="rd-form-section">
                      <h3 className="rd-form-section-title">
                        What you&rsquo;d like to see
                      </h3>

                      <div className="rd-field">
                        <label htmlFor="product">
                          Product / Project of Interest *
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select…</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.value} value={p.value}>
                              {p.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="rd-field-row">
                        <div className="rd-field">
                          <label htmlFor="participants">
                            Expected Participants
                          </label>
                          <input
                            id="participants"
                            name="participants"
                            type="text"
                            value={formData.participants}
                            onChange={handleChange}
                            placeholder="e.g. 200 students"
                          />
                        </div>
                        <div className="rd-field">
                          <label htmlFor="timeline">Timeline *</label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select…</option>
                            {TIMELINES.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="rd-field">
                        <label htmlFor="hearAbout">
                          How did you hear about us?
                        </label>
                        <select
                          id="hearAbout"
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleChange}
                        >
                          <option value="">Select…</option>
                          {HEAR_ABOUT_US.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Section: Anything else */}
                    <div className="rd-form-section">
                      <h3 className="rd-form-section-title">
                        Anything else we should know?
                      </h3>

                      <div className="rd-field">
                        <label htmlFor="message">
                          Message / Requirements
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your goals, current tools, or specific questions."
                        />
                      </div>
                    </div>

                    {error && <div className="rd-error">{error}</div>}

                    <div className="rd-form-actions">
                      <button type="submit" className="rd-btn rd-btn--dark">
                        Send Request <span aria-hidden="true">→</span>
                      </button>
                      <button
                        type="button"
                        className="rd-btn rd-btn--whatsapp"
                        onClick={openWhatsApp}
                      >
                        <WhatsAppIcon />
                        WhatsApp
                      </button>
                    </div>

                    <p className="rd-form-note">
                      By submitting, your email client opens with the request
                      pre-filled. Just hit Send — we&rsquo;ll respond within 24
                      hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="section rd-faq">
          <div className="container">
            <div className="rd-section-head">
              <h2>
                Quick <span className="rd-gold">answers</span>
              </h2>
              <div className="rd-rule" />
            </div>

            <div className="rd-faq-grid">
              {[
                {
                  q: 'How long is the demo?',
                  a: 'Typically 30–40 minutes, including Q&A. We can extend if there’s more to cover.',
                },
                {
                  q: 'Is it free?',
                  a: 'Yes — demos are completely free with no obligation.',
                },
                {
                  q: 'Can I invite my team?',
                  a: 'Absolutely. Let us know in the message field and we’ll send a calendar invite for everyone.',
                },
                {
                  q: 'Do you do custom builds?',
                  a: 'Yes. If you have a specific problem, choose "Something custom" and describe it.',
                },
              ].map((faq) => (
                <article key={faq.q} className="rd-faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section rd-cta-wrap">
          <div className="container">
            <div className="rd-cta-card">
              <h2>
                Not ready for a demo?{' '}
                <span className="rd-gold">Browse our work.</span>
              </h2>
              <p>
                See the platforms and websites we&rsquo;ve already shipped for
                schools, businesses, and institutions.
              </p>
              <div className="rd-cta-actions">
                <Link to="/solutions" className="rd-cta-btn">
                  View Projects <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="rd-cta-btn rd-cta-btn--light"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}