import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb { label: string; to?: string; }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6 flex-wrap" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary flex items-center gap-1"><Home className="w-3.5 h-3.5" />Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          {item.to ? <Link to={item.to} className="hover:text-primary">{item.label}</Link> : <span className="text-gray-900 font-medium">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
