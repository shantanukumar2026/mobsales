"use client";

import { motion } from "framer-motion";
import { Cpu, Wifi, Activity, ShieldCheck, Wrench, Clock, Maximize, FileWarning } from "lucide-react";
import Image from "next/image";

export default function SmartMoldSection() {
  const smartFeatures = [
    { icon: <Cpu size={24} />, title: "Robotic Precision Casting", desc: "AI-guided robotic fabrication ensures tight manufacturing tolerances down to the millimeter." },
    { icon: <Wifi size={24} />, title: "IoT Telemetry Ready", desc: "Optional embedded sensors transmit real-time curing data and temperature directly to your dashboard." },
    { icon: <Activity size={24} />, title: "ML Predictive Maintenance", desc: "Machine learning algorithms analyze micro-stress patterns over thousands of pours to predict maintenance." },
    { icon: <ShieldCheck size={24} />, title: "Automated QA Verification", desc: "Every mold is scanned and verified digitally against the original CAD blueprint before dispatch." }
  ];

  const contractorBenefits = [
    { icon: <Clock size={32} />, title: "Zero Cure Delay", desc: "Optimized thermal properties allow crews to strip and reset faster, maximizing daily production footprints." },
    { icon: <Wrench size={32} />, title: "No Digging / Retrofit", desc: "Engineered to fit existing infrastructural setups with built-in mechanical linkages. Avoid digging out base structures." },
    { icon: <Maximize size={32} />, title: "Stackable Design", desc: "Need custom heights? Our modular forms securely nest and stack on site for precise elevation matching." },
    { icon: <FileWarning size={32} />, title: "DOT & Municipal Compliant", desc: "Materials and load ratings are engineered to support all applicable municipal, state, and DOT requirements." }
  ];

  return (
    <>
      {/* Why Contractors Choose Us Section */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#124A91', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              Built For The Jobsite
            </span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0B203F', marginTop: '1rem', lineHeight: 1.1 }}>
              WHY PRECAST CREWS<br />CHOOSE MOB SALES.
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#F2C500', margin: '2rem auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {contractorBenefits.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ 
                  backgroundColor: '#fff', 
                  padding: '3rem 2rem', 
                  borderRadius: '16px', 
                  borderTop: '4px solid #F2C500',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ color: '#124A91', marginBottom: '1.5rem' }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#124A91', marginBottom: '1rem' }}>
                  {feat.title}
                </h3>
                <p style={{ color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Intelligence Section */}
      <section style={{ backgroundColor: '#0B203F', color: '#fff', padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(242,197,0,0.1) 0%, transparent 40%)' }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '6rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: '#F2C500', fontWeight: 800, letterSpacing: '0.15em', fontSize: '1rem' }}>
              // NEXT GENERATION
            </span>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginTop: '1rem', marginBottom: '2rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
              TRANSITIONING FROM PASSIVE IRON TO ACTIVE INTELLIGENCE.
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#A0AEC0', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our next-generation heavy infrastructure molds integrate seamlessly with data networks, transforming standard forms into a real-time diagnostic grid. Predict curing times, track jobsite telemetry, and ensure absolute structural integrity.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {smartFeatures.map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{ display: 'flex', gap: '1.5rem' }}
                >
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(242,197,0,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F2C500', flexShrink: 0 }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>{feat.title}</h4>
                    <p style={{ color: '#8892B0', lineHeight: 1.5, margin: 0 }}>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              {/* Fallback to an existing image */}
              <Image src="/images/ring_mold_animation_202_frame1_no_logo.jpg" alt="Smart Mold" fill style={{ objectFit: 'cover' }} />
              
              {/* Overlay telemetry UI simulation */}
              <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '60%', backgroundColor: 'rgba(11,32,63,0.9)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(242,197,0,0.3)', color: '#fff' }}>
                <div style={{ fontSize: '0.8rem', color: '#F2C500', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.1em' }}>LIVE TELEMETRY</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ opacity: 0.8 }}>Internal Temp:</span>
                  <span style={{ fontWeight: 800 }}>142°F</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ opacity: 0.8 }}>Structural Stress:</span>
                  <span style={{ fontWeight: 800, color: '#4ade80' }}>Nominal</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.8 }}>Cure Status:</span>
                  <span style={{ fontWeight: 800 }}>87%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
