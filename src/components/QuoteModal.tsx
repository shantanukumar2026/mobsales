"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Upload, CheckCircle, HardHat } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state on close after a delay
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(9, 34, 68, 0.85)', backdropFilter: 'blur(8px)' }} 
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{ position: 'relative', width: '90%', maxWidth: '800px', backgroundColor: '#FAFAF7', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}
      >
        
        {/* Header */}
        <div style={{ backgroundColor: '#092244', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <HardHat color="#F2C500" size={24} />
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.05em' }}>REQUEST A QUOTE</h2>
            </div>
            <p style={{ margin: 0, color: '#93C5FD', fontSize: '0.85rem' }}>Custom Precast Steel Form Engineering</p>
          </div>
          <button onClick={onClose} style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div style={{ display: 'flex', width: '100%', height: '4px', backgroundColor: '#e2e8f0' }}>
            <div style={{ width: step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%', backgroundColor: '#F2C500', transition: 'width 0.4s ease' }} />
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '3rem 2rem', overflowY: 'auto', flex: 1 }}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Project Type */}
            {step === 1 && !isSuccess && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <h3 style={{ color: '#004B87', fontSize: '1.25rem', marginBottom: '1.5rem' }}>1. What type of forms do you need?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Trench & Drainage Forms', 'Catch Basins & Manholes', 'Structural Columns', 'Bridge Girders', 'Retaining Walls', 'Custom Architecture'].map((type) => {
                    const isSelected = selectedType === type;
                    return (
                    <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: isSelected ? '2px solid #004B87' : '2px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: isSelected ? '#F0F7FF' : '#fff', transition: 'all 0.2s' }} onMouseOver={e => !isSelected && (e.currentTarget.style.borderColor = '#94a3b8')} onMouseOut={e => !isSelected && (e.currentTarget.style.borderColor = '#e2e8f0')}>
                      <input type="radio" name="projectType" value={type} checked={isSelected} onChange={() => setSelectedType(type)} style={{ width: '18px', height: '18px', accentColor: '#004B87' }} />
                      <span style={{ color: '#334155', fontWeight: 600, fontSize: '0.9rem' }}>{type}</span>
                    </label>
                  )})}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Specifications */}
            {step === 2 && !isSuccess && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <h3 style={{ color: '#004B87', fontSize: '1.25rem', marginBottom: '1.5rem' }}>2. Technical Specifications</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>EST. LENGTH</label>
                      <input type="text" placeholder="e.g. 10 ft" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>EST. WIDTH</label>
                      <input type="text" placeholder="e.g. 48 in" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>EST. HEIGHT</label>
                      <input type="text" placeholder="e.g. 60 in" style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>PROJECT DESCRIPTION / REQUIREMENTS</label>
                    <textarea rows={4} placeholder="Describe any special tapers, blockouts, or tolerance requirements..." style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>ATTACH FILES (CAD, PDF)</label>
                    <div style={{ border: '2px dashed #cbd5e1', padding: '2rem', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f8fafc', cursor: 'pointer' }}>
                      <Upload size={24} color="#94a3b8" style={{ margin: '0 auto 0.5rem auto' }} />
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Click to upload files or drag and drop</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Contact */}
            {step === 3 && !isSuccess && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <h3 style={{ color: '#004B87', fontSize: '1.25rem', marginBottom: '1.5rem' }}>3. Contact Information</h3>
                <form id="rfq-form" onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>COMPANY NAME</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>FULL NAME</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#3973A4', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
                    <input type="email" required style={{ width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px', outline: 'none' }} />
                  </div>
                </form>
              </motion.div>
            )}

            {/* SUCCESS STATE */}
            {isSuccess && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ color: '#004B87', fontSize: '1.8rem', marginBottom: '1rem' }}>Request Submitted</h3>
                <p style={{ color: '#3973A4', fontSize: '1rem', maxWidth: '400px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                  Our engineering team has received your specifications. We will review the details and contact you within 24 business hours.
                </p>
                <button onClick={onClose} style={{ backgroundColor: '#004B87', color: '#fff', border: 'none', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                  CLOSE
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {!isSuccess && (
          <div style={{ backgroundColor: '#fff', borderTop: '1px solid #e2e8f0', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)} style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <ArrowLeft size={16} /> BACK
              </button>
            ) : (
              <div /> // Spacer
            )}
            
            {step < 3 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={step === 1 && !selectedType} style={{ backgroundColor: (step === 1 && !selectedType) ? '#cbd5e1' : '#004B87', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: (step === 1 && !selectedType) ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}>
                CONTINUE <ArrowRight size={16} />
              </button>
            ) : (
              <button type="submit" form="rfq-form" disabled={isSubmitting} style={{ backgroundColor: '#F2C500', color: '#124A91', border: 'none', padding: '0.75rem 2.5rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT QUOTE REQUEST'} 
              </button>
            )}
          </div>
        )}

      </motion.div>
    </div>
  );
}
