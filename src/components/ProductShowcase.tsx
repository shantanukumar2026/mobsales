"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    num: "01",
    name: "INTERLOCKING BLOCK MOLDS",
    tags: ["RETAINING BLOCKS", "STEEL FORMS", "CUSTOM DIMENSIONS"],
    img: "/kfmolds/LegoBlock_NEW-L2.jpg"
  },
  {
    num: "02",
    name: "TRENCH MOLDS",
    tags: ["DRAINAGE", "INFRASTRUCTURE", "HEAVY DUTY"],
    img: "/kfmolds/alaska55_NEW-1.jpg"
  },
  {
    num: "03",
    name: "BOX CULVERT MOLDS",
    tags: ["INFRASTRUCTURE", "CUSTOM FORMING", "REPEATABLE PRODUCTION"],
    img: "/kfmolds/Box-Culvert-1.jpg"
  },
  {
    num: "04",
    name: "MANHOLE RISER MOLDS",
    tags: ["WATER & SEWER", "STEEL TOOLING", "PRECISION FORMING"],
    img: "/kfmolds/Manhole-Riser-1500-2100-scaled.jpg"
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
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} id="products" style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container">

        {/* Header Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '3px', height: '16px', backgroundColor: 'var(--color-primary)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-primary-dark)', textTransform: 'uppercase' }}>
              ENGINEERED PRODUCT SYSTEMS
            </span>
          </div>

          <h2 style={{ margin: 0, fontSize: 'clamp(3.5rem, 6vw, 6rem)', fontWeight: 900, color: 'var(--color-primary-dark)', lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase', width: '100%' }}>
            FORMS BUILT AROUND YOUR PRODUCTION.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', fontWeight: 500, lineHeight: 1.6, margin: 0, borderLeft: '3px solid var(--color-primary-dark)', paddingLeft: '1.5rem', width: '100%' }}>
            From infrastructure components to structural precast systems, Precast Molds and Forms develops precision forms and molds for repeatable concrete production.
          </p>
        </div>

        {/* Responsive Grid Gallery */}
        <div className="product-grid-strict" style={{ display: 'grid', gap: '2rem' }}>
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', backgroundColor: idx % 2 === 0 ? '#F8FAFC' : '#F0F8FF', borderRadius: '4px', overflow: 'hidden', border: '1px solid #A8DCFF' }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: 'transparent', borderBottom: '1px solid #A8DCFF' }}>
                <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </div>

              {/* Product Info */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  {product.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '1rem', lineHeight: 1.2, textTransform: 'uppercase', wordWrap: 'break-word' }}>
                  {product.name}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', marginTop: 'auto', color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {product.tags.join('  •  ')}
                </div>

                <div style={{ height: '1px', width: '100%', backgroundColor: '#A8DCFF', marginBottom: '1.5rem' }} />

                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-dark)', fontSize: '0.85rem', fontWeight: 800, backgroundColor: 'transparent', border: 'none', padding: 0, cursor: 'pointer', letterSpacing: '0.05em' }}>
                  VIEW PRODUCT <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .product-grid-strict {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1200px) {
          .product-grid-strict {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .product-grid-strict {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </motion.section>
  );
}

