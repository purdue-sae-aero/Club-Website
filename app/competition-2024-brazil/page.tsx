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
                  <Image src="/images/Brasil Image.JPG" alt="2024 Brazil Competition" width={600} height={450} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                </div>
              </div>
            </div>
            <div className="content-text competition-text-box">
              <h2>2024 SAE Brasil Competition</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                <strong>PSAEA was founded by four sophomores and a junior, with more ambition than experience.</strong> With the first season barely over, in the spring, we grew the team, recruited freshmen, and started learning the real fundamentals in design, manufacturing, and test.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                The following fall we were given an incredible opportunity: an invitation to compete in Brazil. The timeline was unforgiving. With summer scattering our members across the country and the world, much of our design work happened remotely. When we returned to campus in August, we threw ourselves into manufacturing, long hours in the shop, and constant iteration, and by early October we had a beautiful 10-foot wingspan aircraft ready for flight test, with our departure for Brazil only a month away.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                Test flight one ended in an electrical failure. From roughly 50 feet the aircraft fell and was destroyed. We were devastated but not disheartened. We treated it like an engineering problem. We took it as a personal one: document the failure, identify root cause, tighten our build and verification process, and rebuild with clear corrective actions. Because we had learned how to work together under pressure, we produced a second aircraft in about two weeks.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                About seven days before <strong style={{ textDecoration: 'underline' }}>competition</strong>, we flew again. This time we experienced a critical boom failure. We had undersized a primary structural member, the aircraft fell about 50 feet and was destroyed again. That moment could have ended our season. Instead, we persevered. We <strong style={{ textDecoration: 'underline' }}>owned</strong> the mistake, took the lesson, and rebuilt with urgency and discipline. In six days, we built a third aircraft and made rapid design changes, including shortening our tail arm to reduce boom loading and reinforcing the boom-wing connection that had revealed itself as a weak point.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                Our final test flight was scheduled the morning we left for Brazil. It was <strong style={{ textDecoration: 'underline' }}>make</strong> or <strong style={{ textDecoration: 'underline' }}>break</strong>. Conditions were suboptimal, with wind gusts around 20 mph. A gust caught the aircraft on the ground and destroyed it before we could gather meaningful flight data.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                Standing over the wreckage, we didn&apos;t feel like quitters. We felt like a team that had stayed in the fight as long as the fight still existed. We learned that resilience isn&apos;t stubbornness, <strong style={{ textDecoration: 'underline' }}>it&apos;s</strong> direction: the willingness to keep moving toward the goal while there is still a plausible path forward. We decided that our mission, the timeline finally said &quot;no&quot; and we took the last vote. The aircraft didn&apos;t make it to the flight line in Brazil, but we still went, met some of South America&apos;s strongest current and future aeronautical engineers, learned from their designs and their execution, and came home sharper, tougher, and ready to rebuild stronger next year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
