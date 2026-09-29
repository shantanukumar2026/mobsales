"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Search, Filter, Edit3, Trash2 } from "lucide-react";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data } = await supabase.from('blogs').select('*, categories(name)').order('created_at', { ascending: false });
    if (data) setPosts(data);
    setLoading(false);
  }

  const toggleSelectAll = () => {
    if (selectedPosts.size === posts.length) {
      setSelectedPosts(new Set());
    } else {
      setSelectedPosts(new Set(posts.map(p => p.id)));
    }
  };

  const toggleSelect = (id: number) => {
    const newSelected = new Set(selectedPosts);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedPosts(newSelected);
  };

  const handleBulkDelete = async () => {
    if (selectedPosts.size === 0) return;
    if (confirm(`Delete ${selectedPosts.size} posts permanently?`)) {
      const ids = Array.from(selectedPosts);
      await supabase.from('blogs').delete().in('id', ids);
      setSelectedPosts(new Set());
      fetchPosts();
    }
  };

  const handleDeleteSingle = async (id: number) => {
    if (confirm('Delete this post permanently?')) {
      await supabase.from('blogs').delete().eq('id', id);
      fetchPosts();
    }
  };

  const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em', margin: 0 }}>Posts</h1>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={14} color="#71717A" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search posts..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2.25rem', backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '4px', fontSize: '0.8125rem', outline: 'none', color: '#09090B' }}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {selectedPosts.size > 0 && (
            <>
              <span style={{ fontSize: '0.8125rem', color: '#71717A', fontWeight: 500 }}>{selectedPosts.size} selected</span>
              <button onClick={handleBulkDelete} style={{ padding: '0.5rem 1rem', background: '#EF4444', color: '#FFFFFF', border: '1px solid #EF4444', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 500, cursor: 'pointer' }}>
                Delete Selected
              </button>
            </>
          )}
          <button style={{ padding: '0.5rem 1rem', background: '#FFFFFF', color: '#09090B', border: '1px solid #E4E4E7', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.375rem', cursor: 'pointer' }}>
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E4E4E7', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '40px 3fr 1fr 1.5fr 1fr 1fr 80px', padding: '0.75rem 1rem', borderBottom: '1px solid #E4E4E7', fontSize: '0.75rem', fontWeight: 600, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F9FAFB' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={selectedPosts.size === posts.length && posts.length > 0} onChange={toggleSelectAll} style={{ cursor: 'pointer' }} />
          </div>
          <div>Title</div>
          <div>Status</div>
          <div>Category</div>
          <div>Updated</div>
          <div>Views</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#71717A' }}>Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#71717A' }}>No posts found.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredPosts.map((post) => (
              <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '40px 3fr 1fr 1.5fr 1fr 1fr 80px', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid #F4F4F5' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" checked={selectedPosts.has(post.id)} onChange={() => toggleSelect(post.id)} style={{ cursor: 'pointer' }} />
                </div>
                <div style={{ fontWeight: 500, color: '#09090B', fontSize: '0.8125rem', paddingRight: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
                <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{post.categories?.name || 'Uncategorized'}</div>
                <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{new Date(post.created_at).toLocaleDateString()}</div>
                <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{post.views || 0}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.25rem' }}>
                  <Link href={`/admin/posts/${post.id}`} style={{ padding: '0.25rem', color: '#71717A', background: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#09090B'} onMouseOut={(e) => e.currentTarget.style.color = '#71717A'}>
                    <Edit3 size={14} />
                  </Link>
                  <button onClick={() => handleDeleteSingle(post.id)} style={{ padding: '0.25rem', color: '#71717A', background: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#EF4444'} onMouseOut={(e) => e.currentTarget.style.color = '#71717A'}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
