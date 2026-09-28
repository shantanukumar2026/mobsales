import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Package } from "lucide-react";
import CATEGORIES from "@/data/categories.json";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = CATEGORIES.find((c) => c.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg-warm)', minHeight: '100vh', width: '100%' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', minHeight: '400px', backgroundColor: '#0004AD' }}>
        <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover', opacity: 0.6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0004AD, transparent)' }} />
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '4rem 5%', zIndex: 2 }}>
          <Link href="/#categories" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-bg)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', opacity: 0.8, alignSelf: 'flex-start' }}>
            <ArrowLeft size={16} /> BACK TO PRODUCTS
          </Link>
          
          <div style={{ marginTop: 'auto', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--color-bg)', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>
            <div style={{ width: '80px', height: '6px', backgroundColor: 'var(--color-primary)', marginTop: '1.5rem' }} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '6rem 5%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ color: 'var(--color-primary-dark)', fontWeight: 800, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>PRODUCT OVERVIEW</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0004AD', marginBottom: '2rem', lineHeight: 1.2 }}>
            PRECISION ENGINEERED FOR HEAVY CIVIL PROJECTS.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-accent)', lineHeight: 1.7, fontWeight: 500, marginBottom: '2rem' }}>
            {product.desc}
          </p>
          <p style={{ fontSize: '1.1rem', color: '#1E3BA1', lineHeight: 1.7 }}>
            Our steel forms are fabricated in-house to exact specifications. We utilize heavy-grade steel and advanced manufacturing techniques to ensure your forms can withstand the repetitive stresses of daily precast production without losing dimensional accuracy.
          </p>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
            <button style={{ padding: '1.25rem 2.5rem', backgroundColor: 'var(--color-primary)', color: '#0004AD', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
              REQUEST A QUOTE
            </button>
            <button style={{ padding: '1.25rem 2.5rem', backgroundColor: 'transparent', color: '#0004AD', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.1em', border: '2px solid #0004AD', cursor: 'pointer', borderRadius: '4px' }}>
              DOWNLOAD SPECS
            </button>
          </div>
        </div>
        
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ backgroundColor: 'var(--color-bg)', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0, 4, 173, 0.05)', border: '1px solid #F0F6FC' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0004AD', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Package size={24} color="var(--color-primary)" /> KEY FEATURES
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Heavy-duty steel construction for ultimate longevity",
                "Precision CNC machined components",
                "Custom built to your exact site requirements",
                "Fast setup and stripping to maximize daily production",
                "Compatible with high-frequency external vibrators"
              ].map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle size={20} color="var(--color-primary-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '1.05rem', color: '#0004AD', lineHeight: 1.5, fontWeight: 500 }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
