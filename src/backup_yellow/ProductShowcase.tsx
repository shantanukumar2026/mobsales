"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    num: "01",
    name: "PRECAST WALL MOLDS",
    tags: ["WALL SYSTEMS", "STEEL FORMS", "CUSTOM DIMENSIONS"],
    img: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg"
  },
  {
    num: "02",
    name: "TRENCH MOLDS",
    tags: ["DRAINAGE", "INFRASTRUCTURE", "HEAVY DUTY"],
    img: "/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg"
  },
  {
    num: "03",
    name: "BOX CULVERT MOLDS",
    tags: ["INFRASTRUCTURE", "CUSTOM FORMING", "REPEATABLE PRODUCTION"],
    img: "/images/Mega_Mold_Trench_Black_frame1.jpg"
  },
  {
    num: "04",
    name: "CONCRETE PIPE MOLDS",
    tags: ["WATER & SEWER", "STEEL TOOLING", "PRECISION FORMING"],
    img: "/images/ring_mold_animation_202_frame1_no_logo.jpg"
  }
];

export default function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" style={{ backgroundColor: '#F3F5F6', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container">

        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3px', height: '16px', backgroundColor: '#0056ff' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: '#334155', textTransform: 'uppercase' }}>
                ENGINEERED PRODUCT SYSTEMS
              </span>
            </div>

            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, color: '#124A91', lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              FORMS BUILT<br />AROUND YOUR<br />PRODUCTION.
            </h2>
          </div>

          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              From infrastructure components to structural precast systems, MOB SALES develops precision forms and molds for repeatable concrete production.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => scroll('left')} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #D9DDE0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#124A91' }}>
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll('right')} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #F2C500', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#F2C500' }}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '2rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '2rem',
            marginRight: '-10vw', // Bleed edge
            paddingRight: '10vw'
          }}
          className="hide-scrollbar"
        >
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ minWidth: '400px', flex: '0 0 auto', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '4px', overflow: 'hidden', border: '1px solid #D9DDE0' }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', width: '100%', height: '300px', backgroundColor: '#FAFAF7', borderBottom: '1px solid #D9DDE0' }}>
                <Image src={product.img} alt={product.name} fill style={{ objectFit: 'contain', padding: '2rem' }} />
              </div>

              {/* Product Info */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#F2C500', marginBottom: '0.5rem' }}>
                  {product.num}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#124A91', marginBottom: '1.5rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
                  {product.name}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', marginTop: 'auto' }}>
                  {product.tags.map((tag, i) => (
                    <span key={i} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#F3F5F6', border: '1px solid #D9DDE0', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, color: '#334155', letterSpacing: '0.05em' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#124A91', fontSize: '0.85rem', fontWeight: 800, backgroundColor: 'transparent', border: 'none', padding: 0, cursor: 'pointer', letterSpacing: '0.05em' }}>
                  VIEW PRODUCT <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
