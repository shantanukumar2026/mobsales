"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText, Download, CheckCircle, ChevronRight, Settings, Maximize, Activity, Wrench, Hammer, UploadCloud, MapPin, Grid, Layers, Box, Cpu } from "lucide-react";

import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";

const HERO_CARDS = [
  { src: "/images/ring_mold_animation_202_frame1_no_logo.jpg", title: "RING MOLD SYSTEM (BLUE)" },
  { src: "/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg", title: "TRENCH MOLD (RED)" },
  { src: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg", title: "RECTANGLE FORM" }
];

// COLORS BASED ON USER SCREENSHOT
const COLOR_TITLE = "#004B87";
const COLOR_DESC = "#3973A4";

// SECTION 04 - PRODUCT CAPABILITIES (EDGE-TO-EDGE)
const Section04Capabilities = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const sliderProducts = [
    { 
      img: "/kfmolds/LegoBlock-600x600x2400-3.jpg", 
      name: "BLOCK MOLD", 
      desc: "Heavy-duty steel forming system designed for the efficient production of precast blocks. Engineered with precision tolerances and rapid demolding capabilities to maximize throughput while maintaining absolute structural integrity for high-volume manufacturing.", 
      app: "BUILDING SYSTEMS" 
    },
    { 
      img: "/images/Mega_Mold_Ring_mold_frame1_no_logo.jpg", 
      name: "RING MOLD SYSTEM", 
      desc: "Precision circular steel mold engineered specifically for high-volume manhole and drainage component manufacturing. Features adjustable sizing mechanisms and robust reinforcements to withstand the rigorous demands of continuous industrial precast operations.", 
      app: "DRAINAGE" 
    },
    { 
      img: "/kfmolds/Manhole-Concrete-Assembly-scaled.jpg", 
      name: "MANHOLE ASSEMBLY", 
      desc: "Comprehensive modular forming solution designed for producing standardized manhole risers, bases, and cones. Built to exact regional utility specifications ensuring perfect joint alignment, durability, and seamless integration into modern infrastructure projects.", 
      app: "INFRASTRUCTURE" 
    },
    {
      img: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg",
      name: "RECTANGLE CATCH BASIN",
      desc: "Highly adjustable rectangular forms constructed for customized structural dimensions in stormwater management. The reinforced steel design prevents deflection during pouring, resulting in perfectly square catch basins tailored to complex utility layouts.",
      app: "UTILITIES"
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % sliderProducts.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + sliderProducts.length) % sliderProducts.length);

  return (
    <section style={{ backgroundColor: '#FAFAF7', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', width: '100%', overflow: 'hidden' }}>
      
      {/* SPLIT SCREEN 50/50 NO MARGINS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 4rem' }}>
          <h2 className="text-huge" style={{ color: COLOR_TITLE, marginBottom: '1.5rem', lineHeight: 1.1, wordWrap: 'break-word' }}>
            BUILT AROUND<br />THE WAY YOU<br />PRODUCE.
          </h2>
          <p className="text-body-large" style={{ color: COLOR_DESC, fontWeight: 500, maxWidth: '600px', marginBottom: '2rem' }}>
            We design and manufacture heavy-duty steel forms around your precise production requirements. 
            From structural geometry and exact dimensions to rapid demolding and safe handling, 
            every mold is engineered to optimize your precast manufacturing cycle.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {["GEOMETRY", "DIMENSIONS", "DEMOLDING", "HANDLING", "CUSTOM CONFIGURATION"].map((tag, i) => (
              <span key={i} style={{ 
                padding: '0.75rem 1.5rem', 
                border: `1px solid ${COLOR_TITLE}`, 
                color: COLOR_TITLE, 
                fontWeight: 800, 
                fontSize: '0.85rem', 
                letterSpacing: '0.1em',
                backgroundColor: '#fff' 
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ flex: '1 1 50%', position: 'relative', minHeight: '600px', borderLeft: '1px solid #eaeaea' }}>
          <Image 
            src="/kfmolds/LegoBlock_NEW-L2.jpg" 
            alt="Industrial Precast Mold" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
      </div>

      <div style={{ borderTop: '1px solid #eaeaea', padding: '4rem 4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: COLOR_TITLE, textTransform: 'uppercase', margin: 0 }}>PRODUCT SYSTEMS</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={prevSlide} style={{ background: '#fff', border: `1px solid ${COLOR_TITLE}`, padding: '0.75rem', cursor: 'pointer', color: COLOR_TITLE, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.8rem', marginRight: '0.5rem' }}>PREVIOUS</span>
            </button>
            <button onClick={nextSlide} style={{ background: '#fff', border: `1px solid ${COLOR_TITLE}`, padding: '0.75rem', cursor: 'pointer', color: COLOR_TITLE, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.8rem', marginLeft: '0.5rem' }}>NEXT</span>
            </button>
          </div>
        </div>
        
        <div style={{ position: 'relative', overflow: 'hidden', marginTop: '2rem' }}>
          <motion.div 
            style={{ display: 'flex', gap: '2rem', width: '100%' }}
            animate={{ x: `calc(-${activeSlide * 100}% - ${activeSlide * 2}rem)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {sliderProducts.map((prod, i) => (
              <div key={i} style={{ minWidth: '100%', display: 'flex', flexWrap: 'wrap', border: '1px solid #eaeaea', backgroundColor: '#fff' }}>
                <div style={{ flex: '1 1 50%', position: 'relative', minHeight: '500px', backgroundColor: '#FAFAF7', borderRight: '1px solid #eaeaea' }}>
                  <Image src={prod.img} alt={prod.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '4rem 4rem' }}>
                  <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.75rem', marginBottom: '1rem' }}>
                    {prod.app}
                  </div>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 900, color: COLOR_TITLE, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                    {prod.name}
                  </h4>
                  <p style={{ color: COLOR_DESC, fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                    {prod.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// SECTION 05 - APPLICATIONS
const Section05Applications = () => {
  const apps = [
    { name: "INFRASTRUCTURE", desc: "Heavy civil applications including bridges, retaining walls, and highway barriers." },
    { name: "DRAINAGE", desc: "Catch basins, manholes, inlets, and large-scale stormwater systems." },
    { name: "UTILITIES", desc: "Underground vaults, electrical enclosures, and communication handholes." },
    { name: "BUILDING SYSTEMS", desc: "Architectural precast, structural columns, and flooring systems." },
    { name: "INDUSTRIAL PRECAST", desc: "Specialized industrial components, foundations, and heavy-duty slabs." },
    { name: "CUSTOM APPLICATIONS", desc: "Bespoke forming solutions for unique and demanding project requirements." }
  ];
  return (
    <section style={{ padding: '6rem 4rem', backgroundColor: '#fff', borderTop: '1px solid #eaeaea', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem' }}>APPLICATIONS</div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, color: COLOR_TITLE, textTransform: 'uppercase', width: '100%', margin: 0 }}>
              FOR THE PRODUCTS YOU NEED TO PRODUCE.
            </h2>
          </div>
        </div>
        <div className="apps-grid-strict" style={{ display: 'grid', gap: '1.5rem' }}>
          {apps.map((app, i) => (
            <div key={i} style={{ backgroundColor: '#FAFAF7', border: '1px solid #eaeaea', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: COLOR_TITLE, marginBottom: '1rem' }}>{app.name}</h3>
              <p style={{ color: COLOR_DESC, fontWeight: 500, lineHeight: 1.6, marginBottom: '2rem' }}>{app.desc}</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: COLOR_TITLE, fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer' }}>
                VIEW APPLICATION <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .apps-grid-strict {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .apps-grid-strict {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .apps-grid-strict {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
};

// SECTION 07 - CUSTOM ENGINEERING
const Section07Engineering = () => {
  const steps = ["REQUIREMENT", "ENGINEERING", "DESIGN REVIEW", "FABRICATION", "DELIVERY"];
  return (
    <section style={{ padding: '6rem 4rem', backgroundColor: COLOR_TITLE, color: '#fff', width: '100%' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem' }}>CUSTOM ENGINEERING</div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: '3rem', width: '100%' }}>
          YOUR PRODUCT. YOUR REQUIREMENTS. YOUR FORM.
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem 2rem', border: '2px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', fontWeight: 800, letterSpacing: '0.05em' }}>
                {step}
              </div>
              {i < steps.length - 1 && <ArrowRight size={24} style={{ color: '#F2C500', opacity: 0.8 }} />}
            </div>
          ))}
        </div>
        
        <button style={{ padding: '1.25rem 2.5rem', backgroundColor: '#F2C500', color: COLOR_TITLE, fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>
          DISCUSS A CUSTOM FORM
        </button>
      </div>
    </section>
  );
};

// SECTION 08 - MANUFACTURING (EDGE-TO-EDGE)
const Section08Manufacturing = () => {
  const stages = ["CUTTING", "FORMING", "MACHINING", "WELDING", "ASSEMBLY", "FINISHING"];
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#FAFAF7', width: '100%', borderTop: '1px solid #eaeaea' }}>
      <div style={{ flex: '1 1 40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 4rem' }}>
        <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem' }}>MANUFACTURING</div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, color: COLOR_TITLE, textTransform: 'uppercase', marginBottom: '1rem' }}>
          FROM STEEL TO PRODUCTION.
        </h2>
        <p style={{ fontSize: '1.1rem', color: COLOR_DESC, fontWeight: 500, lineHeight: 1.6, maxWidth: '500px' }}>
          Every form is manufactured in-house using heavy-duty steel and precision fabrication techniques, ensuring it withstands the rigors of high-volume precast production.
        </p>
      </div>
      <div style={{ flex: '1 1 60%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#eaeaea' }}>
        {stages.map((stage, i) => (
          <div key={i} style={{ backgroundColor: '#fff', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, color: COLOR_TITLE, letterSpacing: '0.05em' }}>{stage}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// SECTION 09 - QUALITY (EDGE-TO-EDGE)
const Section09Quality = () => {
  const checks = ["DIMENSIONAL CHECK", "ALIGNMENT", "FABRICATION INSPECTION", "MECHANICAL CHECK", "FINAL REVIEW"];
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', width: '100%', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
      <div style={{ flex: '1 1 50%', position: 'relative', minHeight: '500px', borderRight: '1px solid #eaeaea' }}>
        <Image src="/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg" alt="Quality Inspection" fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 4rem' }}>
        <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem' }}>QUALITY CONTROL</div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, color: COLOR_TITLE, textTransform: 'uppercase', marginBottom: '1rem' }}>
          BUILT TO SPECIFICATION.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
          {checks.map((check, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eaeaea' }}>
              <CheckCircle size={24} style={{ color: COLOR_TITLE }} />
              <span style={{ fontWeight: 800, color: COLOR_TITLE, fontSize: '1.1rem', letterSpacing: '0.05em' }}>{check}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SECTION 10 - TECHNICAL RESOURCES
const Section10Resources = () => {
  const resources = ["PRODUCT CATALOGS", "TECHNICAL DRAWINGS", "SPECIFICATIONS", "PRODUCT DOCUMENTATION", "APPLICATION INFORMATION", "DOWNLOADS"];
  return (
    <section style={{ padding: '6rem 4rem', backgroundColor: COLOR_TITLE, width: '100%' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem' }}>TECHNICAL RESOURCES</div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, color: '#fff', textTransform: 'uppercase', marginBottom: '3rem' }}>
          TECHNICAL DOCUMENTATION.
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          {resources.map((res, i) => (
            <div key={i} style={{ padding: '1rem 2rem', border: 'none', backgroundColor: '#fff', color: COLOR_TITLE, fontWeight: 900, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '4px' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F2C500'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#fff'; }}
            >
              <FileText size={18} /> {res}
            </div>
          ))}
        </div>
        <p style={{ color: '#c4d7e9', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
          TECHNICAL INFORMATION AVAILABLE ON REQUEST
        </p>
      </div>
    </section>
  );
};

// SECTION 11 - APPLICATION LIBRARY
const Section11Library = () => {
  const libraryItems = [
    { 
      img: "/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg", 
      product: "HEAVY DUTY TRENCH MOLD", 
      app: "DRAINAGE", 
      type: "STEEL FORM"
    },
    { 
      img: "/kfmolds/LegoBlock-600x600x2400-3.jpg", 
      product: "INTERLOCKING BLOCK MOLD", 
      app: "BUILDING SYSTEMS", 
      type: "HEAVY DUTY"
    },
    { 
      img: "/images/ring_mold_animation_202_frame1_no_logo.jpg", 
      product: "PRECISION RING MOLD", 
      app: "INFRASTRUCTURE", 
      type: "MODULAR SYSTEM"
    },
    { 
      img: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg", 
      product: "RECTANGLE CATCH BASIN", 
      app: "UTILITIES", 
      type: "CUSTOM FORM"
    },
    { 
      img: "/kfmolds/Manhole-Concrete-Assembly-scaled.jpg", 
      product: "MANHOLE ASSEMBLY", 
      app: "INFRASTRUCTURE", 
      type: "ASSEMBLY"
    },
    { 
      img: "/images/Mega_Mold_Trench_Black_frame1.jpg", 
      product: "BOX CULVERT MOLD", 
      app: "INFRASTRUCTURE", 
      type: "CUSTOM FORMING"
    }
  ];

  return (
    <section style={{ padding: '4rem 4rem 3rem 4rem', backgroundColor: '#fff', borderTop: '1px solid #eaeaea', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '3px', height: '16px', backgroundColor: '#F2C500' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', color: COLOR_TITLE, textTransform: 'uppercase' }}>
                APPLICATION LIBRARY
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, color: COLOR_TITLE, textTransform: 'uppercase', width: '100%', margin: 0, letterSpacing: '-0.02em' }}>
              SEE THE FORMS<br />IN CONTEXT.
            </h2>
          </div>
          <button style={{ padding: '1rem 2rem', backgroundColor: 'transparent', border: `2px solid ${COLOR_TITLE}`, color: COLOR_TITLE, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = COLOR_TITLE; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLOR_TITLE; }}
          >
            EXPLORE FULL LIBRARY <ArrowRight size={18} />
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1px', backgroundColor: '#eaeaea', border: '1px solid #eaeaea' }}>
          {libraryItems.map((item, i) => (
            <motion.div 
              key={i} 
              style={{ backgroundColor: '#FAFAF7', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer' }}
              initial="initial"
              whileHover="hover"
            >
              <div style={{ position: 'relative', width: '100%', height: '350px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eaeaea', overflow: 'hidden', flexShrink: 0 }}>
                <motion.div 
                  variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }} 
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <Image src={item.img} alt={item.product} fill style={{ objectFit: 'contain', padding: '2rem' }} />
                </motion.div>
                
                {/* View Project overlay button */}
                <motion.div 
                  variants={{ initial: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', backgroundColor: '#F2C500', color: COLOR_TITLE, padding: '0.75rem 1.25rem', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  VIEW SPECS <ArrowRight size={16} />
                </motion.div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#fff', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ color: COLOR_DESC, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', backgroundColor: '#FAFAF7', padding: '0.25rem 0.75rem', border: '1px solid #eaeaea', borderRadius: '100px' }}>
                    {item.app}
                  </span>
                  <span style={{ color: COLOR_DESC, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', backgroundColor: '#FAFAF7', padding: '0.25rem 0.75rem', border: '1px solid #eaeaea', borderRadius: '100px' }}>
                    {item.type}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: COLOR_TITLE, margin: 0, lineHeight: 1.2, textTransform: 'uppercase' }}>
                  {item.product}
                </h3>
              </div>
            </motion.div>
          ))}
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
    <main style={{ width: '100%', overflowX: 'hidden' }}>
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
      
      <Section04Capabilities />

      <Section05Applications />

      <Section07Engineering />

      <Section08Manufacturing />

      <Section09Quality />

      <Section10Resources />

      <Section11Library />

      <Footer />
    </main>
  );
}
