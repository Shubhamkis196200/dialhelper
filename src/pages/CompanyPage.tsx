import { useParams, Link } from 'react-router-dom';
import { getCompanyBySlug, companies, categories, Company, Department } from '@/data/companies';
import PhoneNumber from '@/components/PhoneNumber';
import TipsList from '@/components/TipsList';
import { WaitBadge } from '@/components/CompanyCard';
import CompanyCard from '@/components/CompanyCard';
import SEO from '@/components/SEO';
import { Phone, Clock, Star, ExternalLink, MessageCircle } from 'lucide-react';

export default function CompanyPage() {
  const { slug } = useParams<{ slug: string }>();
  const company = getCompanyBySlug(slug || '');
  if (!company) return <div className="max-w-3xl mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Company not found</h1><Link to="/" className="text-primary mt-4 inline-block">← Back to home</Link></div>;

  const cat = categories.find(c => c.slug === company.category);
  const related = companies.filter((c: Company) => c.category === company.category && c.slug !== company.slug).slice(0, 4);
  const tel = `tel:+1${company.mainPhone.replace(/\D/g, '')}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Organization', name: company.name, url: company.website,
    contactPoint: [
      { '@type': 'ContactPoint', telephone: company.mainPhone, contactType: 'customer service' },
      ...company.departments.map((d: Department) => ({ '@type': 'ContactPoint', telephone: d.phone, contactType: d.name.toLowerCase() })),
    ],
  };

  return (
    <>
      <SEO title={`${company.name} Customer Service Phone Number - DialHelper`} description={`Call ${company.name} at ${company.mainPhone}. Average wait: ${company.waitTime}. Tips to reach a human fast.`} schema={schema} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
          {cat && <><Link to={`/category/${cat.slug}`} className="hover:text-primary">{cat.name}</Link><span>/</span></>}
          <span className="text-gray-900">{company.name}</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-2xl shrink-0">{company.name[0]}</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{company.name} Customer Service</h1>
            <p className="text-gray-500 text-sm mt-1">{company.description}</p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-primary/20 rounded-2xl p-6 md:p-8 mb-8 text-center">
          <p className="text-sm text-gray-500 mb-2 font-medium">Main Customer Service Number</p>
          <PhoneNumber number={company.mainPhone} large />
          <div className="mt-4">
            <a href={tel} className="inline-flex items-center gap-2 bg-success text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition-colors"><Phone className="w-5 h-5" /> Call Now</a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500 flex-wrap">
            <WaitBadge minutes={company.waitMinutes} />
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {company.hours}</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent" /> Best: {company.bestTimeToCall}</span>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">All Phone Numbers</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
            {company.departments.map((d: Department, i: number) => (
              <div key={i} className="flex items-center justify-between px-5 py-4">
                <span className="text-gray-700 font-medium">{d.name}</span>
                <a href={`tel:+1${d.phone.replace(/\D/g, '')}`} className="text-primary font-bold flex items-center gap-1.5 hover:text-primary-dark"><Phone className="w-4 h-4" /> {d.phone}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Tips to Reach a Human</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5"><TipsList tips={company.tips} /></div>
        </section>

        <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {company.liveChatUrl && (
            <a href={company.liveChatUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <MessageCircle className="w-5 h-5 text-primary" /><div><div className="font-medium text-gray-900">Live Chat</div><div className="text-sm text-gray-500">Chat with {company.name} online</div></div><ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
          )}
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
            <ExternalLink className="w-5 h-5 text-primary" /><div><div className="font-medium text-gray-900">Website</div><div className="text-sm text-gray-500">{company.website}</div></div>
          </a>
          {company.socialLinks.twitter && (
            <a href={company.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-xl font-bold">𝕏</span><div><div className="font-medium text-gray-900">Twitter / X</div><div className="text-sm text-gray-500">Get help via social media</div></div><ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
          )}
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Companies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{related.map((c: Company) => <CompanyCard key={c.slug} company={c} />)}</div>
          </section>
        )}
      </div>
    </>
  );
}
