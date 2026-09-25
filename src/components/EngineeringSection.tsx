"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EngineeringSection() {
  return (
    <section id="engineering" className="section">
      <div className="container">
        <div className="product-panel">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="text-h1" style={{ marginBottom: '2.5rem' }}>
              ENGINEERING<br/>& DESIGN
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="text-body-large" style={{ marginBottom: '2.5rem', maxWidth: '500px' }}>
              Our in-house design review ensures every mold meets precise tolerance standards before fabrication.
            </motion.p>
            <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} style={{ listStyle: 'none', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {["Strict dimensional tolerance standards", "Premium steel grades & materials", "Seamless CAD/DXF file exchange"].map((item, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } }} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />
                  <span className="text-body-large" style={{ fontSize: '1.1rem' }}>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} href="#quote" className="btn-primary hover-target" style={{ display: 'inline-flex' }}>
              TALK TO ENGINEERING <ArrowRight size={18} />
            </motion.a>
          </motion.div>
          <motion.div 
            className="product-image-container image-mask"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ borderRadius: '24px', overflow: 'hidden' }}
          >
            <Image src="/images/12_10__30_48_mold_rectangle_5277_frame1.jpg" alt="Engineering" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
