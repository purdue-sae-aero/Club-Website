'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Competition2024Brazil() {
  useEffect(() => {
    // Make content sections visible immediately
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('visible'));
  }, []);

  return (
    <main className="page-content">
      <div className="page-header">
        <h1 className="page-title">2024 Brazil Competition - Regular Class</h1>
        <p className="page-subtitle">A Massive Learning Experience</p>
      </div>

      <section className="content-section competition-page-section">
        <div className="competition-bg-image" style={{ backgroundImage: 'url(/images/backgrounds/Airport_aerial.jpg)' }}></div>
        <div className="container competition-content-wrapper">
          <div className="content-text competition-text-box" style={{ marginBottom: '50px' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
              The Brasil timeline was unforgiving. With summer scattering our members across the country and the globe, most of the design was done remote with long hours of manufacturing taking place once on campus.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
              Test flight one ended in an electrical failure, falling from roughly 50 feet the aircraft fell and was destroyed. We were devastated but not disheartened. We treated it like an engineering problem, documented the failure, identified root cause, and rebuilt with clear corrective actions. x, we produced a second aircraft in about two weeks.
            </p>
          </div>

          <div className="competition-image-gallery" style={{ marginBottom: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              <div className="gallery-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <Image src="/images/Failure-Look_of_Despair.jpg" alt="" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '15px', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }} />
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '10px', marginTop: '15px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ textAlign: 'center', fontSize: '1rem', color: '#1a1a1a', fontStyle: 'italic', margin: 0 }}>However, we had another setback with a critical boom failure - about seven days before competition</p>
                </div>
              </div>
              <div className="gallery-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <Image src="/images/The Last Hope.JPG" alt="" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '15px', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }} />
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: '10px', marginTop: '15px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ textAlign: 'center', fontSize: '1rem', color: '#1a1a1a', fontStyle: 'italic', margin: 0 }}>Our aircraft, also called the last hope, on the runway which was built in a record 6 days with countless hours porured in</p>
                </div>
              </div>
              <div className="gallery-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <Image src="/images/Brasil Image.JPG" alt="" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '15px', border: '3px solid #d9aa08', boxShadow: '0 8px 20px rgba(217, 170, 8, 0.3)' }} />
              </div>
            </div>
          </div>

          <div className="content-text competition-text-box">
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
              Our final test flight was scheduled the morning we left for Brazil. It was make or break on the day where the conditions were less than suboptimal with wind gusts around 20 mph. A gust caught the aircraft on the ground and destroyed it before we could gather meaningful flight data.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              Standing over all the current and past wreckage, we never quit. We were a team that had stayed in the fight as long as the fight still existed. We learned that resilience isn&apos;t stubbornness, it&apos;s direction: the willingness to keep moving toward the goal while there is still a plausible path forward. The aircraft didn&apos;t make it to the flight line in Brazil, but we still went, met some of South America&apos;s strongest current and future aeronautical engineers, learned from their designs and their execution, and came home sharper, tougher, and ready to rebuild stronger next year.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
