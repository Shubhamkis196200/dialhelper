import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg mb-3"><Phone className="w-5 h-5" />Dial<span className="text-accent">Helper</span></Link>
            <p className="text-sm text-gray-500">Find any customer service phone number. Call faster, wait less.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Popular</h4>
            <div className="space-y-2 text-sm">
              {['amazon', 'att', 'bank-of-america', 'verizon', 'comcast-xfinity'].map(s => (
                <Link key={s} to={`/company/${s}`} className="block text-gray-500 hover:text-primary capitalize">{s.replace(/-/g, ' ')}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
            <div className="space-y-2 text-sm">
              {['telecom', 'banking', 'airlines', 'retail', 'tech'].map(s => (
                <Link key={s} to={`/category/${s}`} className="block text-gray-500 hover:text-primary capitalize">{s}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-500 hover:text-primary">About</Link>
              <Link to="/contact" className="block text-gray-500 hover:text-primary">Contact</Link>
              <Link to="/blog" className="block text-gray-500 hover:text-primary">Blog</Link>
              <Link to="/tools" className="block text-gray-500 hover:text-primary">Free Tools</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} DialHelper. All rights reserved.</div>
      </div>
    </footer>
  );
}
