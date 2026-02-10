import { Link } from 'react-router-dom';
import { categories, Category } from '@/data/companies';
import { Wifi, Landmark, Plane, ShoppingBag, Shield, Monitor, Zap, Building2, Truck, Tv } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Wifi, Landmark, Plane, ShoppingBag, Shield, Monitor, Zap, Building2, Truck, Tv };

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((cat: Category) => {
        const Icon = iconMap[cat.icon] || Monitor;
        return (
          <Link key={cat.slug} to={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-primary/40 transition-all text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Icon className="w-6 h-6 text-primary" /></div>
            <span className="text-sm font-medium text-gray-700">{cat.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
