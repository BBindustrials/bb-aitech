import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { useState } from 'react';
import './FounderPortfolio.css';

// ---- Founder portrait ---------------------------------------------------
import founderPortrait from '../../assets/team/taiwo.png';

// ---- Project screenshots -----------------------------------------------
import justCbtHome from '../../assets/projects/justcbt/home.png';
import justCbtResult from '../../assets/projects/justcbt/result.png';
import broadoakHome from '../../assets/projects/broadoak/home.png';
import iquireHome from '../../assets/projects/iquire/home.png';

// ---- Types --------------------------------------------------------------
interface ImpactMetric {
  value: string;
  label: string;
}

interface ExperienceItem {
  role: string;
  org: string;
  meta: string;
  summary: string;
  bullets: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  status: string;
  note?: string;
}

// ---- Data ---------------------------------------------------------------
const IMPACT: ImpactMetric[] = [
  { value: '13+', label: 'Schools reached' },
  { value: '3', label: 'States reached' },
  { value: '9', label: 'Schools willing to test JustCBT AI' },
  { value: '50+', label: 'Teachers trained' },
  { value: '100+', label: 'People reached through digital literacy' },
  { value: '3+', label: 'Websites & digital products built' },
];

const WHAT_I_DO = [
  {
    title: 'AI Product Development',
    desc: 'Designing and building AI-powered products around specific user and business problems.',
    icon: 'brain',
  },
  {
    title: 'Data Analytics & Modelling',
    desc: 'Using statistical thinking, data analysis and quantitative methods to understand problems and support decisions.',
    icon: 'chart',
  },
  {
    title: 'Full-Stack Development',
    desc: 'Building web applications across frontend, backend, APIs and databases.',
    icon: 'code',
  },
  {
    title: 'AI Integration',
    desc: 'Integrating LLMs and AI capabilities into practical software products.',
    icon: 'spark',
  },
  {
    title: 'EdTech & Assessment',
    desc: 'Building technology for digital assessment, AI-assisted marking, learning and educational workflows.',
    icon: 'cap',
  },
  {
    title: 'Digital Transformation',
    desc: 'Helping organizations move manual processes toward practical digital systems.',
    icon: 'refresh',
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Founder',
    org: 'BB AI Tech Solutions',
    meta: 'Oct 2025 – Present · Ekiti State, Nigeria',
    summary:
      'Founded and lead an AI/software technology company focused on building practical solutions for schools, businesses and institutions.',
    bullets: [
      'Building JustCBT AI — an AI-powered assessment platform',
      'Developing AI-powered education solutions',
      'Product discovery and validation with schools',
      'Full-stack product development',
      'AI/LLM integration',
      'Digital transformation initiatives',
    ],
  },
  {
    role: 'ICT Teacher / Technology Support',
    org: 'The Broadoak Schools',
    meta: 'Jul 2025 – Jun 2026 · Owerri, Imo State',
    summary:
      'Supported technology adoption across the school while teaching ICT and helping staff integrate digital tools into their workflows.',
    bullets: [
      'Trained 50+ teachers on digital tools',
      'Supported CBT examinations',
      'Built & maintained school digital systems',
      'Supported school website & domain email',
      'Worked on school database workflows',
      'Supported SchoolTry → Klasify migration',
      'Conducted Excel & digital-skills training',
    ],
  },
  {
    role: 'Procurement Intern',
    org: 'Ise/Orun Local Government',
    meta: 'Oct 2023 – Feb 2024 · Ekiti State',
    summary:
      'Worked with procurement records and used data analysis to support procurement reporting and expenditure review.',
    bullets: [
      'Entered and organized procurement records',
      'Conducted spend analysis',
      'Compared annual budget allocations with expenditure',
    ],
  },
  {
    role: 'Video Editor',
    org: 'Sucpro Studios',
    meta: 'Oct 2021 – Present',
    summary:
      'Producing and editing digital media including trailers, presentations, music videos, lyric videos and AI spokesperson videos.',
    bullets: [
      'Video editing & post-production',
      'AI spokesperson video creation',
      'Creative direction & storytelling',
    ],
  },
  {
    role: 'Volunteer Video Editor',
    org: 'Teens Hub Africa',
    meta: 'Feb 2023 – Nov 2024',
    summary:
      'Volunteered editing video content for youth-focused programmes and community outreach.',
    bullets: ['Community content production'],
  },
];

const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech Statistics',
    school: 'Federal University of Technology, Akure',
    status: 'Completed',
    note: 'CGPA: 4.36 / 5.0 — Second Class Upper Honours',
  },
  {
    degree: 'MSc Financial Engineering',
    school: 'WorldQuant University',
    status: 'In Progress',
  },
  {
    degree: 'MSc Computer Science',
    school: 'Institution to be confirmed',
    status: 'In Progress',
  },
  {
    degree: 'Professional Diploma in Project Management',
    school: 'MSME Institute of Management & Professional Studies',
    status: 'Completed',
    note: 'Issued May 2026',
  },
];

const SKILLS = {
  'AI & Data': [
    'Python',
    'Statistical Analysis',
    'Statistical Modelling',
    'Data Analysis',
    'Machine Learning',
    'AI/LLM Integration',
    'Prompt Engineering',
    'AI Evaluation',
  ],
  'Software Engineering': [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'FastAPI',
    'Supabase',
    'R',
  ],
  'Product & Design': [
    'Product Development',
    'Product Ideation',
    'UX',
    'Design Thinking',
    'Agile',
    'MVP Development',
    'User Research',
    'Product Validation',
    'Digital Transformation',
    'Digital Workflow Design',
    'Technology Adoption',
    'ICT Training',
    'Enterprise Systems',
    'Business Requirements',
  ],
};

const APPROACH = [
  { num: '01', title: 'Problem', desc: 'Understand the actual problem before building.' },
  { num: '02', title: 'Evidence', desc: 'Gather information from users, data and the environment.' },
  { num: '03', title: 'Product', desc: 'Turn the problem into a practical product or system.' },
  { num: '04', title: 'Test', desc: 'Put the solution in front of real users.' },
  { num: '05', title: 'Learn', desc: 'Study what works, what doesn’t and why.' },
  { num: '06', title: 'Improve', desc: 'Iterate based on evidence.' },
];

const RECOGNITION = [
  { title: 'Most Impactful Steward', issuer: 'The Visionary Nation', year: '2024' },
  { title: 'Award of Excellence for Service', issuer: 'The Broadoak Schools', year: '2026' },
  { title: 'Award of Service', issuer: 'NITDA / Digital Literacy for All CDS / NYSC', year: '2026' },
];

const PROFESSIONAL_DEV = [
  { title: 'High Performance Teams', issuer: 'Dunin-Deshpande Innovation Centre at Queen’s University', year: '2026' },
  { title: 'Introduction to Design Thinking', issuer: 'Dunin-Deshpande Innovation Centre at Queen’s University', year: '2026' },
  { title: 'Professional Diploma in Project Management', issuer: 'MSME Institute of Management & Professional Studies', year: '2026' },
  { title: 'Foundations of Financial Engineering', issuer: 'WorldQuant University', year: '2025' },
  { title: 'Accenture Skills to Succeed', issuer: 'Accenture', year: '2024' },
];

const ADDITIONAL_PROGRAMS = [
  'iQuire Cohort 26B',
  'African Impact Initiative',
  'Mastercard entrepreneurship programs',
  'Empowering African Educators in an AI-Driven World / TrainDTrainer',
  'Imo Economic Summit',
  'Jobberman Soft Skills Training',
  'SAP professional-development courses',
];

// ---- Small SVG icon components ------------------------------------------
const Icon = ({ name }: { name: string }) => {
  const common = { width: 26, height: 26, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 5v1a3 3 0 0 0 3 3h1V3H9Z" />
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 5v1a3 3 0 0 1-3 3h-1V3h1Z" />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l3-4 4 3 5-7" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m8 6-6 6 6 6" />
          <path d="m16 6 6 6-6 6" />
        </svg>
      );
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
        </svg>
      );
    case 'cap':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M2 10 12 5l10 5-10 5L2 10Z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 4v5h-5" />
        </svg>
      );
    default:
      return null;
  }
};

// ---- Component ----------------------------------------------------------
export default function FounderPortfolio() {
  const [showAllCredentials, setShowAllCredentials] = useState(false);

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="fp-hero">
          <div className="fp-hero-bg" aria-hidden="true" />
          <div className="fp-hero-blob fp-hero-blob--1" aria-hidden="true" />
          <div className="fp-hero-blob fp-hero-blob--2" aria-hidden="true" />

          <div className="container fp-hero-grid">
            <div className="fp-hero-copy">
              <div className="fp-eyebrow">
                <span className="fp-eyebrow-dot" />
                Founder Portfolio
              </div>

              <h1 className="fp-hero-title">
                Building{' '}
                <span className="gold-italic">intelligent systems</span> for
                real-world problems.
              </h1>

              <p className="fp-hero-name">
                <strong>Taiwo Bright Ajayi</strong> — AI Product Builder · Data
                &amp; Software Engineer · EdTech Founder
              </p>

              <p className="fp-hero-sub">
                I combine statistics, software engineering, AI and product
                thinking to build practical technology solutions, particularly
                in education and assessment.
              </p>

              <div className="fp-hero-cta">
                <a href="#featured-work" className="fp-btn fp-btn--dark">
                  View My Work <span aria-hidden="true">↓</span>
                </a>
                <a href="#contact" className="fp-btn fp-btn--light">
                  Let&rsquo;s Connect <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="fp-hero-thread">
                AI <span>×</span> DATA <span>×</span> SOFTWARE <span>×</span>{' '}
                PRODUCT <span>×</span> EDUCATION
              </div>
            </div>

            <div className="fp-hero-portrait">
              <div className="fp-hero-portrait-frame">
                <img src={founderPortrait} alt="Ajayi Taiwo Bright" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="section fp-about">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                About <span className="gold-italic">Me</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-about-body">
              <p>
                I&rsquo;m a statistics graduate and technology builder
                interested in using data, software and artificial intelligence
                to solve practical problems.
              </p>
              <p>
                My journey began with statistics, where I developed a
                foundation in quantitative reasoning, data analysis and
                statistical modelling. That foundation gradually led me into
                software development, AI, product development and digital
                transformation.
              </p>
              <p>
                Today, I am building products through{' '}
                <span className="gold-italic">BB AI Tech Solutions</span>,
                including <strong>JustCBT AI</strong>, an AI-powered assessment
                platform designed to help schools conduct and evaluate
                examinations more efficiently.
              </p>
              <p>
                I am currently pursuing postgraduate studies in Financial
                Engineering at WorldQuant University and Computer Science,
                while continuing to build and experiment at the intersection
                of AI, education, data and technology.
              </p>
            </div>

            {/* Education strip */}
            <div className="fp-edu-strip">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="fp-edu-chip">
                  <div className="fp-edu-degree">{e.degree}</div>
                  <div className="fp-edu-school">{e.school}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT I DO ================= */}
        <section className="section fp-what">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                What I <span className="gold-italic">Do</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-what-grid">
              {WHAT_I_DO.map((item) => (
                <div key={item.title} className="fp-what-card">
                  <div className="fp-what-icon">
                    <Icon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURED WORK ================= */}
        <section className="section fp-work" id="featured-work">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                Featured <span className="gold-italic">Work</span>
              </h2>
              <div className="fp-rule" />
              <p className="fp-section-sub">
                A look at products and systems I&rsquo;ve built &mdash; the
                problem they solve, and how I approached them.
              </p>
            </div>

            {/* Project 01 — JustCBT AI */}
            <article className="fp-project">
              <div className="fp-project-image">
                <div className="fp-project-fan">
                  <div className="fp-project-sheet fp-project-sheet--left">
                    <img src={justCbtResult} alt="JustCBT AI — results view" loading="lazy" />
                  </div>
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img src={justCbtHome} alt="JustCBT AI — landing" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 01</span>
                  <span className="fp-project-status fp-project-status--live">Live</span>
                </div>
                <h3>JustCBT AI</h3>
                <p className="fp-project-tagline">
                  AI-powered assessment for schools
                </p>
                <p className="fp-project-desc">
                  JustCBT AI is an AI-powered assessment platform designed for
                  secondary schools. It combines computer-based testing with
                  AI-assisted theory marking, question generation,
                  anti-cheating mechanisms and automated feedback.
                </p>

                <div className="fp-project-block">
                  <div className="fp-project-block-label">Problem</div>
                  <p>
                    Traditional assessment workflows can be costly and
                    time-consuming, particularly for theory examinations.
                  </p>
                </div>

                <div className="fp-project-block">
                  <div className="fp-project-block-label">Solution</div>
                  <p>Digital assessment + AI-assisted evaluation.</p>
                </div>

                <div className="fp-project-chips">
                  <span className="fp-project-chips-label">Built with</span>
                  <div className="fp-project-chips-list">
                    {['React', 'TypeScript', 'Supabase', 'AI / LLMs'].map((t) => (
                      <span key={t} className="fp-chip fp-chip--tech">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="fp-project-chips">
                  <span className="fp-project-chips-label">Features</span>
                  <div className="fp-project-chips-list">
                    {[
                      'CBT examinations',
                      'MCQ auto-marking',
                      'AI theory marking',
                      'AI question generation',
                      'Question bank',
                      'Anti-cheating controls',
                      'Student feedback',
                      'AI report-card comments',
                    ].map((t) => (
                      <span key={t} className="fp-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://justcbtai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-project-link"
                >
                  View Project <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            {/* Project 02 — Just Learning Loop */}
            <article className="fp-project fp-project--reverse">
              <div className="fp-project-image fp-project-image--concept">
                <div className="fp-concept-card">
                  <div className="fp-concept-icon">
                    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v12H4z" />
                      <path d="M8 20h8M12 16v4" />
                      <path d="M8 10l3 3 5-5" />
                    </svg>
                  </div>
                  <div className="fp-concept-label">Research Concept</div>
                  <h4>Just Learning Loop</h4>
                  <p>Assessment intelligence → student progress insights.</p>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 02</span>
                  <span className="fp-project-status fp-project-status--concept">
                    Proposed / Research
                  </span>
                </div>
                <h3>Just Learning Loop</h3>
                <p className="fp-project-tagline">
                  An assessment intelligence layer
                </p>
                <p className="fp-project-desc">
                  An AI-powered assessment intelligence layer designed to
                  transform assessment evidence into actionable student
                  progress insights and next-step guidance for students and
                  teachers.
                </p>
                <p className="fp-project-desc fp-project-desc--note">
                  Currently a proposed advancement to JustCBT AI &mdash; not
                  yet deployed.
                </p>
              </div>
            </article>

            {/* Project 03 — School Digital Transformation */}
            <article className="fp-project">
              <div className="fp-project-image">
                <div className="fp-project-fan fp-project-fan--single">
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img src={broadoakHome} alt="BroadOak Schools — website" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 03</span>
                  <span className="fp-project-status fp-project-status--client">
                    Client Work
                  </span>
                </div>
                <h3>School Digital Transformation</h3>
                <p className="fp-project-tagline">
                  Helping schools adopt practical digital systems
                </p>
                <p className="fp-project-desc">
                  A case-study collection of end-to-end digital transformation
                  work delivered for schools &mdash; from websites and email to
                  CBT deployment and teacher enablement.
                </p>

                <div className="fp-project-chips">
                  <span className="fp-project-chips-label">Delivered</span>
                  <div className="fp-project-chips-list">
                    {[
                      'School website development',
                      'Domain email setup',
                      'Database systems',
                      'CBT implementation',
                      'SchoolTry → Klasify migration',
                      'Teacher ICT training',
                      'Digital workflow support',
                    ].map((t) => (
                      <span key={t} className="fp-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Project 04 — BB EdTech AI */}
            <article className="fp-project fp-project--reverse">
              <div className="fp-project-image">
                <div className="fp-project-fan fp-project-fan--single">
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img src={iquireHome} alt="iQuire — a client platform" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 04</span>
                  <span className="fp-project-status fp-project-status--live">
                    Exploring
                  </span>
                </div>
                <h3>BB EdTech AI</h3>
                <p className="fp-project-tagline">
                  Broader EdTech product exploration
                </p>
                <p className="fp-project-desc">
                  An AI-powered learning and examination support platform
                  focused on helping learners understand what examiners expect,
                  apply appropriate methods and improve examination
                  performance.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section className="section fp-impact">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                <span className="gold-italic">Impact</span>
              </h2>
              <div className="fp-rule" />
              <p className="fp-section-sub">
                Reported activity across schools, teachers and communities.
              </p>
            </div>

            <div className="fp-impact-grid">
              {IMPACT.map((m) => (
                <div key={m.label} className="fp-impact-card">
                  <div className="fp-impact-value">{m.value}</div>
                  <div className="fp-impact-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="fp-impact-role">
              <span className="fp-impact-role-label">Current Role</span>
              <span className="fp-impact-role-value">
                Founder — BB AI Tech Solutions
              </span>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="section fp-experience">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                <span className="gold-italic">Experience</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-exp-list">
              {EXPERIENCE.map((item, idx) => (
                <div key={idx} className="fp-exp-item">
                  <div className="fp-exp-head">
                    <div>
                      <h3 className="fp-exp-role">{item.role}</h3>
                      <p className="fp-exp-org">{item.org}</p>
                    </div>
                    <div className="fp-exp-meta">{item.meta}</div>
                  </div>
                  <p className="fp-exp-summary">{item.summary}</p>
                  <div className="fp-exp-bullets-label">Selected work</div>
                  <ul className="fp-exp-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="section fp-education">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                <span className="gold-italic">Education</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-edu-grid">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="fp-edu-card">
                  <div className="fp-edu-status">{e.status}</div>
                  <h3>{e.degree}</h3>
                  <p className="fp-edu-card-school">{e.school}</p>
                  {e.note && <p className="fp-edu-card-note">{e.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="section fp-skills">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                <span className="gold-italic">Skills</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-skills-grid">
              {Object.entries(SKILLS).map(([group, items]) => (
                <div key={group} className="fp-skill-group">
                  <h3 className="fp-skill-group-title">{group}</h3>
                  <div className="fp-skill-chips">
                    {items.map((s) => (
                      <span key={s} className="fp-skill-chip">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="section fp-approach">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                How I <span className="gold-italic">Build</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-approach-grid">
              {APPROACH.map((step, idx) => (
                <div key={step.num} className="fp-approach-step">
                  <div className="fp-approach-num">{step.num}</div>
                  <h3 className="fp-approach-title">{step.title}</h3>
                  <p className="fp-approach-desc">{step.desc}</p>
                  {idx < APPROACH.length - 1 && (
                    <div className="fp-approach-arrow" aria-hidden="true">↓</div>
                  )}
                </div>
              ))}
            </div>

            <div className="fp-approach-formula">
              Problem → Evidence → Product → Test → Learn → Improve
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="section fp-achievements">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                Achievements &amp;{' '}
                <span className="gold-italic">Certifications</span>
              </h2>
              <div className="fp-rule" />
            </div>

            {/* Recognition */}
            <h3 className="fp-subhead">Recognition</h3>
            <div className="fp-recognition-grid">
              {RECOGNITION.map((r) => (
                <div key={r.title} className="fp-recognition-card">
                  <div className="fp-recognition-year">{r.year}</div>
                  <h4>{r.title}</h4>
                  <p>{r.issuer}</p>
                </div>
              ))}
            </div>

            {/* Professional development */}
            <h3 className="fp-subhead">Professional Development</h3>
            <div className="fp-cred-list">
              {PROFESSIONAL_DEV.slice(0, showAllCredentials ? undefined : 3).map((c) => (
                <div key={c.title} className="fp-cred-item">
                  <div className="fp-cred-dot" />
                  <div className="fp-cred-body">
                    <div className="fp-cred-title">{c.title}</div>
                    <div className="fp-cred-issuer">
                      {c.issuer} · {c.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional programs */}
            {showAllCredentials && (
              <>
                <h3 className="fp-subhead">Additional Programs</h3>
                <div className="fp-programs-list">
                  {ADDITIONAL_PROGRAMS.map((p) => (
                    <span key={p} className="fp-program-chip">{p}</span>
                  ))}
                </div>
              </>
            )}

            <div className="fp-credentials-toggle">
              <button
                onClick={() => setShowAllCredentials((s) => !s)}
                className="fp-credentials-btn"
              >
                {showAllCredentials ? 'Show less ↑' : 'View all credentials →'}
              </button>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="section fp-contact" id="contact">
          <div className="container">
            <div className="fp-contact-card">
              <div className="fp-section-head fp-section-head--left">
                <h2>
                  Let&rsquo;s build <span className="gold-italic">something useful.</span>
                </h2>
                <div className="fp-rule fp-rule--left" />
              </div>

              <p className="fp-contact-sub">
                Have a problem worth solving, a product idea to explore, or an
                opportunity to collaborate?
              </p>

              <div className="fp-contact-actions">
                <a href="mailto:info@bbaitech.com" className="fp-btn fp-btn--dark">
                  Email Me <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/taiwo-bright-ajayi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-btn fp-btn--light"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-btn fp-btn--light"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="#featured-work" className="fp-btn fp-btn--light">
                  View My Projects <span aria-hidden="true">↑</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}