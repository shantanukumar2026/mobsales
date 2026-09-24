"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="brand-logo hover-target" style={{ position: 'relative', width: '250px', height: '50px' }}>

          <div style={{ position: 'absolute', top: '-15px', left: 0, width: '320px', height: '80px', zIndex: 120 }}>
            <Image src="/logo.png" alt="MOB SALES Logo" fill style={{ objectFit: 'contain', objectPosition: 'left center' }} priority />
          </div>
        </div>

        <nav className="nav-links">
          <a href="#products" className="nav-link">PRODUCTS</a>
          <a href="#solutions" className="nav-link">SOLUTIONS</a>
          <a href="#industries" className="nav-link">INDUSTRIES</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#company" className="nav-link">COMPANY</a>
          <a href="#resources" className="nav-link">RESOURCES</a>
        </nav>

        <a href="#quote" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
          REQUEST A QUOTE <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
