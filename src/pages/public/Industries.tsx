import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import './Industries.css';

// ---- Client logos ---------------------------------------------------
import logoIquire from '../../assets/logos/iquire.png';
import logoBroadoak from '../../assets/logos/broadoak.png';
import logoNysc from '../../assets/logos/nysc.png';
import logoDl4all from '../../assets/logos/dl4all.png';
import logoIms from '../../assets/logos/ims.jpeg';
import logoVisionary from '../../assets/logos/visionary-nation.png';

// =========================================================
// ICONS
// =========================================================
const IndustryIcon = ({ name }: { name: string }) => {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'education':
      return (
        <svg {...common}>
          <path d="M2 10 12 5l10 5-10 5L2 10Z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      );
    case 'government':
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V10l7-6 7 6v11" />
          <path d="M9 21v-6h6v6M10 10h.01M14 10h.01" />
        </svg>
      );
    case 'corporate':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      );
    case 'healthcare':
      return (
        <svg {...common}>
          <path d="M12 21s-8-5.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 11-8 11Z" />
          <path d="M12 11v4M10 13h4" />
        </svg>
      );
    case 'rehabilitation':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        </svg>
      );
    case 'creative':
      return (
        <svg {...common}>
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    default:
      return null;
  }
};

// =========================================================
// DATA
// =========================================================
const INDUSTRIES = [
  {
    id: 'education',
    title: 'Education',
    icon: 'education',
    description:
      'Transforming how students learn and teachers teach with AI-powered educational tools.',
    solutions: [
      'AI-powered exam preparation (JustCBT AI)',
      'Computer-based testing platforms (JustCBT AI)',
      'Personalized learning for students with IDD (Teach IDD)',
      'Digital literacy programs for students and teachers',
      'School website & digital presence',
    ],
    benefits: [
      'Improve student exam performance',
      'Reduce teacher grading workload',
      'Personalize learning at scale',
      'Track student progress in real-time',
      'Automate administrative tasks',
    ],
    caseStudy: {
      client: 'The Broadoak Schools',
      result:
        'Improved exam workflows and digital literacy through JustCBT AI and teacher training.',
    },
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    icon: 'government',
    description:
      'Empowering government agencies with data-driven solutions and efficient service delivery systems.',
    solutions: [
      'Data analysis and reporting systems',
      'Citizen service automation',
      'Policy impact analytics',
      'Training programs for government workers',
      'Digital transformation consulting',
    ],
    benefits: [
      'Improve service delivery efficiency',
      'Data-driven policy making',
      'Reduce operational costs',
      'Enhance transparency and accountability',
      'Upskill government workforce',
    ],
    caseStudy: {
      client: 'Imo State Housing Corporation',
      result:
        'Streamlined housing data management and improved service delivery for citizens.',
    },
  },
  {
    id: 'corporate',
    title: 'Corporate & Business',
    icon: 'corporate',
    description:
      'Helping businesses leverage AI for competitive advantage and operational excellence.',
    solutions: [
      'Custom AI application development',
      'Business process automation',
      'Data analytics and business intelligence',
      'AI training for professionals',
      'Website and web app development',
    ],
    benefits: [
      'Increase operational efficiency',
      'Data-driven decision making',
      'Reduce manual workload',
      'Gain competitive advantage',
      'Scale with AI-powered tools',
    ],
    caseStudy: {
      client: 'iQuire',
      result:
        'Built the iQuire platform end-to-end as Technical Lead during an internship.',
    },
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'healthcare',
    description:
      'Improving patient outcomes and healthcare delivery with AI-powered monitoring and analytics.',
    solutions: [
      'Patient monitoring systems',
      'Patient risk detection',
      'Healthcare data analytics',
      'Patient engagement systems',
      'Health outcomes tracking',
    ],
    benefits: [
      'Early detection of health risks',
      'Improved patient compliance',
      'Data-driven treatment decisions',
      'Reduced hospital readmissions',
      'Better patient outcomes',
    ],
    caseStudy: {
      client: 'Coming Soon',
      result: 'Healthcare institutions leveraging our AI for patient monitoring.',
    },
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Centres',
    icon: 'rehabilitation',
    description:
      'Supporting rehabilitation centres with tools for patient progress tracking and therapeutic support.',
    solutions: [
      'Patient progress tracking',
      'Therapeutic exercise guidance',
      'Motivational content delivery',
      'Care team coordination',
      'Outcome measurement tools',
    ],
    benefits: [
      'Track patient progress effectively',
      'Improve treatment adherence',
      'Coordinate care teams',
      'Measure treatment outcomes',
      'Enhance patient engagement',
    ],
    caseStudy: {
      client: 'Coming Soon',
      result: 'Rehabilitation centres improving patient outcomes with our solutions.',
    },
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    icon: 'creative',
    description:
      'Empowering creative professionals with AI tools for content creation, video production, and design.',
    solutions: [
      'AI-powered content creation',
      'Video editing and production support',
      'Graphics design automation',
      'Creative workflow optimization',
      'Digital asset management',
    ],
    benefits: [
      'Speed up content production',
      'Reduce creative workload',
      'Generate ideas faster',
      'Maintain brand consistency',
      'Scale creative output',
    ],
    caseStudy: {
      client: 'DL4ALL',
      result:
        'Supported digital literacy outreach and training across the DL4ALL initiative.',
    },
  },
];

const FEATURED_CLIENTS = [
  {
    name: 'The Broadoak Schools',
    logo: logoBroadoak,
    industry: 'Education',
    description:
      'Premium educational institution leveraging our AI solutions for exam preparation and digital literacy.',
    website: 'https://broadoakschools.com',
  },
  {
    name: 'iQuire',
    logo: logoIquire,
    industry: 'EdTech · UK',
    description:
      'A UK-based learning platform we built end-to-end — connecting learners with market-ready skills.',
    website: 'https://iquire.vercel.app',
  },
  {
    name: 'DL4ALL',
    logo: logoDl4all,
    industry: 'Digital Literacy',
    description:
      'Digital Literacy for All — a national initiative we supported with training and outreach.',
    website: null,
  },
  {
    name: 'Imo State Housing Corporation',
    logo: logoIms,
    industry: 'Government',
    description:
      'State government agency using our data solutions for efficient housing management and service delivery.',
    website: null,
  },
  {
    name: 'The Visionary Nation',
    logo: logoVisionary,
    industry: 'Community',
    description:
      'Youth and community organisation we partnered with on digital outreach and mentorship.',
    website: null,
  },
  {
    name: 'NYSC',
    logo: logoNysc,
    industry: 'National Service',
    description:
      'Our Award of Service was issued for digital literacy work delivered through NYSC CDS.',
    website: null,
  },
];

const STATS = [
  { number: '6+', label: 'Industries Served' },
  { number: '15+', label: 'Client Organizations' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '6', label: 'Featured Partners' },
];

const TESTIMONIALS = [
  {
    quote:
      'BB AI Tech Solutions has transformed how our students prepare for exams. The AI-powered grading system is a game-changer.',
    name: 'Dr. (Mrs.) Dame Happiness Nkeiruka',
    role: 'CEO, The Broadoak Schools',
  },
  {
    quote:
      'The data analysis training provided to our staff has significantly improved our reporting and decision-making processes.',
    name: 'Management',
    role: 'Imo State Housing Corporation',
  },
  {
    quote:
      'Working with BB AI Tech has elevated our digital presence. Their expertise in web development and AI integration is outstanding.',
    name: 'Ajayi Progress',
    role: 'Director, SUCPRO STUDIOS',
  },
];

// =========================================================
// COMPONENT
// =========================================================
export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const toggleIndustry = (id: string) => {
    setSelectedIndustry((current) => (current === id ? null : id));
  };

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="ind-hero">
          <div className="ind-hero-bg" aria-hidden="true" />
          <div className="ind-hero-blob ind-hero-blob--1" aria-hidden="true" />
          <div className="ind-hero-blob ind-hero-blob--2" aria-hidden="true" />

          <div className="container ind-hero-content">
            <div className="ind-eyebrow">
              <span className="ind-eyebrow-dot" />
              Industries We Serve
            </div>

            <h1 className="ind-hero-title">
              Tailored AI for{' '}
              <span className="ind-gold">diverse sectors</span>
            </h1>

            <p className="ind-hero-sub">
              Delivering measurable impact and transformation across education,
              government, business, healthcare, and beyond.
            </p>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="ind-stats">
          <div className="container">
            <div className="ind-stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="ind-stat">
                  <div className="ind-stat-number">{stat.number}</div>
                  <div className="ind-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="section ind-industries">
          <div className="container">
            <div className="ind-section-head">
              <h2>
                Solutions by <span className="ind-gold">Sector</span>
              </h2>
              <div className="ind-rule" />
            </div>

            <div className="ind-grid">
              {INDUSTRIES.map((industry) => {
                const isOpen = selectedIndustry === industry.id;

                return (
                  <article
                    key={industry.id}
                    className={`ind-card ${isOpen ? 'is-open' : ''}`}
                    onClick={() => toggleIndustry(industry.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleIndustry(industry.id);
                      }
                    }}
                    aria-expanded={isOpen}
                  >
                    <div className="ind-card-icon">
                      <IndustryIcon name={industry.icon} />
                    </div>
                    <h3 className="ind-card-title">{industry.title}</h3>
                    <p className="ind-card-desc">{industry.description}</p>

                    <span className="ind-card-cta">
                      {isOpen ? 'Show Less ↑' : 'Learn More ↓'}
                    </span>

                    {isOpen && (
                      <div className="ind-card-expand">
                        <div className="ind-expand-block">
                          <h4 className="ind-expand-label">Our Solutions</h4>
                          <ul className="ind-expand-list">
                            {industry.solutions.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="ind-expand-block">
                          <h4 className="ind-expand-label">Key Benefits</h4>
                          <ul className="ind-expand-list">
                            {industry.benefits.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        {industry.caseStudy.client !== 'Coming Soon' && (
                          <div className="ind-case">
                            <span className="ind-case-label">Case Study</span>
                            <p>{industry.caseStudy.result}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FEATURED CLIENTS ================= */}
        <section className="section ind-clients">
          <div className="container">
            <div className="ind-section-head">
              <h2>
                Trusted by{' '}
                <span className="ind-gold">Leading Organizations</span>
              </h2>
              <div className="ind-rule" />
              <p className="ind-section-sub">
                We partner with institutions and businesses to deliver
                impactful AI solutions.
              </p>
            </div>

            <div className="ind-clients-grid">
              {FEATURED_CLIENTS.map((client) => (
                <article key={client.name} className="ind-client-card">
                  <div className="ind-client-logo">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div className="ind-client-info">
                    <h3 className="ind-client-name">{client.name}</h3>
                    <div className="ind-client-industry">
                      {client.industry}
                    </div>
                    <p className="ind-client-desc">{client.description}</p>

                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ind-client-link"
                      >
                        Visit Website <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="section ind-testimonials">
          <div className="container">
            <div className="ind-section-head">
              <h2>
                What Our <span className="ind-gold">Clients Say</span>
              </h2>
              <div className="ind-rule" />
            </div>

            <div className="ind-testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <article key={t.name} className="ind-testimonial">
                  <div className="ind-testimonial-quote" aria-hidden="true">
                    &ldquo;
                  </div>
                  <p className="ind-testimonial-text">{t.quote}</p>
                  <div className="ind-testimonial-author">
                    <div className="ind-testimonial-name">{t.name}</div>
                    <div className="ind-testimonial-role">{t.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section ind-cta-wrap">
          <div className="container">
            <div className="ind-cta-card">
              <h2>
                Ready to transform{' '}
                <span className="ind-gold">your organization?</span>
              </h2>
              <p>
                Join our growing list of satisfied clients across Nigeria.
              </p>
              <div className="ind-cta-actions">
                <Link to="/contact" className="ind-cta-btn">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/request-demo"
                  className="ind-cta-btn ind-cta-btn--light"
                >
                  Request a Demo <span aria-hidden="true">→</span>
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