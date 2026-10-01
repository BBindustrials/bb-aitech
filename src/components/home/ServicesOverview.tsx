import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css';

// ---- Preview images for each service --------------------------------
// Drop these into src/assets/services/
import imgWeb from '../../assets/services/web-development.png';
import imgAi from '../../assets/services/ai-solutions.jpg';
import imgEdtech from '../../assets/services/edtech.jpg';
import imgMobile from '../../assets/services/mobile-apps.jpg';
import imgTraining from '../../assets/services/training.jpg';

// ---- Types -----------------------------------------------------------
interface ServiceLocal {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  ctaLabel: string;
  image: string;
}

// ---- Data ------------------------------------------------------------
const SERVICES: ServiceLocal[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    name: 'Web Development',
    shortDescription:
      'Fast, mobile-first websites for schools, institutions, and businesses — built to convert visitors into students, clients, and partners.',
    ctaLabel: 'Build a website',
    image: imgWeb,
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    name: 'AI Solutions',
    shortDescription:
      'Custom AI systems — CBT platforms, exam graders, personalized learning engines, and intelligent automations built for your workflows.',
    ctaLabel: 'See AI solutions',
    image: imgAi,
  },
  {
    id: 'edtech',
    slug: 'edtech',
    name: 'EdTech Platforms',
    shortDescription:
      'Learning platforms, CBT systems, and exam-prep tools designed for schools, training centers, and EdTech startups.',
    ctaLabel: 'Explore EdTech',
    image: imgEdtech,
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    name: 'Mobile Applications',
    shortDescription:
      'iOS and Android apps that extend your platform to students, staff, and customers — with offline-friendly, native performance.',
    ctaLabel: 'Plan your app',
    image: imgMobile,
  },
  {
    id: 'training',
    slug: 'training',
    name: 'Training & Enablement',
    shortDescription:
      'Hands-on workshops and onboarding programs that get your team confident with the tools we build — no endless manuals.',
    ctaLabel: 'Book a session',
    image: imgTraining,
  },
];

// ---- Component -------------------------------------------------------
export default function ServicesOverview() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);


  return (
    <section className="section services-section">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <h2>
            Professional <span className="gold-italic">Services</span>
          </h2>
          <p>
            End-to-end AI and digital transformation services for schools,
            institutions, and businesses.
          </p>
        </div>

        {/* Two-column showcase */}
        <div className="services-showcase">
          {/* Left: preview image */}
          <div className="services-preview">
            <div className="services-preview-frame">
              {SERVICES.map((s) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={`${s.name} preview`}
                  className={`services-preview-img ${
                    s.id === activeId ? 'is-active' : ''
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Right: list */}
          <div className="services-list">
            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  className={`services-row ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveId(service.id);
                    }
                  }}
                >
                  <div className="services-row-head">
                    <h3 className="services-row-name">{service.name}</h3>
                    <span className="services-row-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  {/* Expandable body */}
                  <div className="services-row-body">
                    <p className="services-row-desc">
                      {service.shortDescription}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="services-row-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.ctaLabel} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="services-footer">
          <Link to="/services" className="services-footer-link">
            Explore All Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}