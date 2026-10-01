
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import hackathonImage from '../../assets/hackathon-2026.png';

export default function Hackathon2026() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--charcoal) 0%, #1a1a2e 100%)',
          color: 'white',
          padding: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}>
              {/* Left Content */}
              <div>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(201, 160, 61, 0.2)',
                  color: 'var(--gold)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem',
                }}>
                  🚀 1st Edition
                </div>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '400',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1rem',
                }}>
                  Owerri City AI Innovation <span className="gold-italic">Hackathon 2026</span>
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: 'var(--gray-300)',
                  marginBottom: '2rem',
                }}>
                  Innovate. Solve. Impact.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  marginBottom: '2rem',
                }}>
                  Building smarter schools and stronger communities through AI and technology.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <a 
                    href="https://tinyurl.com/owerrihackathon26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                      Register Your School →
                    </button>
                  </a>
                  <a href="#sponsors">
                    <button className="btn btn-outline" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                      Become a Sponsor
                    </button>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div>
                <img 
                  src={hackathonImage}
                  alt="AI Innovation Hackathon 2026"
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Banner */}
        <section style={{
          backgroundColor: 'var(--gold)',
          padding: '2rem 0',
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              textAlign: 'center',
              color: 'var(--charcoal)',
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                <div style={{ fontWeight: 'bold' }}>June 26-27, 2026</div>
                <div style={{ fontSize: '0.85rem' }}>2-Day Event</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
                <div style={{ fontWeight: 'bold' }}>The BroadOak Schools</div>
                <div style={{ fontSize: '0.85rem' }}>Owerri (Onsite Event)</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏰</div>
                <div style={{ fontWeight: 'bold' }}>9:00 AM - 5:00 PM</div>
                <div style={{ fontSize: '0.85rem' }}>Daily</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏫</div>
                <div style={{ fontWeight: 'bold' }}>6-10 Schools</div>
                <div style={{ fontSize: '0.85rem' }}>Selected Secondary Schools</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}>
              <div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '400',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1rem',
                }}>
                  About the <span className="gold-italic">Hackathon</span>
                </h2>
                <div style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: 'var(--gold)',
                  marginBottom: '1.5rem',
                }} />
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  The AI Innovation Hackathon 2026 is a premier 2-day intensive event designed to 
                  foster innovation among secondary school students in Owerri. In partnership with
                  <span className="gold-italic"> NIIT Owerri</span> and
                  <span className="gold-italic"> BB AI Tech Solutions</span>, this hackathon challenges 
                  students to identify real problems and build creative AI-powered or tech-based solutions.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  Students will form teams, work with mentors, and develop prototypes that address 
                  challenges in education, school management, or their local communities. The event 
                  culminates in a presentation to a panel of judges, with substantial cash prizes for 
                  winning teams.
                </p>
                <p style={{ lineHeight: 1.7 }}>
                  <strong>Theme:</strong> "Building smarter schools and stronger communities through AI and technology"
                </p>
              </div>
              <div style={{
                backgroundColor: 'var(--gray-100)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ marginBottom: '1rem' }}>Partners</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p><strong>The BroadOak Schools</strong> - Host</p>
                  <p><strong>NIIT Owerri</strong> - Co-organizer</p>
                  <p><strong>BB AI Tech Solutions</strong> - Co-organizer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Apply */}
        <section style={{
          backgroundColor: 'var(--gray-50)',
          padding: '4rem 0',
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Who Can <span className="gold-italic">Apply</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🎓</div>
                <h3>Students</h3>
                <p>Secondary school students<br />JSS 1 - SSS 2 (ages 10-18)</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏫</div>
                <h3>Schools</h3>
                <p>6-10 selected secondary schools<br />in Owerri metropolis</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
                <h3>Requirements</h3>
                <p>Passionate about technology,<br />innovation, and problem-solving</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competition Tracks */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Competition <span className="gold-italic">Tracks</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'center', borderTop: `4px solid var(--gold)` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <h3 style={{ marginBottom: '0.5rem' }}>AI in Education</h3>
                <p style={{ color: 'var(--gray-600)' }}>
                  Improve learning, revision, or grading systems using AI technology. 
                  Create tools that help students learn better and teachers assess effectively.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center', borderTop: `4px solid var(--gold)` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏫</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Smart School Solutions</h3>
                <p style={{ color: 'var(--gray-600)' }}>
                  Address attendance tracking, campus safety, transport management, 
                  and school-parent communication challenges.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center', borderTop: `4px solid var(--gold)` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Community & Social Impact</h3>
                <p style={{ color: 'var(--gray-600)' }}>
                  Solve real problems in healthcare, waste management, agriculture, 
                  and local market systems using technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--charcoal) 0%, #1a1a2e 100%)',
          padding: '4rem 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              fontFamily: 'var(--font-serif)',
              marginBottom: '3rem',
              color: 'white',
            }}>
              Prizes & <span className="gold-italic">Rewards</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '3rem',
            }}>
              <div style={{
                backgroundColor: 'var(--gold)',
                padding: '2rem',
                borderRadius: '12px',
                color: 'var(--charcoal)',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥇</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>₦250,000</div>
                <div style={{ marginTop: '0.5rem' }}>1st Place Team</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>+ Trophy & Certificates</div>
              </div>
              <div style={{
                backgroundColor: 'var(--gray-300)',
                padding: '2rem',
                borderRadius: '12px',
                color: 'var(--charcoal)',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥈</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>₦150,000</div>
                <div style={{ marginTop: '0.5rem' }}>2nd Place Team</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>+ Certificates</div>
              </div>
              <div style={{
                backgroundColor: '#CD7F32',
                padding: '2rem',
                borderRadius: '12px',
                color: 'white',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥉</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>₦100,000</div>
                <div style={{ marginTop: '0.5rem' }}>3rd Place Team</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>+ Certificates</div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '12px',
              color: 'white',
            }}>
              <p style={{ margin: 0 }}>
                🎁 <strong>All Participants</strong> receive Certificates of Participation
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Do */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                What You'll <span className="gold-italic">Do</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}>
              {[
                { step: '01', title: 'Form a Team', desc: '3-5 students per school' },
                { step: '02', title: 'Identify Problem', desc: 'Real challenge in education or community' },
                { step: '03', title: 'Build Solution', desc: 'AI-powered or tech-based prototype' },
                { step: '04', title: 'Present & Win', desc: 'Pitch to panel of judges' },
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: 'var(--charcoal)',
                  }}>
                    {item.step}
                  </div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section style={{
          backgroundColor: 'var(--gray-50)',
          padding: '4rem 0',
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Event <span className="gold-italic">Schedule</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card">
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Day 1 - June 26, 2026</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div><strong>9:00 AM</strong> - Registration & Opening Ceremony</div>
                  <div><strong>10:00 AM</strong> - Introduction to AI & Hackathon Briefing</div>
                  <div><strong>11:00 AM</strong> - Team Formation & Problem Identification</div>
                  <div><strong>12:00 PM</strong> - Ideation & Solution Design Workshop</div>
                  <div><strong>1:00 PM</strong> - Lunch Break</div>
                  <div><strong>2:00 PM</strong> - Prototyping & Development Begins</div>
                  <div><strong>5:00 PM</strong> - Day 1 Wrap-up</div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Day 2 - June 27, 2026</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div><strong>9:00 AM</strong> - Day 2 Kickoff & Mentorship Session</div>
                  <div><strong>11:00 AM</strong> - Final Development & Pitch Practice</div>
                  <div><strong>1:00 PM</strong> - Lunch Break</div>
                  <div><strong>2:00 PM</strong> - Project Presentations to Judges</div>
                  <div><strong>4:00 PM</strong> - Judging & Deliberation</div>
                  <div><strong>4:30 PM</strong> - Awards Ceremony & Closing</div>
                  <div><strong>5:00 PM</strong> - Networking & Photo Session</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA Section - Simplified */}
        <section id="register" className="section" style={{
          backgroundColor: 'var(--charcoal)',
          color: 'white',
        }}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Ready to <span className="gold-italic">Participate</span>?
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Register your school now to secure a spot in this groundbreaking event.
              </p>
              <a 
                href="https://tinyurl.com/owerrihackathon26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                  Register Now
                </button>
              </a>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.8 }}>
                Registration Deadline: June 20, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="sponsors" style={{
          backgroundColor: 'var(--gray-50)',
          padding: '4rem 0',
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Contact & <span className="gold-italic">Sponsorship</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>📧 For Registration & Participation</h3>
                <p><strong>BB AI Tech Solutions</strong></p>
                <p>📞 <a href="tel:+2348130458020">+234 813 045 8020</a></p>
                <p>📧 <a href="mailto:bright@bbaitech.com">bright@bbaitech.com</a></p>
                <hr style={{ margin: '1rem 0' }} />
                <p><strong>NIIT Owerri</strong></p>
                <p>📞 <a href="tel:+2348162216532">+234 816 221 6532</a></p>
                <p>📧 <a href="mailto:info@niitowerri.com">info@niitowerri.com</a></p>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>🤝 For Sponsorship & Partnership</h3>
                <p><strong>Dr. Dame Happiness Nkeiruka Uhegbu </strong></p>
                <p> CEO, The broadoak Schools </p>
                <p>📞 <a href="tel:+2348037503627">+234 803 750 3627</a></p>
                <p>📧 <a href="mailto:enkaytbos@gmail.com">enkaytbos@gmail.com</a></p>
                <hr style={{ margin: '1rem 0' }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  Sponsorship opportunities available for organizations wanting to support 
                  youth innovation and AI education in Nigeria.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="https://tinyurl.com/owerrihackathon26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                  Quick Registration Link →
                </button>
              </a>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                Registration: https://tinyurl.com/owerrihackathon26
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}>
                Frequently Asked <span className="gold-italic">Questions</span>
              </h2>
              <div style={{
                width: '60px',
                height: '2px',
                backgroundColor: 'var(--gold)',
                margin: '0 auto',
              }} />
            </div>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Is there a registration fee?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>No, participation is completely free for selected schools.</p>
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Do students need prior coding experience?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>Not necessarily. We welcome students passionate about problem-solving. Mentors will guide teams.</p>
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Will food be provided?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>Yes, lunch and refreshments will be provided for all participants both days.</p>
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Can a school send multiple teams?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>Yes, schools can send up to 5 teams (3-5 students per team).</p>
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>What should students bring?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>Laptops (if available), notebooks, and enthusiasm. We'll provide necessary resources.</p>
              </div>
              <div className="card">
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Will there be certificates?</h4>
                <p style={{ margin: 0, color: 'var(--gray-600)' }}>Yes, all participants will receive Certificates of Participation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section style={{
          backgroundColor: 'var(--gold)',
          padding: '3rem 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              fontFamily: 'var(--font-serif)',
              color: 'var(--charcoal)',
              marginBottom: '1rem',
            }}>
              Don't Miss Out on This <span style={{ fontStyle: 'italic' }}>Opportunity</span>
            </h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
              Limited slots available for schools. Register before May 25, 2026.
            </p>
            <a 
              href="https://tinyurl.com/owerrihackathon26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary" style={{
                backgroundColor: 'var(--charcoal)',
                color: 'white',
                border: 'none',
              }}>
                Register Your School Now →
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}