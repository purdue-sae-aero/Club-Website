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
          <div className="content-grid">
            <div className="content-image">
              <div className="competition-image-gallery">
                <div className="gallery-item">
                  <Image src="/images/584da60e-5d07-42ad-bc11-fecb99deb456.JPG" alt="2025 US Competition - Team Photo 1" width={400} height={300} />
                </div>
              </div>
            </div>
            <div className="content-text competition-text-box">
              <h2>Overview</h2>
              <p>In 2025, Purdue SAE Aero participated in the SAE Aero Design US competition, showcasing our continued excellence in aerospace engineering. This competition was the result of months of dedicated work, innovative design, and advanced manufacturing techniques.</p>

              <h2>Key Highlights</h2>
              <div className="achievement-list">
                <div className="achievement-item">
                  <h3>Competition Participation</h3>
                  <p>Competed against teams from universities across the United States in the SAE Aero Design competition.</p>
                </div>
                <div className="achievement-item">
                  <h3>Advanced Design</h3>
                  <p>Implemented cutting-edge aerospace engineering principles and innovative design solutions.</p>
                </div>
                <div className="achievement-item">
                  <h3>Team Excellence</h3>
                  <p>Demonstrated strong teamwork, technical skills, and dedication throughout the competition.</p>
                </div>
                <div className="achievement-item">
                  <h3>Flight Operations</h3>
                  <p>Successfully completed flight missions showcasing our aircraft&apos;s capabilities.</p>
                </div>
              </div>

              <h2>Technical Specifications</h2>
              <ul className="benefits-list">
                <li>Wingspan: 8.5 feet</li>
                <li>Empty Weight: 6.2 lbs</li>
                <li>Max Payload: 18 lbs</li>
                <li>Propulsion: Electric motor with custom prop</li>
                <li>Materials: Carbon fiber composite fuselage and wings</li>
                <li>Flight Time: 12 minutes on single battery</li>
              </ul>

              <h2>Team Reflections</h2>
              <p>The 2025 US competition was a testament to our team&apos;s dedication and innovation. Our team demonstrated strong technical skills and collaboration throughout the design, build, and competition phases. The experience provided valuable lessons that will enhance our future competitions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
