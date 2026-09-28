"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, MapPin, Phone, Mail, CheckCircle2, ShieldCheck, HeadphonesIcon, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-bg-warm)', fontFamily: 'var(--font-sans)', borderTop: '4px solid var(--color-primary-dark)' }}>

      {/* 1. TOP SECTION (Links & CTA) */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', borderBottom: '1px solid #F0F6FC' }}>

        {/* Left/Middle Content */}
        <div style={{ flex: '1 1 70%', display: 'flex', flexWrap: 'wrap', padding: '4rem 2rem 4rem 4rem', gap: '4rem' }}>

          {/* Logo & Info */}
          <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>
                <span style={{ color: 'var(--color-text)' }}>MOB</span>
                <span style={{ color: 'var(--color-primary)' }}>SALES</span>
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              <strong style={{ color: 'var(--color-text)' }}>Engineering precision. Building possibilities.</strong><br />
              Global manufacturer of high-quality precast forms and molds, delivering innovative solutions for modern infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div style={{ flex: '2 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
            {/* Products */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PRODUCTS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Block Molds', 'Ring Molds', 'Catch Basins', 'Box Culverts', 'Trench Molds'].map(link => (
                  <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Solutions */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Heavy Civil Solutions', 'Infrastructure Solutions', 'Customized Solutions', 'Engineering Support'].map(link => (
                  <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Industries */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>INDUSTRIES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Utilities & Power', 'Transportation', 'Heavy Civil', 'Infrastructure', 'Precast Plants'].map(link => (
                  <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['About Us', 'Our Team', 'Quality & Certifications', 'Careers', 'News & Insights', 'Contact Us'].map(link => (
                  <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RESOURCES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Brochures', 'Technical Documents', 'Case Studies', 'FAQ', 'Blog'].map(link => (
                  <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right CTA Block */}
        <div style={{ flex: '1 1 30%', position: 'relative', minHeight: '350px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          {/* Background Image */}
          <Image src="/images/12_10__30_48_mold_rectangle_5277_frame1.jpg" alt="Building background" fill style={{ objectFit: 'cover' }} />
          {/* Angled Overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'var(--color-gradient-primary)',
            opacity: 0.95,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem'
          }}>
            <span style={{ color: '#ffffffff', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              LET'S BUILD TOGETHER
            </span>
            <h3 style={{ color: 'var(--color-bg)', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              HAVE A PROJECT<br />IN MIND?
            </h3>
            <p style={{ color: '#F0F6FC', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Talk to our experts and get the right solution for your needs.
            </p>
            <button style={{
              backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: 'none', padding: '1rem 2rem',
              fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.05em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', alignSelf: 'flex-start'
            }}>
              REQUEST A QUOTE <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FEATURES BAR */}
      <div style={{ display: 'flex', backgroundColor: 'var(--color-bg-warm)', borderTop: '1px solid #F0F6FC', borderBottom: '1px solid #F0F6FC' }}>

        {/* Features list (Full Width) */}
        <div style={{ width: '100%', padding: '3rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <CheckCircle2 size={28} color="var(--color-text)" strokeWidth={1.5} />, title: 'ENGINEERING EXCELLENCE', desc: 'From design to production' },
            { icon: <ShieldCheck size={28} color="var(--color-text)" strokeWidth={1.5} />, title: 'BUILT FOR DURABILITY', desc: 'Reliable. Robust. Long-lasting' },
            { icon: <Globe size={28} color="var(--color-text)" strokeWidth={1.5} />, title: 'GLOBAL PRESENCE', desc: 'Serving clients worldwide' },
            { icon: <HeadphonesIcon size={28} color="var(--color-text)" strokeWidth={1.5} />, title: 'EXPERT SUPPORT', desc: 'From concept to completion' }
          ].map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {feat.icon}
              </div>
              <div>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--color-text)', margin: '0 0 0.3rem 0', textTransform: 'uppercase' }}>{feat.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAP & CONTACT SECTION */}
      <div style={{ background: 'var(--color-gradient-dark)', color: 'var(--color-bg)', padding: '5rem 4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

          {/* Left Text */}
          <div style={{ flex: '1 1 300px' }}>
            <span style={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              OUR GLOBAL PRESENCE
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Delivering Precast Solutions<br />
              <span style={{ color: 'var(--color-primary)' }}>Across Continents</span>
            </h3>
            <p style={{ color: '#F8FAFC', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '400px' }}>
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
                  backgroundColor: 'rgba(0, 4, 173, 0.95)',
                  border: '1px solid #004AAD',
                  borderRadius: '6px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#F0F6FC',
                  boxShadow: '0 4px 15px rgba(0, 4, 173, 0.6)',
                  cursor: 'pointer',
                  zIndex: 10
                }}>
                  {region.name}
                  {/* Glowing Pin Dot */}
                  <div style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-primary)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Contact / Newsletter */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Headquarters */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '1.5rem', textTransform: 'uppercase' }}>HEADQUARTERS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#F8FAFC', fontSize: '0.9rem' }}>
                  <MapPin size={18} color="#FFFFFF" /> 132 Lockwood,<br />Huntington, NY 11763
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F8FAFC', fontSize: '0.9rem' }}>
                  <Phone size={18} color="#FFFFFF" /> +1 (631) 327-2544 &nbsp;|&nbsp; 631-827-7408
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#F8FAFC', fontSize: '0.9rem' }}>
                  <Mail size={18} color="#FFFFFF" /> noreply@mobsales.test
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#FFFFFF', marginBottom: '1rem', textTransform: 'uppercase' }}>STAY UPDATED</h4>
              <p style={{ color: '#F0F6FC', fontSize: '0.85rem', marginBottom: '1rem' }}>Get the latest updates, product launches and industry insights.</p>
              <div style={{ display: 'flex', width: '100%', maxWidth: '350px' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{ flex: 1, padding: '0.8rem 1rem', border: 'none', borderRadius: '4px 0 0 4px', fontSize: '0.85rem', outline: 'none' }}
                />
                <button style={{ backgroundColor: 'var(--color-accent)', color: '#0004AD', border: 'none', padding: '0 1.25rem', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <Send size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div style={{ background: 'var(--color-gradient-dark)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>

        {/* Simple Text Logo */}
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '150px', height: '48px', backgroundColor: '#FFFFFF', borderRadius: '4px', padding: '0.25rem' }}>
          <Image src="/logo.png" alt="MOB SALES Logo" fill unoptimized={true} style={{ objectFit: 'contain', objectPosition: 'center', padding: '0.25rem' }} />
        </div>

        {/* Legal Links */}
        <div style={{ display: 'flex', gap: '1.5rem', color: '#FFFFFF', fontSize: '0.85rem' }}>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#004AAD' }}>|</span>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Terms of Use</a>
          <span style={{ color: '#004AAD' }}>|</span>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Sitemap</a>
        </div>

        {/* Certifications (Placeholders using text/CSS for now) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--color-bg)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.05em' }}>ISO <span style={{ fontSize: '0.6rem', fontWeight: 400, display: 'block', marginTop: '-4px' }}>9001:2015</span></div>
          <div style={{ fontSize: '1.5rem', fontWeight: 400 }}>CE</div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 900 }}>AISC</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 700, lineHeight: 1.2 }}>
            <span style={{ fontSize: '1.5rem' }}>🌿</span>
            SUSTAINABLE<br />MANUFACTURING
          </div>
        </div>

        {/* Back to Top & Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', border: '1px solid #004AAD', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
          
          <div style={{ color: '#FFFFFF', fontSize: '0.75rem', textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }} />
            Global Manufacturer of<br />Precast Forms & Molds
          </div>
        </div>

      </div>

    </motion.footer>
  );
}

