'use client';

export default function FontDemo() {
  return (
    <main className="page-content">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Montserrat Font Showcase</h1>
          <p className="page-subtitle">Exploring different weights of Montserrat</p>
        </div>
      </div>

      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          {/* Montserrat Light (300) */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202' }}>
              1. Montserrat Light (300)
            </h2>
            <div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 300 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 300 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 300 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 300 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 300, border: 'none', borderRadius: '50px', cursor: 'pointer', marginRight: '15px' }}>
                  Learn More
                </button>
                <button style={{ background: '#0066cc', color: '#FFFFFF', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 300, border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                  Donate
                </button>
              </div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>Use case:</strong> Elegant and refined. Perfect for subtle text, captions, or when you want a lighter, more delicate appearance.
              </p>
            </div>
          </div>

          {/* Montserrat Regular (400) */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202' }}>
              2. Montserrat Regular (400)
            </h2>
            <div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 400 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 400 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 400 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 400 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button style={{ background: '#d9aa08', color: '#020202', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 400, border: 'none', borderRadius: '50px', cursor: 'pointer', marginRight: '15px' }}>
                  Learn More
                </button>
                <button style={{ background: '#0066cc', color: '#FFFFFF', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 400, border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                  Donate
                </button>
              </div>
            </div>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>Use case:</strong> Perfect for body text and paragraphs. Excellent readability for long-form content. This is our default text weight.
              </p>
            </div>
          </div>

          {/* Montserrat Bold (700-800) */}
          <div style={{ marginBottom: '80px', padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: '#f9f9f9' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#020202' }}>
              3. Montserrat Bold (700-800)
            </h2>
            <div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#020202', fontWeight: 800 }}>
                Purdue SAE Aero
              </h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', fontWeight: 700 }}>
                Engineering Excellence in Aerospace
              </h2>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#020202', fontWeight: 600 }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1a1a1a', marginBottom: '20px', fontWeight: 600 }}>
                Purdue SAE Aero is dedicated to advancing aerospace engineering through innovative design, hands-on experience, and competitive excellence. Our team focuses on developing cutting-edge aircraft solutions that push the boundaries of what&apos;s possible in aerospace technology.
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
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>Use case:</strong> Powerful and commanding. Perfect for headings, titles, and call-to-action buttons. Creates strong visual hierarchy.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div style={{ padding: '40px', border: '3px solid #d9aa08', borderRadius: '20px', background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#020202', textAlign: 'center' }}>
              🎨 Montserrat Weight Hierarchy
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#1a1a1a', textAlign: 'center', marginBottom: '20px' }}>
              <strong>Our Typography System</strong>
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: '#1a1a1a', maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
              <li><strong>300 (Light):</strong> Captions, subtle text, elegant touches</li>
              <li><strong>400 (Regular):</strong> Body text, paragraphs, descriptions</li>
              <li><strong>500 (Medium):</strong> Navigation links, emphasized text</li>
              <li><strong>600 (Semi-Bold):</strong> Subheadings (h3-h6), card titles</li>
              <li><strong>700 (Bold):</strong> Section headings (h2), buttons, important text</li>
              <li><strong>800 (Extra-Bold):</strong> Page titles (h1), hero text, major headings</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#1a1a1a', textAlign: 'center', marginTop: '30px' }}>
              Modern, geometric, and professional - Montserrat perfectly represents Purdue SAE Aero&apos;s precision and innovation in aerospace engineering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
