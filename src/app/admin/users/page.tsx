"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2 } from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const session = localStorage.getItem('admin_session');
    if (session) setCurrentUser(JSON.parse(session));

    async function fetchUsers() {
      const { data } = await supabase.from('users').select('*').order('created_at', { ascending: false });
      if (data) setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
      await supabase.from('users').delete().eq('id', id);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#09090B', letterSpacing: '-0.02em', margin: '0 0 0.25rem' }}>Users</h1>
          <p style={{ color: '#71717A', margin: 0, fontSize: '0.8125rem' }}>Manage team members and access roles.</p>
        </div>
        <Link href="/admin/users/new" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: '#09090B', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s' }}>
          <Plus size={14} /> Add User
        </Link>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E4E4E7', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 100px', padding: '0.75rem 1rem', borderBottom: '1px solid #E4E4E7', fontSize: '0.75rem', fontWeight: 600, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F9FAFB' }}>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#71717A' }}>Loading users...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {users.map((user) => {
              const isSelf = currentUser && currentUser.id === user.id;
              return (
                <div key={user.id} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 100px', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid #F4F4F5' }}>
                  <div style={{ fontWeight: 500, color: '#09090B', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#F4F4F5', color: '#71717A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                      {user.name[0].toUpperCase()}
                    </div>
                    {user.name} {isSelf && <span style={{ fontSize: '0.65rem', background: '#09090B', color: '#FFFFFF', padding: '0.1rem 0.35rem', borderRadius: '4px', letterSpacing: '0.02em' }}>YOU</span>}
                  </div>
                  <div style={{ color: '#71717A', fontSize: '0.8125rem' }}>{user.email}</div>
                  <div>
                    <span style={{ display: 'inline-flex', padding: '0.125rem 0.5rem', background: '#F4F4F5', color: '#71717A', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>
                      {user.role}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {!isSelf ? (
                      <button onClick={() => handleDelete(user.id)} style={{ padding: '0.25rem', color: '#71717A', background: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#EF4444'} onMouseOut={(e) => e.currentTarget.style.color = '#71717A'}>
                        <Trash2 size={14} />
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 500 }}>Active</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
