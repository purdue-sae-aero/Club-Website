'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CompetitionArchive() {
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

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const competitions = [
    {
      year: '2025',
      title: '2025 East - Regular Class',
      location: 'Fort Worth, Texas',
      division: 'Regular Class',
      description: 'Competed in Fort Worth in the Regular Class division with significant learnings about aeroelasticity and project timeline management.',
      image: '/images/584da60e-5d07-42ad-bc11-fecb99deb456.JPG',
      link: '/competition-2025-us'
    },
    {
      year: '2024',
      title: '2024 Brazil - Regular Class',
      location: 'Brazil',
      division: 'Regular Class',
      description: 'Competed internationally in the Regular Class, representing Purdue on the global stage and gaining valuable international competition experience.',
      image: '/images/other/IMG_7522.jpg',
      link: '/competition-2024-brazil'
    },
    {
      year: '2024',
      title: '2024 East - Micro Class',
      location: 'Florida',
      division: 'Micro Class',
      description: 'Competed in Florida in the challenging Micro Class division, developing innovative solutions for compact aircraft design.',
      image: '/images/other/IMG_6959.jpg',
      link: '/competition-2024-us'
    }
  ];

  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">Competition Archive</h1>
        <p className="page-subtitle">A comprehensive history of our competitive achievements</p>
      </div>

      <section className="content-section" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Explore our journey through SAE Aero Design competitions. Each competition has taught us valuable lessons and helped shape our team into what it is today.
            </p>
          </div>

          {/* Competition Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '60px' }}>
            {competitions.map((comp, index) => (
              <Link href={comp.link} key={index} style={{ textDecoration: 'none' }}>
                <div
                  className="preview-card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '250px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                    <Image
                      src={comp.image}
                      alt={comp.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(135deg, #CFB53B, #FFA500)', padding: '8px 16px', borderRadius: '20px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '15px' }}>
                      <span style={{ color: '#000', fontWeight: 'bold', fontSize: '0.9rem' }}>{comp.year}</span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#000' }}>{comp.title}</h3>

                    <div style={{ marginBottom: '15px' }}>
                      <p style={{ color: '#CFB53B', fontWeight: 'bold', marginBottom: '5px' }}>📍 {comp.location}</p>
                      <p style={{ color: '#666', fontSize: '0.95rem' }}>{comp.division}</p>
                    </div>

                    <p style={{ color: '#333', lineHeight: 1.6, flex: 1 }}>{comp.description}</p>

                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', color: '#CFB53B', fontWeight: 'bold' }}>
                      <span>View Details</span>
                      <span className="card-arrow" style={{ marginLeft: '10px' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Home Button */}
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <Link href="/#competitions" style={{ textDecoration: 'none' }}>
              <button className="cta-button" style={{ background: '#000', color: '#CFB53B', border: '2px solid #CFB53B' }}>
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000' }}>Our Journey</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>From our first competition to international stages</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {competitions.map((comp, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '60px',
                  paddingBottom: index < competitions.length - 1 ? '60px' : '0',
                  borderLeft: index < competitions.length - 1 ? '3px solid #CFB53B' : 'none'
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-10px',
                    top: '0',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#CFB53B',
                    border: '3px solid #FFF',
                    boxShadow: '0 0 0 3px #CFB53B'
                  }}
                />

                <div style={{ background: '#FFF', padding: '25px', borderRadius: '15px', border: '2px solid #CFB53B' }}>
                  <div style={{ background: 'linear-gradient(135deg, #CFB53B, #FFA500)', padding: '5px 12px', borderRadius: '15px', display: 'inline-block', marginBottom: '10px' }}>
                    <span style={{ color: '#000', fontWeight: 'bold', fontSize: '0.85rem' }}>{comp.year}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#000' }}>{comp.title}</h3>
                  <p style={{ color: '#666', marginBottom: '10px' }}>📍 {comp.location} • {comp.division}</p>
                  <p style={{ color: '#333', fontSize: '0.95rem', lineHeight: 1.6 }}>{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
