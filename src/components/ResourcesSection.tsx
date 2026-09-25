"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Download, ChevronDown } from "lucide-react";

export default function ResourcesSection() {
  const faqs = [
    { q: "What is your typical lead time?", a: "<!-- CMS: replace with realistic generic lead time --> Lead times vary by project complexity and current fabrication schedule, but standard molds typically ship within a structured timeframe. Contact us for current estimates." },
    { q: "Is there a minimum order quantity?", a: "<!-- CMS: replace with realistic generic MOQ --> We accommodate both single custom mold requests and large multi-form production orders." },
    { q: "Do you build to custom tolerances?", a: "Yes, our engineering team routinely works with clients to meet specialized dimensional requirements beyond standard industry codes." },
    { q: "How is shipping and freight handled?", a: "<!-- CMS: replace with shipping policy --> We coordinate flatbed freight and specialized transport to deliver directly to your precast facility." }
  ];

  return (
    <section id="resources" className="section section-warm">
      <div className="container">
        <h2 className="text-h2" style={{ marginBottom: '3rem' }}>RESOURCES & FAQ</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          {/* Downloads & Links */}
          <div>
            <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Downloads</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-concrete)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label">Standard Tolerances Spec</span>
                <span className="text-label" style={{ color: 'var(--color-steel)' }}>(COMING SOON)</span>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-concrete)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label">Mold Care Guide</span>
                <span className="text-label" style={{ color: 'var(--color-steel)' }}>(COMING SOON)</span>
              </div>
            </div>
            
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-text)' }}>
              <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Need CAD/DXF Files?</h3>
              <p style={{ marginBottom: '1.5rem' }}>Submit a request through our engineering portal to receive detailed files for your layout planning.</p>
              <a href="#quote" className="btn-primary" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>REQUEST FILES</a>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div>
            <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Common Questions</h3>
            <Accordion.Root type="single" collapsible style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <Accordion.Item key={idx} value={`item-${idx}`} style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-concrete)' }}>
                  <Accordion.Header style={{ margin: 0 }}>
                    <Accordion.Trigger style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <span className="text-body-large" style={{ fontWeight: 600 }}>{faq.q}</span>
                      <ChevronDown size={20} className="accordion-chevron" style={{ transition: 'transform 0.3s' }} />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content style={{ overflow: 'hidden' }} className="accordion-content">
                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text)', opacity: 0.8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
            <style dangerouslySetInnerHTML={{__html: `
              button[data-state="open"] .accordion-chevron { transform: rotate(180deg); }
              .accordion-content[data-state="open"] { animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1); }
              .accordion-content[data-state="closed"] { animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1); }
              @keyframes slideDown { from { height: 0; } to { height: var(--radix-accordion-content-height); } }
              @keyframes slideUp { from { height: var(--radix-accordion-content-height); } to { height: 0; } }
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
}
