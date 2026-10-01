import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../utils/supabaseClient';
import type { Service } from '../../types';
import './Services.css';

// =========================================================
// ICONS
// =========================================================
const ServiceIcon = ({ name }: { name: string | null }) => {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'Brain':
      return (
        <svg {...common}>
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 5v1a3 3 0 0 0 3 3h1V3H9Z" />
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 5v1a3 3 0 0 1-3 3h-1V3h1Z" />
        </svg>
      );
    case 'Globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
      );
    case 'Camera':
      return (
        <svg {...common}>
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case 'Users':
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'GraduationCap':
      return (
        <svg {...common}>
          <path d="M2 10 12 5l10 5-10 5L2 10Z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      );
  }
};

// =========================================================
// STATIC DATA
// =========================================================
const WHY_US = [
  {
    icon: 'rocket',
    title: 'Innovation First',
    description:
      'We leverage cutting-edge AI technologies to deliver future-proof solutions.',
  },
  {
    icon: 'handshake',
    title: 'Client-Centric',
    description:
      'Your success is our priority. We work closely with you at every step.',
  },
  {
    icon: 'wallet',
    title: 'Cost-Effective',
    description:
      'Quality solutions at competitive prices without compromising excellence.',
  },
  {
    icon: 'trophy',
    title: 'Proven Track Record',
    description:
      'Successful projects delivered across education, business, and healthcare sectors.',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Understand your needs' },
  { step: '02', title: 'Strategy', desc: 'Plan the approach' },
  { step: '03', title: 'Development', desc: 'Build the solution' },
  { step: '04', title: 'Testing', desc: 'Ensure quality' },
  { step: '05', title: 'Launch', desc: 'Deploy & support' },
];

const WhyIcon = ({ name }: { name: string }) => {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'handshake':
      return (
        <svg {...common}>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
        </svg>
      );
    case 'wallet':
      return (
        <svg {...common}>
          <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v3a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5" />
        </svg>
      );
    case 'trophy':
      return (
        <svg {...common}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      );
    default:
      return null;
  }
};

// =========================================================
// COMPONENT
// =========================================================
export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error && data) {
        setServices(data as Service[]);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (!selectedService) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedService]);

  const getServiceDetails = (slug: string) => {
    const details: Record<
      string,
      {
        fullDescription: string;
        offerings: string[];
        process: string[];
        benefits: string[];
        targetClients: string[];
        pricingModel: string;
      }
    > = {
      'custom-ai': {
        fullDescription:
          'We design and develop custom AI solutions tailored to your unique business challenges. From predictive analytics to intelligent automation, our team builds AI systems that drive real business value and competitive advantage.',
        offerings: [
          'Predictive analytics and forecasting models',
          'Intelligent process automation',
          'Natural language processing solutions',
          'Computer vision and image recognition',
          'Recommendation engines',
          'AI-powered decision support systems',
        ],
        process: [
          'Discovery & Requirements Analysis',
          'Data Assessment & Preparation',
          'Model Development & Training',
          'Integration & Testing',
          'Deployment & Scaling',
          'Ongoing Support & Optimization',
        ],
        benefits: [
          'Solve specific business challenges with AI',
          'Gain competitive advantage through innovation',
          'Improve operational efficiency',
          'Data-driven decision making',
          'Scalable solutions that grow with you',
        ],
        targetClients: [
          'Enterprises seeking digital transformation',
          'Startups building AI-first products',
          'Organizations with unique AI needs',
          'Businesses looking to automate operations',
        ],
        pricingModel:
          'Custom pricing based on project scope and requirements',
      },
      'web-development': {
        fullDescription:
          'We build modern, performant, and responsive web applications that deliver exceptional user experiences. Our websites are designed to convert visitors into customers while maintaining high performance standards and SEO best practices.',
        offerings: [
          'Corporate and business websites',
          'E-commerce platforms',
          'Web applications and dashboards',
          'Landing pages and microsites',
          'Progressive Web Apps (PWAs)',
          'Website maintenance and support',
        ],
        process: [
          'Discovery & Planning',
          'UI/UX Design',
          'Frontend & Backend Development',
          'Testing & Quality Assurance',
          'Deployment & Launch',
          'Post-Launch Support',
        ],
        benefits: [
          'Mobile-first responsive design',
          'Fast loading and optimized performance',
          'SEO-friendly architecture',
          'Scalable and secure codebase',
          'Ongoing maintenance and updates',
        ],
        targetClients: [
          'Businesses needing a professional online presence',
          'Organizations requiring web applications',
          'E-commerce businesses',
          'Startups launching digital products',
        ],
        pricingModel: 'Project-based or hourly rates depending on scope',
      },
      'graphics-video': {
        fullDescription:
          'Our creative team produces professional graphics and video content that communicates your brand message effectively. From social media visuals to explainer videos, we help you stand out in a crowded digital landscape.',
        offerings: [
          'Brand identity and logo design',
          'Social media graphics',
          'Marketing collateral (brochures, flyers)',
          'Explainer and promotional videos',
          'Video editing and post-production',
          'Motion graphics and animations',
        ],
        process: [
          'Brief & Concept Development',
          'Design & Storyboarding',
          'Creation & Production',
          'Review & Refinement',
          'Final Delivery',
          'Asset Management',
        ],
        benefits: [
          'Professional brand presentation',
          'Consistent visual identity across platforms',
          'Engaging content that drives conversions',
          'Fast turnaround times',
          'Unlimited revisions until satisfaction',
        ],
        targetClients: [
          'Businesses needing brand assets',
          'Content creators and marketers',
          'Organizations launching campaigns',
          'Educational institutions',
        ],
        pricingModel: 'Package-based pricing or per-project quotes',
      },
      'ai-consulting': {
        fullDescription:
          'Our AI consulting services help organizations identify opportunities for AI integration, develop strategic roadmaps, and successfully implement AI solutions. We demystify AI and make it accessible for your business.',
        offerings: [
          'AI readiness assessment',
          'AI strategy and roadmap development',
          'Use case identification and prioritization',
          'Technology stack recommendations',
          'Proof of concept development',
          'AI implementation guidance',
        ],
        process: [
          'Initial Assessment',
          'Strategy Development',
          'Implementation Planning',
          'Pilot & Testing',
          'Full Deployment Support',
          'Training & Change Management',
        ],
        benefits: [
          'Clarity on AI opportunities for your business',
          'Avoid costly AI implementation mistakes',
          'Accelerated time-to-value with AI',
          'Access to AI expertise without full-time hires',
          'Risk mitigation through proven methodologies',
        ],
        targetClients: [
          'Organizations exploring AI adoption',
          'Businesses planning digital transformation',
          'Companies seeking competitive advantage',
          'Non-profits and social enterprises',
        ],
        pricingModel: 'Consulting packages or daily rates',
      },
      'training-programs': {
        fullDescription:
          'We offer comprehensive AI literacy and digital skills training programs for individuals, teams, and organizations. Our hands-on training ensures participants gain practical skills they can apply immediately.',
        offerings: [
          'AI fundamentals for beginners',
          'Data analysis and visualization',
          'Machine learning basics',
          'Prompt engineering for AI tools',
          'Digital literacy for professionals',
          'Custom corporate training programs',
        ],
        process: [
          'Needs Assessment',
          'Curriculum Development',
          'Training Delivery (Virtual/In-person)',
          'Hands-on Projects & Exercises',
          'Assessment & Certification',
          'Post-Training Support',
        ],
        benefits: [
          'Practical, hands-on learning experience',
          'Industry-relevant curriculum',
          'Certification upon completion',
          'Small class sizes for personalized attention',
          'Post-training resources and support',
        ],
        targetClients: [
          'Individuals seeking AI skills',
          'Corporate teams needing upskilling',
          'Educational institutions',
          'Government agencies',
        ],
        pricingModel: 'Per participant or group packages available',
      },
    };

    return (
      details[slug] || {
        fullDescription:
          'Comprehensive professional services tailored to your needs.',
        offerings: ['Custom solutions', 'Expert consultation', 'Quality delivery'],
        process: ['Discovery', 'Development', 'Delivery'],
        benefits: ['Quality assurance', 'Timely delivery', 'Client satisfaction'],
        targetClients: ['Businesses', 'Organizations', 'Institutions'],
        pricingModel: 'Contact us for pricing details',
      }
    );
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="svc-loading">
          <p>Loading services...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="svc-hero">
          <div className="svc-hero-bg" aria-hidden="true" />
          <div className="svc-hero-blob svc-hero-blob--1" aria-hidden="true" />
          <div className="svc-hero-blob svc-hero-blob--2" aria-hidden="true" />

          <div className="container svc-hero-content">
            <div className="svc-eyebrow">
              <span className="svc-eyebrow-dot" />
              Professional Services
            </div>

            <h1 className="svc-hero-title">
              End-to-end{' '}
              <span className="svc-gold">AI &amp; digital</span> services
            </h1>

            <p className="svc-hero-sub">
              From AI product development to full-stack web builds, creative
              work, and training &mdash; we help your organization thrive in
              the digital age.
            </p>
          </div>
        </section>

        {/* ================= SERVICE GRID ================= */}
        <section className="section svc-list">
          <div className="container">
            <div className="svc-grid">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className="svc-card"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="svc-card-icon">
                    <ServiceIcon name={service.icon_name} />
                  </div>
                  <h3 className="svc-card-title">{service.name}</h3>
                  {service.short_description && (
                    <p className="svc-card-desc">{service.short_description}</p>
                  )}
                  <span className="svc-card-cta">
                    Learn More <span aria-hidden="true">→</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="section svc-why">
          <div className="container">
            <div className="svc-section-head">
              <h2>
                Why <span className="svc-gold">Choose Us</span>
              </h2>
              <div className="svc-rule" />
            </div>

            <div className="svc-why-grid">
              {WHY_US.map((item) => (
                <div key={item.title} className="svc-why-card">
                  <div className="svc-why-icon">
                    <WhyIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="section svc-process">
          <div className="container">
            <div className="svc-section-head">
              <h2>
                Our <span className="svc-gold">Working Process</span>
              </h2>
              <div className="svc-rule" />
            </div>

            <div className="svc-process-grid">
              {PROCESS.map((p, idx) => (
                <div key={p.step} className="svc-process-step">
                  <div className="svc-process-num">{p.step}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  {idx < PROCESS.length - 1 && (
                    <div className="svc-process-arrow" aria-hidden="true">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section svc-cta">
          <div className="container">
            <div className="svc-cta-card">
              <h2>
                Ready to{' '}
                <span className="svc-gold">transform your business?</span>
              </h2>
              <p>
                Let&rsquo;s discuss how our services can help you achieve your
                goals.
              </p>
              <Link to="/contact" className="svc-cta-btn">
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ================= SERVICE DETAIL MODAL ================= */}
      {selectedService && (
        <div
          className="svc-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="svc-modal-title"
        >
          <div
            className="svc-modal-backdrop"
            onClick={() => setSelectedService(null)}
          />

          <div className="svc-modal-panel">
            <div className="svc-modal-head">
              <div className="svc-modal-head-left">
                <div className="svc-modal-icon">
                  <ServiceIcon name={selectedService.icon_name} />
                </div>
                <h2 id="svc-modal-title" className="svc-modal-title">
                  {selectedService.name}
                </h2>
              </div>
              <button
                type="button"
                className="svc-modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {(() => {
              const details = getServiceDetails(selectedService.slug);

              return (
                <div className="svc-modal-body">
                  <p className="svc-modal-desc">{details.fullDescription}</p>

                  <div className="svc-modal-section">
                    <h3 className="svc-modal-section-title">What We Offer</h3>
                    <ul className="svc-modal-list">
                      {details.offerings.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="svc-modal-section">
                    <h3 className="svc-modal-section-title">Our Process</h3>
                    <div className="svc-modal-process">
                      {details.process.map((step, idx) => (
                        <div key={idx} className="svc-modal-process-item">
                          <span className="svc-modal-check" aria-hidden="true">
                            ✓
                          </span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="svc-modal-section">
                    <h3 className="svc-modal-section-title">Key Benefits</h3>
                    <div className="svc-modal-chips">
                      {details.benefits.map((b, idx) => (
                        <span key={idx} className="svc-modal-chip">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="svc-modal-section">
                    <h3 className="svc-modal-section-title">Ideal For</h3>
                    <div className="svc-modal-chips">
                      {details.targetClients.map((c, idx) => (
                        <span key={idx} className="svc-modal-chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="svc-modal-pricing">
                    <span className="svc-modal-pricing-label">Pricing</span>
                    <span className="svc-modal-pricing-value">
                      {details.pricingModel}
                    </span>
                  </div>

                  <Link to="/contact" className="svc-modal-cta">
                    Request This Service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}