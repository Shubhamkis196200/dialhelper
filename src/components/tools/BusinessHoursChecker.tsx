import { useState } from 'react';

export default function BusinessHoursChecker() {
  const [openH, setOpenH] = useState(9);
  const [closeH, setCloseH] = useState(17);
  const [tz, setTz] = useState('America/New_York');
  const [weekends, setWeekends] = useState(false);

  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { timeZone: tz, hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'short' };
  const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(now);
  const hour = Number(parts.find(p => p.type === 'hour')?.value || 0);
  const min = Number(parts.find(p => p.type === 'minute')?.value || 0);
  const weekday = parts.find(p => p.type === 'weekday')?.value || '';
  const isWeekend = ['Sat', 'Sun'].includes(weekday);
  const isOpen = (!isWeekend || weekends) && hour >= openH && (hour < closeH || (hour === closeH && min === 0));

  const tzList = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'Europe/London', 'Europe/Paris', 'Asia/Tokyo', 'Asia/Kolkata', 'Australia/Sydney'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Opens at</label><select value={openH} onChange={e => setOpenH(Number(e.target.value))} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{Array.from({length:24},(_,i)=>i).map(h=><option key={h} value={h}>{h}:00</option>)}</select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Closes at</label><select value={closeH} onChange={e => setCloseH(Number(e.target.value))} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{Array.from({length:24},(_,i)=>i).map(h=><option key={h} value={h}>{h}:00</option>)}</select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Business Timezone</label><select value={tz} onChange={e => setTz(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{tzList.map(t=><option key={t} value={t}>{t}</option>)}</select></div>
        <label className="flex items-center gap-2 self-end pb-2"><input type="checkbox" checked={weekends} onChange={e => setWeekends(e.target.checked)} /><span className="text-sm">Open on weekends</span></label>
      </div>
      <div className={`p-8 rounded-xl border-2 text-center ${isOpen ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
        <div className="text-5xl mb-3">{isOpen ? '🟢' : '🔴'}</div>
        <h3 className="text-2xl font-bold">{isOpen ? 'OPEN NOW' : 'CLOSED'}</h3>
        <p className="text-gray-600 mt-2">Current time in {tz.split('/')[1]}: {weekday} {hour}:{String(min).padStart(2,'0')}</p>
      </div>
    </div>
  );
}
