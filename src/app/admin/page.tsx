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

      // Calculate total views
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em', margin: '0 0 0.25rem' }}>
            Overview
          </h1>
          <p style={{ color: '#71717A', margin: 0, fontSize: '0.8125rem' }}>Here is what's happening with your platform today.</p>
        </div>
      </div>
      
      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '6px', padding: '1.25rem', border: '1px solid #E4E4E7', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.8125rem', color: '#71717A', fontWeight: 500 }}>Published Posts</h3>
            <FileText size={14} color="#09090B" />
          </div>
          <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em' }}>{stats.published}</p>
        </div>
        <div style={{ background: '#FFFFFF', borderRadius: '6px', padding: '1.25rem', border: '1px solid #E4E4E7', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.8125rem', color: '#71717A', fontWeight: 500 }}>Drafts</h3>
            <Edit3 size={14} color="#09090B" />
          </div>
          <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em' }}>{stats.drafts}</p>
        </div>
        <div style={{ background: '#FFFFFF', borderRadius: '6px', padding: '1.25rem', border: '1px solid #E4E4E7', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.8125rem', color: '#71717A', fontWeight: 500 }}>Total Views</h3>
            <Eye size={14} color="#09090B" />
          </div>
          <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em' }}>{stats.views.toLocaleString()}</p>
        </div>
      </div>

      {/* Recent Posts Table */}
      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em', margin: 0 }}>Recent Posts</h2>
        <Link href="/admin/posts" style={{ fontSize: '0.8125rem', color: '#71717A', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#09090B'} onMouseOut={(e) => e.currentTarget.style.color = '#71717A'}>
          View all <ArrowRight size={14} />
        </Link>
      </div>
      
      <div style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E4E4E7', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr 80px', padding: '0.75rem 1rem', borderBottom: '1px solid #E4E4E7', fontSize: '0.75rem', fontWeight: 600, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F9FAFB' }}>
          <div>Post Title</div>
          <div>Status</div>
          <div>Updated</div>
          <div>Views</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.8125rem', color: '#71717A' }}>Loading recent activity...</div>
        ) : recentPosts.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.8125rem', color: '#71717A' }}>No posts found. Create one!</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recentPosts.map((post) => (
              <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr 80px', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid #F4F4F5' }}>
                <div style={{ fontWeight: 500, color: '#09090B', fontSize: '0.8125rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '1rem' }}>
                  {post.title}
                </div>
                <div>
                  <span style={{ 
                    display: 'inline-flex', padding: '0.125rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500,
                    background: post.status === 'Published' ? '#ECFDF5' : '#F4F4F5',
                    color: post.status === 'Published' ? '#10B981' : '#71717A'
                  }}>
                    {post.status || 'Draft'}
                  </span>
                </div>
                <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{new Date(post.created_at).toLocaleDateString()}</div>
                <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{post.views || 0}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href={`/admin/posts/${post.id}`} style={{ padding: '0.25rem 0.75rem', color: '#09090B', background: '#F4F4F5', border: '1px solid #E4E4E7', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E4E4E7'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F4F4F5'}>
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
