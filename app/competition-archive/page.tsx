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
      image: '/images/Brasil Image.JPG',
      link: '/competition-2025-us'
    },
    {
      year: '2024',
      title: '2024 Brazil - Regular Class',
      location: 'Brazil',
      division: 'Regular Class',
      description: 'Competed internationally in the Regular Class, representing Purdue on the global stage and gaining valuable international competition experience.',
      image: '/images/The Last Hope.JPG',
      link: '/competition-2024-brazil'
    },
    {
      year: '2024',
      title: '2024 East - Micro Class',
      location: 'Lakeland, Florida',
      division: 'Micro Class',
      description: 'Diving in the deep end with our very first competition.',
      image: '/images/Micro_Aircraft.jpg',
      link: '/competition-2024-us'
    }
  ];

  const journeyItems = [
    {
      year: '2026',
      title: '2026 East - Regular Class',
      location: 'Lakeland, Florida',
      upcoming: true
    },
    {
      year: '2025',
      title: '2025 East - Regular Class',
      location: 'Fort Worth, Texas'
    },
    {
      year: '2024',
      title: '2024 Brazil - Regular Class',
      location: 'Brazil'
    },
    {
      year: '2024',
      title: '2024 East - Micro Class',
      location: 'Lakeland, Florida'
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
            <p style={{ fontSize: '1.2rem', color: '#1a1a1a', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
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
                    transition: 'all 0.3s ease',
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid #d9aa08',
                    boxShadow: '0 4px 20px rgba(217, 170, 8, 0.2)',
                    padding: '20px'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                    <Image
                      src={comp.image}
                      alt={comp.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'linear-gradient(135deg, #d9aa08, #f0c040)', padding: '8px 16px', borderRadius: '20px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '15px' }}>
                      <span style={{ color: '#020202', fontWeight: 700, fontSize: '0.9rem' }}>{comp.year}</span>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#020202' }}>{comp.title}</h3>

                    <div style={{ marginBottom: '15px' }}>
                      <p style={{ color: '#d9aa08', fontWeight: 700, marginBottom: '5px' }}>📍 {comp.location}</p>
                      <p style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>{comp.division}</p>
                    </div>

                    <p style={{ color: '#1a1a1a', lineHeight: 1.6, flex: 1 }}>{comp.description}</p>

                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', color: '#d9aa08', fontWeight: 700 }}>
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
              <button className="cta-button" style={{ background: '#020202', color: '#d9aa08', border: '2px solid #d9aa08' }}>
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202' }}>Our Journey</h2>
            <p style={{ fontSize: '1.1rem', color: '#1a1a1a' }}>From our first competition to international stages</p>
          </div>

          <div className="journey-grid">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: item.upcoming 
                    ? 'linear-gradient(135deg, #d9aa08, #f0c040)' 
                    : '#FFFFFF',
                  padding: '25px 20px',
                  borderRadius: '15px',
                  border: `3px solid ${item.upcoming ? '#020202' : '#d9aa08'}`,
                  boxShadow: '0 4px 15px rgba(217, 170, 8, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="journey-card"
              >
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: item.upcoming ? '#020202' : '#d9aa08',
                  marginBottom: '8px'
                }}>
                  {item.year}
                </div>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  color: '#020202', 
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#1a1a1a',
                  marginBottom: item.upcoming ? '10px' : '0'
                }}>
                  📍 {item.location}
                </p>
                {item.upcoming && (
                  <p style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    color: '#020202',
                    marginTop: '10px',
                    fontStyle: 'italic'
                  }}>
                    Upcoming - Watch for updates!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
