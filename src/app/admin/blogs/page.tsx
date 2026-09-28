"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (data) setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter(b => b.id !== id));
      await supabase.from('blogs').delete().eq('id', id);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em', margin: '0 0 0.5rem' }}>Blogs</h1>
          <p style={{ color: '#1E3BA1', margin: 0, fontSize: '0.875rem' }}>Create and manage your articles.</p>
        </div>
        <Link href="/admin/blogs/new" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#0004AD', color: 'var(--color-bg)', padding: '0.5rem 0.875rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
          Create Blog <Plus size={16} />
        </Link>
      </div>

      <div style={{ background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid #F0F6FC', boxShadow: '0 2px 4px rgba(0, 4, 173, 0.02)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 140px', padding: '1rem 1.5rem', borderBottom: '1px solid #F0F6FC', fontSize: '0.875rem', fontWeight: 500, color: '#1E3BA1' }}>
          <div>Title</div>
          <div>Published</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>Loading blogs...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {blogs.map((blog) => (
              <div key={blog.id} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 140px', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #F0F6FC' }}>
                <div style={{ fontWeight: 500, color: '#0004AD', fontSize: '0.875rem' }}>{blog.title}</div>
                <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{new Date(blog.created_at).toLocaleDateString()}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <Link href={`/admin/blogs/${blog.id}`} style={{ padding: '0.35rem 0.75rem', color: '#0004AD', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, textDecoration: 'none' }}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(blog.id)} style={{ padding: '0.35rem 0.75rem', color: '#1E3BA1', background: 'transparent', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer' }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>No blogs found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
