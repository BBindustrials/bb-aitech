
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import './TaiwoBrightAjayi.css';

// ---- Founder portrait ---------------------------------------------------
import taiwoImage from '../../assets/team/taiwo.png';

// ---- Project images -----------------------------------------------------
import digitalLiteracyImg from '../../assets/projects/graphics-design.jpeg';
import graphicsDesignImg from '../../assets/projects/graphics-design.png';
import webAppImg from '../../assets/projects/web-app.png';
import counsellingImg from '../../assets/team/counselling(2).png';

// ---- Project screenshots -----------------------------------------------
import justCbtHome from '../../assets/projects/justcbt/home.png';
import justCbtResult from '../../assets/projects/justcbt/result.png';
import iquireHome from '../../assets/projects/iquire/home.png';
import iquireCourses from '../../assets/projects/iquire/courses.png';
import broadoakHome from '../../assets/projects/broadoak/home.png';

// ---- Company logos (Recognition + Trust strip) ------------------------
import logoBroadoak from '../../assets/logos/broadoak.png';
import logoIquire from '../../assets/logos/iquire.png';
import logoDl4all from '../../assets/logos/dl4all.png';
import logoSucpro from '../../assets/logos/sucpro.jpeg';
import logoVisionary from '../../assets/logos/visionary-nation.png';
import logoNysc from '../../assets/logos/nysc.png';

// ---- School logos (Education section only) ----------------------------
import logoFuta from '../../assets/logos/futa.png';
import logoWqu from '../../assets/logos/wqu.png';
import logoMsme from '../../assets/logos/msme.png';

// =========================================================
// DATA
// =========================================================

const IMPACT = [
  { value: '13', label: 'Schools reached for research' },
  { value: '3', label: 'States across Nigeria' },
  { value: '9', label: 'Schools ready to test JustCBT AI' },
  { value: '50+', label: 'Teachers trained' },
  { value: '100+', label: 'People reached through digital literacy' },
  { value: '4+', label: 'Websites & digital products built' },
];

// Work / collaboration history — schools are NOT here (they live in Education)
const TRUST_LOGOS = [
  { name: 'The Broadoak Schools', logo: logoBroadoak },
  { name: 'iQuire', logo: logoIquire },
  { name: 'DL4ALL', logo: logoDl4all },
  { name: 'Sucpro Studios', logo: logoSucpro },
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

const EXPERIENCE = [
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
      'Full-stack product development & AI/LLM integration',
      'Digital transformation initiatives',
    ],
  },
  {
    role: 'Technical Lead (Intern)',
    org: 'iQuire · United Kingdom (Remote)',
    meta: '2025 · Internship via Tech360 Program',
    summary:
      'Selected as technical lead during an internship at iQuire, a UK-based learning company. Led the team that built the iQuire web platform as the capstone for the Tech360 program.',
    bullets: [
      'Served as Technical Lead on the iQuire platform build',
      'Delivered the website end-to-end as the team lead',
      'Coordinated across a distributed remote team',
      'Worked with a modern React + TypeScript stack',
      'Shipped a live, production platform (iquire.vercel.app)',
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
      'Supported school website & domain email setup',
      'Worked on school database workflows',
      'Supported SchoolTry → Klasify migration',
      'Conducted Excel and digital-skills training',
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

// Journey order: B.Tech Stats → PM Diploma → MSc Financial Eng → MSc CS
const EDUCATION = [
  {
    degree: 'B.Tech Statistics',
    school: 'Federal University of Technology, Akure',
    status: 'Completed',
    note: 'CGPA: 4.36 / 5.0 — Second Class Upper Honours',
    logo: logoFuta,
  },
  {
    degree: 'Professional Diploma in Project Management',
    school: 'MSME Institute of Management & Professional Studies',
    status: 'Completed',
    note: 'Issued May 2026',
    logo: logoMsme,
  },
  {
    degree: 'MSc Financial Engineering',
    school: 'WorldQuant University',
    status: 'In Progress',
    logo: logoWqu,
  },
  {
    degree: 'MSc Computer Science',
    school: 'Postgraduate studies',
    status: 'In Progress',
    logo: null,
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

// Tools strip — icon slugs from Simple Icons CDN
const TOOLS = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
  { name: 'FastAPI', slug: 'fastapi', color: '009688' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Vite', slug: 'vite', color: '646CFF' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'R', slug: 'r', color: '276DC3' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E' },
];

const APPROACH = [
  { num: '01', title: 'Problem', desc: 'Understand the actual problem before building.' },
  { num: '02', title: 'Evidence', desc: 'Gather information from users, data and the environment.' },
  { num: '03', title: 'Product', desc: 'Turn the problem into a practical product or system.' },
  { num: '04', title: 'Test', desc: 'Put the solution in front of real users.' },
  { num: '05', title: 'Learn', desc: 'Study what works, what doesn’t and why.' },
  { num: '06', title: 'Improve', desc: 'Iterate based on evidence.' },
];

const RECOGNITION = [
  {
    title: 'Most Impactful Steward',
    issuer: 'The Visionary Nation',
    year: '2024',
    logo: logoVisionary,
  },
  {
    title: 'Award of Excellence for Service',
    issuer: 'The Broadoak Schools',
    year: '2026',
    logo: logoBroadoak,
  },
  {
    title: 'Award of Service',
    issuer: 'NITDA / Digital Literacy for All CDS / NYSC',
    year: '2026',
    logo: logoNysc,
  },
];

const PROFESSIONAL_DEV = [
  {
    title: 'High Performance Teams',
    issuer: 'Dunin-Deshpande Innovation Centre at Queen’s University',
    year: '2026',
  },
  {
    title: 'Introduction to Design Thinking',
    issuer: 'Dunin-Deshpande Innovation Centre at Queen’s University',
    year: '2026',
  },
  {
    title: 'Professional Diploma in Project Management',
    issuer: 'MSME Institute of Management & Professional Studies',
    year: '2026',
  },
  {
    title: 'Foundations of Financial Engineering',
    issuer: 'WorldQuant University',
    year: '2025',
  },
  {
    title: 'Accenture Skills to Succeed',
    issuer: 'Accenture',
    year: '2024',
  },
];

const PROGRAMS_AND_FELLOWSHIPS = [
  'Jim Leech Mastercard Foundation Fellowship on Entrepreneurship',
  'iQuire Cohort 26B',
  'African Impact Initiative',
  'Empowering African Educators in an AI-Driven World / TrainDTrainer',
  'Imo Economic Summit',
  'Jobberman Soft Skills Training',
  'SAP professional-development courses',
];

const OTHER_WORK = [
  {
    title: 'AI Videos & Counseling',
    description:
      'Creating impactful AI-powered counseling content and motivational videos for mental health awareness.',
    image: counsellingImg,
    link: 'https://www.youtube.com/@Livewithaprophet/shorts',
    category: 'Content Creation',
  },
  {
    title: 'Digital Literacy & Data Analytics Training',
    description:
      'Empowering individuals with essential digital skills and data analysis capabilities for the modern workforce.',
    image: digitalLiteracyImg,
    link: '#',
    category: 'Education',
  },
  {
    title: 'Graphics Design Portfolio',
    description:
      'Creative design work including branding, marketing materials, and visual identity development.',
    image: graphicsDesignImg,
    link: '#',
    category: 'Design',
  },
  {
    title: 'Web App Development',
    description:
      'Building modern, responsive web applications with cutting-edge technologies.',
    image: webAppImg,
    link: '/',
    category: 'Development',
  },
];

// =========================================================
// ICONS
// =========================================================
const Icon = ({ name }: { name: string }) => {
  const common = {
    width: 26,
    height: 26,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

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

// =========================================================
// COMPONENT
// =========================================================
export default function TaiwoBrightAjayi() {
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

              <h1 className="fp-hero-name-h1">
                Taiwo Bright <span className="fp-gold">Ajayi</span>
              </h1>

              <p className="fp-hero-role">
                AI Product Builder · Data &amp; Software Engineer · EdTech Founder
              </p>

              <p className="fp-hero-sub">
                I build AI-powered products that turn real-world problems into
                practical, measurable solutions &mdash; with a focus on
                education, assessment, data, and digital transformation.
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

              <div className="fp-hero-socials">
                <a
                  href="https://web.facebook.com/taiwo.bright.ajayi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-social"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/taiwo-bright-ajayi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-social"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@Livewithaprophet/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-social"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12c0 1.94.17 3.88.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.33-1.92.5-3.86.5-5.8 0-1.94-.17-3.88-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"
                    />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            <div className="fp-hero-portrait">
              <div className="fp-hero-portrait-frame">
                <img src={taiwoImage} alt="Ajayi Taiwo Bright" />
              </div>
            </div>
          </div>

          {/* Trust logos strip */}
          <div className="fp-trust">
            <span className="fp-trust-label">Worked with</span>
            <div className="fp-trust-logos">
              {TRUST_LOGOS.map((t) => (
                <div key={t.name} className="fp-trust-logo">
                  {t.logo ? (
                    <img src={t.logo} alt={t.name} />
                  ) : (
                    <span>{t.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="section fp-about">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                About <span className="fp-gold">Me</span>
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
                <span className="fp-gold">BB AI Tech Solutions</span>,
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

            {/* Journey strip */}
            <div className="fp-journey">
              {EDUCATION.map((e, idx) => (
                <div key={e.degree} className="fp-journey-item">
                  <div className="fp-journey-marker">
                    <span className="fp-journey-num">{idx + 1}</span>
                  </div>
                  <div className="fp-journey-body">
                    <div className="fp-journey-degree">{e.degree}</div>
                    <div className="fp-journey-school">{e.school}</div>
                    <div className="fp-journey-status">{e.status}</div>
                  </div>
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
                What I <span className="fp-gold">Do</span>
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

            {/* Tools */}
            <div className="fp-tools">
              <h3 className="fp-tools-title">
                Tools I <span className="fp-gold">use</span>
              </h3>
              <div className="fp-tools-grid">
                {TOOLS.map((tool) => (
                  <div key={tool.slug} className="fp-tool">
                    <img
                      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                      alt={tool.name}
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED WORK ================= */}
        <section className="section fp-work" id="featured-work">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                Featured <span className="fp-gold">Work</span>
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
                    <img src={justCbtResult} alt="JustCBT AI — results" loading="lazy" />
                  </div>
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img src={justCbtHome} alt="JustCBT AI — landing" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 01</span>
                  <span className="fp-project-status fp-project-status--live">
                    Live
                  </span>
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
                      <span key={t} className="fp-chip fp-chip--tech">
                        {t}
                      </span>
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
                      <span key={t} className="fp-chip">
                        {t}
                      </span>
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

            {/* Project 02 — iQuire */}
            <article className="fp-project fp-project--reverse">
              <div className="fp-project-image">
                <div className="fp-project-fan">
                  <div className="fp-project-sheet fp-project-sheet--left">
                    <img src={iquireCourses} alt="iQuire — courses" loading="lazy" />
                  </div>
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img src={iquireHome} alt="iQuire — landing" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="fp-project-content">
                <div className="fp-project-meta">
                  <span className="fp-project-num">Project 02</span>
                  <span className="fp-project-status fp-project-status--client">
                    Client · UK
                  </span>
                </div>
                <h3>iQuire Platform</h3>
                <p className="fp-project-tagline">
                  Tech Lead on a UK learning &amp; careers platform
                </p>
                <p className="fp-project-desc">
                  iQuire is a UK-based learning and career platform. During my
                  internship at iQuire &mdash; completed through the Tech360
                  program &mdash; I served as the technical lead and built the
                  website end-to-end as my capstone project, collaborating with
                  a distributed remote team.
                </p>

                <div className="fp-project-block">
                  <div className="fp-project-block-label">Role</div>
                  <p>
                    Technical Lead &amp; primary developer. I led the web
                    build, coordinated with teammates, and shipped the
                    production site.
                  </p>
                </div>

                <div className="fp-project-chips">
                  <span className="fp-project-chips-label">Built with</span>
                  <div className="fp-project-chips-list">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((t) => (
                      <span key={t} className="fp-chip fp-chip--tech">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://iquire.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-project-link"
                >
                  View Project <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            {/* Project 03 — School Digital Transformation */}
            <article className="fp-project">
              <div className="fp-project-image">
                <div className="fp-project-fan fp-project-fan--single">
                  <div className="fp-project-sheet fp-project-sheet--center">
                    <img
                      src={broadoakHome}
                      alt="BroadOak Schools — website"
                      loading="lazy"
                    />
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
                      <span key={t} className="fp-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section className="section fp-impact">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                <span className="fp-gold">Impact</span>
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
                <span className="fp-gold">Experience</span>
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
                <span className="fp-gold">Education &amp; Journey</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-edu-grid">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="fp-edu-card">
                  {e.logo && (
                    <div className="fp-edu-logo">
                      <img src={e.logo} alt={e.school} loading="lazy" />
                    </div>
                  )}
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
                <span className="fp-gold">Skills</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <div className="fp-skills-grid">
              {Object.entries(SKILLS).map(([group, items]) => (
                <div key={group} className="fp-skill-group">
                  <h3 className="fp-skill-group-title">{group}</h3>
                  <div className="fp-skill-chips">
                    {items.map((s) => (
                      <span key={s} className="fp-skill-chip">
                        {s}
                      </span>
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
                How I <span className="fp-gold">Build</span>
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
                    <div className="fp-approach-arrow" aria-hidden="true">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="fp-approach-formula">
              Problem → Evidence → Product → Test → Learn → Improve
            </div>
          </div>
        </section>

        {/* ================= OTHER WORK ================= */}
        <section className="section fp-other">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                Other <span className="fp-gold">Work</span>
              </h2>
              <div className="fp-rule" />
              <p className="fp-section-sub">
                Creative, media and community projects outside the core
                product work.
              </p>
            </div>

            <div className="fp-other-grid">
              {OTHER_WORK.map((item) => (
                <div key={item.title} className="fp-other-card">
                  <div className="fp-other-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="fp-other-category">{item.category}</span>
                  </div>
                  <div className="fp-other-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fp-other-link"
                    >
                      View <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="section fp-achievements">
          <div className="container">
            <div className="fp-section-head">
              <h2>
                Achievements &amp;{' '}
                <span className="fp-gold">Certifications</span>
              </h2>
              <div className="fp-rule" />
            </div>

            <h3 className="fp-subhead">Recognition</h3>
            <div className="fp-recognition-grid">
              {RECOGNITION.map((r) => (
                <div key={r.title} className="fp-recognition-card">
                  {r.logo && (
                    <div className="fp-recognition-logo">
                      <img src={r.logo} alt={r.issuer} loading="lazy" />
                    </div>
                  )}
                  <div className="fp-recognition-content">
                    <div className="fp-recognition-year">{r.year}</div>
                    <h4>{r.title}</h4>
                    <p>{r.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="fp-subhead">Professional Development</h3>
            <div className="fp-cred-list">
              {PROFESSIONAL_DEV.map((c) => (
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

            <h3 className="fp-subhead">Programs &amp; Fellowships</h3>
            <div className="fp-programs-list">
              {PROGRAMS_AND_FELLOWSHIPS.map((p) => (
                <span key={p} className="fp-program-chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="section fp-contact" id="contact">
          <div className="container">
            <div className="fp-contact-card">
              <div className="fp-section-head fp-section-head--left">
                <h2>
                  Let&rsquo;s build{' '}
                  <span className="fp-gold">something useful.</span>
                </h2>
                <div className="fp-rule fp-rule--left" />
              </div>

              <p className="fp-contact-sub">
                Have a problem worth solving, a product idea to explore, or an
                opportunity to collaborate?
              </p>

              <div className="fp-contact-actions">
                <a
                  href="mailto:bright@bbaitech.com"
                  className="fp-btn fp-btn--dark"
                >
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
                <Link to="/solutions" className="fp-btn fp-btn--light">
                  View BB AI Tech <span aria-hidden="true">→</span>
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