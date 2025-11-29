'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Sponsors() {
  useEffect(() => {
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

    const sections = document.querySelectorAll('.sponsors-intro');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Sponsors</h1>
          <p className="page-subtitle">Partners who make our aerospace dreams possible</p>
        </div>
      </div>

      <section className="sponsors-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Thank You to Our Valued Partners</h2>
            <p>The success of Purdue SAE Aero is made possible through the generous support of our sponsors. These partnerships enable us to pursue cutting-edge aerospace engineering projects, participate in competitions, and provide invaluable learning experiences for our members.</p>
          </div>
        </div>
      </section>

      <section className="sponsorship-opportunities">
        <div className="container">
          <div className="opportunity-content">
            <h2>Become a Sponsor</h2>
            <p>Partner with Purdue SAE Aero and support the next generation of aerospace engineers. Your sponsorship helps fund aircraft development, competition travel, and hands-on learning experiences.</p>

            <h3>Sponsorship Benefits</h3>
            <ul className="benefits-list">
              <li>Brand visibility at competitions and team events</li>
              <li>Access to talented engineering students for recruitment</li>
              <li>Logo placement on aircraft and team materials</li>
              <li>Recognition on our website and social media</li>
              <li>Opportunities for technical collaboration</li>
            </ul>

            <div className="cta-section">
              <Link href="/#contact" className="sponsor-cta-btn">
                Contact Us About Sponsorship
              </Link>
              <a href="/SAE Aero Sponsorship Package.pdf" target="_blank" className="sponsor-info-btn">
                Download Sponsorship Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-links-bar" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#CFB53B', fontSize: '2.8rem', marginBottom: '25px', fontWeight: 'bold' }}>Learn More About Our Team</h2>
            <p style={{ color: '#FFFFFF', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>Discover our competitions and leadership</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '60px' }}>
            <Link href="/#competitions" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn" style={{ padding: '25px 60px', fontSize: '1.4rem' }}>
                View Our Competitions
              </button>
            </Link>
            <Link href="/leadership" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn-outline" style={{ padding: '25px 60px', fontSize: '1.4rem' }}>
                Meet Our Leadership
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
