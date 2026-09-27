"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Mail, Phone, Download, MapPin, User, ArrowRight, Globe, Menu, Layers, Box, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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
            <a href="mailto:noreply@mobsales.test" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <Mail size={14} color="#124A91" />
              noreply@mobsales.test
            </a>
            <a href="tel:+16313272544" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#334155', fontSize: '0.75rem', fontWeight: 600 }}>
              <Phone size={14} color="#124A91" />
              +1 (631) 327-2544
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
          <Link href="/" style={{ position: 'relative', width: isMobile ? '200px' : '260px', height: isMobile ? '50px' : '70px', cursor: 'pointer', marginRight: isMobile ? '0' : '1rem', display: 'block' }}>
            <Image src="/logo.png" alt="MOB SALES Logo" fill style={{ objectFit: 'contain', objectPosition: isMobile ? 'left' : 'center' }} />
          </Link>
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
            height: '100%'
          }}>
            <Link href="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em', height: '100%', borderBottom: '3px solid transparent', textDecoration: 'none' }}>
              PRODUCTS <ChevronDown size={14} />
            </Link>
            <Link href="/solutions" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em', height: '100%', borderBottom: '3px solid transparent', textDecoration: 'none' }}>
              SOLUTIONS <ChevronDown size={14} />
            </Link>
            <Link href="/industries" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em', height: '100%', borderBottom: '3px solid transparent', textDecoration: 'none' }}>
              INDUSTRIES <ChevronDown size={14} />
            </Link>
            <Link href="/projects" style={{ cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em', height: '100%', display: 'flex', alignItems: 'center', borderBottom: '3px solid transparent', textDecoration: 'none' }}>
              PROJECTS
            </Link>
            <Link href="/company" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', color: '#124A91', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em', height: '100%', borderBottom: '3px solid transparent', textDecoration: 'none' }}>
              COMPANY <ChevronDown size={14} />
            </Link>
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

            <button onClick={() => setIsQuoteOpen(true)} style={{ backgroundColor: '#F2C500', color: '#124A91', border: 'none', padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
              REQUEST A QUOTE <ArrowRight size={14} />
            </button>
          </div>
        )}

      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu === 'products' && !isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseLeave={() => setActiveMenu(null)}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: '#092244',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              borderTop: '4px solid #F2C500',
              display: 'flex',
              zIndex: 99,
              color: '#fff'
            }}
          >
            {/* Left side: Navigation (Flex 2) */}
            <div style={{ flex: '2 1 0', padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
              
              {/* Category 1 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(242, 197, 0, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Layers size={24} color="#F2C500" />
                  </div>
                  <h4 style={{ color: '#F2C500', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>Drainage & Utilities</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Heavy Duty Trench Forms', 'Precision Catch Basins', 'Manhole Assemblies', 'Pipe & Culvert Molds', 'Custom Utility Vaults'].map((item, idx) => (
                    <motion.a 
                      key={item} 
                      href="#" 
                      whileHover={{ x: 6, color: '#fff' }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#93C5FD', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', padding: '0.6rem 0', display: 'block' }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(242, 197, 0, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Box size={24} color="#F2C500" />
                  </div>
                  <h4 style={{ color: '#F2C500', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>Structural & Civil Molds</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Bridge Girders', 'Box Culverts', 'Prestressed Forms', 'Interlocking Blocks', 'Highway Barriers'].map((item, idx) => (
                    <motion.a 
                      key={item} 
                      href="#" 
                      whileHover={{ x: 6, color: '#fff' }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#93C5FD', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', padding: '0.6rem 0', display: 'block' }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(242, 197, 0, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Settings size={24} color="#F2C500" />
                  </div>
                  <h4 style={{ color: '#F2C500', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>Specialty Forms</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Retaining Wall Systems', 'Median Barriers', 'Custom Architecture', 'Lifting Accessories', 'Form Liners & Textures'].map((item, idx) => (
                    <motion.a 
                      key={item} 
                      href="#" 
                      whileHover={{ x: 6, color: '#fff' }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#93C5FD', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', padding: '0.6rem 0', display: 'block' }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
            
            {/* Featured Right Section (Flex 1) */}
            <div style={{ flex: '1 1 0', backgroundColor: '#0B2A55', padding: '4rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Background Glow */}
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', backgroundColor: '#124A91', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.6 }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'inline-block', backgroundColor: '#F2C500', color: '#092244', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', borderRadius: '100px', marginBottom: '1.5rem' }}>
                  FEATURED SOLUTION
                </div>
                
                <h5 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900, margin: '0 0 1rem 0', lineHeight: 1.1 }}>
                  MEGA MOLD<br/>TRENCH SYSTEM
                </h5>
                
                <p style={{ color: '#93C5FD', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2rem 0', maxWidth: '90%' }}>
                  Engineered for maximum durability and precision in harsh infrastructure environments. Discover why industry leaders choose Mega Mold.
                </p>
                
                <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                  <Image src="/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg" alt="Trench Mold" fill style={{ objectFit: 'contain', padding: '2rem' }} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: '100%', backgroundColor: 'transparent', color: '#F2C500', border: '2px solid #F2C500', padding: '1.2rem 2rem', fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '8px', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F2C500'; e.currentTarget.style.color = '#092244'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F2C500'; }}
                >
                  VIEW SPECIFICATIONS <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </header>
  );
}
