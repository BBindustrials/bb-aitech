
import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../utils/supabaseClient';
import './Training.css';

interface TrainingProgram {
  id: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  level: string;
  description: string;
  curriculum: string[];
  learningOutcomes: string[];
  targetAudience: string[];
  prerequisites: string;
}

const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'excel-professionals',
    title: 'Excel for Office Professionals',
    category: 'Productivity',
    duration: '4 Weeks',
    format: 'Virtual + In-person',
    level: 'Beginner to Intermediate',
    description:
      'Master Microsoft Excel for office productivity. Learn data entry, formulas, pivot tables, charts, and automation techniques to boost your workplace efficiency.',
    curriculum: [
      'Excel Interface and Navigation',
      'Basic and Advanced Formulas',
      'Data Validation and Conditional Formatting',
      'Pivot Tables and Pivot Charts',
      'Data Visualization and Dashboards',
      'Macros and Automation Basics',
      'Excel for Reporting and Analysis',
      'Real-world Office Projects',
    ],
    learningOutcomes: [
      'Create professional spreadsheets',
      'Automate repetitive tasks',
      'Analyze data like a pro',
      'Build interactive dashboards',
      'Increase office productivity by 50%',
    ],
    targetAudience: [
      'Office administrators',
      'Executive assistants',
      'Finance officers',
      'Project managers',
      'Data entry professionals',
    ],
    prerequisites: 'Basic computer knowledge required.',
  },
  {
    id: 'spss-professionals',
    title: 'SPSS for Office Professionals',
    category: 'Data Analysis',
    duration: '5 Weeks',
    format: 'Virtual + In-person',
    level: 'Intermediate',
    description:
      'Learn statistical analysis using SPSS. Perfect for research officers, analysts, and professionals who need to analyze data and present insights.',
    curriculum: [
      'SPSS Interface Overview',
      'Data Entry and Management',
      'Descriptive Statistics',
      'T-tests and ANOVA',
      'Correlation and Regression',
      'Chi-square Tests',
      'Data Visualization in SPSS',
      'Reporting and Interpretation',
    ],
    learningOutcomes: [
      'Perform statistical analysis confidently',
      'Interpret research data accurately',
      'Create professional statistical reports',
      'Make data-driven decisions',
      'Present findings effectively',
    ],
    targetAudience: [
      'Research officers',
      'Data analysts',
      'Graduate students',
      'Market researchers',
      'Policy analysts',
    ],
    prerequisites: 'Basic understanding of statistics recommended.',
  },
  {
    id: 'data-analysis-government',
    title: 'Data Analysis for Government Workers',
    category: 'Government',
    duration: '6 Weeks',
    format: 'Virtual + In-person',
    level: 'Beginner to Intermediate',
    description:
      'Tailored data analysis training for government employees. Learn to collect, analyze, and present data for policy-making and reporting.',
    curriculum: [
      'Introduction to Data Analysis',
      'Data Collection and Management',
      'Excel for Government Reporting',
      'Introduction to Power BI',
      'Data Visualization for Policy',
      'Statistical Analysis Fundamentals',
      'Report Writing and Presentation',
      'Case Studies in Government Data',
    ],
    learningOutcomes: [
      'Analyze government data effectively',
      'Create policy-reports with data',
      'Use data for decision-making',
      'Improve service delivery',
      'Meet reporting standards',
    ],
    targetAudience: [
      'Government administrators',
      'Policy analysts',
      'Planning officers',
      'Statisticians',
      'Monitoring & evaluation officers',
    ],
    prerequisites: 'Basic computer literacy required.',
  },
  {
    id: 'ai-mastery-students',
    title: 'AI Mastery for Students',
    category: 'Artificial Intelligence',
    duration: '6 Weeks',
    format: 'Virtual',
    level: 'Beginner',
    description:
      'Empower students with AI skills for academic success and future careers. Learn to use AI for research, studying, projects, and exam preparation.',
    curriculum: [
      'Introduction to AI and Its Applications',
      'Using ChatGPT for Academic Research',
      'AI for Essay Writing and Editing',
      'AI-Powered Study Techniques',
      'Creating Presentations with AI',
      'AI for Coding and Math Help',
      'Ethical AI Use in Academics',
      'Building Your First AI Project',
    ],
    learningOutcomes: [
      'Use AI for research and studying',
      'Improve grades with AI assistance',
      'Save time on assignments',
      'Build AI-powered projects',
      'Prepare for AI-driven job market',
    ],
    targetAudience: [
      'Secondary school students',
      'University undergraduates',
      'Postgraduate students',
      'Research assistants',
      'Young entrepreneurs',
    ],
    prerequisites: 'No prior AI knowledge required.',
  },
  {
    id: 'ai-mastery-professionals',
    title: 'AI Mastery for Office Professionals',
    category: 'Artificial Intelligence',
    duration: '5 Weeks',
    format: 'Virtual + In-person',
    level: 'Beginner to Intermediate',
    description:
      'Transform your workplace productivity with AI. Learn to automate tasks, generate content, analyze data, and make smarter decisions using AI tools.',
    curriculum: [
      'AI Fundamentals for Professionals',
      'ChatGPT for Business Communication',
      'AI for Report Writing and Summaries',
      'AI-Powered Data Analysis',
      'Automating Repetitive Tasks',
      'AI for Meeting Notes and Action Items',
      'Ethical AI Use in Business',
      'Building Custom AI Assistants',
    ],
    learningOutcomes: [
      'Save 10+ hours weekly with AI',
      'Generate professional content quickly',
      'Automate administrative tasks',
      'Make data-driven decisions',
      'Stay ahead of AI trends',
    ],
    targetAudience: [
      'Office managers',
      'Executive assistants',
      'Business analysts',
      'HR professionals',
      'Marketing officers',
    ],
    prerequisites: 'Basic computer skills required.',
  },
  {
    id: 'web-app-ai',
    title: 'Web and App Development with AI',
    category: 'Development',
    duration: '10 Weeks',
    format: 'Virtual',
    level: 'Beginner to Intermediate',
    description:
      'Learn to build modern websites and mobile apps using AI-powered development tools. Build real projects with AI assistance.',
    curriculum: [
      'HTML, CSS, and JavaScript Fundamentals',
      'Building Websites with AI Assistants',
      'React.js Basics',
      'Mobile App Development with React Native',
      'Using AI for Code Generation',
      'Debugging with AI Tools',
      'Database Integration',
      'Deploying to Production',
    ],
    learningOutcomes: [
      'Build responsive websites',
      'Create mobile apps',
      'Use AI to speed up coding',
      'Debug code efficiently',
      'Launch your own projects',
    ],
    targetAudience: [
      'Aspiring developers',
      'Career changers',
      'Entrepreneurs',
      'Designers wanting to code',
      'Students',
    ],
    prerequisites: 'No coding experience required. Basic computer literacy needed.',
  },
  {
    id: 'fullstack-ai',
    title: 'Full Stack Development with AI',
    category: 'Development',
    duration: '14 Weeks',
    format: 'Virtual',
    level: 'Intermediate',
    description:
      'Become a full-stack developer with AI-powered development. Master frontend, backend, databases, and deployment using modern tools and AI assistance.',
    curriculum: [
      'Advanced JavaScript and TypeScript',
      'React and Next.js Frameworks',
      'Backend Development with Node.js',
      'Database Design (SQL and NoSQL)',
      'API Development and Integration',
      'AI-Assisted Development Workflows',
      'Cloud Deployment (Vercel, AWS)',
      'Full Stack Portfolio Project',
    ],
    learningOutcomes: [
      'Build full-stack applications',
      'Design and manage databases',
      'Deploy to production',
      'Use AI to accelerate development',
      'Create a professional portfolio',
    ],
    targetAudience: [
      'Junior developers upskilling',
      'Computer science graduates',
      'Tech entrepreneurs',
      'Career advancers',
      'Freelancers',
    ],
    prerequisites: 'Basic programming knowledge recommended.',
  },
  {
    id: 'statistics-exam',
    title: 'Statistics Exam Tutorials',
    category: 'Exam Prep',
    duration: '4 Weeks',
    format: 'Virtual + In-person',
    level: 'All Levels',
    description:
      'Intensive statistics exam preparation for students and professionals. Master statistical concepts, problem-solving, and exam techniques.',
    curriculum: [
      'Descriptive Statistics',
      'Probability Theory',
      'Inferential Statistics',
      'Hypothesis Testing',
      'Regression Analysis',
      'Statistical Software (Excel/SPSS)',
      'Past Exam Questions',
      'Exam Strategy and Time Management',
    ],
    learningOutcomes: [
      'Pass statistics exams with confidence',
      'Solve complex problems quickly',
      'Use statistical software effectively',
      'Understand key concepts deeply',
      'Improve exam scores',
    ],
    targetAudience: [
      'University students',
      'Exam candidates',
      'Postgraduate applicants',
      'Professional certification seekers',
      'High school students',
    ],
    prerequisites: 'Basic mathematics knowledge required.',
  },
  {
    id: 'digital-literacy-educators',
    title: 'Digital Literacy for Teachers and Educators',
    category: 'Education',
    duration: '4 Weeks',
    format: 'Virtual + In-person',
    level: 'Beginner',
    description:
      'Empower educators with digital skills for modern classrooms. Learn to use technology, AI tools, and online platforms for effective teaching.',
    curriculum: [
      'Computer Basics for Educators',
      'Microsoft Office for Teachers',
      'Google Classroom and Workspace',
      'AI Tools for Lesson Planning',
      'Creating Digital Learning Materials',
      'Online Assessment Tools',
      'Student Engagement Techniques',
      'Digital Safety and Ethics',
    ],
    learningOutcomes: [
      'Integrate technology into teaching',
      'Create engaging digital lessons',
      'Use AI for lesson planning',
      'Manage online classrooms',
      'Improve student outcomes',
    ],
    targetAudience: [
      'Primary and secondary teachers',
      'University lecturers',
      'Teacher trainers',
      'Education administrators',
      'Homeschool educators',
    ],
    prerequisites: 'No prior digital skills required.',
  },
];

const STATS = [
  { number: '100+', label: 'Students Trained' },
  { number: '3+', label: 'Corporate Clients' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '9', label: 'Active Programs' },
];

export default function Training() {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(
    null
  );
  const [bookingType, setBookingType] = useState<'individual' | 'organization'>(
    'individual'
  );
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programInterest: '',
    organization: '',
    participants: '1',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const handleEnrollClick = (program: TrainingProgram) => {
    setSelectedProgram(program);
    setFormData({ ...formData, programInterest: program.title });
    setShowEnrollForm(true);
    setTimeout(() => {
      document
        .getElementById('enroll-form')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmailNotification = async (
    data: typeof formData,
    type: string
  ) => {
    const emailBody = `
Training Enrollment Details:

Program: ${data.programInterest}
Booking Type: ${type === 'individual' ? 'Individual' : 'Organization'}
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${type === 'organization' ? `Organization: ${data.organization}` : ''}
Number of Participants: ${data.participants}
Additional Message: ${data.message || 'None'}

Please contact this person to confirm enrollment.
    `.trim();

    window.location.href = `mailto:bbaitechofficial@gmail.com?subject=New Training Enrollment: ${data.programInterest}&body=${encodeURIComponent(
      emailBody
    )}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company_name:
          bookingType === 'organization' ? formData.organization : null,
        interest_area: `Training: ${formData.programInterest} (${
          bookingType === 'individual' ? 'Individual' : 'Organization'
        })`,
        message: `Booking Type: ${bookingType}\nNumber of participants: ${formData.participants}\nAdditional info: ${formData.message}`,
        source: 'training_page',
        status: 'new',
      });

      if (error) throw error;

      await sendEmailNotification(formData, bookingType);

      setSubmitted(true);
      setShowEnrollForm(false);
      setTimeout(() => setSubmitted(false), 5000);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        programInterest: '',
        organization: '',
        participants: '1',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348130458020', '_blank');
  };

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="trn-hero">
          <div className="trn-hero-bg" aria-hidden="true" />
          <div className="trn-hero-blob trn-hero-blob--1" aria-hidden="true" />
          <div className="trn-hero-blob trn-hero-blob--2" aria-hidden="true" />

          <div className="container trn-hero-content">
            <div className="trn-eyebrow">
              <span className="trn-eyebrow-dot" />
              AI Literacy &amp; Digital Skills
            </div>

            <h1 className="trn-hero-title">
              Future-ready skills for the{' '}
              <span className="trn-gold">AI era</span>
            </h1>

            <p className="trn-hero-sub">
              Empower yourself and your organization with practical,
              hands-on training designed to build real-world skills.
            </p>

            <div className="trn-hero-cta">
              <a href="#programs" className="trn-btn trn-btn--dark">
                Browse Programs <span aria-hidden="true">↓</span>
              </a>
              <button
                type="button"
                onClick={openWhatsApp}
                className="trn-btn trn-btn--whatsapp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="trn-stats">
          <div className="container">
            <div className="trn-stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="trn-stat">
                  <div className="trn-stat-number">{stat.number}</div>
                  <div className="trn-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="section trn-programs" id="programs">
          <div className="container">
            <div className="trn-section-head">
              <h2>
                Our <span className="trn-gold">Training Programs</span>
              </h2>
              <div className="trn-rule" />
              <p>
                Practical, hands-on training designed to build real-world
                skills.
              </p>
            </div>

            <div className="trn-grid">
              {TRAINING_PROGRAMS.map((program) => (
                <article key={program.id} className="trn-card">
                  <div className="trn-card-cat">{program.category}</div>
                  <h3 className="trn-card-title">{program.title}</h3>

                  <div className="trn-card-meta">
                    <span className="trn-meta-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {program.duration}
                    </span>
                    <span className="trn-meta-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <path d="M10 9l5 3-5 3V9Z" fill="currentColor" stroke="none" />
                      </svg>
                      {program.format}
                    </span>
                    <span className="trn-meta-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 3v18h18" />
                        <path d="M7 15l3-4 4 3 5-7" />
                      </svg>
                      {program.level}
                    </span>
                  </div>

                  <p className="trn-card-desc">{program.description}</p>

                  <button
                    type="button"
                    className="trn-card-btn"
                    onClick={() => handleEnrollClick(program)}
                  >
                    Enroll Now <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOOKING TYPES ================= */}
        <section className="section trn-booking">
          <div className="container">
            <div className="trn-section-head">
              <h2>
                Book as <span className="trn-gold">Individual</span> or{' '}
                <span className="trn-gold">Organization</span>
              </h2>
              <div className="trn-rule" />
              <p>Flexible training options to suit your needs.</p>
            </div>

            <div className="trn-booking-grid">
              <div className="trn-booking-card">
                <div className="trn-booking-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>Individual Booking</h3>
                <p>
                  Perfect for students and professionals looking to upskill
                  personally.
                </p>
              </div>

              <div className="trn-booking-card">
                <div className="trn-booking-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14" />
                    <path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
                  </svg>
                </div>
                <h3>Organization Booking</h3>
                <p>
                  Group discounts available for teams and corporate clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ENROLL FORM ================= */}
        {showEnrollForm && (
          <section className="section trn-enroll" id="enroll-form">
            <div className="container">
              <div className="trn-enroll-card">
                <div className="trn-enroll-head">
                  <div>
                    <div className="trn-enroll-eyebrow">Enroll</div>
                    <h2 className="trn-enroll-title">
                      {selectedProgram?.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="trn-enroll-close"
                    onClick={() => setShowEnrollForm(false)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                {/* Booking type toggle */}
                <div className="trn-toggle" role="tablist">
                  <button
                    type="button"
                    className={`trn-toggle-btn ${
                      bookingType === 'individual' ? 'is-active' : ''
                    }`}
                    onClick={() => setBookingType('individual')}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    className={`trn-toggle-btn ${
                      bookingType === 'organization' ? 'is-active' : ''
                    }`}
                    onClick={() => setBookingType('organization')}
                  >
                    Organization
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="trn-form">
                  <div className="trn-field">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="trn-field-row">
                    <div className="trn-field">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="trn-field">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {bookingType === 'organization' && (
                    <div className="trn-field">
                      <label htmlFor="organization">Organization Name *</label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  <div className="trn-field">
                    <label htmlFor="participants">Number of Participants</label>
                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                      <option value="10+">10+</option>
                      <option value="20+">20+</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>

                  <div className="trn-field">
                    <label htmlFor="message">
                      Additional Information / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions or requirements?"
                    />
                  </div>

                  <div className="trn-form-actions">
                    <button
                      type="submit"
                      className="trn-btn trn-btn--dark trn-btn--full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting…' : 'Submit Enrollment'}
                      {!isSubmitting && (
                        <span aria-hidden="true" style={{ marginLeft: 8 }}>
                          →
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="trn-btn trn-btn--whatsapp"
                    >
                      WhatsApp
                    </button>
                  </div>

                  <p className="trn-form-note">
                    By submitting, you&rsquo;ll receive a confirmation email.
                    We&rsquo;ll contact you with pricing details.
                  </p>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* ================= SUCCESS TOAST ================= */}
        {submitted && (
          <div className="trn-toast" role="status">
            ✓ Enrollment submitted! Check your email for confirmation.
          </div>
        )}

        {/* ================= CTA ================= */}
        <section className="section trn-cta-wrap">
          <div className="container">
            <div className="trn-cta-card">
              <h2>
                Have questions?{' '}
                <span className="trn-gold">Chat with us.</span>
              </h2>
              <p>
                Get instant answers about our training programs and pricing.
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="trn-btn trn-btn--whatsapp trn-btn--lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}