import { categories, Category } from '@/data/companies';

export default function CategoriesAdmin() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark">+ Add Category</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c: Category) => (
          <div key={c.slug} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">{c.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{c.description}</p>
            <span className="text-xs text-gray-400 mt-2 block">/{c.slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
