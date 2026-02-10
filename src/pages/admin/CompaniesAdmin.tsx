import { companies, Company } from '@/data/companies';
import { Pencil, Trash2 } from 'lucide-react';

export default function CompaniesAdmin() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark">+ Add Company</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr><th className="text-left px-4 py-3 font-medium text-gray-500">Name</th><th className="text-left px-4 py-3 font-medium text-gray-500">Category</th><th className="text-left px-4 py-3 font-medium text-gray-500">Phone</th><th className="text-left px-4 py-3 font-medium text-gray-500">Wait</th><th className="text-right px-4 py-3 font-medium text-gray-500">Actions</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {companies.map((c: Company) => (
              <tr key={c.slug} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{c.name}</td>
                <td className="px-4 py-3 text-gray-500 capitalize">{c.category}</td>
                <td className="px-4 py-3 text-primary font-mono">{c.mainPhone}</td>
                <td className="px-4 py-3 text-gray-500">{c.waitTime}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-gray-400 hover:text-primary"><Pencil className="w-4 h-4 inline" /></button>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4 inline" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
