import { useState } from 'react';

const zones = [
  'UTC', 'US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific', 'US/Alaska', 'US/Hawaii',
  'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Moscow',
  'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Kolkata', 'Asia/Dubai', 'Asia/Singapore',
  'Australia/Sydney', 'Pacific/Auckland', 'America/Sao_Paulo', 'America/Mexico_City',
  'Africa/Cairo', 'Africa/Lagos', 'America/Toronto', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
];

function getTimeInZone(tz: string): string {
  try { return new Date().toLocaleString('en-US', { timeZone: tz.replace('US/', 'America/New_York'.split('/')[0] + '/').replace('US/Eastern', 'America/New_York').replace('US/Central', 'America/Chicago').replace('US/Mountain', 'America/Denver').replace('US/Pacific', 'America/Los_Angeles').replace('US/Alaska', 'America/Anchorage').replace('US/Hawaii', 'Pacific/Honolulu'), hour: '2-digit', minute: '2-digit', hour12: true }); }
  catch { return 'N/A'; }
}

const tzMap: Record<string, string> = {
  'US/Eastern': 'America/New_York', 'US/Central': 'America/Chicago', 'US/Mountain': 'America/Denver',
  'US/Pacific': 'America/Los_Angeles', 'US/Alaska': 'America/Anchorage', 'US/Hawaii': 'Pacific/Honolulu',
};

function getTime(tz: string): string {
  try { return new Date().toLocaleString('en-US', { timeZone: tzMap[tz] || tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); }
  catch { return 'N/A'; }
}

function getOffset(tz: string): number {
  try {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const parts = new Date(utc).toLocaleString('en-US', { timeZone: tzMap[tz] || tz, timeZoneName: 'shortOffset' });
    const match = parts.match(/GMT([+-]\d+)/);
    return match ? parseInt(match[1]) : 0;
  } catch { return 0; }
}

export default function TimeZoneConverter() {
  const [tz1, setTz1] = useState('US/Eastern');
  const [tz2, setTz2] = useState('Europe/London');
  const [time, setTime] = useState(() => { const now = new Date(); return `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`; });

  const diff = getOffset(tz2) - getOffset(tz1);
  const [h, m] = time.split(':').map(Number);
  const converted = new Date(2024, 0, 1, h + diff, m);
  const convStr = `${String(converted.getHours()).padStart(2,'0')}:${String(converted.getMinutes()).padStart(2,'0')}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From Time Zone</label>
          <select value={tz1} onChange={e => setTz1(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            {zones.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
          <div className="mt-2 text-sm text-gray-500">Current: {getTime(tz1)}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To Time Zone</label>
          <select value={tz2} onChange={e => setTz2(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
            {zones.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
          <div className="mt-2 text-sm text-gray-500">Current: {getTime(tz2)}</div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Time to Convert</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <div className="text-sm text-gray-500 mb-1">{time} in {tz1}</div>
        <div className="text-3xl font-bold text-primary">{convStr}</div>
        <div className="text-sm text-gray-500 mt-1">in {tz2} ({diff >= 0 ? '+' : ''}{diff} hours)</div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">💡 Best Call Times</h3>
        <p className="text-sm text-gray-600">The overlap of standard business hours (9 AM – 5 PM) between these zones is approximately <strong>{Math.max(0, 8 - Math.abs(diff))} hours</strong>. Best time to call: <strong>{Math.abs(diff) <= 3 ? '10:00 AM – 3:00 PM' : Math.abs(diff) <= 6 ? '9:00 AM – 11:00 AM' : 'Schedule across days'}</strong> in the earlier timezone.</p>
      </div>
    </div>
  );
}
