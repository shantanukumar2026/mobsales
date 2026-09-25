"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ChevronDown, Mail, Phone, Download, MapPin, User, ArrowRight, Globe, Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 1200);

    // Initial checks
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: '#FAFAF7',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
      borderBottom: '2px solid #E2E8F0',
      transition: 'box-shadow 0.3s ease',
      boxSizing: 'border-box'
    }}>

      {/* Top Bar (Light Gray) */}
      <div style={{ backgroundColor: '#F3F5F6', padding: '0.5rem 0', borderBottom: '1px solid #E2E8F0', display: (scrolled || isMobile) ? 'none' : 'block' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="mailto:sales@mobsales.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <Mail size={14} color="#124A91" />
              sales@mobsales.com
            </a>
            <a href="tel:+12345678900" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <Phone size={14} color="#124A91" />
              +1 234 567 8900
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <Download size={14} color="#124A91" />
              Downloads
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <MapPin size={14} color="#124A91" />
              Find a Representative
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <User size={14} color="#124A91" />
              Customer Portal
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{ display: 'flex', height: '80px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Left: Logo Container */}
        <div style={{
          backgroundColor: isMobile ? 'transparent' : '#FFFFFF',
          padding: isMobile ? '0 1rem' : '0 4rem 0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'flex-start' : 'center',
          clipPath: isMobile ? 'none' : 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
          minWidth: isMobile ? 'auto' : '320px',
          height: '100%'
        }}>
          <div style={{ position: 'relative', width: isMobile ? '200px' : '260px', height: isMobile ? '50px' : '70px', cursor: 'pointer', marginRight: isMobile ? '0' : '1rem' }}>
            <Image src="/logo.png" alt="MOB SALES Logo" fill style={{ objectFit: 'contain', objectPosition: isMobile ? 'left' : 'center' }} />
          </div>
        </div>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        {!isMobile && (
          <nav style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            padding: '0 1rem',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              PRODUCTS <ChevronDown size={14} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              SOLUTIONS <ChevronDown size={14} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              INDUSTRIES <ChevronDown size={14} />
            </div>
            <div style={{ cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              PROJECTS
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              COMPANY <ChevronDown size={14} />
            </div>
          </nav>
        )}

        {/* Right: Actions Container */}
        {isMobile ? (
          <div style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#124A91' }}>
            <Search size={24} />
            <Menu size={24} />
          </div>
        ) : (
          <div style={{
            backgroundColor: '#094896',
            padding: '0 4rem 0 4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            clipPath: 'polygon(2rem 0, 100% 0, 100% 100%, 0 100%)',
            flexShrink: 0,
            height: '100%'
          }}>
            <div style={{ cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center' }}>
              <Search size={18} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fff', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
              <Globe size={16} /> EN <ChevronDown size={14} />
            </div>

            <button style={{ backgroundColor: '#F2C500', color: '#124A91', border: 'none', padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
              REQUEST A QUOTE <ArrowRight size={14} />
            </button>
          </div>
        )}

      </div>
    </header>
  );
}
