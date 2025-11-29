'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Leadership() {
  useEffect(() => {
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

    const sections = document.querySelectorAll('.leadership-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      name: 'Will Shorey',
      title: 'President',
      major: 'Aerospace Engineering',
      description: 'Leading the team with vision and innovation, Will oversees all strategic decisions and ensures our competitive excellence.',
      image: '/images/leadership/Shorey, Will.jpg'
    },
    {
      name: 'Nick Rose',
      title: 'Treasurer',
      major: 'Engineering',
      description: 'Managing team finances, sponsorship relationships, and ensuring efficient resource allocation for projects.',
      image: '/images/leadership/Rose, Will.jpg'
    },
    {
      name: 'Aaryan Lath',
      title: 'Chief Engineer',
      major: 'Engineering',
      description: 'Overseeing technical development and ensuring engineering excellence across all aircraft systems.',
      image: '/images/leadership/Lath, Aaryan.jpg'
    },
    {
      name: 'Matthew Leight',
      title: 'Pilot, Founder, and Advisor in Training',
      major: 'Aerospace Engineering',
      description: 'Conducting flight operations, providing strategic guidance, and sharing expertise from founding the team.',
      image: '/images/leadership/Leight, Matthew.jpg'
    },
    {
      name: 'Max Palmer',
      title: 'Mechanical Engineer',
      major: 'Mechanical Engineering',
      description: 'Designing and developing mechanical systems and components for aircraft performance.',
      image: '/images/leadership/Palmer, Max.jpg'
    },
    {
      name: 'Leticia Santos',
      title: 'Systems Lead',
      major: 'Engineering',
      description: 'Coordinating integration of all aircraft systems and ensuring seamless operation between components.',
      image: '/images/leadership/Santos, Leticia.png'
    },
    {
      name: 'Almos Quevedo',
      title: 'Aero Lead',
      major: 'Aerospace Engineering',
      description: 'Responsible for aerodynamic analysis, design optimization, and performance predictions.',
      image: '/images/leadership/Quevedo, Almos.jpg'
    },
    {
      name: 'Adam Zhu',
      title: 'Principal Aero Engineer',
      major: 'Aerospace Engineering',
      description: 'Conducting advanced aerodynamic analysis and providing technical expertise for aircraft development.',
      image: '/images/leadership/Zhu, Adam.jpg'
    },
    {
      name: 'AJ Woods',
      title: 'Principal Structures Engineer',
      major: 'Engineering',
      description: 'Performing structural analysis, weight optimization, and ensuring aircraft durability and safety.',
      image: '/images/leadership/Woods, AJ.png'
    }
  ];

  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Leadership Team</h1>
          <p className="page-subtitle">Meet the dedicated leaders driving our success</p>
        </div>
      </div>

      <section className="leadership-section">
        <div className="container">
          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={150}
                    height={150}
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-title">{leader.title}</p>
                  <p className="leader-major">{leader.major}</p>
                  <p className="leader-description">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-links-bar" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#CFB53B', fontSize: '2.8rem', marginBottom: '25px', fontWeight: 'bold' }}>Support Our Mission</h2>
            <p style={{ color: '#FFFFFF', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>Learn how you can help us achieve aerospace excellence</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '60px' }}>
            <Link href="/sponsors" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn" style={{ padding: '25px 60px', fontSize: '1.4rem' }}>
                View Our Sponsors
              </button>
            </Link>
            <Link href="/#competitions" style={{ textDecoration: 'none' }}>
              <button className="quick-links-btn-outline" style={{ padding: '25px 60px', fontSize: '1.4rem' }}>
                View Our Competitions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
