"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IndustriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const industries = [
    { id: "infrastructure", label: "INFRASTRUCTURE", img: "/images/trnch_mold_animation_24_frame1.jpg", desc: "Heavy-duty forms for bridges, retaining walls, and highway barriers." },
    { id: "utilities", label: "UTILITIES & POWER", img: "/images/ring_mold_animation_202_frame1.jpg", desc: "Precision molds for electrical vaults, utility trenches, and manholes." },
    { id: "water", label: "WATER SYSTEMS", img: "/images/trnch_mold_animation_333_frame1.jpg", desc: "Systems for culverts, sanitary pipes, and high-volume catch basins." },
    { id: "commercial", label: "COMMERCIAL", img: "/images/12_10__30_48_mold_rectangle_14_frame1.jpg", desc: "Custom architectural precast forms for building facades and structural elements." }
  ];

  return (
    <section id="industries" style={{ position: 'relative', padding: '10vw 0', minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg-warm)', overflow: 'hidden' }}>
      
      {/* Background Images Crossfade */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {industries.map((ind, idx) => (
          <motion.div 
            key={ind.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: hoveredIdx === idx ? 1 : 0,
              scale: hoveredIdx === idx ? 1 : 1.05
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <Image src={ind.img} alt={ind.label} fill style={{ objectFit: 'cover', opacity: 0.25, filter: 'grayscale(100%)' }} />
          </motion.div>
        ))}
        {/* Vignette Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(250,250,247,1) 0%, rgba(250,250,247,0.8) 40%, rgba(250,250,247,0) 100%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', alignItems: 'center' }}>
          <div>
            <div className="text-label" style={{ marginBottom: '3rem', letterSpacing: '0.2em' }}>SECTORS WE SERVE</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {industries.map((ind, idx) => (
                <div 
                  key={ind.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  style={{ 
                    cursor: 'pointer', 
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--color-concrete)',
                    opacity: hoveredIdx === idx ? 1 : 0.3,
                    transition: 'opacity 0.4s ease'
                  }}
                >
                  <h3 style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: 'clamp(2rem, 4vw, 4rem)', 
                    fontWeight: 900, 
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    color: hoveredIdx === idx ? 'var(--color-primary-dark)' : 'var(--color-text)',
                    transition: 'color 0.4s ease, transform 0.4s ease',
                    transform: hoveredIdx === idx ? 'translateX(20px)' : 'translateX(0)'
                  }}>
                    {ind.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {hoveredIdx !== null && (
                <motion.div
                  key={hoveredIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-body-large" style={{ fontSize: '1.5rem', lineHeight: 1.6, maxWidth: '400px', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderLeft: '4px solid var(--color-primary-dark)' }}>
                    {industries[hoveredIdx].desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
