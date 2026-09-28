"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CATEGORIES from "@/data/categories.json";

const COLOR_TITLE = "var(--color-primary-dark)";
const COLOR_DESC = "var(--color-text-muted)";
const COLOR_ACCENT = "var(--color-primary)";

export default function InfrastructureCategoriesSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ padding: '6rem 4rem', backgroundColor: 'var(--color-bg-warm)', borderTop: '1px solid #F0F6FC', width: '100%' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '2px', height: '16px', backgroundColor: COLOR_ACCENT }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', color: COLOR_TITLE, textTransform: 'uppercase' }}>
                INFRASTRUCTURE FORMS
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', width: '100%', margin: 0, letterSpacing: '-0.02em', background: 'linear-gradient(90deg, var(--color-primary-dark) 0%, #0085F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              INFRASTRUCTURE FORMS BUILT <br /> FOR WHAT'S NEXT.
            </h2>
            <span> <p style={{ marginTop: '1.5rem', color: COLOR_DESC, fontWeight: 500, fontSize: '1.125rem', maxWidth: '600px', lineHeight: 1.6 }}>
              We deliver precision-engineered steel forming systems for every aspect of heavy civil, utility, and transportation infrastructure.
            </p></span>
          </div>
        </div>

        <div className="infrastructure-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {CATEGORIES.filter(cat => ![
            'utility-vault-forms',
            'pipe-forms',
            'stormwater-structure-forms',
            'catch-basin-curb-inlet-forms',
            'utility-equipment-pad-forms'
          ].includes(cat.id)).map((cat, i) => (
            <CategoryCard key={i} category={cat} idx={i} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .infrastructure-grid > a {
          flex: 1 1 calc(25% - 1.5rem);
          min-width: 300px;
        }
        @media (max-width: 1400px) {
          .infrastructure-grid > a {
            flex: 1 1 calc(33.333% - 1.5rem);
          }
        }
        @media (max-width: 1024px) {
          .infrastructure-grid > a {
            flex: 1 1 calc(50% - 1.5rem);
          }
        }
        @media (max-width: 768px) {
          .infrastructure-grid > a {
            flex: 1 1 100%;
          }
        }
      `}} />
    </motion.section>
  );
}

function CategoryCard({ category, idx }: { category: typeof CATEGORIES[0], idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/product/${category.id}`}
      style={{ 
        backgroundColor: idx % 2 === 0 ? 'var(--color-bg)' : '#F8FAFC', 
        border: '1px solid #A8DCFF', 
        borderRadius: '0px', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative',
        boxShadow: isHovered ? '0 20px 40px rgba(0, 4, 173, 0.08)' : '0 4px 10px rgba(0, 4, 173, 0.03)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden', backgroundColor: '#F0F6FC' }}>
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <Image src={category.img} alt={category.name} fill style={{ objectFit: 'cover' }} />
        </motion.div>


      </div>

      {/* Default text below image */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', borderTop: '1px solid #A8DCFF', backgroundColor: idx % 2 === 0 ? 'var(--color-bg)' : '#F8FAFC', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: COLOR_TITLE, margin: 0, textTransform: 'uppercase', lineHeight: 1.2 }}>
          {category.name}
        </h3>
        {/* Description */}
        <p style={{ fontSize: '0.9rem', color: COLOR_DESC, marginTop: '0.5rem', marginBottom: 0, lineHeight: 1.5 }}>
          {category.desc}
        </p>
      </div>
    </Link>
  );
}

