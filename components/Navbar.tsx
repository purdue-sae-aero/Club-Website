'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setIsScrolled(true);
        setIsExpanded(false);
      } else {
        setIsScrolled(false);
        setIsExpanded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = `navbar ${isScrolled ? (isExpanded ? 'navbar-expanded' : 'navbar-slim') : ''}`;

  return (
    <nav
      className={navbarClass}
      onMouseEnter={() => isScrolled && setIsExpanded(true)}
      onMouseLeave={() => isScrolled && setIsExpanded(false)}
    >
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/other/PSAEA_logo-thumbnail.png"
            alt="Purdue SAE Aero Logo"
            width={50}
            height={50}
            style={{ height: '50px', marginRight: '10px', verticalAlign: 'middle', width: 'auto' }}
          />
          Purdue SAE Aero
        </Link>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link href="/#home" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/#competitions" className="nav-link">Competitions</Link></li>
          <li className="nav-item"><Link href="/sponsors" className="nav-link">Sponsors</Link></li>
          <li className="nav-item"><Link href="/leadership" className="nav-link">Leadership</Link></li>
          <li className="nav-item"><Link href="/#contact" className="nav-link">Contact Us</Link></li>
        </ul>
        <div
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
