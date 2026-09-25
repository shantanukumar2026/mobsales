"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import EngineeringSection from "@/components/EngineeringSection";
import WhySteelFormsSection from "@/components/WhySteelFormsSection";
import AnimationShowcase from "@/components/AnimationShowcase";
import InteractiveMoldExplorer from "@/components/InteractiveMoldExplorer";
import IndustriesSection from "@/components/IndustriesSection";
import QualitySection from "@/components/QualitySection";
import ResourcesSection from "@/components/ResourcesSection";

const HERO_CARDS = [
  {
    src: "/images/ring_mold_animation_202_frame1_no_logo.jpg",
    title: "RING MOLD SYSTEM (BLUE)"
  },
  {
    src: "/images/Mega_Mold_Trench_Red_frame1_no_logo.jpg",
    title: "TRENCH MOLD (RED)"
  },
  {
    src: "/images/12_10__30_48_mold_rectangle_14_frame1_no_logo.jpg",
    title: "RECTANGLE FORM"
  }
];

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
    <main>
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

      <InteractiveMoldExplorer />

      <AnimationShowcase />

      {/* Solutions placeholder */}

      <EngineeringSection />

      <WhySteelFormsSection />

      <IndustriesSection />

      <QualitySection />

      {/* Projects placeholder */}

      {/* Company placeholder */}

      <ResourcesSection />

      <QuoteForm />

      <Footer />
    </main>
  );
}
