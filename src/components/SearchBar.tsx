import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { companies, Company } from '@/data/companies';

export default function SearchBar({ large = false }: { large?: boolean }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length >= 1) {
      const q = query.toLowerCase();
      setSuggestions(companies.filter(c => c.name.toLowerCase().includes(q)).slice(0, 6));
      setOpen(true);
    } else {
      setSuggestions([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) { navigate(`/search?q=${encodeURIComponent(query.trim())}`); setOpen(false); }
  };

  return (
    <div ref={ref} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={submit} className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 ${large ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for a company..."
          className={`w-full border-2 border-gray-200 focus:border-primary rounded-full bg-white text-gray-900 placeholder-gray-400 outline-none transition-colors ${large ? 'pl-14 pr-6 py-4 text-lg' : 'pl-12 pr-5 py-3 text-base'}`} />
      </form>
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {suggestions.map(c => (
            <button key={c.slug} onClick={() => { navigate(`/company/${c.slug}`); setOpen(false); setQuery(''); }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 text-left transition-colors">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">{c.name[0]}</div>
              <div><div className="font-medium text-gray-900">{c.name}</div><div className="text-sm text-gray-500">{c.mainPhone}</div></div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
