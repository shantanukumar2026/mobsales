"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus } from "lucide-react";

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, color: '#0004AD', letterSpacing: '-0.04em', margin: '0 0 0.5rem' }}>Team Users</h1>
          <p style={{ color: '#1E3BA1', margin: 0, fontSize: '0.875rem' }}>Manage who has access to this workspace.</p>
        </div>
        <Link href="/admin/users/new" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#0004AD', color: 'var(--color-bg)', padding: '0.5rem 0.875rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s' }}>
          Add User <Plus size={16} />
        </Link>
      </div>

      <div style={{ background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid #F0F6FC', boxShadow: '0 2px 4px rgba(0, 4, 173, 0.02)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 100px', padding: '1rem 1.5rem', borderBottom: '1px solid #F0F6FC', fontSize: '0.875rem', fontWeight: 500, color: '#1E3BA1' }}>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {loading ? (
          <div style={{ padding: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#1E3BA1' }}>Loading users...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {users.map((user) => {
              const isSelf = currentUser && currentUser.id === user.id;
              return (
                <div key={user.id} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 100px', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #F0F6FC' }}>
                  <div style={{ fontWeight: 500, color: '#0004AD', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F0F6FC', border: '1px solid #F0F6FC', color: '#1E3BA1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                      {user.name[0].toUpperCase()}
                    </div>
                    {user.name} {isSelf && <span style={{ fontSize: '0.7rem', background: '#0004AD', color: 'var(--color-bg)', padding: '0.1rem 0.4rem', borderRadius: '99px' }}>You</span>}
                  </div>
                  <div style={{ color: '#1E3BA1', fontSize: '0.875rem' }}>{user.email}</div>
                  <div>
                    <span style={{ display: 'inline-flex', padding: '0.2rem 0.6rem', background: '#F0F6FC', border: '1px solid #F0F6FC', color: '#1E3BA1', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500 }}>
                      {user.role}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {!isSelf ? (
                      <button onClick={() => handleDelete(user.id)} style={{ padding: '0.35rem 0.75rem', color: '#1E3BA1', background: 'transparent', border: '1px solid #F0F6FC', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer' }}>
                        Remove
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: '#1E3BA1' }}>Active</span>
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
