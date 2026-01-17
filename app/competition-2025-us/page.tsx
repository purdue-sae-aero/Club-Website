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
          {/* Three Images Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }}>
              <Image src="/images/Wind_Tunnel_Test.png" alt="Wind Tunnel Test" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }}>
              <Image src="/images/other/IMG_6959.jpg" alt="Aircraft" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }}>
              <video controls style={{ width: '100%', display: 'block' }}>
                <source src="/images/other/Dallas_2025test.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Section */}
          <div className="content-grid" style={{ marginTop: '60px' }}>
            <div className="content-text competition-text-box">
              <h2>First Test Flight</h2>
              <p>The first test flight... the aircraft flew, just not how we expected to. This initial attempt taught us valuable lessons about aircraft stability and control systems that would prove crucial for our competition success.</p>
              <div style={{ marginTop: '20px', borderRadius: '15px', overflow: 'hidden', border: '3px solid #d9aa08' }}>
                <video controls style={{ width: '100%', display: 'block' }}>
                  <source src="/images/other/Dallas_2025test.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="content-text competition-text-box">
              <h2>Competition Test Flight</h2>
              <p>At the competition, the aircraft performed significantly better, demonstrating the improvements made from our testing phase. Key learnings from this experience include giving aeroelasticity a strong consideration in future designs and setting up a better timeline for development and testing phases.</p>
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
