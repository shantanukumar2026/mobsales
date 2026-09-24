"use client";
import { ArrowRight, Upload } from "lucide-react";

export default function QuoteForm() {
  return (
    <section id="quote" className="section">
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="text-h1" style={{ marginBottom: '1rem' }}>REQUEST A QUOTE</h2>
          <p className="text-body-large" style={{ marginBottom: '4rem' }}>
            Provide details about your project, expected production volume, and required dimensions. Our engineering team will review and respond promptly.
          </p>
          
          <form className="quote-form">
            <div className="form-group">
              <label className="text-label">NAME</label>
              <input type="text" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="text-label">COMPANY</label>
              <input type="text" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="text-label">EMAIL</label>
              <input type="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="text-label">PHONE</label>
              <input type="tel" className="form-input" />
            </div>
            <div className="form-group">
              <label className="text-label">PRODUCT / APPLICATION</label>
              <input type="text" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="text-label">REQUIRED DIMENSIONS</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group full">
              <label className="text-label">MESSAGE / PROJECT DETAILS</label>
              <textarea className="form-input" required></textarea>
            </div>
            <div className="form-group full">
              <div className="hover-target" style={{ border: '1px dashed var(--color-steel)', padding: '3rem', textAlign: 'center', cursor: 'pointer' }}>
                <Upload size={24} style={{ margin: '0 auto 1rem', color: 'var(--color-steel)' }} />
                <p className="text-label">UPLOAD DRAWING / PDF</p>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: '2rem' }}>
              <button type="submit" className="btn-primary">
                REQUEST A QUOTE <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
