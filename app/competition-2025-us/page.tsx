'use client';

import Image from 'next/image';

export default function Competition2025US() {
  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">2025 US Competition</h1>
        <p className="page-subtitle">Our Latest Competition Excellence</p>
      </div>

      <section className="content-section competition-page-section">
        <div className="competition-bg-image" style={{ backgroundImage: 'url(/images/backgrounds/Airport_aerial.jpg)' }}></div>
        <div className="container competition-content-wrapper">
          {/* Three Images Section with Descriptions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            {/* Wind Tunnel Test */}
            <div>
              <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)', marginBottom: '20px' }}>
                <Image src="/images/Wind_Tunnel_Test.png" alt="" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#020202', marginBottom: '10px', fontSize: '1.3rem' }}>Wind Tunnel Testing</h3>
                <p style={{ color: '#1a1a1a', lineHeight: 1.6 }}>
                  Utilizing Purdue&apos;s world-class facilities to the fullest, we gained valuable aerodynamic data and hands-on learning experience that proved crucial for our aircraft design.
                </p>
              </div>
            </div>

            {/* Competition Aircraft */}
            <div>
              <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)', marginBottom: '20px' }}>
                <Image src="/images/other/IMG_6959.jpg" alt="" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#020202', marginBottom: '10px', fontSize: '1.3rem' }}>Competition Aircraft</h3>
                <p style={{ color: '#1a1a1a', lineHeight: 1.6 }}>
                  Our 2025 competition aircraft, designed and built by our dedicated team of student engineers.
                </p>
              </div>
            </div>

            {/* First Test Flight Preview */}
            <div>
              <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)', marginBottom: '20px' }}>
                <video controls style={{ width: '100%', display: 'block' }}>
                  <source src="/images/other/Dallas_2025test.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                <h3 style={{ color: '#020202', marginBottom: '10px', fontSize: '1.3rem' }}>First Test Flight</h3>
                <p style={{ color: '#1a1a1a', lineHeight: 1.6 }}>
                  Preview of our initial test flight. The full video and lessons learned are featured below.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Video Section */}
          <div className="content-grid" style={{ marginTop: '80px', gap: '40px' }}>
            <div className="content-text competition-text-box">
              <h2 style={{ color: '#020202', fontSize: '2rem', marginBottom: '20px' }}>First Test Flight</h2>
              <p style={{ color: '#1a1a1a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                The first test flight... the aircraft flew, just not how we expected to. This initial attempt taught us valuable lessons about aircraft stability and control systems that would prove crucial for our competition success.
              </p>
              <div style={{ marginTop: '20px', borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08' }}>
                <video controls style={{ width: '100%', display: 'block' }}>
                  <source src="/images/other/Dallas_2025test.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="content-text competition-text-box">
              <h2 style={{ color: '#020202', fontSize: '2rem', marginBottom: '20px' }}>Competition Test Flight</h2>
              <p style={{ color: '#1a1a1a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px' }}>
                At the competition, the aircraft performed significantly better, demonstrating the improvements made from our testing phase. Key learnings from this experience include giving aeroelasticity a strong consideration in future designs and setting up a better timeline for development and testing phases.
              </p>
              <div style={{ marginTop: '20px', borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08' }}>
                <video controls style={{ width: '100%', display: 'block' }}>
                  <source src="/images/other/Dallas_2025comp.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
