import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, FolderOpen, FileText, Users, Settings } from 'lucide-react';

const nav = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Companies', path: '/admin/companies', icon: Building2 },
  { label: 'Categories', path: '/admin/categories', icon: FolderOpen },
  { label: 'Blog Posts', path: '/admin/posts', icon: FileText },
  { label: 'Users', path: '/admin/users', icon: Users },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex">
      <aside className="w-60 bg-gray-900 text-white shrink-0 hidden md:block">
        <div className="p-5 font-bold text-lg border-b border-gray-800">DialHelper Admin</div>
        <nav className="p-3 space-y-1">
          {nav.map(n => {
            const active = location.pathname === n.path || (n.path !== '/admin' && location.pathname.startsWith(n.path));
            return (
              <Link key={n.path} to={n.path} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-800'}`}>
                <n.icon className="w-4 h-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-6 overflow-auto"><Outlet /></main>
    </div>
  );
}
