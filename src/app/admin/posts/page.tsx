"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Search, Filter, MoreHorizontal, Edit3 } from "lucide-react";

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

  const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em', margin: 0 }}>Posts</h1>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={16} color="#1E3BA1" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search posts..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none' }}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {selectedPosts.size > 0 && (
            <>
              <span style={{ fontSize: '0.875rem', color: '#1E3BA1', fontWeight: 500 }}>{selectedPosts.size} selected</span>
              <button onClick={handleBulkDelete} style={{ padding: '0.5rem 1rem', background: 'var(--color-bg)', color: '#1E3BA1', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>
                Delete
              </button>
            </>
          )}
          <button style={{ padding: '0.5rem 1rem', background: 'var(--color-bg)', color: '#0004AD', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid #F0F6FC', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '40px 3fr 1fr 1.5fr 1fr 1fr 80px', padding: '0.75rem 1rem', borderBottom: '1px solid #F0F6FC', fontSize: '0.75rem', fontWeight: 500, color: '#1E3BA1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>No posts found.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredPosts.map((post) => (
              <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '40px 3fr 1fr 1.5fr 1fr 1fr 80px', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #F0F6FC' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" checked={selectedPosts.has(post.id)} onChange={() => toggleSelect(post.id)} style={{ cursor: 'pointer' }} />
                </div>
                <div style={{ fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', paddingRight: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {post.title}
                </div>
                <div>
                  <span style={{ 
                    display: 'inline-flex', padding: '0.2rem 0.5rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 500,
                    background: post.status === 'Published' ? '#F0F6FC' : '#F0F6FC',
                    color: post.status === 'Published' ? '#1E3BA1' : '#1E3BA1'
                  }}>
                    {post.status || 'Draft'}
                  </span>
                </div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{post.categories?.name || 'Uncategorized'}</div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{new Date(post.created_at).toLocaleDateString()}</div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{post.views || 0}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <Link href={`/admin/posts/${post.id}`} style={{ padding: '0.25rem 0.5rem', color: '#1E3BA1', background: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    <Edit3 size={16} />
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
