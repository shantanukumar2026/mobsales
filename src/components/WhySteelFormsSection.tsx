"use client";
import { motion } from "framer-motion";

export default function WhySteelFormsSection() {
  const cards = [
    { title: "Reusability", desc: "Built to withstand repeated casting cycles without warping or degradation." },
    { title: "Dimensional Accuracy", desc: "Maintains precise form tolerances to ensure concrete elements fit perfectly on site." },
    { title: "Corrosion Protection", desc: "Treated surfaces to resist concrete adherence and environmental wear." },
    { title: "Optimized Lead Time", desc: "Streamlined fabrication processes to get molds to your facility faster." }
  ];

  return (
    <section id="why-us" style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)', padding: '10vw 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '800px', marginBottom: '8vw' }}
        >
          <div className="text-label" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>THE MOB SALES ADVANTAGE</div>
          <h2 className="text-h1" style={{ color: 'var(--color-bg)' }}>
            ENGINEERED TO<br/>OUTLAST.
          </h2>
        </motion.div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6vw' }}>
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: '4vw',
                marginLeft: idx % 2 !== 0 ? 'auto' : '0',
                maxWidth: '900px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '3rem'
              }}
            >
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.8, lineHeight: 0.8 }}>
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-h3" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-bg)' }}>{card.title}</h3>
                <p className="text-body-large" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,167,0,0.15) 0%, rgba(9,72,150,0) 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,196,0,0.1) 0%, rgba(9,72,150,0) 70%)', zIndex: 0 }} />
    </section>
  );
}
