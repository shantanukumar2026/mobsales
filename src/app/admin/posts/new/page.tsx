"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft, Save, Globe } from "lucide-react";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <div style={{ padding: '2rem', textAlign: 'center', color: '#1E3BA1' }}>Loading Editor...</div> });

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  
  const [categories, setCategories] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from('categories').select('*');
      if (data) setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (!slug) {
      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = async () => {
          const canvas = document.createElement('canvas');
          let width = img.width; let height = img.height;
          if (width > 1920) { height = (height * 1920) / width; width = 1920; }
          canvas.width = width; canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(async (blob) => {
            if (!blob) return;
            const webpFile = new File([blob], `${Date.now()}.jpg`, { type: 'image/jpeg' });
            const fileName = `public/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
            const { data, error } = await supabase.storage.from('mob-sales').upload(fileName, webpFile, { cacheControl: '3600', upsert: false });
            if (error) { alert("Upload failed: " + error.message); setUploadingImage(false); return; }
            const { data: publicUrlData } = supabase.storage.from('mob-sales').getPublicUrl(fileName);
            setImageUrl(publicUrlData.publicUrl);
            setUploadingImage(false);
          }, 'image/jpeg', 0.85);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    } catch (error: any) { alert("Error: " + error.message); setUploadingImage(false); }
  };

  const handleSave = async (status: 'Draft' | 'Published') => {
    if (!title || !slug) return alert("Title and Slug are required.");
    setSaving(true);
    const postData = {
      title,
      slug,
      content,
      image_url: imageUrl,
      category_id: categoryId || null,
      seo_title: seoTitle,
      seo_description: seoDesc,
      status
    };
    const { error } = await supabase.from('blogs').insert([postData]);
    setSaving(false);
    if (!error) router.push('/admin/posts');
    else alert("ERROR: " + error.message);
  };

  const quillModules = { toolbar: [ [{ 'header': [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'blockquote'], [{'list': 'ordered'}, {'list': 'bullet'}], ['link', 'clean'] ] };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Editor Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #F0F6FC' }}>
        <Link href="/admin/posts" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#1E3BA1', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem' }}>
          <ArrowLeft size={14} /> Back to Posts
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#1E3BA1' }}>{saving ? 'Saving...' : 'Unsaved changes'}</span>
          <button onClick={() => handleSave('Draft')} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.5rem 1rem', background: 'var(--color-bg)', color: '#0004AD', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>
            <Save size={14} /> Save Draft
          </button>
          <button onClick={() => handleSave('Published')} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.5rem 1rem', background: '#0004AD', color: 'var(--color-bg)', border: 'none', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>
            <Globe size={14} /> Publish
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Main Editor */}
        <div>
          <input 
            type="text" value={title} onChange={handleTitleChange} placeholder="Post Title" required
            style={{ width: '100%', padding: '0', background: 'transparent', border: 'none', fontSize: '2.5rem', fontWeight: 700, color: '#0004AD', letterSpacing: '-0.04em', outline: 'none', marginBottom: '1rem' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <span style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>mysite.com/blog/</span>
            <input 
              type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="post-slug" required
              style={{ padding: '0.25rem 0', background: 'transparent', border: 'none', borderBottom: '1px dashed #F0F6FC', fontSize: '0.875rem', color: '#0004AD', outline: 'none', width: '200px' }}
            />
          </div>
          
          <div style={{ minHeight: '400px' }}>
            <ReactQuill theme="snow" value={content} onChange={setContent} modules={quillModules} placeholder="Start writing your post..." style={{ minHeight: '400px', border: 'none' }} />
          </div>
          <style jsx global>{` .quill { display: flex; flex-direction: column; } .ql-toolbar { border: none !important; border-top: 1px solid #F0F6FC !important; border-bottom: 1px solid #F0F6FC !important; padding: 12px 0 !important; } .ql-container { border: none !important; font-family: Inter, system-ui, sans-serif !important; font-size: 1.125rem !important; } .ql-editor { padding: 2rem 0 !important; line-height: 1.7; color: #0004AD; } .ql-editor.ql-blank::before { left: 0; color: #F0F6FC; } `}</style>
        </div>

        {/* Sidebar / Meta Settings */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #F0F6FC' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: '#0004AD' }}>Post Settings</h3>
            <div>
              <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Category</label>
              <select 
                value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none' }}
              >
                <option value="">Select a category...</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cover Image</label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', background: '#F0F6FC', border: '1px solid #F0F6FC', color: '#0004AD', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}>
                  {uploadingImage ? "Uploading..." : "Upload"}
                  <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} style={{ display: 'none' }} />
                </label>
                <input 
                  type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Or paste URL"
                  style={{ flex: 1, padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none' }}
                />
              </div>
              {imageUrl && <img src={imageUrl} alt="Preview" style={{ marginTop: '1rem', width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #F0F6FC' }} />}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: '#0004AD' }}>SEO & Meta</h3>
            <div>
              <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Meta Title</label>
              <input 
                type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder="Leave blank to use post title"
                style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Meta Description</label>
              <textarea 
                value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} placeholder="A short description for search engines" rows={4}
                style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
