import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Phone className="w-6 h-6" /><span>Dial<span className="text-accent">Helper</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/tools" className="hover:text-primary">Tools</Link>
          <Link to="/category/telecom" className="hover:text-primary">Categories</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {[['/', 'Home'], ['/tools', 'Tools'], ['/category/telecom', 'Categories'], ['/blog', 'Blog'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-primary font-medium">{label as string}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
