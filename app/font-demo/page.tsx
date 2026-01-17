'use client';

export default function FontDemo() {
  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Font Comparison</h1>
          <p className="page-subtitle">Montserrat vs Nunito Sans vs Work Sans</p>
        </div>
      </div>

      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          {/* Montserrat */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202', fontFamily: 'Montserrat, sans-serif' }}>
              1. Montserrat
            </h2>
            <div className="font-montserrat">
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 700 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 600 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 500 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 400 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#1a1a1a', fontWeight: 300 }}>
                We participate in the SAE Aero Design competitions, where students design, build, and fly remote-controlled aircraft to compete in various challenges. This provides our members with invaluable real-world engineering experience.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer', marginRight: '15px' }}>
                  Learn More
                </button>
                <button style={{ background: '#0066cc', color: '#FFFFFF', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                  Donate
                </button>
              </div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontFamily: 'Montserrat, sans-serif' }}>
                <strong>Characteristics:</strong> Modern, geometric, clean lines. Great for both headings and body text. Very popular in tech and professional contexts.
              </p>
            </div>
          </div>

          {/* Nunito Sans */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202', fontFamily: 'Nunito Sans, sans-serif' }}>
              2. Nunito Sans
            </h2>
            <div className="font-nunito">
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 700 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 600 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 500 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 400 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#1a1a1a', fontWeight: 300 }}>
                We participate in the SAE Aero Design competitions, where students design, build, and fly remote-controlled aircraft to compete in various challenges. This provides our members with invaluable real-world engineering experience.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer', marginRight: '15px' }}>
                  Learn More
                </button>
                <button style={{ background: '#0066cc', color: '#FFFFFF', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                  Donate
                </button>
              </div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontFamily: 'Nunito Sans, sans-serif' }}>
                <strong>Characteristics:</strong> Rounded, friendly, approachable. Excellent readability for long-form content. Great for organizations that want a warm, welcoming feel.
              </p>
            </div>
          </div>

          {/* Work Sans */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202', fontFamily: 'Work Sans, sans-serif' }}>
              3. Work Sans
            </h2>
            <div className="font-work-sans">
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 700 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 600 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 500 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 400 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#1a1a1a', fontWeight: 300 }}>
                We participate in the SAE Aero Design competitions, where students design, build, and fly remote-controlled aircraft to compete in various challenges. This provides our members with invaluable real-world engineering experience.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer', marginRight: '15px' }}>
                  Learn More
                </button>
                <button style={{ background: '#0066cc', color: '#FFFFFF', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 700, border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                  Donate
                </button>
              </div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontFamily: 'Work Sans, sans-serif' }}>
                <strong>Characteristics:</strong> Professional, versatile, slightly condensed. Optimized for screen reading. Great balance between modern and traditional.
              </p>
            </div>
          </div>

          {/* Recommendation */}
          <div style={{ padding: '40px', border: '3px solid #0066cc', borderRadius: '20px', background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', textAlign: 'center' }}>
              💡 My Recommendation: Montserrat
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#1a1a1a', textAlign: 'center', marginBottom: '20px' }}>
              <strong>Why Montserrat?</strong>
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: '#1a1a1a', maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
              <li><strong>Professional & Modern:</strong> Perfect for an engineering team - it conveys precision and innovation</li>
              <li><strong>Excellent Hierarchy:</strong> Clear distinction between headings and body text with various weights</li>
              <li><strong>Great Readability:</strong> Clean geometric design works well at all sizes</li>
              <li><strong>Pairs Well with Gold:</strong> The bold, clean lines complement your #d9aa08 accent color beautifully</li>
              <li><strong>Versatile:</strong> Works great for both technical content and marketing copy</li>
              <li><strong>Industry Standard:</strong> Used by many aerospace and tech companies for brand consistency</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#666', textAlign: 'center', marginTop: '30px', fontStyle: 'italic' }}>
              However, all three are excellent choices! Nunito Sans is warmer and more approachable if you want a friendlier feel, while Work Sans offers a nice middle ground.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
