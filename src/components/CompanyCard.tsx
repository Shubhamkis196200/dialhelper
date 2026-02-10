import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Company } from '@/data/companies';

export function WaitBadge({ minutes }: { minutes: number }) {
  const color = minutes <= 5 ? 'bg-green-100 text-green-700' : minutes <= 15 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700';
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>~{minutes} min wait</span>;
}

export default function CompanyCard({ company }: { company: Company }) {
  const tel = `tel:+1${company.mainPhone.replace(/\D/g, '')}`;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <Link to={`/company/${company.slug}`} className="block">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg shrink-0">{company.name[0]}</div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">{company.name}</h3>
            <span className="text-xs text-gray-500 capitalize">{company.category}</span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-3">
        <a href={tel} className="text-primary font-bold text-lg hover:text-primary-dark flex items-center gap-1.5"><Phone className="w-4 h-4" />{company.mainPhone}</a>
        <a href={tel} className="bg-success text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-1.5"><Phone className="w-4 h-4" /> Call</a>
      </div>
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
        <WaitBadge minutes={company.waitMinutes} />
        <span>Best: {company.bestTimeToCall}</span>
      </div>
    </div>
  );
}
