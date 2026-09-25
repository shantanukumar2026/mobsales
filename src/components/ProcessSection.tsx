"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PenTool, Monitor, CheckCircle, Truck } from "lucide-react";
import CustomVideoPlayer from "./CustomVideoPlayer";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { icon: ClipboardList, label: "Requirement Intake", desc: "Detailed analysis of your project specifications, site conditions, and required concrete output." },
    { icon: PenTool, label: "CAD Design", desc: "Precision 3D modeling and structural simulation to ensure form rigidity under pressure." },
    { icon: Monitor, label: "Steel Fabrication", desc: "High-grade steel cutting, CNC bending, and AWS-certified structural welding." },
    { icon: CheckCircle, label: "QC & Tolerance", desc: "Rigorous dimensional checks using laser measurement for absolute fidelity." },
    { icon: Truck, label: "Delivery", desc: "Coordinated flatbed transport, on-site setup, and field support upon request." }
  ];

  return (
    <section id="process" ref={containerRef} style={{ paddingTop: '8vw', paddingBottom: '2vw', backgroundColor: 'var(--color-bg)', position: 'relative', zIndex: 10 }}>
      {/* Soft gradient shade for depth transition from Hero section */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to bottom, rgba(9, 72, 150, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw' }} className="process-grid-split">

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'sticky', top: '15vh' }}>
              <div className="text-label" style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>METHODOLOGY</div>
              <h2 className="text-h1" style={{ marginBottom: '2rem', lineHeight: 1.1 }}>
                FROM CONCEPT<br />TO CONCRETE.
              </h2>
              <p className="text-body-large" style={{ color: 'var(--color-text)', opacity: 0.7, maxWidth: '400px', marginBottom: '3rem' }}>
                We don't just build molds; we engineer production systems. Our 5-stage methodology ensures every steel form performs flawlessly in the field.
              </p>

              <div style={{ position: 'relative', width: '100%', marginTop: '2rem' }}>
                <CustomVideoPlayer src="/images/genrate_video.mp4" />
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', paddingLeft: '4rem' }}>
            {/* Vertical timeline line */}
            <div style={{ position: 'absolute', left: '15px', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--color-concrete)' }}>
              <motion.div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: yLine, backgroundColor: 'var(--color-primary)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', padding: '4rem 0' }}>
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ position: 'relative' }}
                >
                  <div style={{ position: 'absolute', left: '-4rem', top: '5px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', border: '4px solid var(--color-primary)', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-text)' }} />
                  </div>

                  <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <step.icon size={24} color="var(--color-text)" opacity={0.4} />
                    <h3 className="text-h3" style={{ fontSize: '2rem' }}>{step.label}</h3>
                  </div>
                  <p className="text-body-large" style={{ color: 'var(--color-text)', opacity: 0.8, lineHeight: 1.6, maxWidth: '450px' }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .process-grid-split { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
}
