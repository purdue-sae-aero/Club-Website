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
            <Link href="/competition-archive" className="nav-link">Competition</Link>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <div className="dropdown-header">SAE Brasil</div>
                <Link href="/competition-2024-brazil" className="dropdown-link">2024</Link>
              </div>
              <div className="dropdown-section">
                <div className="dropdown-header">SAE Aero Design USA</div>
                <Link href="/competition-2024-us" className="dropdown-link">2024 East Micro</Link>
                <Link href="/competition-2025-us" className="dropdown-link">2025 East Regular</Link>
                <Link href="/competition-2026-us" className="dropdown-link">2026 East Regular</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/member-resources" className="nav-link">Member Resources</Link>
          <Link href="/donate" className={`donate-btn ${isScrolled && !isExpanded ? 'donate-btn-small' : ''}`}>Donate</Link>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a 
            href="https://www.instagram.com/purduesaeaero/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-icon"
            aria-label="Visit our Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
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
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/competition-archive" className="nav-link">Competition</Link></li>
          <li className="nav-item nav-item-subheader">SAE Brasil</li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2024-brazil" className="nav-link">2024</Link></li>
          <li className="nav-item nav-item-subheader">SAE Aero Design USA</li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2024-us" className="nav-link">2024 East Micro</Link></li>
          <li className="nav-item nav-item-sub"><Link href="/competition-2025-us" className="nav-link">2025 East Regular</Link></li>
          <li className="nav-item"><Link href="/about" className="nav-link">About Us</Link></li>
          <li className="nav-item"><Link href="/member-resources" className="nav-link">Member Resources</Link></li>
          <li className="nav-item"><Link href="/donate" className="nav-link">Donate</Link></li>
          <li className="nav-item">
            <a 
              href="https://www.instagram.com/purduesaeaero/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Instagram
            </a>
          </li>
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
