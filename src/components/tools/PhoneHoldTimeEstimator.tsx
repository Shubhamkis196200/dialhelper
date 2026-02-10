import { useState } from 'react';
import { companies } from '@/data/companies';

const timeFactors: Record<string, number> = { morning: 0.7, afternoon: 1.0, evening: 1.3, monday: 1.2, tuesday: 0.8, wednesday: 0.9, thursday: 1.0, friday: 1.1, weekend: 0.5 };

export default function PhoneHoldTimeEstimator() {
  const [company, setCompany] = useState(companies[0]?.slug || '');
  const [day, setDay] = useState('tuesday');
  const [time, setTime] = useState('morning');

  const c = companies.find(x => x.slug === company);
  const base = c?.waitMinutes || 10;
  const estimate = Math.round(base * (timeFactors[day] || 1) * (timeFactors[time] || 1));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <select value={company} onChange={e => setCompany(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            {companies.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
          <select value={day} onChange={e => setDay(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'weekend'].map(d => <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time of Day</label>
          <select value={time} onChange={e => setTime(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            {['morning', 'afternoon', 'evening'].map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
          </select>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <div className="text-sm text-gray-500 mb-1">Estimated Hold Time for {c?.name || 'N/A'}</div>
        <div className="text-5xl font-bold text-primary">{estimate} min</div>
        <div className="text-sm text-gray-500 mt-2">{day.charAt(0).toUpperCase() + day.slice(1)} {time}</div>
      </div>
      <p className="text-xs text-gray-400 text-center">* Estimates based on reported averages and time/day factors. Actual hold times may vary.</p>
    </div>
  );
}
