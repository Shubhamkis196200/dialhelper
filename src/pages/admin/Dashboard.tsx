import { companies, categories, blogPosts, Company } from '@/data/companies';
import { Building2, FolderOpen, FileText, Phone } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Companies', value: companies.length, icon: Building2, color: 'bg-blue-100 text-blue-700' },
    { label: 'Categories', value: categories.length, icon: FolderOpen, color: 'bg-green-100 text-green-700' },
    { label: 'Blog Posts', value: blogPosts.length, icon: FileText, color: 'bg-purple-100 text-purple-700' },
    { label: 'Phone Numbers', value: companies.reduce((a: number, c: Company) => a + c.departments.length, 0), icon: Phone, color: 'bg-amber-100 text-amber-700' },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}><s.icon className="w-5 h-5" /></div>
              <div><div className="text-2xl font-bold text-gray-900">{s.value}</div><div className="text-sm text-gray-500">{s.label}</div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-900 mb-3">Recent Companies</h2>
        <div className="divide-y divide-gray-100">
          {companies.slice(0, 10).map((c: Company) => (
            <div key={c.slug} className="flex items-center justify-between py-3">
              <div><span className="font-medium text-gray-900">{c.name}</span><span className="text-sm text-gray-500 ml-2 capitalize">{c.category}</span></div>
              <span className="text-sm text-primary font-mono">{c.mainPhone}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
