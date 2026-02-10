import { useParams, Link } from 'react-router-dom';
import { categories, getCompaniesByCategory, Category, Company } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';
import SEO from '@/components/SEO';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = categories.find((c: Category) => c.slug === slug);
  const items = getCompaniesByCategory(slug || '');
  if (!cat) return <div className="max-w-3xl mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Category not found</h1><Link to="/" className="text-primary mt-4 inline-block">← Back</Link></div>;

  return (
    <>
      <SEO title={`${cat.name} Customer Service Numbers - DialHelper`} description={cat.description} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-gray-900">{cat.name}</span></nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cat.name} Customer Service Numbers</h1>
        <p className="text-gray-500 mb-8">{cat.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{items.map((c: Company) => <CompanyCard key={c.slug} company={c} />)}</div>
        {items.length === 0 && <p className="text-gray-400 text-center py-12">No companies in this category yet.</p>}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">All Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c: Category) => (
              <Link key={c.slug} to={`/category/${c.slug}`} className={`px-4 py-2 rounded-full text-sm font-medium border ${c.slug === slug ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}>{c.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
