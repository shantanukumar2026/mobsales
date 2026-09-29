"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Link as LinkIcon, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Robust SVG Icons for Socials to avoid lucide-react versioning issues
const TwitterIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;

export default function BlogPostPage() {
  const params = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;
    
    async function fetchData() {
      try {
        const { data: blogData } = await supabase.from('blogs').select('*, categories(name)').eq('id', params.id).single();
        if (blogData) {
          setBlog(blogData);
          const { data: recentData } = await supabase.from('blogs')
            .select('id, title, created_at, image_url')
            .neq('id', params.id)
            .eq('status', 'Published')
            .order('created_at', { ascending: false })
            .limit(3);
          if (recentData) setRecentPosts(recentData);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params?.id]);

  if (!loading && !blog) return notFound();

  // Utility to estimate reading time
  const readingTime = blog?.content ? Math.max(1, Math.ceil(blog.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length / 200)) : 5;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="container">
        
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link href="/" className="back-link">Home</Link>
          <span className="dot-divider" style={{ margin: '0 0.5rem' }}>/</span>
          <Link href="/blog" className="back-link">Insights</Link>
          <span className="dot-divider" style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Article</span>
        </nav>

        {loading ? (
          /* Senior Dev Loading Skeleton */
          <div className="skeleton-wrapper">
            <div className="skeleton title-skeleton"></div>
            <div className="skeleton title-skeleton short"></div>
            <div className="skeleton meta-skeleton"></div>
            <div className="skeleton image-skeleton"></div>
            <div className="skeleton text-skeleton"></div>
            <div className="skeleton text-skeleton"></div>
            <div className="skeleton text-skeleton short"></div>
          </div>
        ) : (
          <article className="article-layout">
            
            {/* Header Area */}
            <header className="article-header">
              <div className="meta-top">
                <span className="category-badge">{blog.categories?.name || 'Industry Insights'}</span>
                <span className="dot-divider">&bull;</span>
                <time className="publish-date">
                  <Calendar size={14} className="icon-inline" />
                  {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>

              <h1 className="article-title">{blog.title}</h1>

              <div className="author-row">
                <div className="author-info">
                  <div className="avatar">A</div>
                  <div className="author-details">
                    <span className="author-name">Admin Team</span>
                    <span className="author-role">MobSales Editor</span>
                  </div>
                </div>
                <div className="reading-time">
                  <Clock size={14} className="icon-inline" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {blog.image_url && (
              <figure className="hero-figure">
                <img src={blog.image_url} alt={blog.title} className="hero-image" />
              </figure>
            )}

            {/* Grid Layout for Content and Sidebar */}
            <div className="content-grid">
              
              {/* Rich Text Content */}
              <div className="article-body prose" dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }} />

              {/* Sidebar */}
              <aside className="article-sidebar">
                
                {/* Social Sharing */}
                <div className="sidebar-widget">
                  <h3 className="widget-title">Share this article</h3>
                  <div className="social-links">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-btn twitter" aria-label="Share on Twitter">
                      <TwitterIcon />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="Share on LinkedIn">
                      <LinkedinIcon />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-btn facebook" aria-label="Share on Facebook">
                      <FacebookIcon />
                    </a>
                    <button onClick={copyLink} className="social-btn copy-link" aria-label="Copy link">
                      <LinkIcon size={16} />
                    </button>
                  </div>
                </div>

                {/* Latest Posts */}
                {recentPosts.length > 0 && (
                  <div className="sidebar-widget">
                    <h3 className="widget-title">Latest Articles</h3>
                    <div className="recent-posts-list">
                      {recentPosts.map(post => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="recent-post-card">
                          {post.image_url && (
                            <div className="recent-post-img-wrapper">
                              <img src={post.image_url} alt="" className="recent-post-img" />
                            </div>
                          )}
                          <div className="recent-post-content">
                            <h4 className="recent-post-title">{post.title}</h4>
                            <time className="recent-post-date">{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags / Categories */}
                <div className="sidebar-widget">
                  <h3 className="widget-title">Explore Topics</h3>
                  <div className="tags-container">
                    {['Enterprise', 'B2B Sales', 'Mobile CRM', 'Productivity', 'Growth'].map(tag => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

              </aside>
            </div>
          </article>
        )}
      </main>
      <Footer />

      {/* Styled JSX for scoped, robust, professional styling */}
      <style jsx>{`
        /* Container & Base Layout */
        .page-wrapper {
          background-color: #F0F6FC;
          min-height: 100vh;
          font-family: var(--font-body);
          color: var(--color-primary-dark);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 8rem 1.5rem 6rem;
        }

        /* Navigation */
        .breadcrumb {
          margin-bottom: 3rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-accent);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .back-link:hover {
          color: var(--color-primary-dark);
        }

        /* Header */
        .article-header {
          max-width: 1000px;
          margin-bottom: 4rem;
        }
        .meta-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .category-badge {
          color: var(--color-primary-dark);
          background: #F0F6FC;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-weight: 600;
        }
        .dot-divider {
          color: #F0F6FC;
        }
        .publish-date {
          color: var(--color-accent);
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        .article-title {
          font-family: var(--font-sans);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-primary-dark);
          margin: 0 0 3rem 0;
        }
        .author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F0F6FC;
          border-bottom: 1px solid #F0F6FC;
          padding: 1.25rem 0;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-dark), #1E3BA1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.125rem;
        }
        .author-details {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-weight: 600;
          color: var(--color-primary-dark);
          font-size: 0.9375rem;
        }
        .author-role {
          color: var(--color-accent);
          font-size: 0.8125rem;
        }
        .reading-time {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--color-accent);
          font-size: 0.875rem;
          font-weight: 500;
        }
        .icon-inline {
          opacity: 0.7;
        }

        /* Hero Image */
        .hero-figure {
          margin: 0 0 5rem 0;
          overflow: hidden;
          background: #F0F6FC;
        }
        .hero-image {
          width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: cover;
          display: block;
        }

        /* Layout Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        @media (min-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 340px;
          }
        }

        /* Sidebar Widgets */
        .article-sidebar {
          position: sticky;
          top: 2rem;
        }
        .sidebar-widget {
          background: white;
          border: 1px solid #F0F6FC;
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 4, 173, 0.02);
        }
        .widget-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          margin: 0 0 1.25rem 0;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.2s ease, opacity 0.2s ease;
          border: none;
          cursor: pointer;
        }
        .social-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .twitter { background-color: #0085F4; }
        .linkedin { background-color: #004AAD; }
        .facebook { background-color: #0085F4; }
        .copy-link { background-color: #F0F6FC; color: var(--color-accent); }
        .copy-link:hover { background-color: #F0F6FC; }

        /* Recent Posts */
        .recent-posts-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .recent-post-card {
          display: flex;
          gap: 1rem;
          text-decoration: none;
          group: true;
        }
        .recent-post-img-wrapper {
          width: 80px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          background: #F0F6FC;
          flex-shrink: 0;
        }
        .recent-post-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .recent-post-card:hover .recent-post-img {
          transform: scale(1.05);
        }
        .recent-post-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .recent-post-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-primary-dark);
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
          transition: color 0.2s ease;
        }
        .recent-post-card:hover .recent-post-title {
          color: var(--color-primary-dark);
        }
        .recent-post-date {
          font-size: 0.75rem;
          color: var(--color-accent);
        }

        /* Tags */
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag-pill {
          padding: 0.375rem 0.875rem;
          background: #F0F6FC;
          color: var(--color-accent);
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .tag-pill:hover {
          background: var(--color-primary-dark);
          color: white;
        }

        /* Skeletons */
        .skeleton-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
        }
        .skeleton {
          background: #F0F6FC;
          border-radius: 8px;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .title-skeleton { height: 3rem; width: 100%; }
        .title-skeleton.short { width: 70%; }
        .meta-skeleton { height: 2rem; width: 40%; margin-bottom: 2rem; }
        .image-skeleton { height: 400px; width: 100%; border-radius: 20px; margin-bottom: 2rem; }
        .text-skeleton { height: 1rem; width: 100%; }
        .text-skeleton.short { width: 80%; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>

      {/* Global CSS for the Rich Text content specifically to ensure typography perfection */}
      <style jsx global>{`
        .prose {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-primary-dark); /* Gray 700 */
        }
        .prose p {
          margin-top: 0;
          margin-bottom: 1.75rem;
        }
        .prose h1, .prose h2, .prose h3, .prose h4 {
          font-family: var(--font-sans);
          color: var(--color-primary-dark); /* Gray 900 */
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }
        .prose h1 { font-size: 2.25rem; }
        .prose h2 { font-size: 1.875rem; border-bottom: 1px solid #F0F6FC; padding-bottom: 0.5rem; }
        .prose h3 { font-size: 1.5rem; }
        .prose a {
          color: var(--color-primary-dark);
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }
        .prose a:hover {
          border-bottom-color: var(--color-primary-dark);
        }
        .prose blockquote {
          margin: 2.5rem 0;
          padding: 1.5rem 2rem;
          background: #F8FAFC; /* Slate 50 */
          border-left: 4px solid var(--color-primary-dark);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          font-size: 1.25rem;
          color: var(--color-accent); /* Gray 600 */
        }
        .prose ul, .prose ol {
          margin-top: 0;
          margin-bottom: 1.75rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 2.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 4, 173, 0.1);
        }
        .prose strong {
          color: var(--color-primary-dark);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
