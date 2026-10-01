
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../utils/supabaseClient';
import type { Product } from '../../types';
import WaitlistModal from '../../components/common/WaitlistModal';
import './Solutions.css';

// ---- Project screenshots -------------------------------------------
import justCbtHome from '../../assets/projects/justcbt/home.png';
import justCbtExam from '../../assets/projects/justcbt/exam.png';
import justCbtResult from '../../assets/projects/justcbt/result.png';

import teachIddHome from '../../assets/projects/teach-idd/home.png';

import broadoakHome from '../../assets/projects/broadoak/home.png';
import broadoakAdmission from '../../assets/projects/broadoak/admission.png';
import broadoakGallery from '../../assets/projects/broadoak/gallery.png';

import iquireHome from '../../assets/projects/iquire/home.png';
import iquireCourses from '../../assets/projects/iquire/courses.png';
import iquireOpportunities from '../../assets/projects/iquire/opportunities.png';

// =========================================================
// TYPES
// =========================================================
type Status = 'live' | 'beta' | 'development' | 'planned';
type Kind = 'product' | 'client';

interface ProjectLocal {
  id: string;
  name: string;
  slug: string;
  kind: Kind;
  category: string;
  status: Status;
  tagline: string;
  fullDescription: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  benefits: string[];
  targetAudience: string[];
  techStack: string[];
  shots: string[]; // 1–3 screenshots
  ctaLink: string | null;
  ctaLabel?: string;
}

interface SelectedProduct {
  id: string;
  name: string;
  slug: string;
}

// =========================================================
// LOCAL PROJECTS DATA (fallback + source of truth for details)
// =========================================================
const PROJECTS: ProjectLocal[] = [
  {
    id: 'justcbt-ai',
    name: 'JustCBT AI',
    slug: 'justcbt-ai',
    kind: 'product',
    category: 'CBT Platform',
    status: 'live',
    tagline: 'Anti-cheating theory CBT — graded by AI, controlled by you.',
    fullDescription:
      'JustCBT AI is an anti-cheating theory-based Computer-Based Testing platform that helps institutions save money on theory exam printing and eliminates the stress of marking endless scripts. The AI grades theory answers intelligently while you maintain 100% control over the system.',
    problemStatement:
      'Traditional CBT platforms cannot grade theory answers effectively, leading to manual marking stress, high printing costs for theory questions, and vulnerability to cheating during examinations.',
    solution:
      'A secure online examination system with AI-powered theory grading, advanced anti-cheating mechanisms, and complete institutional control over the examination process.',
    keyFeatures: [
      'AI-powered theory answer grading',
      'Advanced anti-cheating detection',
      'Cost-effective exam delivery (no printing)',
      'Automated marking with rubric support',
      'Complete admin dashboard with full control',
      'Real-time results and analytics',
      'Question bank management',
      'Candidate authentication and proctoring',
    ],
    benefits: [
      'Save up to 70% on exam printing costs',
      'Eliminate manual marking stress',
      'AI theory grading with high accuracy',
      '100% admin control over grading',
      'Prevent cheating with advanced detection',
      'Instant results for candidates',
    ],
    targetAudience: [
      'Universities and tertiary institutions',
      'Secondary schools',
      'Professional examination bodies',
      'Corporate training departments',
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'AI / LLMs'],
    shots: [justCbtHome, justCbtExam, justCbtResult],
    ctaLink: 'https://justcbtai.com',
    ctaLabel: 'Visit JustCBT AI',
  },
  {
    id: 'teach-idd',
    name: 'Teach IDD',
    slug: 'teach-idd',
    kind: 'product',
    category: 'EdTech',
    status: 'development',
    tagline: 'A personalized AI assistant for teachers of students with IDD.',
    fullDescription:
      'Teach IDD is a personalized AI assistant for teachers of students with intellectual and developmental disabilities. It provides personalized learning content for each student, helps measure comprehension, and gives parents daily progress reports on improvement and learning outcomes.',
    problemStatement:
      'Teachers of students with IDD struggle to create personalized content for each student, track individual progress effectively, and communicate progress with parents in a meaningful way.',
    solution:
      'An adaptive learning system with AI-powered content personalization, comprehension tracking, and automated parent reporting for students with special needs.',
    keyFeatures: [
      'Personalized learning paths for each student',
      'AI-powered comprehension tracking',
      'Daily automated parent progress reports',
      'Adaptive content delivery',
      'Teacher dashboard with analytics',
      'Behavioral pattern recognition',
    ],
    benefits: [
      'Save hours on lesson personalization',
      'Track each student’s progress accurately',
      'Keep parents informed daily',
      'Improve learning outcomes with adaptive content',
      'Identify intervention needs early',
    ],
    targetAudience: [
      'Special education teachers',
      'Schools with inclusive education programs',
      'Rehabilitation centres',
      'Educational therapists',
    ],
    techStack: ['React', 'TypeScript', 'Python', 'Supabase'],
    shots: [teachIddHome],
    ctaLink: null,
  },
  {
    id: 'broadoak-schools',
    name: 'The BroadOak Schools',
    slug: 'broadoak-schools',
    kind: 'client',
    category: 'School Website',
    status: 'live',
    tagline: 'Client project — a modern digital home for a leading Nigerian school.',
    fullDescription:
      'A full digital presence for The BroadOak Schools — a modern, mobile-first website that showcases the school’s programmes, admissions process, and campus life to prospective parents and students.',
    problemStatement:
      'Schools need a credible, fast, and easy-to-update online presence to compete for admissions and communicate with parents — without hiring a full-time web team.',
    solution:
      'A modern, mobile-first website with a clear admissions funnel and an easy-to-update content structure so the school’s team can manage it without developers.',
    keyFeatures: [
      'Mobile-first, fast-loading site',
      'Clear admissions funnel',
      'Easy content updates',
      'Gallery and campus-life pages',
      'Staff and academics showcase',
      'Contact and enquiry handling',
    ],
    benefits: [
      'Credible brand presence',
      'Better admissions conversion',
      'Faster page loads on mobile',
      'Self-service content updates',
    ],
    targetAudience: [
      'Prospective parents',
      'Current students and staff',
      'Prospective teachers',
      'Alumni and partners',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Custom CMS'],
    shots: [broadoakHome, broadoakAdmission, broadoakGallery],
    ctaLink: 'https://broadoakschools.com',
    ctaLabel: 'View project',
  },
  {
    id: 'iquire',
    name: 'iQuire',
    slug: 'iquire',
    kind: 'client',
    category: 'EdTech Platform',
    status: 'live',
    tagline:
      'A client platform we designed & built — connecting learners with market-ready skills.',
    fullDescription:
      'IQuire is a global learning and career platform providing affordable, interactive live classes in digital and life skills. Built for fresh graduates, entry-level professionals, and career changers, it equips individuals with the entrepreneurial, soft, and technical skills to thrive in today’s competitive global job market.',
    problemStatement:
      'Millions of talented individuals worldwide lack access to quality training and meaningful career opportunities — not because they lack potential, but because the path to market-ready skills is often expensive, inaccessible, or disconnected from real-world jobs.',
    solution:
      'A modern learning platform with live classes, curated courses, and career-opportunity listings — built end-to-end as a client engagement.',
    keyFeatures: [
      'Live interactive classes',
      'Course catalogue and enrolment',
      'Opportunities board',
      'Career-focused curriculum',
      'Mobile-responsive experience',
      'Modern, performant stack',
    ],
    benefits: [
      'Accessible, affordable learning',
      'Job-market-ready skills',
      'Clear path to opportunities',
      'Fully remote-friendly',
    ],
    targetAudience: [
      'Fresh graduates',
      'Entry-level professionals',
      'Career changers',
      'Global learners',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    shots: [iquireHome, iquireCourses, iquireOpportunities],
    ctaLink: 'https://iquire.vercel.app',
    ctaLabel: 'View project',
  },
];

// =========================================================
// STATUS MAPS
// =========================================================
const STATUS_CLASS: Record<Status, string> = {
  live: 'sol-status--live',
  beta: 'sol-status--beta',
  development: 'sol-status--development',
  planned: 'sol-status--planned',
};

const STATUS_TEXT: Record<Status, string> = {
  live: 'LIVE',
  beta: 'BETA',
  development: 'IN DEVELOPMENT',
  planned: 'PLANNED',
};

// =========================================================
// COMPONENT
// =========================================================
export default function Solutions() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(
    null
  );

  // Optional Supabase fetch — only used to overlay status/order if present.
  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('display_order', { ascending: true });

        if (!cancelled && !error && data) {
          setProducts(data as Product[]);
        }
      } catch {
        // Silently fall back to local data
      } finally {
        // no-op
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  // Merge Supabase status/order into local project data if available
  const merged: ProjectLocal[] = PROJECTS.map((p) => {
    const remote = products.find((r) => r.slug === p.slug);
    if (!remote) return p;
    return {
      ...p,
      status: (remote.status as Status) ?? p.status,
      ctaLink: remote.cta_link ?? p.ctaLink,
    };
  });

  const ourProducts = merged.filter((p) => p.kind === 'product');
  const clientWork = merged.filter((p) => p.kind === 'client');



  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="sol-hero">
          <div className="sol-hero-bg" aria-hidden="true" />
          <div className="sol-hero-blob sol-hero-blob--1" aria-hidden="true" />
          <div className="sol-hero-blob sol-hero-blob--2" aria-hidden="true" />

          <div className="container sol-hero-content">
            <div className="sol-eyebrow">
              <span className="sol-eyebrow-dot" />
              Our Projects
            </div>

            <h1 className="sol-hero-title">
              Products we&rsquo;ve{' '}
              <span className="sol-gold">built</span>, clients we&rsquo;ve{' '}
              <span className="sol-gold">shipped for</span>
            </h1>

            <p className="sol-hero-sub">
              A closer look at the platforms and websites we&rsquo;ve designed,
              engineered, and launched &mdash; some are our own products,
              others are custom work delivered for clients.
            </p>
          </div>
        </section>

        {/* ================= OUR PRODUCTS ================= */}
        <section className="section sol-section">
          <div className="container">
            <div className="sol-group-head">
              <span className="sol-group-label">Our Products</span>
              <span className="sol-group-rule" />
            </div>

            <div className="sol-grid">
              {ourProducts.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onWaitlist={() =>
                    setSelectedProduct({
                      id: project.id,
                      name: project.name,
                      slug: project.slug,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CLIENT WORK ================= */}
        <section className="section sol-section sol-section--alt">
          <div className="container">
            <div className="sol-group-head">
              <span className="sol-group-label">Client Work</span>
              <span className="sol-group-rule" />
            </div>

            <div className="sol-grid">
              {clientWork.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onWaitlist={() =>
                    setSelectedProduct({
                      id: project.id,
                      name: project.name,
                      slug: project.slug,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="section sol-cta-wrap">
          <div className="container">
            <div className="sol-cta-card">
              <h2>
                Ready to{' '}
                <span className="sol-gold">build something great?</span>
              </h2>
              <p>
                Have a problem worth solving or a product idea to explore?
                Let&rsquo;s talk.
              </p>
              <div className="sol-cta-actions">
                <Link to="/request-demo" className="sol-cta-btn">
                  Request a Demo <span aria-hidden="true">→</span>
                </Link>
                <Link to="/contact" className="sol-cta-btn sol-cta-btn--light">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Waitlist Modal */}
      {selectedProduct && (
        <WaitlistModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          productId={selectedProduct.id}
          productSlug={selectedProduct.slug}
        />
      )}
    </>
  );
}

// =========================================================
// PROJECT CARD
// =========================================================
function ProjectCard({
  project,
  onWaitlist,
}: {
  project: ProjectLocal;
  onWaitlist: () => void;
}) {
  const fanSize =
    project.shots.length >= 3
      ? 'triple'
      : project.shots.length === 2
      ? 'double'
      : 'single';

  const isLive = project.status === 'live';
  const isClient = project.kind === 'client';

  return (
    <article className="sol-card">
      {/* Fanned screenshots */}
      <div className="sol-card-media">
        <div className={`sol-fan sol-fan--${fanSize}`}>
          {project.shots[1] && (
            <div className="sol-fan-sheet sol-fan-sheet--left">
              <img
                src={project.shots[1]}
                alt={`${project.name} — secondary view`}
                loading="lazy"
              />
            </div>
          )}
          {project.shots[2] && (
            <div className="sol-fan-sheet sol-fan-sheet--right">
              <img
                src={project.shots[2]}
                alt={`${project.name} — detail view`}
                loading="lazy"
              />
            </div>
          )}
          <div className="sol-fan-sheet sol-fan-sheet--center">
            <img
              src={project.shots[0]}
              alt={`${project.name} — main view`}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="sol-card-body">
        <div className="sol-card-meta">
          <span className="sol-card-cat">{project.category}</span>
          <span className={`sol-status ${STATUS_CLASS[project.status]}`}>
            {STATUS_TEXT[project.status]}
          </span>
        </div>

        <h3 className="sol-card-title">{project.name}</h3>
        <p className="sol-card-tagline">{project.tagline}</p>
        <p className="sol-card-desc">{project.fullDescription}</p>

        <div className="sol-card-block">
          <div className="sol-card-block-label">The Challenge</div>
          <p>{project.problemStatement}</p>
        </div>

        <div className="sol-card-block">
          <div className="sol-card-block-label">Our Solution</div>
          <p>{project.solution}</p>
        </div>

        <div className="sol-card-chips">
          <span className="sol-card-chips-label">Built with</span>
          <div className="sol-card-chips-list">
            {project.techStack.map((tech) => (
              <span key={tech} className="sol-chip sol-chip--tech">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="sol-card-features">
          <div className="sol-card-chips-label">Key Features</div>
          <ul className="sol-feature-list">
            {project.keyFeatures.slice(0, 4).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
            {project.keyFeatures.length > 4 && (
              <li className="sol-feature-more">
                +{project.keyFeatures.length - 4} more
              </li>
            )}
          </ul>
        </div>

        <div className="sol-card-actions">
          {isLive && project.ctaLink ? (
            <a
              href={project.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sol-btn sol-btn--dark"
            >
              {isClient ? 'View project' : `Visit ${project.name}`}{' '}
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={onWaitlist}
              className="sol-btn sol-btn--gold"
            >
              Join the waitlist <span aria-hidden="true">→</span>
            </button>
          )}

          <Link to={`/solutions/${project.slug}`} className="sol-btn sol-btn--light">
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}