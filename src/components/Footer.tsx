"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Globe, MapPin, Phone, Mail, CheckCircle2, ShieldCheck, HeadphonesIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ width: '100%', overflow: 'hidden', backgroundColor: '#FAFAF7', fontFamily: 'var(--font-sans)' }}>

      {/* 1. TOP SECTION (Links & CTA) */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', borderBottom: '1px solid #E2E8F0' }}>

        {/* Left/Middle Content */}
        <div style={{ flex: '1 1 70%', display: 'flex', flexWrap: 'wrap', padding: '4rem 2rem 4rem 4rem', gap: '4rem' }}>

          {/* Logo & Info */}
          <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>
                <span style={{ color: '#124A91' }}>MOB</span>
                <span style={{ color: '#F2C500' }}>SALES</span>
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#1E3A8A', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              <strong style={{ color: '#124A91' }}>Engineering precision. Building possibilities.</strong><br />
              Global manufacturer of high-quality precast forms and molds, delivering innovative solutions for modern infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F3F5F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#124A91', cursor: 'pointer' }}>
                <Globe size={18} />
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F3F5F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#124A91', cursor: 'pointer' }}>
                <Globe size={18} />
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F3F5F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#124A91', cursor: 'pointer' }}>
                <Globe size={18} />
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F3F5F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#124A91', cursor: 'pointer' }}>
                <Globe size={18} />
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div style={{ flex: '2 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
            {/* Products */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PRODUCTS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Wall Molds', 'Slab Molds', 'Column Molds', 'Custom Molds', 'Accessories'].map(link => (
                  <li key={link}><a href="#" style={{ color: '#1E3A8A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Solutions */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Precast Building Solutions', 'Infrastructure Solutions', 'Customized Solutions', 'Engineering Support'].map(link => (
                  <li key={link}><a href="#" style={{ color: '#1E3A8A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Industries */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>INDUSTRIES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Utilities & Power', 'Commercial', 'Industrial', 'Infrastructure', 'Precast Plants'].map(link => (
                  <li key={link}><a href="#" style={{ color: '#1E3A8A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['About Us', 'Our Team', 'Quality & Certifications', 'Careers', 'News & Insights', 'Contact Us'].map(link => (
                  <li key={link}><a href="#" style={{ color: '#1E3A8A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RESOURCES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Brochures', 'Technical Documents', 'Case Studies', 'FAQ', 'Blog'].map(link => (
                  <li key={link}><a href="#" style={{ color: '#1E3A8A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right CTA Block */}
        <div style={{ flex: '1 1 30%', position: 'relative', minHeight: '350px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          {/* Background Image */}
          <Image src="/images/12_10__30_48_mold_rectangle_5277_frame1.jpg" alt="Building background" fill style={{ objectFit: 'cover' }} />
          {/* Angled Blue Overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(9, 34, 68, 0.95)',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem 3rem 4rem 15%'
          }}>
            <span style={{ color: '#F2C500', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              LET'S BUILD TOGETHER
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              HAVE A PROJECT<br />IN MIND?
            </h3>
            <p style={{ color: '#DBEAFE', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Talk to our experts and get the right solution for your needs.
            </p>
            <button style={{
              backgroundColor: '#FFFFFF', color: '#124A91', border: 'none', padding: '1rem 2rem',
              fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.05em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', alignSelf: 'flex-start'
            }}>
              REQUEST A QUOTE <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FEATURES BAR */}
      <div style={{ display: 'flex', backgroundColor: '#FAFAF7', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>

        {/* Features list (Full Width) */}
        <div style={{ width: '100%', padding: '3rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <CheckCircle2 size={28} color="#124A91" strokeWidth={1.5} />, title: 'ENGINEERING EXCELLENCE', desc: 'From design to production' },
            { icon: <ShieldCheck size={28} color="#124A91" strokeWidth={1.5} />, title: 'BUILT FOR DURABILITY', desc: 'Reliable. Robust. Long-lasting' },
            { icon: <Globe size={28} color="#124A91" strokeWidth={1.5} />, title: 'GLOBAL PRESENCE', desc: 'Serving clients worldwide' },
            { icon: <HeadphonesIcon size={28} color="#124A91" strokeWidth={1.5} />, title: 'EXPERT SUPPORT', desc: 'From concept to completion' }
          ].map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {feat.icon}
              </div>
              <div>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 900, color: '#124A91', margin: '0 0 0.3rem 0', textTransform: 'uppercase' }}>{feat.title}</h5>
                <p style={{ fontSize: '0.8rem', color: '#1E3A8A', margin: 0 }}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAP & CONTACT SECTION */}
      <div style={{ backgroundColor: '#092244', color: '#FFFFFF', padding: '5rem 4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

          {/* Left Text */}
          <div style={{ flex: '1 1 300px' }}>
            <span style={{ color: '#93c5fd', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              OUR GLOBAL PRESENCE
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Delivering Precast Solutions<br />
              <span style={{ color: '#F2C500' }}>Across Continents</span>
            </h3>
            <p style={{ color: '#93C5FD', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '400px' }}>
              From local projects to global infrastructure, MobSales is a trusted partner for precast manufacturers worldwide.
            </p>
          </div>

          {/* Center Map */}
          <div style={{ flex: '2 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '100%', height: '300px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
              <Image src="/images/world_map_dotted.jpg" alt="Global Map" fill style={{ objectFit: 'cover' }} />
              {/* Map Pins */}
              {[
                { name: 'USA', top: '35%', left: '20%' },
                { name: 'Europe', top: '30%', left: '48%' }
              ].map((region, idx) => (
                <div key={idx} style={{
                  position: 'absolute',
                  top: region.top,
                  left: region.left,
                  transform: 'translate(-50%, -50%)',
                  padding: '0.35rem 0.6rem',
                  backgroundColor: 'rgba(9, 34, 68, 0.95)',
                  border: '1px solid #1E293B',
                  borderRadius: '6px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#E2E8F0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  cursor: 'pointer',
                  zIndex: 10
                }}>
                  {region.name}
                  {/* Glowing Pin Dot */}
                  <div style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', backgroundColor: '#F2C500', borderRadius: '50%', boxShadow: '0 0 10px #F2C500' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Contact / Newsletter */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Headquarters */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#93C5FD', marginBottom: '1.5rem', textTransform: 'uppercase' }}>HEADQUARTERS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#F1F5F9', fontSize: '0.9rem' }}>
                  <MapPin size={18} color="#93C5FD" /> 132 Lockwood,<br />Huntington, NY 11763
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F1F5F9', fontSize: '0.9rem' }}>
                  <Phone size={18} color="#93C5FD" /> +1 (631) 327-2544 &nbsp;|&nbsp; 631-827-7408
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F1F5F9', fontSize: '0.9rem' }}>
                  <Mail size={18} color="#93C5FD" /> noreply@mobsales.test
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#93C5FD', marginBottom: '1rem', textTransform: 'uppercase' }}>STAY UPDATED</h4>
              <p style={{ color: '#DBEAFE', fontSize: '0.85rem', marginBottom: '1rem' }}>Get the latest updates, product launches and industry insights.</p>
              <div style={{ display: 'flex', width: '100%', maxWidth: '350px' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{ flex: 1, padding: '0.8rem 1rem', border: 'none', borderRadius: '4px 0 0 4px', fontSize: '0.85rem', outline: 'none' }}
                />
                <button style={{ backgroundColor: '#F2C500', color: '#fff', border: 'none', padding: '0 1.25rem', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <Send size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div style={{ backgroundColor: '#041226', padding: '2rem 4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>

        {/* Simple Text Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.05em' }}>MOB SALES</span>
        </div>

        {/* Legal Links */}
        <div style={{ display: 'flex', gap: '1.5rem', color: '#93C5FD', fontSize: '0.85rem' }}>
          <a href="#" style={{ color: '#93C5FD', textDecoration: 'none' }}>Privacy Policy</a>
          <span>|</span>
          <a href="#" style={{ color: '#93C5FD', textDecoration: 'none' }}>Terms of Use</a>
          <span>|</span>
          <a href="#" style={{ color: '#93C5FD', textDecoration: 'none' }}>Sitemap</a>
        </div>

        {/* Certifications (Placeholders using text/CSS for now) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: '#FFFFFF' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.05em' }}>ISO <span style={{ fontSize: '0.6rem', fontWeight: 400, display: 'block', marginTop: '-4px' }}>9001:2015</span></div>
          <div style={{ fontSize: '1.5rem', fontWeight: 400 }}>CE</div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 900 }}>AISC</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 700, lineHeight: 1.2 }}>
            <span style={{ fontSize: '1.5rem' }}>🌿</span>
            SUSTAINABLE<br />MANUFACTURING
          </div>
        </div>

        {/* Bottom Right Tagline */}
        <div style={{ color: '#ffffffff', fontSize: '0.75rem', textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#F2C500' }} />
          Global Manufacturer of<br />Precast Forms & Molds
        </div>

      </div>

    </footer>
  );
}
