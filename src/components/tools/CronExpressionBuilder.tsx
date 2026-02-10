import { useState } from 'react';

const minutes = ['0', '1', '5', '10', '15', '20', '30', '45'];
const hours = Array.from({ length: 24 }, (_, i) => String(i));
const daysOfMonth = ['1', '15', '*'];
const months = ['*', '1', '3', '6', '12'];
const daysOfWeek = [{ v: '*', l: 'Every' }, { v: '1-5', l: 'Weekdays' }, { v: '0,6', l: 'Weekends' }, { v: '0', l: 'Sun' }, { v: '1', l: 'Mon' }, { v: '2', l: 'Tue' }, { v: '3', l: 'Wed' }, { v: '4', l: 'Thu' }, { v: '5', l: 'Fri' }, { v: '6', l: 'Sat' }];

const descriptions: Record<string, string> = {
  '0 * * * *': 'Every hour at minute 0',
  '*/5 * * * *': 'Every 5 minutes',
  '0 0 * * *': 'Every day at midnight',
  '0 9 * * 1-5': 'Weekdays at 9:00 AM',
  '0 0 1 * *': 'First of every month at midnight',
};

export default function CronExpressionBuilder() {
  const [min, setMin] = useState('0');
  const [hour, setHour] = useState('*');
  const [dom, setDom] = useState('*');
  const [month, setMonth] = useState('*');
  const [dow, setDow] = useState('*');
  const cron = `${min} ${hour} ${dom} ${month} ${dow}`;

  const describe = () => {
    if (descriptions[cron]) return descriptions[cron];
    const parts = [];
    if (min.includes('/')) parts.push(`Every ${min.split('/')[1]} minutes`);
    else if (min === '*') parts.push('Every minute');
    else parts.push(`At minute ${min}`);
    if (hour === '*') parts.push('every hour');
    else parts.push(`at ${hour}:00`);
    if (dom !== '*') parts.push(`on day ${dom}`);
    if (month !== '*') parts.push(`of month ${month}`);
    if (dow !== '*') parts.push(`on ${daysOfWeek.find(d => d.v === dow)?.l || dow}`);
    return parts.join(', ');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Minute</label><select value={min} onChange={e => setMin(e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"><option value="*">Every (*)</option>{minutes.map(m => <option key={m} value={m}>{m}</option>)}<option value="*/5">*/5</option><option value="*/10">*/10</option><option value="*/15">*/15</option><option value="*/30">*/30</option></select></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Hour</label><select value={hour} onChange={e => setHour(e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"><option value="*">Every (*)</option>{hours.map(h => <option key={h} value={h}>{h}</option>)}</select></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Day of Month</label><select value={dom} onChange={e => setDom(e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none">{daysOfMonth.map(d => <option key={d} value={d}>{d === '*' ? 'Every (*)' : d}</option>)}</select></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Month</label><select value={month} onChange={e => setMonth(e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none">{months.map(m => <option key={m} value={m}>{m === '*' ? 'Every (*)' : m}</option>)}</select></div>
        <div><label className="block text-xs font-medium text-gray-500 mb-1">Day of Week</label><select value={dow} onChange={e => setDow(e.target.value)} className="w-full px-2 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none">{daysOfWeek.map(d => <option key={d.v} value={d.v}>{d.l}</option>)}</select></div>
      </div>
      <div className="bg-gray-900 rounded-xl p-6 text-center">
        <div className="font-mono text-2xl text-green-400">{cron}</div>
        <div className="text-gray-400 text-sm mt-2">{describe()}</div>
      </div>
      <button onClick={() => navigator.clipboard.writeText(cron)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors">Copy Expression</button>
    </div>
  );
}
