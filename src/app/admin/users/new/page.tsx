"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddUserPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Viewer");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('users').insert([{ name, email, password, role }]);
    setSaving(false);
    
    if (!error) {
      router.push('/admin/users');
    } else {
      alert("Error adding user: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Link href="/admin/users" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#1E3BA1', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem', marginBottom: '2rem' }}>
        <ArrowLeft size={14} /> Back to Team
      </Link>
      
      <div style={{ background: 'var(--color-bg)', padding: '2rem 2.5rem', borderRadius: '8px', border: '1px solid #F0F6FC', boxShadow: '0 4px 14px rgba(0, 4, 173, 0.02)' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid #F0F6FC', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0004AD', margin: 0, letterSpacing: '-0.04em' }}>Add New Member</h1>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Full Name</label>
            <input 
              type="text" value={name} onChange={(e) => setName(e.target.value)} required
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email Address</label>
            <input 
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Password</label>
            <input 
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Role</label>
            <select 
              value={role} onChange={(e) => setRole(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button 
              type="submit" disabled={saving}
              style={{ padding: '0.65rem 1.25rem', background: '#0004AD', color: 'var(--color-bg)', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer', opacity: saving ? 0.7 : 1 }}
            >
              {saving ? "Creating User..." : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
