"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  PenTool, 
  FolderTree, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const sessionStr = localStorage.getItem("admin_session");
    if (sessionStr) {
      setUser(JSON.parse(sessionStr));
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login");
    }
    setLoading(false);

    const handleStorage = () => {
      const updatedSession = localStorage.getItem("admin_session");
      if (updatedSession) {
        setUser(JSON.parse(updatedSession));
      } else {
        setUser(null);
        if (pathname !== "/admin/login") {
          router.push("/admin/login");
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    router.push("/admin/login");
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#F0F6FC', fontFamily: 'Inter, system-ui, sans-serif' }}>Loading...</div>;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Overview", path: "/admin", icon: <LayoutDashboard size={16} /> },
    { name: "Posts", path: "/admin/posts", icon: <FileText size={16} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={16} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      
      {/* Left Sidebar (Black Enterprise UI) */}
      <aside style={{ width: '220px', backgroundColor: '#09090B', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', borderRight: '1px solid #27272A' }}>
        <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', color: '#FFFFFF', borderBottom: '1px solid #27272A' }}>
          <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }}>
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#FFFFFF" />
          </svg>
          MobSales Admin
        </div>
        
        <nav style={{ flex: 1, padding: '1rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', 
                  borderRadius: '4px', textDecoration: 'none', fontSize: '0.8125rem', fontWeight: 500,
                  backgroundColor: isActive ? '#27272A' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#A1A1AA',
                  transition: 'all 0.15s'
                }}
                onMouseOver={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = '#18181B'; e.currentTarget.style.color = '#FFFFFF'; } }}
                onMouseOut={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#A1A1AA'; } }}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1rem 0.5rem', borderTop: '1px solid #27272A' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: '#FFFFFF', color: '#09090B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                {(user?.name?.[0] || user?.email?.[0] || 'A').toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#E4E4E7', lineHeight: 1.2 }}>{user?.name || 'Admin'}</span>
              </div>
            </div>
            <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', color: '#A1A1AA', cursor: 'pointer' }} title="Logout" onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#A1A1AA'}>
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <header style={{ height: '48px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E4E4E7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#71717A', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Admin / <span style={{ color: '#09090B' }}>{pathname.split('/').pop() || 'Overview'}</span>
          </div>
          {pathname.includes('/posts') && (
            <Link href="/admin/posts/new" style={{ background: '#09090B', color: '#FFFFFF', padding: '0.375rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s' }}>
              Create Post
            </Link>
          )}
        </header>

        {/* Page Content */}
        <main style={{ padding: '2rem 1.5rem', maxWidth: '1200px', width: '100%', boxSizing: 'border-box' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
