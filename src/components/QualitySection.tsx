"use client";
import { ShieldCheck, Search, FileText } from "lucide-react";

export default function QualitySection() {
  const features = [
    { icon: ShieldCheck, title: "Applicable Codes", desc: "Molds engineered to comply with regional and national precast standards." },
    { icon: Search, title: "Inspection Process", desc: "Multi-stage QA checks covering dimensional accuracy, weld integrity, and finish." },
    { icon: FileText, title: "Documentation", desc: "Comprehensive material certifications and layout drawings provided with each delivery." }
  ];

  return (
    <section id="quality" style={{ padding: '8vw 0', backgroundColor: 'var(--color-bg-warm)', borderTop: '1px solid var(--color-concrete)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6vw', alignItems: 'center' }}>
          <div>
            <div className="text-label" style={{ color: 'var(--color-text)', marginBottom: '1.5rem', borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem' }}>UNCOMPROMISING STANDARDS</div>
            <h2 className="text-h1" style={{ marginBottom: '2rem' }}>
              BUILT FOR<br/>PRECISION.
            </h2>
            <p className="text-body-large" style={{ color: 'var(--color-text)', opacity: 0.8, maxWidth: '400px' }}>
              Our molds undergo rigorous multi-point inspection checks. We deliver not just a form, but certified certainty that your precast products will meet code.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {features.map((item, idx) => (
              <div key={idx} className="hover-target" style={{ display: 'flex', gap: '2rem', padding: '2rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-concrete)', borderRadius: '16px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <item.icon size={120} color="var(--color-primary-dark)" style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05, transform: 'rotate(-15deg)' }} />
                
                <div style={{ width: '64px', height: '64px', flexShrink: 0, borderRadius: '50%', backgroundColor: 'var(--color-bg-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-steel)' }}>
                  <item.icon size={28} color="var(--color-text)" />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 className="text-h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p className="text-body-large" style={{ fontSize: '1.05rem', color: 'var(--color-text)', opacity: 0.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
