'use client';

import Image from 'next/image';

export default function Donate() {
  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Donate</h1>
          <p className="page-subtitle">Help us build the future of aerospace</p>
        </div>
      </div>

      <section className="content-section" style={{ padding: '120px 0', background: '#FFFFFF', position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.1 }}>
          <Image
            src="/images/other/IMG_7522.jpg"
            alt="Aircraft under construction"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ width: '120px', height: '120px', margin: '0 auto 30px', border: '4px solid #d9aa08', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(217, 170, 8, 0.1)' }}>
                <span style={{ fontSize: '4rem' }}>🚧</span>
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: '#020202', fontWeight: 'bold' }}>Work in Progress</h2>
              <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '40px', color: '#1a1a1a' }}>
                Our donation page is currently under construction, just like our aircraft!
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #020202 0%, #1a1a1a 100%)', padding: '50px 40px', borderRadius: '20px', border: '3px solid #d9aa08', boxShadow: '0 10px 40px rgba(217, 170, 8, 0.3)' }}>
              <h3 style={{ color: '#d9aa08', fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>Want to Support Us?</h3>
              <p style={{ color: '#FFFFFF', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '30px' }}>
                In the meantime, please reach out to us directly to discuss donation opportunities. We&apos;d love to talk about how you can help support the next generation of aerospace engineers!
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/about#contact" style={{ textDecoration: 'none' }}>
                  <button className="cta-button" style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem' }}>
                    Contact Us
                  </button>
                </a>
                <a href="mailto:saeaero@purdue.edu" style={{ textDecoration: 'none' }}>
                  <button className="cta-button" style={{ background: 'transparent', border: '2px solid #d9aa08', color: '#d9aa08', padding: '15px 40px', fontSize: '1.1rem' }}>
                    Email Us
                  </button>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(217, 170, 8, 0.05)', borderRadius: '15px', border: '2px solid #d9aa08' }}>
              <p style={{ fontSize: '1rem', color: '#1a1a1a', fontStyle: 'italic' }}>
                💡 Interested in sponsorship opportunities? Visit our <a href="/about#sponsors" style={{ color: '#d9aa08', fontWeight: 'bold', textDecoration: 'underline' }}>About Us</a> page to learn more about partnering with Purdue SAE Aero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
