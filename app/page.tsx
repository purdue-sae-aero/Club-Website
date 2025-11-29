'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [competitionImage, setCompetitionImage] = useState('');

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.content-section, .contact-section, .leadership-section');
    sections.forEach(section => observer.observe(section));

    // Competition image hover effect
    const achievementItems = document.querySelectorAll('.achievement-item[data-team-image]');
    const competitionImageEl = document.getElementById('competition-image');

    achievementItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imageSrc = item.getAttribute('data-team-image');
        if (competitionImageEl && imageSrc) {
          competitionImageEl.style.opacity = '0';
          setTimeout(() => {
            setCompetitionImage(`/images/other/${imageSrc}`);
            competitionImageEl.style.opacity = '1';
            competitionImageEl.style.transform = 'scale(1.05)';
          }, 300);
        }
      });

      item.addEventListener('mouseleave', () => {
        if (competitionImageEl) {
          competitionImageEl.style.transform = 'scale(1)';
        }
      });
    });

    // Set initial competition image
    setCompetitionImage('/images/other/IMG_6959.jpg');
    if (competitionImageEl) {
      setTimeout(() => {
        competitionImageEl.style.opacity = '1';
      }, 500);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSections = () => {
    const missionsSection = document.getElementById('mission');
    if (missionsSection) {
      missionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-image">
          <Image
            src="/images/other/Gemini_Generated_Image_3ehzfx3ehzfx3ehz.png"
            alt="Space Shuttle Hypersonic"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Purdue SAE Aero</h1>
              <p className="hero-subtitle">Engineering Excellence in Aerospace</p>
              <button className="cta-button" onClick={scrollToSections}>Explore Our Work</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="content-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/images/other/IMG_6959.jpg"
            alt="Mission Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '3rem', padding: '20px 60px', border: '3px solid #CFB53B', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)' }}>Our Mission</h2>
          </div>
          <div className="content-text" style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <p>Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.</p>

            <p>We participate in the SAE Aero Design competitions, where students design, build, and fly remote-controlled aircraft to compete in various challenges. This provides our members with invaluable real-world engineering experience.</p>

            <h3>Our Goals</h3>
            <ul className="benefits-list">
              <li>Design and build competitive aircraft for SAE competitions</li>
              <li>Provide hands-on engineering experience to students</li>
              <li>Foster collaboration between different engineering disciplines</li>
              <li>Promote aerospace education and innovation at Purdue</li>
              <li>Develop the next generation of aerospace engineers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="content-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/images/backgrounds/Airport_aerial.jpg"
            alt="Competition Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.6)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '2.5rem', color: '#000000', padding: '20px 60px', border: '3px solid #CFB53B', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)' }}>Competitions</h2>
          </div>

          {/* Upcoming Competitions Subsection */}
          <div style={{ marginBottom: '100px' }}>
            <div className="content-text" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Upcoming Competitions</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>We&apos;re preparing for the next SAE Aero Design competitions. Stay tuned for updates on our upcoming competition schedules and follow our journey as we continue to push the boundaries of aerospace engineering.</p>

              <div className="achievement-list">
                <div className="achievement-item">
                  <h3>2026 East - Regular Class</h3>
                  <p>Planning and preparation underway for the next SAE Aero Design East competition in the Regular Class.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Past Competitions Subsection */}
          <div className="content-grid" style={{ gap: '40px' }}>
            <div className="content-image">
              <Image
                id="competition-image"
                src={competitionImage || '/images/other/IMG_6959.jpg'}
                alt="Competition Aircraft"
                width={600}
                height={450}
                style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', transition: 'opacity 0.6s ease, transform 0.6s ease', opacity: 0 }}
              />
            </div>
            <div className="content-text" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Recent Competitions</h3>

              <div className="achievement-list">
                <Link href="/competition-2025-us">
                  <div className="achievement-item" data-team-image="584da60e-5d07-42ad-bc11-fecb99deb456.JPG" style={{ cursor: 'pointer' }}>
                    <h3>2025 East - Regular Class</h3>
                    <p>Competed in Fort Worth in the Regular Class division</p>
                  </div>
                </Link>
                <Link href="/competition-2024-brazil">
                  <div className="achievement-item" data-team-image="IMG_7522.jpg" style={{ cursor: 'pointer' }}>
                    <h3>2024 Brazil - Regular Class</h3>
                    <p>Competed internationally in the Regular Class, representing Purdue on the global stage</p>
                  </div>
                </Link>
              </div>

              {/* Competition Archive Button */}
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href="/competition-archive" style={{ textDecoration: 'none' }}>
                  <button className="cta-button" style={{ background: '#FFFFFF', color: '#000000', border: '2px solid #CFB53B' }}>
                    View Competition Archive
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Bar */}
      <section className="quick-links-bar" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#CFB53B', fontSize: '2rem', marginBottom: '15px' }}>Learn More About Our Team</h2>
            <p style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>Discover who supports us and who leads us to success</p>
          </div>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
            <Link href="/sponsors" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn">
                View Our Sponsors
              </button>
            </Link>
            <Link href="/leadership" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn-outline">
                Meet Our Leadership
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/images/other/image.jpg"
            alt="Contact Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '2.5rem', color: '#000000', padding: '20px 60px', border: '3px solid #CFB53B', borderRadius: '50px', background: '#FFFFFF' }}>Contact Us</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info" style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ color: '#000000', fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h3>
              <p style={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.8 }}>Whether you&apos;re interested in joining our team, exploring sponsorship opportunities, or have questions about our projects, we&apos;d love to hear from you!</p>

              <div className="contact-item" style={{ background: 'rgba(207, 181, 59, 0.1)', padding: '20px', borderRadius: '15px', margin: '25px 0', borderLeft: '4px solid #CFB53B' }}>
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3 style={{ color: '#000000' }}>Email</h3>
                  <p style={{ color: '#333333' }}>sae-aero@purdue.edu</p>
                </div>
              </div>

              <div className="contact-item" style={{ background: 'rgba(207, 181, 59, 0.1)', padding: '20px', borderRadius: '15px', margin: '25px 0', borderLeft: '4px solid #CFB53B' }}>
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3 style={{ color: '#000000' }}>Location</h3>
                  <p style={{ color: '#333333' }}>Purdue University<br />West Lafayette, IN 47907</p>
                </div>
              </div>

              <div className="social-links" style={{ marginTop: '30px' }}>
                <h3 style={{ color: '#000000', fontSize: '1.5rem', marginBottom: '15px' }}>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/purduesaeaero/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ background: 'linear-gradient(135deg, #CFB53B, #FFA500)', color: '#000000', padding: '12px 24px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', margin: '5px', fontWeight: 600, transition: 'transform 0.3s' }}>📷 Instagram</a>
                  <a href="https://www.linkedin.com/company/purdue-sae-aero-design/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ background: 'linear-gradient(135deg, #CFB53B, #FFA500)', color: '#000000', padding: '12px 24px', borderRadius: '25px', textDecoration: 'none', display: 'inline-block', margin: '5px', fontWeight: 600, transition: 'transform 0.3s' }}>💼 LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="contact-form" style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ color: '#000000', fontSize: '2rem', marginBottom: '25px' }}>Send us a Message</h3>
              <form className="message-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Form submission functionality coming soon!');
              }}>
                <div className="form-group">
                  <label htmlFor="name" style={{ color: '#000000', fontWeight: 600, fontSize: '1.1rem' }}>Name</label>
                  <input type="text" id="name" name="name" required style={{ width: '100%', padding: '15px', border: '2px solid #CFB53B', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }} />
                </div>

                <div className="form-group">
                  <label htmlFor="email" style={{ color: '#000000', fontWeight: 600, fontSize: '1.1rem' }}>Email</label>
                  <input type="email" id="email" name="email" required style={{ width: '100%', padding: '15px', border: '2px solid #CFB53B', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }} />
                </div>

                <div className="form-group">
                  <label htmlFor="message" style={{ color: '#000000', fontWeight: 600, fontSize: '1.1rem' }}>Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ width: '100%', padding: '15px', border: '2px solid #CFB53B', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', resize: 'vertical', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }}></textarea>
                </div>

                <button type="submit" className="submit-btn" style={{ width: '100%', background: 'linear-gradient(135deg, #CFB53B, #FFA500)', color: '#000000', padding: '18px', border: 'none', borderRadius: '30px', fontSize: '1.2rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 5px 20px rgba(207, 181, 59, 0.4)' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
