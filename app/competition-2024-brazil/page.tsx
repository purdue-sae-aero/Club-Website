'use client';

import Image from 'next/image';

export default function Competition2024Brazil() {
  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">2024 Brazil Competition - Regular Class</h1>
        <p className="page-subtitle">International Competition Excellence</p>
      </div>

      <section className="content-section competition-page-section">
        <div className="competition-bg-image" style={{ backgroundImage: 'url(/images/backgrounds/Airport_aerial.jpg)' }}></div>
        <div className="container competition-content-wrapper">
          <div className="content-grid">
            <div className="content-image">
              <div className="competition-image-gallery">
                <div className="gallery-item">
                  <Image src="/images/other/IMG_7522.jpg" alt="2024 Brazil Competition" width={400} height={300} />
                </div>
              </div>
            </div>
            <div className="content-text competition-text-box">
              <h2>Overview</h2>
              <p>In 2024, Purdue SAE Aero competed internationally in Brazil, participating in the Regular Class division. This was an incredible opportunity to represent Purdue on the global stage and compete against international teams.</p>

              <h2>Key Highlights</h2>
              <div className="achievement-list">
                <div className="achievement-item">
                  <h3>International Competition</h3>
                  <p>Represented Purdue University on the global stage, competing in Brazil.</p>
                </div>
                <div className="achievement-item">
                  <h3>Regular Class Excellence</h3>
                  <p>Competed in the challenging Regular Class division against international teams.</p>
                </div>
                <div className="achievement-item">
                  <h3>Global Experience</h3>
                  <p>Gained valuable international competition experience and cultural exchange.</p>
                </div>
                <div className="achievement-item">
                  <h3>Technical Achievement</h3>
                  <p>Demonstrated Purdue&apos;s engineering excellence on an international platform.</p>
                </div>
              </div>

              <h2>Team Reflections</h2>
              <p>The 2024 Brazil competition was a highlight of our team&apos;s history. Competing internationally provided unique challenges and learning opportunities, from logistics and travel to competing against diverse engineering approaches from around the world.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
