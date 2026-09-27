"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Cpu, Wifi, Activity, ShieldCheck, Clock, Wrench, Maximize, FileWarning, Hammer, Lock, Zap, Box, Truck, Phone } from "lucide-react";

import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import EngineeringSection from "@/components/EngineeringSection";
import WhySteelFormsSection from "@/components/WhySteelFormsSection";
import AnimationShowcase from "@/components/AnimationShowcase";
import InteractiveMoldExplorer from "@/components/InteractiveMoldExplorer";
import IndustriesSection from "@/components/IndustriesSection";
import QualitySection from "@/components/QualitySection";
import ResourcesSection from "@/components/ResourcesSection";
import QuoteForm from "@/components/QuoteForm";

const HERO_CARDS = [
  { src: "/images/ring_mold_animation_202_frame1_no_logo.jpg", title: "RING MOLD SYSTEM (BLUE)" },
  { src: "/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg", title: "TRENCH MOLD (RED)" },
  { src: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg", title: "RECTANGLE FORM" }
];

// 1. TotalTech-inspired "Every Solution Under One Roof"
const TotalTechCapabilities = () => {
  const pillars = [
    { icon: <Cpu size={24} />, title: "ENGINEERING", subtitle: "Design & FEA", desc: "Custom 3D CAD modeling and finite element analysis to ensure structural integrity." },
    { icon: <Hammer size={24} />, title: "FABRICATION", subtitle: "Precision Mfg", desc: "Automated laser cutting and robotic welding for millimeter-perfect molds." },
    { icon: <Truck size={24} />, title: "LOGISTICS", subtitle: "Nationwide", desc: "Direct-to-site freight delivery across all 50 states and international ports." },
    { icon: <Phone size={24} />, title: "SUPPORT", subtitle: "24/7 Field Tech", desc: "On-call engineers ready to assist your crews with setup and pour optimization." }
  ];
  return (
    <section style={{ backgroundColor: '#0B203F', color: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {["ISO 9001:2015 CERTIFIED", "IN-HOUSE ENGINEERING", "ROBOTIC WELDING", "RAPID DEPLOYMENT"].map((tag, i) => (
              <span key={i} style={{ padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: '#F2C500' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F2C500', marginRight: '8px', verticalAlign: 'middle' }} />
                {tag}
              </span>
            ))}
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, margin: 0 }}>EVERY SOLUTION<br/><span style={{ color: '#F2C500' }}>UNDER ONE ROOF.</span></h2>
          <p style={{ color: '#A0AEC0', maxWidth: '600px', fontSize: '1.1rem', margin: 0, marginTop: '1rem' }}>From CAD design to robotic fabrication and jobsite delivery — we own the entire mold manufacturing lifecycle, delivering advanced tech on your budget and timeline.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {pillars.map((pillar, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden' }} className="group">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#F2C500', transform: 'scaleY(0)', transformOrigin: 'top', transition: 'transform 0.3s' }} className="group-hover:scale-y-100" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#F2C500', color: '#0B203F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {pillar.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{pillar.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#F2C500', fontWeight: 600, textTransform: 'uppercase' }}>{pillar.subtitle}</div>
                </div>
              </div>
              <p style={{ color: '#8892B0', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. PrecastXchange-inspired "The Precast Ecosystem"
const PrecastEcosystem = () => {
  const models = [
    { title: "Standard Inventory", tag: "BUY", desc: "Purchase off-the-shelf, DOT-approved molds (catch basins, risers, trench) ready for immediate dispatch to your facility." },
    { title: "Custom Engineering", tag: "BUILD", desc: "Require a unique dimension or complex joint? Our engineers will design and fabricate a bespoke mold from scratch." },
    { title: "Mold Leasing", tag: "RENT", desc: "Need forms for a short-term municipal project? Rent heavy-duty precast molds to fulfill contracts without the capital expense." }
  ];
  return (
    <section style={{ padding: '5rem 2rem', backgroundColor: '#FAFAF7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#124A91', margin: 0 }}>THE PRECAST ECOSYSTEM</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '0.5rem' }}>The complete marketplace for precast concrete production — buy, build, or rent.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {models.map((mod, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '12px', border: '1px solid #eaeaea', borderTop: '4px solid #F2C500', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ alignSelf: 'flex-start', padding: '0.3rem 0.8rem', backgroundColor: 'rgba(18,74,145,0.1)', color: '#124A91', fontWeight: 800, fontSize: '0.75rem', borderRadius: '4px', letterSpacing: '0.1em' }}>{mod.tag}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#124A91', margin: 0 }}>{mod.title}</h3>
              <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>{mod.desc}</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <a href="#" style={{ color: '#F2C500', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  LEARN MORE <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. PrecastXchange-inspired "Standards Marquee"
const IndustryStandardsMarquee = () => {
  const standards = ["DOT COMPLIANT", "NPCA STANDARDS", "PCI CERTIFIED", "ACPA APPROVED", "CMHA GUIDELINES", "ACI SPECS", "AASHTO RATED", "FHWA READY"];
  return (
    <section style={{ backgroundColor: '#fff', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '1.5rem 0', overflow: 'hidden', display: 'flex' }}>
      <div style={{ padding: '0 2rem', fontWeight: 800, color: '#124A91', letterSpacing: '0.1em', fontSize: '0.85rem', whiteSpace: 'nowrap', borderRight: '1px solid #eaeaea', display: 'flex', alignItems: 'center' }}>
        INDUSTRY STANDARDS
      </div>
      <div style={{ overflow: 'hidden', flex: 1, display: 'flex' }}>
        <motion.div animate={{ x: [0, -1035] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} style={{ display: 'flex', gap: '3rem', paddingLeft: '3rem' }}>
          {[...standards, ...standards, ...standards].map((std, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '3rem', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#e0e0e0' }}>{std}</span>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#F2C500', borderRadius: '50%' }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 4. Smart Intelligence (Kept from previous)
const SmartIntelligence = () => {
  const smartFeatures = [
    { icon: <Cpu size={20} />, title: "Robotic Precision Casting", desc: "AI-guided robotic fabrication ensures tight manufacturing tolerances down to the millimeter." },
    { icon: <Wifi size={20} />, title: "IoT Telemetry Ready", desc: "Optional sensors transmit real-time curing data and temperature directly to your dashboard." },
    { icon: <ShieldCheck size={20} />, title: "Automated QA Verification", desc: "Every mold is scanned and verified digitally against the original CAD blueprint before dispatch." }
  ];
  return (
    <section style={{ backgroundColor: '#0B203F', color: '#fff', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ flex: '1 1 400px' }}>
          <span style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem' }}>// NEXT GENERATION</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>ACTIVE INTELLIGENCE.</h2>
          <p style={{ fontSize: '1rem', color: '#A0AEC0', lineHeight: 1.6, marginBottom: '2rem' }}>Our next-generation heavy infrastructure molds integrate seamlessly with data networks, transforming standard forms into a real-time diagnostic grid.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {smartFeatures.map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(242,197,0,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F2C500', flexShrink: 0 }}>{feat.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>{feat.title}</h4>
                  <p style={{ color: '#8892B0', lineHeight: 1.4, fontSize: '0.9rem', margin: 0 }}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <Image src="/images/ring_mold_animation_202_frame1_no_logo.jpg" alt="Smart Mold" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '50%', backgroundColor: 'rgba(11,32,63,0.9)', backdropFilter: 'blur(10px)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(242,197,0,0.3)', color: '#fff' }}>
              <div style={{ fontSize: '0.75rem', color: '#F2C500', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '0.1em' }}>LIVE TELEMETRY</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem' }}><span style={{ opacity: 0.8 }}>Internal Temp:</span><span style={{ fontWeight: 800 }}>142°F</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}><span style={{ opacity: 0.8 }}>Cure Status:</span><span style={{ fontWeight: 800 }}>87%</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_CARDS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <main>
      <CustomCursor />
      <Header />

      <section className="hero">
        <div className="hero-bg" style={{ position: 'absolute', top: 0, right: 0, width: '50vw', height: '100%', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{ position: 'relative', width: '28vw', height: '40vw', perspective: '1000px', marginTop: '10vh' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {HERO_CARDS.map((card, index) => {
              const visualIndex = (index - activeIndex + HERO_CARDS.length) % HERO_CARDS.length;

              const rotations = [0, 15, -15];
              const yOffsets = [0, 40, 40];
              const zIndexes = [10, 2, 1];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 150, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: yOffsets[visualIndex],
                    rotate: rotations[visualIndex],
                    scale: 1,
                    zIndex: zIndexes[visualIndex]
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  whileHover={{ y: yOffsets[visualIndex] - 10, scale: 1.02 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transformOrigin: 'bottom center',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(9, 72, 150, 0.25)',
                    border: '8px solid var(--color-bg)',
                    backgroundColor: 'var(--color-bg)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '75%', borderRadius: '16px', overflow: 'hidden' }}>
                    <Image src={card.src} alt={card.title} fill style={{ objectFit: 'cover' }} priority={index === 0} />
                  </div>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                    color: 'var(--color-text)'
                  }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>PRECISION MOLD</span>
                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontFamily: 'var(--font-sans)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', textAlign: 'center' }}>
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', height: '100%' }}>
          <motion.div
            className="hero-content"
            style={{ y: yHeroText }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-label hover-target"
              style={{ marginBottom: '1.5rem', marginTop: '4rem', color: 'var(--color-text)', borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem', letterSpacing: '0.15em' }}
            >
              PRECISION ENGINEERED PRECAST SYSTEMS
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-huge hover-target"
            >
              FORMS THAT<br />SHAPE CONCRETE.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-body-large hover-target"
              style={{ maxWidth: '500px', marginTop: '1.5rem', color: 'var(--color-text)', fontSize: '1.125rem' }}
            >
              MOB SALES engineers and manufactures precision forms and molds for demanding precast concrete production — from standard systems to fully customized solutions.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}
            >
              <button className="btn-primary hover-target">
                EXPLORE PRODUCTS <ArrowRight size={18} />
              </button>
              <button className="btn-secondary hover-target" style={{ backgroundColor: 'var(--color-bg)' }}>
                TALK TO ENGINEERING
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-bottom-bar text-label">
          <div className="hero-bottom-bar-inner">
            <span>PRECAST FORMS</span>
            <span>CUSTOM MOLDS</span>
            <span>ENGINEERING</span>
            <span>PRODUCTION</span>
            <span style={{ marginLeft: 'auto', color: 'var(--color-text)' }}>SCROLL ↓</span>
          </div>
        </div>
      </section>

      <ProcessSection />
      
      <ProductShowcase />
      
      {/* CUSTOM SECTIONS INSERTED HERE WITH MINIMUM SPACE */}
      <SmartIntelligence />

      {/* Temporarily removed everything below per user request
      <InteractiveMoldExplorer />
      <AnimationShowcase />
      <EngineeringSection />
      <WhySteelFormsSection />
      <IndustriesSection />
      <QualitySection />
      <ResourcesSection />
      <QuoteForm />
      */}

      <Footer />
    </main>
  );
}
