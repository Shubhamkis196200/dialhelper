import { useState } from 'react';

interface Entry { company: string; date: string; minutes: number; resolved: boolean; }

export default function WaitTimeTracker() {
  const [entries, setEntries] = useState<Entry[]>(() => { try { return JSON.parse(localStorage.getItem('waitTimes') || '[]'); } catch { return []; } });
  const [company, setCompany] = useState('');
  const [minutes, setMinutes] = useState(10);
  const [resolved, setResolved] = useState(true);

  const add = () => {
    const e: Entry = { company: company || 'Unknown', date: new Date().toISOString().slice(0, 10), minutes, resolved };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem('waitTimes', JSON.stringify(next));
    setCompany(''); setMinutes(10);
  };

  const remove = (i: number) => { const next = entries.filter((_, j) => j !== i); setEntries(next); localStorage.setItem('waitTimes', JSON.stringify(next)); };
  const avg = entries.length ? Math.round(entries.reduce((s, e) => s + e.minutes, 0) / entries.length) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="number" value={minutes} onChange={e => setMinutes(Number(e.target.value))} min={0} placeholder="Minutes" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <label className="flex items-center gap-2"><input type="checkbox" checked={resolved} onChange={e => setResolved(e.target.checked)} /><span className="text-sm">Resolved?</span></label>
        <button onClick={add} className="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Log Wait</button>
      </div>
      {entries.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200"><div className="text-2xl font-bold text-primary">{entries.length}</div><div className="text-xs text-gray-500">Total Calls</div></div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200"><div className="text-2xl font-bold text-primary">{avg} min</div><div className="text-xs text-gray-500">Avg Wait</div></div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200"><div className="text-2xl font-bold text-primary">{Math.round(entries.filter(e => e.resolved).length / entries.length * 100)}%</div><div className="text-xs text-gray-500">Resolved</div></div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="px-3 py-2 text-left">Company</th><th className="px-3 py-2 text-left">Date</th><th className="px-3 py-2 text-left">Wait</th><th className="px-3 py-2 text-left">Status</th><th className="px-3 py-2"></th></tr></thead>
              <tbody className="divide-y">{entries.map((e, i) => <tr key={i} className="hover:bg-gray-50"><td className="px-3 py-2 font-medium">{e.company}</td><td className="px-3 py-2 text-gray-500">{e.date}</td><td className="px-3 py-2">{e.minutes}m</td><td className="px-3 py-2">{e.resolved ? '✅' : '❌'}</td><td className="px-3 py-2"><button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-xs">Remove</button></td></tr>)}</tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
