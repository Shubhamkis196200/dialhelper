import { blogPosts, BlogPost } from '@/data/companies';
import { Pencil, Trash2 } from 'lucide-react';

export default function PostsAdmin() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark">+ New Post</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
        {blogPosts.map((p: BlogPost) => (
          <div key={p.slug} className="flex items-center justify-between px-5 py-4">
            <div><div className="font-medium text-gray-900">{p.title}</div><div className="text-sm text-gray-500">{p.date} · {p.category}</div></div>
            <div className="space-x-2">
              <button className="text-gray-400 hover:text-primary"><Pencil className="w-4 h-4 inline" /></button>
              <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4 inline" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
