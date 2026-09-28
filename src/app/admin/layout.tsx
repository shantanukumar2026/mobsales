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
    { name: "Overview", path: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Posts", path: "/admin/posts", icon: <FileText size={18} /> },
    { name: "Drafts", path: "/admin/drafts", icon: <PenTool size={18} /> },
    { name: "Categories", path: "/admin/categories", icon: <FolderTree size={18} /> },
    { name: "Media", path: "/admin/media", icon: <ImageIcon size={18} /> },
    { name: "Comments", path: "/admin/comments", icon: <MessageSquare size={18} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={18} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F0F6FC', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      
      {/* Left Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-bg)', borderRight: '1px solid #F0F6FC', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em', color: '#0004AD', borderBottom: '1px solid #F0F6FC' }}>
          <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }}>
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#0004AD" />
          </svg>
          MobSales CMS
        </div>
        
        <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.65rem 1rem', 
                  borderRadius: '6px', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
                  backgroundColor: isActive ? '#F0F6FC' : 'transparent',
                  color: isActive ? '#0004AD' : '#1E3BA1',
                  transition: 'all 0.2s'
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid #F0F6FC' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0004AD, #1E3BA1)', color: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                {(user?.name?.[0] || user?.email?.[0] || 'A').toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0004AD', lineHeight: 1.2 }}>{user?.name || 'Admin'}</span>
                <span style={{ fontSize: '0.75rem', color: '#1E3BA1' }}>{user?.role || 'Administrator'}</span>
              </div>
            </div>
            <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', color: '#1E3BA1', cursor: 'pointer' }} title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <header style={{ height: '64px', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid #F0F6FC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1E3BA1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Breadcrumb */}
            Admin / <span style={{ color: '#0004AD' }}>{pathname.split('/').pop() || 'Overview'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/admin/posts/new" style={{ background: '#0004AD', color: 'var(--color-bg)', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
              + New Post
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '3rem 2rem', maxWidth: '1200px', width: '100%', boxSizing: 'border-box' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
