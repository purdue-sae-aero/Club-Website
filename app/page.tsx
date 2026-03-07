'use client';

import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [competitionImage, setCompetitionImage] = useState('');
  const [isCgModalOpen, setIsCgModalOpen] = useState(false);
  const [cgPassword, setCgPassword] = useState('');
  const [isCgUnlocked, setIsCgUnlocked] = useState(false);
  const [cgAuthError, setCgAuthError] = useState('');
  const [cgError, setCgError] = useState('');
  const [cgResult, setCgResult] = useState<{
    totalWeight: number;
    xCg: number;
    xNp: number;
    cgToNp: number;
  } | null>(null);
  const [cgInputs, setCgInputs] = useState({
    wN: '',
    wMl: '',
    wMr: '',
    xN: '',
    xM: '',
    xNp: ''
  });

  const openCgModal = () => {
    setIsCgModalOpen(true);
    setCgAuthError('');
    setCgError('');
  };

  const closeCgModal = () => {
    setIsCgModalOpen(false);
    setCgPassword('');
    setIsCgUnlocked(false);
    setCgAuthError('');
    setCgError('');
    setCgResult(null);
    setCgInputs({
      wN: '',
      wMl: '',
      wMr: '',
      xN: '',
      xM: '',
      xNp: ''
    });
  };

  const handleCgUnlock = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cgPassword === 'BoilerUP!') {
      setIsCgUnlocked(true);
      setCgAuthError('');
      return;
    }
    setCgAuthError('Incorrect password.');
  };

  const handleCgCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const W_n = Number(cgInputs.wN);
    const W_ml = Number(cgInputs.wMl);
    const W_mr = Number(cgInputs.wMr);
    const x_n = cgInputs.xN.trim() === '' ? 0.502 : Number(cgInputs.xN);
    const x_m = cgInputs.xM.trim() === '' ? 1.032 : Number(cgInputs.xM);
    const x_np = cgInputs.xNp.trim() === '' ? 1.15 : Number(cgInputs.xNp);

    if ([W_n, W_ml, W_mr, x_n, x_m, x_np].some((value) => Number.isNaN(value))) {
      setCgError('Invalid input. Please enter numerical values.');
      setCgResult(null);
      return;
    }

    const W_total = W_n + W_ml + W_mr;
    if (W_total === 0) {
      setCgError('Total weight cannot be zero.');
      setCgResult(null);
      return;
    }

    const x_cg = (W_n * x_n + (W_ml + W_mr) * x_m) / W_total;
    const cg_to_np = x_np - x_cg;

    setCgError('');
    setCgResult({
      totalWeight: W_total,
      xCg: x_cg,
      xNp: x_np,
      cgToNp: cg_to_np
    });
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    const sections = document.querySelectorAll('.content-section, .contact-section, .leadership-section');
    sections.forEach(section => observer.observe(section));

    // Competition image hover effect
    const achievementItems = document.querySelectorAll('.achievement-item[data-team-image]');
    const competitionImageEl = document.getElementById('competition-image');

    achievementItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imageSrc = item.getAttribute('data-team-image');
        if (competitionImageEl && imageSrc) {
          competitionImageEl.style.opacity = '0';
          setTimeout(() => {
            setCompetitionImage(`/images/other/${imageSrc}`);
            competitionImageEl.style.opacity = '1';
            competitionImageEl.style.transform = 'scale(1.05)';
          }, 300);
        }
      });

      item.addEventListener('mouseleave', () => {
        if (competitionImageEl) {
          competitionImageEl.style.transform = 'scale(1)';
        }
      });
    });

    // Set initial competition image
    setCompetitionImage('/images/other/IMG_6959.jpg');
    if (competitionImageEl) {
      setTimeout(() => {
        competitionImageEl.style.opacity = '1';
      }, 500);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-image">
          <Image
            src="/images/other/Group_pic.jpg"
            alt="Purdue SAE Aero Team"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Purdue SAE Aero</h1>
              <p className="hero-subtitle">Engineering Excellence in Aerospace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="content-section" style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '3rem', padding: '20px 60px', border: '3px solid #d9aa08', borderRadius: '50px', background: 'rgba(217, 170, 8, 0.1)' }}>Our Mission</h2>
          </div>
          <div className="content-text" style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '30px' }}>
              Purdue SAE Aero is a <strong>competitive aircraft design team</strong> that develops, builds, and flies aircraft against other universities from across the nation and around the globe.
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '30px' }}>
              Our mission is to <strong>train undergraduate engineers</strong> to utilize aircraft design methodology and tools and <strong>inspire passion</strong> within them to develop high-performing aircraft.
            </p>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="content-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/images/backgrounds/Airport_aerial.jpg"
            alt="Competition Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.6)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <button
            type="button"
            onClick={openCgModal}
            className="cta-button"
            style={{
              position: 'absolute',
              top: '24px',
              right: '0',
              zIndex: 3,
              background: '#d9aa08',
              color: '#020202',
              border: '2px solid #020202',
              padding: '10px 18px',
              fontSize: '0.95rem'
            }}
          >
            CG Calculator
          </button>

          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '2.5rem', color: '#020202', padding: '20px 60px', border: '3px solid #d9aa08', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)' }}>Competitions</h2>
          </div>

          {/* Upcoming Competitions Subsection */}
          <div style={{ marginBottom: '100px' }}>
            <div className="content-text" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Upcoming Competitions</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>We&apos;re preparing for the next SAE Aero Design competitions. Stay tuned for updates on our upcoming competition schedules and follow our journey as we continue to push the boundaries of aerospace engineering.</p>

              <div className="achievement-list">
                <div className="achievement-item">
                  <h3>2026 East - Regular Class</h3>
                  <p>Planning and preparation underway for the next SAE Aero Design East competition in the Regular Class.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Past Competitions Subsection */}
          <div className="content-grid" style={{ gap: '40px' }}>
            <div className="content-image">
              <Image
                id="competition-image"
                src={competitionImage || '/images/other/IMG_6959.jpg'}
                alt="Competition Aircraft"
                width={600}
                height={450}
                style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', transition: 'opacity 0.6s ease, transform 0.6s ease', opacity: 0 }}
              />
            </div>
            <div className="content-text" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Recent Competitions</h3>

              <div className="achievement-list">
                <Link href="/competition-2025-us">
                  <div className="achievement-item" data-team-image="584da60e-5d07-42ad-bc11-fecb99deb456.JPG" style={{ cursor: 'pointer' }}>
                    <h3>2025 East - Regular Class</h3>
                    <p>Competed in Fort Worth in the Regular Class division</p>
                  </div>
                </Link>
                <Link href="/competition-2024-brazil">
                  <div className="achievement-item" data-team-image="IMG_7522.jpg" style={{ cursor: 'pointer' }}>
                    <h3>2024 Brazil - Regular Class</h3>
                    <p>Competed internationally in the Regular Class, representing Purdue on the global stage</p>
                  </div>
                </Link>
              </div>

              {/* Competition Archive Button */}
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href="/competition-archive" style={{ textDecoration: 'none' }}>
                  <button className="cta-button" style={{ background: '#FFFFFF', color: '#020202', border: '2px solid #d9aa08' }}>
                    View Competition Archive
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isCgModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.55)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            style={{
              width: 'min(520px, 100%)',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 22px 60px rgba(0, 0, 0, 0.35)',
              border: '2px solid #d9aa08'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#020202' }}>Aircraft CG Calculator</h3>
              <button
                type="button"
                onClick={closeCgModal}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  cursor: 'pointer',
                  color: '#222'
                }}
                aria-label="Close calculator popup"
              >
                ×
              </button>
            </div>

            {!isCgUnlocked ? (
              <form onSubmit={handleCgUnlock}>
                <p style={{ marginTop: 0, marginBottom: '12px', color: '#333' }}>Enter password to access calculator.</p>
                <input
                  type="password"
                  value={cgPassword}
                  onChange={(e) => setCgPassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #b8b8b8',
                    marginBottom: '12px',
                    fontSize: '1rem'
                  }}
                />
                {cgAuthError && <p style={{ color: '#b00020', marginTop: 0, marginBottom: '12px' }}>{cgAuthError}</p>}
                <button type="submit" className="cta-button" style={{ background: '#020202', color: '#fff' }}>
                  Unlock
                </button>
              </form>
            ) : (
              <form onSubmit={handleCgCalculate}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input
                    type="number"
                    step="any"
                    placeholder="Nose Gear Weight (kg)"
                    value={cgInputs.wN}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, wN: e.target.value }))}
                    required
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Left Main Weight (kg)"
                    value={cgInputs.wMl}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, wMl: e.target.value }))}
                    required
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Right Main Weight (kg)"
                    value={cgInputs.wMr}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, wMr: e.target.value }))}
                    required
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Nose Gear Distance x_n (m) default 0.6"
                    value={cgInputs.xN}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, xN: e.target.value }))}
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Main Gear Distance x_m (m) default 1.047"
                    value={cgInputs.xM}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, xM: e.target.value }))}
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Neutral Point x_np (m) default 1.15"
                    value={cgInputs.xNp}
                    onChange={(e) => setCgInputs((prev) => ({ ...prev, xNp: e.target.value }))}
                    style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
                  />
                </div>
                <p style={{ marginTop: '10px', marginBottom: '14px', color: '#555', fontSize: '0.92rem' }}>
                  Leave distance fields blank to use defaults.
                </p>
                {cgError && <p style={{ color: '#b00020', marginTop: 0, marginBottom: '12px' }}>{cgError}</p>}
                <button type="submit" className="cta-button" style={{ background: '#020202', color: '#fff' }}>
                  Calculate
                </button>

                {cgResult && (
                  <div
                    style={{
                      marginTop: '18px',
                      background: 'rgba(217, 170, 8, 0.12)',
                      border: '1px solid rgba(217, 170, 8, 0.5)',
                      borderRadius: '12px',
                      padding: '14px'
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0' }}><strong>Total Weight:</strong> {cgResult.totalWeight.toFixed(2)} kg</p>
                    <p style={{ margin: '0 0 8px 0' }}><strong>Longitudinal CG (x_cg):</strong> {cgResult.xCg.toFixed(4)} m</p>
                    <p style={{ margin: '0 0 8px 0' }}><strong>Neutral Point (x_np):</strong> {cgResult.xNp.toFixed(4)} m</p>
                    <p style={{ margin: 0 }}>
                      <strong>CG Relative to NP:</strong> {cgResult.cgToNp.toFixed(4)} m {' '}
                      {cgResult.cgToNp > 0 && '(CG is AHEAD of NP - Statically Stable)'}
                      {cgResult.cgToNp < 0 && '(CG is BEHIND of NP - Unstable!)'}
                      {cgResult.cgToNp === 0 && '(CG is EXACTLY ON NP - Neutrally Stable)'}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      {/* Sponsorship Section */}
      <section className="sponsors-home-section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="sponsors-home-content" style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
            <div className="sponsors-home-text" style={{ flex: '1' }}>
              <h2 style={{ marginBottom: '10px' }}>Interested In Supporting Us?</h2>
              <p style={{ marginBottom: '0', fontSize: '1.1rem' }}>Learn more about how you can partner with us in our sponsorship information packet.</p>
            </div>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Link href="/about#sponsors" style={{ textDecoration: 'none' }}>
                <button className="cta-button" style={{ background: '#d9aa08', color: '#020202', padding: '12px 25px', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  Learn More
                </button>
              </Link>
              <Link href="/about#contact" style={{ textDecoration: 'none' }}>
                <button className="cta-button" style={{ background: 'transparent', border: '2px solid #d9aa08', color: '#d9aa08', padding: '12px 25px', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  Get in Touch
                </button>
              </Link>
              <Link href="/donate" style={{ textDecoration: 'none' }}>
                <button className="cta-button" style={{ background: '#0066cc', color: '#FFFFFF', padding: '12px 25px', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
