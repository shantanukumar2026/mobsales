"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase.from('blogs').select('*, categories(name)').eq('status', 'Published').order('created_at', { ascending: false });
      if (!error && data) setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <main style={{ width: '100%', overflowX: 'hidden', backgroundColor: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div style={{ flex: 1, padding: '12rem 5% 10rem', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Minimalist Page Header */}
        <div style={{ marginBottom: '8rem', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#1E3BA1', textDecoration: 'none', fontWeight: 400, fontSize: '0.875rem', marginBottom: '3rem', transition: 'color 0.3s ease', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <ArrowLeft size={16} strokeWidth={1.5} /> Back to Home
          </Link>
          
          <h1 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#0004AD', margin: '0 0 1.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Industry Insights.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#1E3BA1', margin: 0, fontWeight: 300, lineHeight: 1.6, maxWidth: '600px' }}>
            Latest updates, expert perspectives, and deep dives into precast infrastructure and manufacturing.
          </p>
        </div>

        {loading ? (
          <div style={{ display: 'grid', gap: '4rem 3rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ height: '300px', backgroundColor: '#F0F6FC', borderRadius: '0', animation: 'pulse 2s infinite' }} />
                <div style={{ height: '1.5rem', backgroundColor: '#F0F6FC', borderRadius: '0', width: '80%', animation: 'pulse 2s infinite' }} />
                <div style={{ height: '1rem', backgroundColor: '#F0F6FC', borderRadius: '0', width: '40%', animation: 'pulse 2s infinite' }} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '5rem 3rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }} className="blog-card">
                
                {/* Ultra Minimalist Image Container */}
                <div style={{ width: '100%', height: '300px', backgroundColor: '#F0F6FC', overflow: 'hidden', marginBottom: '2rem', position: 'relative' }}>
                  {blog.image_url ? (
                    <img src={blog.image_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} className="card-img" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 400, letterSpacing: '0.1em', opacity: 0.3 }}>
                      MOB SALES
                    </div>
                  )}
                </div>

                {/* Clean Content */}
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  {/* Meta (Category + Date) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <span style={{ color: 'var(--color-primary-dark)' }}>
                      {blog.categories?.name || 'Article'}
                    </span>
                    <span style={{ color: '#F0F6FC' }}>/</span>
                    <span style={{ color: '#F0F6FC' }}>
                      {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Elegant Title */}
                  <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', fontWeight: 400, color: '#0004AD', margin: '0 0 1.5rem 0', lineHeight: 1.5, letterSpacing: '0', transition: 'color 0.3s ease' }} className="card-title">
                    {blog.title}
                  </h2>

                  {/* Read More Link (Push to bottom) */}
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0004AD', fontWeight: 400, fontSize: '0.875rem', letterSpacing: '0.02em' }} className="read-more">
                    Read article <ArrowRight size={14} strokeWidth={1.5} className="arrow-icon" />
                  </div>

                </div>
              </Link>
            ))}

            {blogs.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '8rem 0', color: '#F0F6FC', fontSize: '1.25rem', fontWeight: 300 }}>
                No articles published yet.
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />

      <style jsx global>{`
        .blog-card .card-img {
          transform: scale(1);
        }
        .blog-card:hover .card-img {
          transform: scale(1.05);
        }
        .blog-card:hover .card-title {
          color: var(--color-primary-dark) !important;
        }
        .blog-card .arrow-icon {
          transition: transform 0.3s ease;
        }
        .blog-card:hover .arrow-icon {
          transform: translateX(4px);
          color: var(--color-primary-dark);
        }
        .blog-card:hover .read-more {
          color: var(--color-primary-dark);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </main>
  );
}
