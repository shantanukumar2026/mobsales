"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const IMG_WALL_MOLD = "/images/12_10__30_48_mold_rectangle_14_frame1.jpg"; 
const IMG_PIPE_MOLD = "/images/ring_mold_animation_202_frame1.jpg"; 
const IMG_CULVERT = "/images/trnch_mold_animation_24_frame1.jpg"; 

export default function ProductShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="text-h1" style={{ marginBottom: '6vw' }}>BUILT AROUND<br />YOUR PRODUCTION.</h2>
        
        {[
          { num: "01", name: "PRECAST WALL MOLDS", desc: "Precision steel forms for repeatable wall-panel production.", app: "Residential / Industrial", img: IMG_WALL_MOLD },
          { num: "02", name: "BOX CULVERT MOLDS", desc: "Heavy-duty systems for infrastructure and drainage production.", app: "Civil & Infrastructure", img: IMG_CULVERT },
          { num: "03", name: "CONCRETE PIPE MOLDS", desc: "Precision cylindrical forms for storm and sanitary concrete pipes.", app: "Civil & Infrastructure", img: IMG_PIPE_MOLD },
        ].map((product, idx) => (
          <motion.div key={idx} className="product-panel" {...fadeInUp}>
            <div>
              <div className="text-number">{product.num}</div>
              <h3 className="text-h2" style={{ margin: '2rem 0 1rem' }}>{product.name}</h3>
              <p className="text-body-large" style={{ marginBottom: '2rem' }}>{product.desc}</p>
              <div style={{ marginBottom: '3rem' }}>
                <span className="text-label" style={{ color: 'var(--color-steel)', display: 'block', marginBottom: '0.5rem' }}>APPLICATION</span>
                <span className="text-label" style={{ color: 'var(--color-text)' }}>{product.app}</span>
              </div>
              <button className="btn-secondary" style={{ border: 'none', padding: 0 }}>
                VIEW PRODUCT <ArrowRight size={18} />
              </button>
            </div>
            <div className="product-image-container image-mask">
              <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
