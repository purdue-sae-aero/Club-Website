'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function About() {
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

    const sections = document.querySelectorAll('.leadership-section, .sponsors-intro, .contact-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Our leadership, sponsors, and contact information</p>
        </div>
      </div>

      {/* Leadership Section */}
      <section id="leadership" className="leadership-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#020202' }}>Our Leadership Team</h2>
          <div className="leadership-grid">
            {/* AJ Woods - President */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Woods, AJ.png"
                  alt="AJ Woods"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>AJ Woods</h3>
                <p className="leader-title">President</p>
                <p className="leader-major">Mechanical Engineering</p>
              </div>
            </div>

            {/* William Shorey - Vice President and Co-Founder */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Shorey, Will.jpg"
                  alt="William Shorey"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>William Shorey</h3>
                <p className="leader-title">Vice President & Co-Founder</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Rafi Razmi - Treasurer */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Razmi, Rafi - Linkedin Stolen.jpg"
                  alt="Rafi Razmi"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Rafi Razmi</h3>
                <p className="leader-title">Treasurer</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Leah Sanitato - Structures Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Sanitato, Leah - Linkedin Stolen.jpg"
                  alt="Leah Sanitato"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Leah Sanitato</h3>
                <p className="leader-title">Structures Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Yuta Tsuboi - Mechanisms and Propulsion Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Tsuboi, Yuta - Linkedin Stolen.jpg"
                  alt="Yuta Tsuboi"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Yuta Tsuboi</h3>
                <p className="leader-title">Mechanisms and Propulsion Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Jacob Sheridan - Mechanisms and Propulsion Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Sheridan, Jacob.jpg"
                  alt="Jacob Sheridan"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Jacob Sheridan</h3>
                <p className="leader-title">Mechanisms and Propulsion Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Luke Wu - Advanced Class Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Wu, Luke.png"
                  alt="Luke Wu"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Luke Wu</h3>
                <p className="leader-title">Advanced Class Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Sydney Wilson - Aerodynamics Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Wilson, Sydney - Linkedin Stolen.jpg"
                  alt="Sydney Wilson"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Sydney Wilson</h3>
                <p className="leader-title">Aerodynamics Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>

            {/* Adam Zhu - Aerodynamics Lead */}
            <div className="leader-card">
              <div className="leader-image">
                <Image
                  src="/images/About Us section/Zhu, Adam.jpg"
                  alt="Adam Zhu"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leader-info">
                <h3>Adam Zhu</h3>
                <p className="leader-title">Aerodynamics Lead</p>
                <p className="leader-major">Aeronautical and Astronautical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="sponsors-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Our Sponsors</h2>
            <p>The success of Purdue SAE Aero is made possible through the generous support of our sponsors. These partnerships enable us to pursue cutting-edge aerospace engineering projects, participate in competitions, and provide invaluable learning experiences for our members.</p>
          </div>
          
          {/* Sponsor Logos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px', alignItems: 'center', justifyItems: 'center' }}>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '15px', border: '2px solid #d9aa08', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', width: '100%', maxWidth: '300px', transition: 'transform 0.3s ease', boxShadow: '0 4px 15px rgba(217, 170, 8, 0.2)' }}>
              <Image
                src="/images/About Us section/Purdue-University-Logo-500x281.png"
                alt="Purdue University"
                width={250}
                height={140}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '15px', border: '2px solid #d9aa08', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', width: '100%', maxWidth: '300px', transition: 'transform 0.3s ease', boxShadow: '0 4px 15px rgba(217, 170, 8, 0.2)' }}>
              <Image
                src="/images/About Us section/RTX_Subsidiaries_645x430.jpg"
                alt="RTX"
                width={250}
                height={166}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '15px', border: '2px solid #d9aa08', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', width: '100%', maxWidth: '300px', transition: 'transform 0.3s ease', boxShadow: '0 4px 15px rgba(217, 170, 8, 0.2)' }}>
              <Image
                src="/images/About Us section/SKB-Cases.jpg"
                alt="SKB Cases"
                width={250}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="sponsorship-opportunities" style={{ background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="opportunity-content">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>Become a Sponsor</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>Partner with Purdue SAE Aero and support the next generation of aerospace engineers. Your sponsorship helps fund aircraft development, competition travel, and hands-on learning experiences.</p>

            {/* Sponsorship Tiers */}
            <div style={{ display: 'grid', gap: '30px', marginBottom: '60px' }}>
              {/* Ground Crew Tier */}
              <div style={{ background: '#FFFFFF', border: '3px solid #020202', borderRadius: '15px', padding: '40px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '20px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#020202', margin: 0 }}>GROUND CREW</h3>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#020202' }}>$100-$1,499</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#1a1a1a', fontSize: '1.1rem', lineHeight: 2, textAlign: 'left' }}>
                  <li>Logo in marketing materials</li>
                  <li>Team update newsletters</li>
                </ul>
              </div>

              {/* Takeoff Tier */}
              <div style={{ background: 'linear-gradient(135deg, #d9aa08 0%, #f0c040 100%)', border: '3px solid #020202', borderRadius: '15px', padding: '40px', boxShadow: '0 6px 25px rgba(217, 170, 8, 0.4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '20px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#020202', margin: 0 }}>TAKEOFF</h3>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#020202' }}>$1,500-$4,499</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#020202', fontSize: '1.1rem', lineHeight: 2, textAlign: 'left' }}>
                  <li>All previous rewards</li>
                  <li>Logo on team jersey sleeves</li>
                  <li>Invitation to major team events</li>
                  <li>Access to team resume booklet</li>
                </ul>
              </div>

              {/* Cruise Tier */}
              <div style={{ background: '#FFFFFF', border: '3px solid #020202', borderRadius: '15px', padding: '40px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '20px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#020202', margin: 0 }}>CRUISE</h3>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#020202' }}>$4,500+</span>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#1a1a1a', fontSize: '1.1rem', lineHeight: 2, textAlign: 'left' }}>
                  <li>All previous rewards</li>
                  <li>Logo on all competition aircraft and team jersey (front/back)</li>
                  <li>PSAEA will host a semesterly networking session</li>
                  <li>Exclusive sponsorship merch items</li>
                </ul>
              </div>
            </div>

            <div className="cta-section" style={{ textAlign: 'center' }}>
              <a 
                href="mailto:saeaero@purdue.edu?cc=lath@purdue.edu,woods248@purdue.edu&subject=Purdue%20SAE%20Aero%20Sponsorship%20Opportunity" 
                className="sponsor-cta-btn"
                style={{ marginRight: '20px', marginBottom: '20px', display: 'inline-block' }}
              >
                Contact Us About Sponsorship
              </a>
              <a href="/FA26 PSAE Aero Information Packet.pdf" target="_blank" className="sponsor-info-btn" style={{ display: 'inline-block' }}>
                Download Sponsorship Information Packet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/images/other/Group_pic.jpg"
            alt="Contact Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(2, 2, 2, 0.5)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ display: 'inline-block', fontSize: '2.5rem', color: '#020202', padding: '20px 60px', border: '3px solid #d9aa08', borderRadius: '50px', background: '#FFFFFF' }}>Contact Us</h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="contact-form" style={{ background: 'rgba(255, 255, 255, 0.75)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 40px rgba(2, 2, 2, 0.3)' }}>
              <h3 style={{ color: '#020202', fontSize: '2rem', marginBottom: '15px' }}>Send us a Message</h3>
              <p style={{ color: '#333333', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>Whether you&apos;re interested in joining our team, exploring sponsorship opportunities, or have questions about our projects, we&apos;d love to hear from you!</p>
              <form className="message-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Form submission functionality coming soon!');
              }}>
                <div className="form-group">
                  <label htmlFor="name" style={{ color: '#020202', fontWeight: 600, fontSize: '1.1rem' }}>Name</label>
                  <input type="text" id="name" name="name" required style={{ width: '100%', padding: '15px', border: '2px solid #d9aa08', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }} />
                </div>

                <div className="form-group">
                  <label htmlFor="email" style={{ color: '#020202', fontWeight: 600, fontSize: '1.1rem' }}>Email</label>
                  <input type="email" id="email" name="email" required style={{ width: '100%', padding: '15px', border: '2px solid #d9aa08', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }} />
                </div>

                <div className="form-group">
                  <label htmlFor="message" style={{ color: '#020202', fontWeight: 600, fontSize: '1.1rem' }}>Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ width: '100%', padding: '15px', border: '2px solid #d9aa08', borderRadius: '10px', fontSize: '1rem', marginTop: '8px', transition: 'border-color 0.3s', resize: 'vertical', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(5px)' }}></textarea>
                </div>

                <button type="submit" className="submit-btn" style={{ width: '100%', background: 'linear-gradient(135deg, #d9aa08, #FFA500)', color: '#020202', padding: '18px', border: 'none', borderRadius: '30px', fontSize: '1.2rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 5px 20px rgba(217, 170, 8, 0.4)' }}>Send message to saeaero@purdue.edu</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
