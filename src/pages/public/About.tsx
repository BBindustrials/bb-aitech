import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import './About.css';

// Import team images
import taiwoImage from '../../assets/team/taiwo.png';
import kehindeImage from '../../assets/team/kehinde.png';
import pelumiImage from '../../assets/team/pelumi.jpeg';
import blessingImage from '../../assets/team/blessing.jpeg';

export default function About() {
  const teamMembers = [
    {
      name: 'Ajayi Taiwo Bright',
      role: 'Founder, Product Engineer',
      image: taiwoImage,
      bio: 'AI application developer and educator leading product innovation at BB AI Tech Solutions.',
    },
    {
      name: 'Ajayi Kehinde Best',
      role: 'Education Content Associate',
      image: kehindeImage,
      bio: 'Curriculum development specialist creating engaging educational content for AI literacy programs.',
    },
    {
      name: 'Akanji Pelumi',
      role: 'Digital Content & Media Support',
      image: pelumiImage,
      bio: 'Creative content producer managing digital media and visual storytelling.',
    },
    {
      name: 'Adegbola Blessing',
      role: 'Community & Social Media Manager',
      image: blessingImage,
      bio: 'Community builder and social media strategist driving engagement and brand presence.',
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* ============ HERO ============ */}
        <section className="about-hero">
          <div className="about-hero-bg" aria-hidden="true" />
          <div className="about-hero-blob about-hero-blob--1" aria-hidden="true" />
          <div className="about-hero-blob about-hero-blob--2" aria-hidden="true" />

          <div className="container about-hero-content">
            <div className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              About BB AI Tech Solutions
            </div>

            <h1 className="about-hero-title">
              Building <span className="gold-italic">reliable AI</span> for
              Africa&rsquo;s schools, businesses &amp; institutions.
            </h1>

            <p className="about-hero-subtitle">
              We design and ship production-ready AI systems that solve real
              problems &mdash; from exams and admissions to personalised
              learning and industry automation.
            </p>
          </div>
        </section>

        {/* ============ OUR STORY ============ */}
        <section className="section about-story">
          <div className="container">
            <div className="about-section-head">
              <h2>
                Our <span className="gold-italic">Story</span>
              </h2>
              <div className="about-rule" />
            </div>

            <div className="about-story-body">
              <p>
                BB AI Tech Solutions was founded with a singular vision: to
                make{' '}
                <span className="gold-italic">
                  artificial intelligence accessible, practical, and
                  transformative
                </span>{' '}
                for African institutions. We recognised that while AI was
                revolutionising industries globally, many schools, businesses,
                and healthcare facilities in Nigeria lacked the tools and
                expertise to leverage this technology.
              </p>

              <p>
                Our name &mdash;{' '}
                <span className="gold-italic">BB AI Tech Solutions</span>{' '}
                &mdash; reflects our commitment to <em>Building Brilliance</em>{' '}
                through Artificial Intelligence. We don&rsquo;t just develop
                technology; we build solutions that address real challenges:
                exam anxiety, manual grading stress, personalised learning for
                students with disabilities, and healthcare monitoring for TB
                survivors.
              </p>

              <p>
                Today, we stand at the intersection of{' '}
                <span className="gold-italic">innovation and impact</span>,
                serving institutions across Nigeria. We build two things:
                our <strong>own AI products</strong> &mdash;{' '}
                <strong>JustCBT AI</strong> and <strong>Teach IDD</strong>{' '}
                &mdash; and <strong>custom client platforms</strong> like{' '}
                <strong>BroadOak Schools</strong> and <strong>iQuire</strong>,
                delivered end-to-end for partner institutions.
              </p>
            </div>
          </div>
        </section>

        {/* ============ MISSION & VISION ============ */}
        <section className="section about-mv">
          <div className="container">
            <div className="about-mv-grid">
              <div className="about-mv-card">
                <div className="about-mv-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3>
                  Our <span className="gold-italic">Mission</span>
                </h3>
                <p>
                  To leverage artificial intelligence and technology as tools
                  for transforming businesses, empowering individuals through
                  education, and bringing hope to communities through
                  compassionate service.
                </p>
              </div>

              <div className="about-mv-card">
                <div className="about-mv-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <h3>
                  Our <span className="gold-italic">Vision</span>
                </h3>
                <p>
                  To become Africa&rsquo;s leading provider of reliable AI
                  technology solutions, recognised for innovation, integrity,
                  and measurable impact across education, healthcare, and
                  business sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TEAM ============ */}
        <section className="section about-team">
          <div className="container">
            <div className="about-section-head">
              <h2>
                Meet <span className="gold-italic">Our Team</span>
              </h2>
              <div className="about-rule" />
            </div>

            <div className="about-team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="about-team-card">
                  <div className="about-team-photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="about-team-name">{member.name}</h3>
                  <p className="about-team-role gold-italic">{member.role}</p>
                  <p className="about-team-bio">{member.bio}</p>
                </div>
              ))}
            </div>

            {/* Planned hires */}
            <div className="about-hires">
              <h3>
                <span className="gold-italic">Planned Key Hires</span>
              </h3>
              <div className="about-hires-list">
                <span className="about-hire-chip">
                  Education Partnerships Manager
                </span>
                <span className="about-hire-chip">
                  Student (Community) Ambassadors
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FOUNDER ============ */}
        <section className="section about-founder">
          <div className="container">
            <div className="about-founder-card">
              <div className="about-founder-photo">
                <img src={taiwoImage} alt="Ajayi Taiwo Bright" />
              </div>

              <div className="about-founder-content">
                <div className="about-founder-eyebrow">Founder&rsquo;s Note</div>
                <h2>
                  Meet the <span className="gold-italic">Founder</span>
                </h2>
                <h3 className="about-founder-name">Ajayi Taiwo Bright</h3>
                <p>
                  Ajayi Taiwo Bright is a Nigerian AI application developer,
                  educator, and tech entrepreneur based in Owerri, Nigeria. As
                  founder of <span className="gold-italic">BB AITECH</span>, he
                  leads product innovation and develops AI solutions for
                  schools, businesses, and healthcare institutions.
                </p>
                <Link to="/taiwo-bright-ajayi" className="about-founder-btn">
                  Learn More About the Founder <span aria-hidden="true">→</span>
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