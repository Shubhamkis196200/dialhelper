import { useState } from 'react';

const countries = [
  { name: 'United States', code: '+1', format: '+1 (XXX) XXX-XXXX', iso: 'US' },
  { name: 'United Kingdom', code: '+44', format: '+44 XXXX XXXXXX', iso: 'GB' },
  { name: 'Canada', code: '+1', format: '+1 (XXX) XXX-XXXX', iso: 'CA' },
  { name: 'Australia', code: '+61', format: '+61 X XXXX XXXX', iso: 'AU' },
  { name: 'Germany', code: '+49', format: '+49 XXXX XXXXXXX', iso: 'DE' },
  { name: 'France', code: '+33', format: '+33 X XX XX XX XX', iso: 'FR' },
  { name: 'Japan', code: '+81', format: '+81 XX XXXX XXXX', iso: 'JP' },
  { name: 'China', code: '+86', format: '+86 XXX XXXX XXXX', iso: 'CN' },
  { name: 'India', code: '+91', format: '+91 XXXXX XXXXX', iso: 'IN' },
  { name: 'Brazil', code: '+55', format: '+55 XX XXXXX-XXXX', iso: 'BR' },
  { name: 'Mexico', code: '+52', format: '+52 XX XXXX XXXX', iso: 'MX' },
  { name: 'Italy', code: '+39', format: '+39 XXX XXX XXXX', iso: 'IT' },
  { name: 'Spain', code: '+34', format: '+34 XXX XX XX XX', iso: 'ES' },
  { name: 'South Korea', code: '+82', format: '+82 XX XXXX XXXX', iso: 'KR' },
  { name: 'Russia', code: '+7', format: '+7 XXX XXX-XX-XX', iso: 'RU' },
  { name: 'Netherlands', code: '+31', format: '+31 X XXXXXXXX', iso: 'NL' },
  { name: 'Turkey', code: '+90', format: '+90 XXX XXX XXXX', iso: 'TR' },
  { name: 'Saudi Arabia', code: '+966', format: '+966 XX XXX XXXX', iso: 'SA' },
  { name: 'South Africa', code: '+27', format: '+27 XX XXX XXXX', iso: 'ZA' },
  { name: 'Argentina', code: '+54', format: '+54 XX XXXX-XXXX', iso: 'AR' },
  { name: 'Nigeria', code: '+234', format: '+234 XXX XXX XXXX', iso: 'NG' },
  { name: 'Egypt', code: '+20', format: '+20 XX XXXX XXXX', iso: 'EG' },
  { name: 'Philippines', code: '+63', format: '+63 XXX XXX XXXX', iso: 'PH' },
  { name: 'Thailand', code: '+66', format: '+66 XX XXX XXXX', iso: 'TH' },
  { name: 'Indonesia', code: '+62', format: '+62 XXX XXXX XXXX', iso: 'ID' },
  { name: 'Pakistan', code: '+92', format: '+92 XXX XXXXXXX', iso: 'PK' },
  { name: 'Bangladesh', code: '+880', format: '+880 XXXX XXXXXX', iso: 'BD' },
  { name: 'Vietnam', code: '+84', format: '+84 XX XXXX XXXX', iso: 'VN' },
  { name: 'Poland', code: '+48', format: '+48 XXX XXX XXX', iso: 'PL' },
  { name: 'Sweden', code: '+46', format: '+46 XX XXX XX XX', iso: 'SE' },
  { name: 'Norway', code: '+47', format: '+47 XXX XX XXX', iso: 'NO' },
  { name: 'Denmark', code: '+45', format: '+45 XX XX XX XX', iso: 'DK' },
  { name: 'Switzerland', code: '+41', format: '+41 XX XXX XX XX', iso: 'CH' },
  { name: 'Belgium', code: '+32', format: '+32 XXX XX XX XX', iso: 'BE' },
  { name: 'Portugal', code: '+351', format: '+351 XXX XXX XXX', iso: 'PT' },
  { name: 'Greece', code: '+30', format: '+30 XXX XXX XXXX', iso: 'GR' },
  { name: 'Ireland', code: '+353', format: '+353 XX XXX XXXX', iso: 'IE' },
  { name: 'New Zealand', code: '+64', format: '+64 XX XXX XXXX', iso: 'NZ' },
  { name: 'Singapore', code: '+65', format: '+65 XXXX XXXX', iso: 'SG' },
  { name: 'Malaysia', code: '+60', format: '+60 XX XXXX XXXX', iso: 'MY' },
  { name: 'Israel', code: '+972', format: '+972 XX XXX XXXX', iso: 'IL' },
  { name: 'UAE', code: '+971', format: '+971 XX XXX XXXX', iso: 'AE' },
  { name: 'Colombia', code: '+57', format: '+57 XXX XXX XXXX', iso: 'CO' },
  { name: 'Chile', code: '+56', format: '+56 X XXXX XXXX', iso: 'CL' },
  { name: 'Peru', code: '+51', format: '+51 XXX XXX XXX', iso: 'PE' },
  { name: 'Ukraine', code: '+380', format: '+380 XX XXX XXXX', iso: 'UA' },
  { name: 'Czech Republic', code: '+420', format: '+420 XXX XXX XXX', iso: 'CZ' },
  { name: 'Romania', code: '+40', format: '+40 XXX XXX XXX', iso: 'RO' },
  { name: 'Hungary', code: '+36', format: '+36 XX XXX XXXX', iso: 'HU' },
  { name: 'Austria', code: '+43', format: '+43 X XXXXXXXX', iso: 'AT' },
];

export default function InternationalDialingCodeLookup() {
  const [q, setQ] = useState('');
  const filtered = q ? countries.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.code.includes(q) || c.iso.toLowerCase().includes(q.toLowerCase())) : countries;
  return (
    <div className="space-y-4">
      <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Search country name, code, or ISO..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg" />
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left font-semibold text-gray-700">Country</th><th className="px-4 py-3 text-left font-semibold text-gray-700">Code</th><th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Format</th><th className="px-4 py-3 text-left font-semibold text-gray-700">ISO</th></tr></thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(c => (
              <tr key={c.iso + c.code} className="hover:bg-blue-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{c.name}</td>
                <td className="px-4 py-3 text-primary font-bold">{c.code}</td>
                <td className="px-4 py-3 text-gray-500 font-mono text-xs hidden sm:table-cell">{c.format}</td>
                <td className="px-4 py-3 text-gray-400">{c.iso}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="p-8 text-center text-gray-400">No countries found.</div>}
      </div>
    </div>
  );
}
