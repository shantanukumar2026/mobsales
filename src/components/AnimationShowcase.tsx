"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AnimationShowcase() {
  const steps = [
    { num: "01", name: "CUSTOMER DRAWING", img: "/images/movement_section_view_73_frame1.jpg" },
    { num: "02", name: "3D CAD ENGINEERING", img: "/images/final_30_48_mold__model_animation_284_frame1.jpg" },
    { num: "03", name: "STEEL FABRICATION", img: "/images/Mega_Mold_Trench_Black_frame1.jpg" },
    { num: "04", name: "FINISHED FORM", img: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg" }
  ];

  return (
    <section id="custom-engineering" style={{ padding: '8rem 0', backgroundColor: '#F0F6FC' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3px', height: '16px', backgroundColor: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: '#1E3BA1', textTransform: 'uppercase' }}>
                CUSTOM ENGINEERING
              </span>
            </div>
            
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              YOUR PRODUCT.<br/>YOUR DIMENSIONS.<br/>YOUR FORM.
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: '#1E3BA1', lineHeight: 1.6, marginBottom: '3rem' }}>
              Every precast product has different requirements. MOB SALES develops custom forms around your product geometry, production method, dimensions and manufacturing workflow.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <button style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)', border: 'none', padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '280px' }}>
                START A CUSTOM PROJECT <ArrowRight size={14} />
              </button>
              <button style={{ backgroundColor: 'transparent', color: 'var(--color-text)', border: '1px solid #F0F6FC', padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', maxWidth: '280px', textAlign: 'center' }}>
                UPLOAD YOUR DRAWING
              </button>
            </div>
          </div>

          {/* Right Visual Flow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1 }}
                >
                  <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', backgroundColor: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image src={step.img} alt={step.name} fill style={{ objectFit: 'contain', padding: '1rem' }} />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.25rem' }}>{step.num}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '0.05em' }}>{step.name}</div>
                  </div>
                </motion.div>
                
                {idx < steps.length - 1 && (
                  <div style={{ padding: '0 1rem', color: 'var(--color-primary)', transform: 'translateY(-2rem)' }}>
                    <ArrowRight size={24} />
                  </div>
                )}
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
