'use client';

import { useEffect } from 'react';

export default function Competition2024US() {
  useEffect(() => {
    // Make content sections visible immediately
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">2024 US Competition - Micro Class</h1>
        <p className="page-subtitle">Lakeland, Florida</p>
      </div>

      <section className="content-section competition-page-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src="/images/Micro-plane-run.mov" type="video/mp4" />
        </video>
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="content-text competition-text-box" style={{ background: 'rgba(255, 255, 255, 0.3)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)', marginBottom: '40px' }}>
              <h2 style={{ color: '#020202', marginBottom: '20px' }}>Overview</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#020202' }}>
                In 2024, Purdue SAE Aero participated in the SAE Aero Design East competition in Lakeland, Florida, competing in the Micro Class division. This competition challenged our team to design and build a compact, efficient aircraft.
              </p>
            </div>

            <div className="content-text competition-text-box" style={{ background: 'rgba(255, 255, 255, 0.3)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h2 style={{ color: '#020202', marginBottom: '20px' }}>Team Reflections</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#020202' }}>
                The 2024 East competition in the Micro Class provided invaluable experience in designing compact, efficient aircraft. Our team learned important lessons about optimization and constraint-driven design. Diving in the deep end with our very first competition taught us resilience, innovation, and the true spirit of aerospace engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
