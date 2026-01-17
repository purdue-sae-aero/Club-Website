'use client';

import Image from 'next/image';

export default function Competition2024US() {
  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">2024 US Competition - Micro Class</h1>
        <p className="page-subtitle">Competing in Florida</p>
      </div>

      <section className="content-section competition-page-section">
        <div className="competition-bg-image" style={{ backgroundImage: 'url(/images/backgrounds/Airport_aerial.jpg)' }}></div>
        <div className="container competition-content-wrapper">
          <div className="content-grid">
            <div className="content-image">
              <div className="competition-image-gallery">
                <div className="gallery-item">
                  <Image src="/images/other/IMG_6959.jpg" alt="" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
            <div className="content-text competition-text-box">
              <h2>Overview</h2>
              <p>In 2024, Purdue SAE Aero participated in the SAE Aero Design East competition in Florida, competing in the Micro Class division. This competition challenged our team to design and build a compact, efficient aircraft.</p>

              <h2>Key Highlights</h2>
              <div className="achievement-list">
                <div className="achievement-item">
                  <h3>Micro Class Competition</h3>
                  <p>Competed in the challenging Micro Class division with strict size and weight constraints.</p>
                </div>
                <div className="achievement-item">
                  <h3>Technical Innovation</h3>
                  <p>Developed innovative solutions to maximize performance within micro class limitations.</p>
                </div>
                <div className="achievement-item">
                  <h3>Team Collaboration</h3>
                  <p>Demonstrated exceptional teamwork and engineering problem-solving skills.</p>
                </div>
              </div>

              <h2>Team Reflections</h2>
              <p>The 2024 East competition in the Micro Class provided invaluable experience in designing compact, efficient aircraft. Our team learned important lessons about optimization and constraint-driven design.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
