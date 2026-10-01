import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../utils/supabaseClient';
import './Contact.css';

// =========================================================
// ICONS
// =========================================================
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s-8-7.75-8-13a8 8 0 1 1 16 0c0 5.25-8 13-8 13Z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12c0 1.94.17 3.88.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.33-1.92.5-3.86.5-5.8 0-1.94-.17-3.88-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

// =========================================================
// DATA
// =========================================================
const CONTACT_INFO = {
  email: 'bbaitechofficial@gmail.com',
  phone: '08130458020',
  phoneDisplay: '0813 045 8020',
  address: 'No. 1, Iremo Street, Odo Ado, Ado Ekiti, Ekiti State, Nigeria',
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM WAT',
};

const SOCIALS = [
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=61581528795068',
    color: '#1877F2',
    icon: <FacebookIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bb_aitech/',
    color: '#E4405F',
    icon: <InstagramIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bb-aitech-solutions/',
    color: '#0A66C2',
    icon: <LinkedInIcon />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCrCfAdEqSKpGOkKTRqBtN-g',
    color: '#FF0000',
    icon: <YouTubeIcon />,
  },
];

const FAQS = [
  {
    q: 'How quickly can I expect a response?',
    a: 'We typically respond within 24 hours during business days. For urgent matters, please call us directly.',
  },
  {
    q: 'Do you offer demos for your products?',
    a: 'Yes! We offer free demos for all our products. Simply select "Demo Request" in the inquiry type.',
  },
  {
    q: 'Can you customize solutions for my organization?',
    a: 'Absolutely! We specialize in custom AI solutions tailored to your specific needs.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Pricing varies based on the product or service. Contact us for a customized quote.',
  },
  {
    q: 'Do you offer training programs?',
    a: 'Yes, we offer comprehensive AI literacy and digital skills training for individuals and groups.',
  },
  {
    q: 'Are your solutions available outside Nigeria?',
    a: 'Yes, our digital solutions are available globally. Contact us for specific availability.',
  },
];

// =========================================================
// COMPONENT
// =========================================================
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: leadError } = await supabase.from('leads').insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
        interest_area: formData.subject || formData.inquiryType,
        source: 'contact_form',
        status: 'new',
      });

      if (leadError) throw leadError;

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(
        'Something went wrong. Please try again or contact us directly.'
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="ctc-hero">
          <div className="ctc-hero-bg" aria-hidden="true" />
          <div className="ctc-hero-blob ctc-hero-blob--1" aria-hidden="true" />
          <div className="ctc-hero-blob ctc-hero-blob--2" aria-hidden="true" />

          <div className="container ctc-hero-content">
            <div className="ctc-eyebrow">
              <span className="ctc-eyebrow-dot" />
              Contact Us
            </div>

            <h1 className="ctc-hero-title">
              Get in <span className="ctc-gold">touch</span>
            </h1>

            <p className="ctc-hero-sub">
              Have a question, a project in mind, or want a demo? We&rsquo;d
              love to hear from you.
            </p>
          </div>
        </section>

        {/* ================= MAIN ================= */}
        <section className="section ctc-main">
          <div className="container">
            <div className="ctc-layout">
              {/* ---------- Left: contact info ---------- */}
              <aside className="ctc-info">
                <h2 className="ctc-heading">
                  Contact <span className="ctc-gold">Information</span>
                </h2>

                <ul className="ctc-info-list">
                  <li className="ctc-info-item">
                    <div className="ctc-info-icon">
                      <EmailIcon />
                    </div>
                    <div className="ctc-info-body">
                      <div className="ctc-info-label">Email Us</div>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="ctc-info-value"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="ctc-info-item">
                    <div className="ctc-info-icon">
                      <PhoneIcon />
                    </div>
                    <div className="ctc-info-body">
                      <div className="ctc-info-label">Call Us</div>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="ctc-info-value"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="ctc-info-item">
                    <div className="ctc-info-icon">
                      <LocationIcon />
                    </div>
                    <div className="ctc-info-body">
                      <div className="ctc-info-label">Visit Us</div>
                      <div className="ctc-info-value ctc-info-value--text">
                        {CONTACT_INFO.address}
                      </div>
                    </div>
                  </li>

                  <li className="ctc-info-item">
                    <div className="ctc-info-icon">
                      <ClockIcon />
                    </div>
                    <div className="ctc-info-body">
                      <div className="ctc-info-label">Business Hours</div>
                      <div className="ctc-info-value ctc-info-value--text">
                        {CONTACT_INFO.hours}
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Socials */}
                <div className="ctc-socials-block">
                  <h3 className="ctc-socials-title">Connect With Us</h3>
                  <div className="ctc-socials">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ctc-social"
                        aria-label={s.name}
                        style={{ '--social-color': s.color } as React.CSSProperties}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              {/* ---------- Right: form ---------- */}
              <div className="ctc-form-wrap">
                <h2 className="ctc-heading">
                  Send us a <span className="ctc-gold">message</span>
                </h2>

                {submitted ? (
                  <div className="ctc-success">
                    <div className="ctc-success-icon">
                      <CheckIcon />
                    </div>
                    <h3>Message Sent</h3>
                    <p>
                      Thank you for reaching out. We&rsquo;ll get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="ctc-form">
                    <div className="ctc-field">
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

                    <div className="ctc-field-row">
                      <div className="ctc-field">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="ctc-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="inquiryType">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="demo">Demo Request</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="training">Training Program</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="ctc-field">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {error && <div className="ctc-error">{error}</div>}

                    <button
                      type="submit"
                      className="ctc-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                      {!isSubmitting && (
                        <span aria-hidden="true" style={{ marginLeft: 8 }}>
                          →
                        </span>
                      )}
                    </button>

                    <p className="ctc-form-note">
                      We&rsquo;ll get back to you within 24 hours. Your
                      information is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="section ctc-map-section">
          <div className="container">
            <div className="ctc-map-frame">
              <iframe
                title="BB AI Tech Solutions Location"
                src="https://www.google.com/maps?q=Ado%20Ekiti%2C%20Ekiti%20State%2C%20Nigeria&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="ctc-map-caption">
              No. 1, Iremo Street, Odo Ado, Ado Ekiti, Ekiti State
            </p>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="section ctc-faq">
          <div className="container">
            <div className="ctc-section-head">
              <h2>
                Frequently Asked <span className="ctc-gold">Questions</span>
              </h2>
              <div className="ctc-rule" />
            </div>

            <div className="ctc-faq-grid">
              {FAQS.map((faq) => (
                <article key={faq.q} className="ctc-faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section ctc-cta-wrap">
          <div className="container">
            <div className="ctc-cta-card">
              <h2>
                Prefer a <span className="ctc-gold">quick demo?</span>
              </h2>
              <p>
                See our AI solutions in action with a personalized walkthrough.
              </p>
              <div className="ctc-cta-actions">
                <Link to="/request-demo" className="ctc-cta-btn">
                  Request a Demo <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/solutions"
                  className="ctc-cta-btn ctc-cta-btn--light"
                >
                  Browse Projects <span aria-hidden="true">→</span>
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