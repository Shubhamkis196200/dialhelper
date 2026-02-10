import SearchBar from '@/components/SearchBar';
import CompanyCard from '@/components/CompanyCard';
import CategoryGrid from '@/components/CategoryGrid';
import SEO from '@/components/SEO';
import { companies, blogPosts, Company, BlogPost } from '@/data/companies';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const popular = companies.slice(0, 12);
const trending = companies.filter((c: Company) => c.waitMinutes <= 8).slice(0, 4);

export default function HomePage() {
  return (
    <>
      <SEO title="DialHelper — Find Any Customer Service Phone Number" description="Find customer service phone numbers for any company. Click-to-call, wait times, tips to reach a human fast." />
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Any Customer Service Number</h1>
          <p className="text-lg text-gray-500 mb-8">Call faster, wait less. Get phone numbers, wait times, and tips to reach a human.</p>
          <SearchBar large />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4">
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-6"><TrendingUp className="w-5 h-5 text-accent" /><h2 className="text-xl font-bold text-gray-900">Trending Now</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{trending.map((c: Company) => <CompanyCard key={c.slug} company={c} />)}</div>
        </section>
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <CategoryGrid />
        </section>
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Companies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{popular.map((c: Company) => <CompanyCard key={c.slug} company={c} />)}</div>
        </section>
        <section className="mt-14 mb-4">
          <div className="flex items-center justify-between mb-6"><h2 className="text-xl font-bold text-gray-900">Guides & Tips</h2><Link to="/blog" className="text-primary text-sm font-medium hover:underline">View all →</Link></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.slice(0, 3).map((p: BlogPost) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <span className="text-xs text-accent font-medium uppercase">{p.category}</span>
                <h3 className="font-semibold text-gray-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
