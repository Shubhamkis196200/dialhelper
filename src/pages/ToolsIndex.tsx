import { Link } from 'react-router-dom';
import { tools, toolCategories, Tool } from '@/data/tools';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Wrench, Phone, Briefcase } from 'lucide-react';

const catIcons: Record<string, typeof Wrench> = { phone: Phone, utility: Wrench, business: Briefcase };

export default function ToolsIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SEO title="50+ Free Tools — Phone, Utility & Business | DialHelper" description="Free online tools for phone number formatting, time zones, passwords, customer service, and more." />
      <Breadcrumbs items={[{ label: 'Tools' }]} />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Free Online Tools</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">50+ free tools for phone calls, productivity, and customer service.</p>
      </div>
      {toolCategories.map(cat => {
        const Icon = catIcons[cat.key] || Wrench;
        const catTools = tools.filter((t: Tool) => t.category === cat.key);
        return (
          <section key={cat.key} className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <Icon className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
              <span className="text-sm text-gray-400 ml-1">({catTools.length})</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catTools.map((tool: Tool) => (
                <Link key={tool.slug} to={`/tools/${tool.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-sm text-gray-500 mt-1.5">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
