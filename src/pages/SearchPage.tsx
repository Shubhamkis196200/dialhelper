import { useSearchParams } from 'react-router-dom';
import { searchCompanies, Company } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';
import SearchBar from '@/components/SearchBar';
import SEO from '@/components/SEO';

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = q ? searchCompanies(q) : [];
  return (
    <>
      <SEO title={`Search: ${q} - DialHelper`} description={`Search results for "${q}" customer service numbers.`} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8"><SearchBar /></div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{q ? `Results for "${q}"` : 'Search for a company'}</h1>
        <p className="text-gray-500 mb-6">{results.length} {results.length === 1 ? 'company' : 'companies'} found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{results.map((c: Company) => <CompanyCard key={c.slug} company={c} />)}</div>
        {q && results.length === 0 && <p className="text-gray-400 text-center py-12">No companies match your search.</p>}
      </div>
    </>
  );
}
