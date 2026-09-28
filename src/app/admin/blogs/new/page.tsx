"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <div style={{ padding: '2rem', textAlign: 'center', color: '#1E3BA1' }}>Loading Editor...</div> });

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

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
          let width = img.width;
          let height = img.height;
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
            if (error) { alert("Upload failed! Error: " + error.message); setUploadingImage(false); return; }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('blogs').insert([{ title, content, image_url: imageUrl }]);
    setSaving(false);
    if (!error) router.push('/admin/blogs');
    else alert("ERROR: " + error.message);
  };

  const quillModules = { toolbar: [ [{ 'header': [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'blockquote'], [{'list': 'ordered'}, {'list': 'bullet'}], ['link', 'clean'] ] };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/admin/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#1E3BA1', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem', marginBottom: '2rem' }}>
        <ArrowLeft size={14} /> Back to Blogs
      </Link>
      
      <div style={{ background: 'var(--color-bg)', padding: '2rem 2.5rem', borderRadius: '8px', border: '1px solid #F0F6FC', boxShadow: '0 4px 14px rgba(0, 4, 173, 0.02)' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid #F0F6FC', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0004AD', margin: 0, letterSpacing: '-0.04em' }}>New Blog Article</h1>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Article Title</label>
            <input 
              type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cover Image</label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', background: '#F0F6FC', border: '1px solid #F0F6FC', color: '#0004AD', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}>
                {uploadingImage ? "Uploading..." : "Upload File"}
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} style={{ display: 'none' }} />
              </label>
              <input 
                type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Or paste URL"
                style={{ flex: 1, padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            {imageUrl && <img src={imageUrl} alt="Preview" style={{ marginTop: '1rem', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #F0F6FC' }} />}
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Content</label>
            <div style={{ border: '1px solid #F0F6FC', borderRadius: '6px', overflow: 'hidden' }}>
              <ReactQuill theme="snow" value={content} onChange={setContent} modules={quillModules} style={{ height: '350px', border: 'none' }} />
            </div>
            <style jsx global>{` .quill { display: flex; flex-direction: column; } .ql-toolbar { border: none !important; border-bottom: 1px solid #F0F6FC !important; background: #F0F6FC; } .ql-container { border: none !important; font-family: Inter, system-ui, -apple-system, sans-serif !important; } `}</style>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button 
              type="submit" disabled={saving}
              style={{ padding: '0.65rem 1.25rem', background: '#0004AD', color: 'var(--color-bg)', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}
            >
              {saving ? "Publishing..." : "Publish Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
