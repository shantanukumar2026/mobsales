"use client";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div style={{ gridColumn: 'span 2' }}>
            <h2 className="text-h2" style={{ marginBottom: '1rem' }}>MOB SALES</h2>
            <p className="text-label" style={{ color: 'var(--color-steel)' }}>PRECAST CONCRETE FORMS + MOLDS</p>
          </div>
          
          <div>
            <h4 className="text-label" style={{ marginBottom: '2rem' }}>NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-label" style={{ marginBottom: '2rem' }}>CONTACT</h4>
            <ul className="footer-links">
              <li><a href="#quote" className="yellow-accent">REQUEST A QUOTE ↗</a></li>
              <li style={{ marginTop: '1rem' }}><a href="#">Email Engineering</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2vw', borderTop: '1px solid var(--color-concrete)' }}>
          <span className="text-label" style={{ color: 'var(--color-steel)' }}>© 2026 MOB SALES</span>
          <span className="text-label" style={{ color: 'var(--color-steel)' }}>FORMS THAT SHAPE CONCRETE</span>
        </div>
      </div>
    </footer>
  );
}
