"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function InteractiveMoldExplorer() {
  return (
    <section id="featured-product" style={{ padding: '8rem 0', backgroundColor: 'var(--color-bg-warm)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '3px', height: '16px', backgroundColor: 'var(--color-primary)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: '#1E3BA1', textTransform: 'uppercase' }}>
            FEATURED FORM // 01
          </span>
        </div>
        
        <h2 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          PRECISION<br/>IN STEEL.
        </h2>
        
        <p style={{ fontSize: '1.1rem', color: '#1E3BA1', lineHeight: 1.6, maxWidth: '400px', marginBottom: '3rem' }}>
          Every form begins with the geometry of the finished solid precast product, translated into a dynamic engineered form ensuring durability, and repeatability.
        </p>
        
        <button style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)', border: 'none', padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '6rem' }}>
          VIEW PRODUCT <ArrowRight size={14} />
        </button>

        {/* Featured Image with Annotations */}
        <div style={{ position: 'relative', width: '100%', height: '600px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', width: '80%', height: '100%', right: '-5%' }}
          >
            <Image src="/images/Mega_Mold_Trench_Black_frame1.jpg" alt="Featured Steel Mold" fill style={{ objectFit: 'contain' }} />
          </motion.div>

          {/* Annotations */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ position: 'absolute', top: '15%', left: '30%', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px rgba(0, 187, 255, 0.2)' }} />
            <div style={{ paddingBottom: '0.25rem', borderBottom: '1px solid #F0F6FC' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#1E3BA1', letterSpacing: '0.05em' }}>STEEL FABRICATION</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{ position: 'absolute', bottom: '25%', left: '20%', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px rgba(0, 187, 255, 0.2)' }} />
            <div style={{ paddingBottom: '0.25rem', borderBottom: '1px solid #F0F6FC' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#1E3BA1', letterSpacing: '0.05em' }}>PRECISION WELDING</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            style={{ position: 'absolute', top: '25%', right: '15%', display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: 'row-reverse' }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 4px rgba(0, 187, 255, 0.2)' }} />
            <div style={{ paddingBottom: '0.25rem', borderBottom: '1px solid #F0F6FC', textAlign: 'right' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#1E3BA1', letterSpacing: '0.05em' }}>CUSTOM DIMENSIONS</div>
            </div>
          </motion.div>

          {/* Product Data Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            style={{ position: 'absolute', bottom: '10%', right: '5%', backgroundColor: 'var(--color-bg)', padding: '2rem', border: '1px solid #F0F6FC', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0, 4, 173, 0.05)', maxWidth: '300px' }}
          >
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>PRODUCT</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>TRENCH MOLD</div>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#1E3BA1', letterSpacing: '0.05em', opacity: 0.6 }}>APPLICATION</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E3BA1' }}>DRAINAGE / INFRASTRUCTURE</div>
            </div>
            
            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#1E3BA1', letterSpacing: '0.05em', opacity: 0.6 }}>CONFIGURATION</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E3BA1' }}>CUSTOM</span>
                <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)' }}>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
