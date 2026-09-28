"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error } = await supabase.from('users').select('*').eq('email', email).eq('password', password).single();

    setLoading(false);
    
    if (error || !data) {
      alert("Login Failed: Invalid credentials");
    } else {
      localStorage.setItem("admin_session", JSON.stringify(data));
      window.dispatchEvent(new Event("storage")); 
      router.push("/admin");
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#F0F6FC', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '380px', padding: '2.5rem 2rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '8px', boxShadow: '0 4px 14px 0 rgba(0, 4, 173, 0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px' }}>
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#0004AD" />
            </svg>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0004AD', margin: 0, letterSpacing: '-0.04em' }}>Log in to Admin</h1>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#0004AD', marginBottom: '0.5rem' }}>Email address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', transition: 'border 0.2s', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = '#0004AD'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-concrete)'}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#0004AD', marginBottom: '0.5rem' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--color-bg)', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.875rem', outline: 'none', transition: 'border 0.2s', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = '#0004AD'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-concrete)'}
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '0.75rem', background: '#0004AD', color: 'var(--color-bg)', border: 'none', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Authenticating..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
