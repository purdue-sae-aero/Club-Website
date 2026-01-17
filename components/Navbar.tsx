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
            src="/images/other/PSAEA_logo-thumbnail.jpg"
            alt="Purdue SAE Aero Logo"
            width={50}
            height={50}
            className="nav-logo-img"
          />
        </Link>
        <div className="nav-links-desktop">
          <Link href="/" className="nav-link">Home</Link>
          
          {/* Competition Dropdown */}
          <div className="nav-dropdown">
            <span className="nav-link">Competition</span>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <div className="dropdown-header">SAE Brasil</div>
                <Link href="/competition-2024-brazil" className="dropdown-link">2024</Link>
              </div>
              <div className="dropdown-section">
                <div className="dropdown-header">SAE Aero Design USA</div>
                <Link href="/competition-2024-us" className="dropdown-link">2024 East Micro</Link>
                <Link href="/competition-2025-us" className="dropdown-link">2025 East Regular</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/donate" className={`donate-btn ${isScrolled && !isExpanded ? 'donate-btn-small' : ''}`}>Donate</Link>
        </div>
        <a 
          href="https://www.linkedin.com/company/purdue-sae-aero-design/posts/?feedView=all" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-icon"
          aria-label="Visit our LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item nav-item-header">Competition</li>
          <li className="nav-item nav-item-subheader">SAE Brasil</li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2024-brazil" className="nav-link">2024</Link></li>
          <li className="nav-item nav-item-subheader">SAE Aero Design USA</li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2024-us" className="nav-link">2024 East Micro</Link></li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2025-us" className="nav-link">2025 East Regular</Link></li>
          <li className="nav-item"><Link href="/about" className="nav-link">About Us</Link></li>
          <li className="nav-item"><Link href="/donate" className="nav-link">Donate</Link></li>
          <li className="nav-item">
            <a 
              href="https://www.linkedin.com/company/purdue-sae-aero-design/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
          </li>
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
