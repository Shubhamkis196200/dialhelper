import { useState, useEffect } from 'react';

const cities = [
  { name: 'New York', tz: 'America/New_York' }, { name: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'Chicago', tz: 'America/Chicago' }, { name: 'London', tz: 'Europe/London' },
  { name: 'Paris', tz: 'Europe/Paris' }, { name: 'Berlin', tz: 'Europe/Berlin' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' }, { name: 'Shanghai', tz: 'Asia/Shanghai' },
  { name: 'Mumbai', tz: 'Asia/Kolkata' }, { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Sydney', tz: 'Australia/Sydney' }, { name: 'Auckland', tz: 'Pacific/Auckland' },
  { name: 'Moscow', tz: 'Europe/Moscow' }, { name: 'São Paulo', tz: 'America/Sao_Paulo' },
  { name: 'Singapore', tz: 'Asia/Singapore' }, { name: 'Toronto', tz: 'America/Toronto' },
  { name: 'Hong Kong', tz: 'Asia/Hong_Kong' }, { name: 'Seoul', tz: 'Asia/Seoul' },
  { name: 'Mexico City', tz: 'America/Mexico_City' }, { name: 'Cairo', tz: 'Africa/Cairo' },
];

export default function InternationalTimeChecker() {
  const [selected, setSelected] = useState(cities.slice(0, 6));
  const [now, setNow] = useState(new Date());

  useEffect(() => { const i = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(i); }, []);

  const toggle = (city: typeof cities[0]) => {
    if (selected.find(c => c.tz === city.tz)) setSelected(selected.filter(c => c.tz !== city.tz));
    else if (selected.length < 12) setSelected([...selected, city]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {cities.map(c => (
          <button key={c.tz} onClick={() => toggle(c)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selected.find(s => s.tz === c.tz) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c.name}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selected.map(c => {
          const time = now.toLocaleString('en-US', { timeZone: c.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
          const date = now.toLocaleDateString('en-US', { timeZone: c.tz, weekday: 'short', month: 'short', day: 'numeric' });
          const hour = parseInt(now.toLocaleString('en-US', { timeZone: c.tz, hour: 'numeric', hour12: false }));
          const isDark = hour < 7 || hour >= 20;
          return (
            <div key={c.tz} className={`rounded-xl p-5 border ${isDark ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
              <div className="text-sm opacity-70">{c.name}</div>
              <div className="text-2xl font-bold font-mono mt-1">{time}</div>
              <div className="text-xs opacity-50 mt-1">{date} • {isDark ? '🌙 Night' : '☀️ Day'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
