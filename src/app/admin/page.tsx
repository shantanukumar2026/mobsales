"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { FileText, Edit3, Eye, MessageSquare, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ published: 0, drafts: 0, views: 0, comments: 0 });
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const sessionStr = localStorage.getItem("admin_session");
    if (sessionStr) setUser(JSON.parse(sessionStr));

    async function fetchData() {
      // Fetch stats
      const [publishedRes, draftsRes, commentsRes, postsRes] = await Promise.all([
        supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('status', 'Published'),
        supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('status', 'Draft'),
        supabase.from('comments').select('*', { count: 'exact', head: true }),
        supabase.from('blogs').select('*').order('created_at', { ascending: false }).limit(5)
      ]);

      // Calculate total views (aggregate sum is complex in supabase client, doing basic map if small, or defaulting for demo)
      const { data: allPosts } = await supabase.from('blogs').select('views');
      const totalViews = allPosts?.reduce((acc, curr) => acc + (curr.views || 0), 0) || 0;

      setStats({ 
        published: publishedRes.count || 0, 
        drafts: draftsRes.count || 0, 
        views: totalViews,
        comments: commentsRes.count || 0
      });

      if (postsRes.data) setRecentPosts(postsRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em', margin: '0 0 0.25rem' }}>
            Good evening, {user?.name?.split(' ')[0] || 'Admin'}
          </h1>
          <p style={{ color: '#1E3BA1', margin: 0, fontSize: '0.875rem' }}>Here is what's happening with your platform today.</p>
        </div>
      </div>
      
      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ background: 'var(--color-bg)', borderRadius: '8px', padding: '1.5rem', border: '1px solid #F0F6FC', boxShadow: '0 1px 2px rgba(0, 4, 173, 0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.875rem', color: '#1E3BA1', fontWeight: 500 }}>Published Posts</h3>
            <FileText size={16} color="#0004AD" />
          </div>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em' }}>{stats.published}</p>
        </div>
        <div style={{ background: 'var(--color-bg)', borderRadius: '8px', padding: '1.5rem', border: '1px solid #F0F6FC', boxShadow: '0 1px 2px rgba(0, 4, 173, 0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.875rem', color: '#1E3BA1', fontWeight: 500 }}>Drafts</h3>
            <Edit3 size={16} color="#0004AD" />
          </div>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em' }}>{stats.drafts}</p>
        </div>
        <div style={{ background: 'var(--color-bg)', borderRadius: '8px', padding: '1.5rem', border: '1px solid #F0F6FC', boxShadow: '0 1px 2px rgba(0, 4, 173, 0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.875rem', color: '#1E3BA1', fontWeight: 500 }}>Total Views</h3>
            <Eye size={16} color="#0004AD" />
          </div>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em' }}>{stats.views.toLocaleString()}</p>
        </div>
        <div style={{ background: 'var(--color-bg)', borderRadius: '8px', padding: '1.5rem', border: '1px solid #F0F6FC', boxShadow: '0 1px 2px rgba(0, 4, 173, 0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.875rem', color: '#1E3BA1', fontWeight: 500 }}>Comments</h3>
            <MessageSquare size={16} color="#0004AD" />
          </div>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em' }}>{stats.comments}</p>
        </div>
      </div>

      {/* Recent Posts Table */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.02em', margin: 0 }}>Recent Posts</h2>
        <Link href="/admin/posts" style={{ fontSize: '0.875rem', color: '#1E3BA1', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          View all <ArrowRight size={14} />
        </Link>
      </div>
      
      <div style={{ background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid #F0F6FC', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr 80px', padding: '0.75rem 1.5rem', borderBottom: '1px solid #F0F6FC', fontSize: '0.75rem', fontWeight: 500, color: '#1E3BA1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <div>Post Title</div>
          <div>Status</div>
          <div>Updated</div>
          <div>Views</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>Loading recent activity...</div>
        ) : recentPosts.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>No posts found. Create one!</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recentPosts.map((post) => (
              <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr 80px', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #F0F6FC' }}>
                <div style={{ fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '1rem' }}>
                  {post.title}
                </div>
                <div>
                  <span style={{ 
                    display: 'inline-flex', padding: '0.2rem 0.6rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500,
                    background: post.status === 'Published' ? '#F0F6FC' : '#F0F6FC',
                    color: post.status === 'Published' ? '#1E3BA1' : '#1E3BA1'
                  }}>
                    {post.status || 'Draft'}
                  </span>
                </div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{new Date(post.created_at).toLocaleDateString()}</div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{post.views || 0}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href={`/admin/posts/${post.id}`} style={{ padding: '0.25rem 0.75rem', color: '#0004AD', background: '#F0F6FC', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, textDecoration: 'none' }}>
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
