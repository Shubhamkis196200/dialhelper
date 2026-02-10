import { useState } from 'react';

export default function TimestampConverter() {
  const [ts, setTs] = useState(String(Math.floor(Date.now() / 1000)));
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 19));

  const tsDate = new Date(Number(ts) * 1000);
  const dateTs = Math.floor(new Date(dateStr).getTime() / 1000);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
        <div className="text-sm text-gray-500">Current Unix Timestamp</div>
        <div className="text-2xl font-bold font-mono text-primary">{Math.floor(Date.now() / 1000)}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Timestamp → Date</h3>
          <input type="text" value={ts} onChange={e => setTs(e.target.value)} placeholder="Unix timestamp" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono" />
          <div className="bg-gray-50 rounded-lg p-3 border text-sm font-mono">
            <div>UTC: {tsDate.toUTCString()}</div>
            <div>Local: {tsDate.toLocaleString()}</div>
            <div>ISO: {tsDate.toISOString()}</div>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Date → Timestamp</h3>
          <input type="datetime-local" value={dateStr} onChange={e => setDateStr(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          <div className="bg-gray-50 rounded-lg p-3 border">
            <div className="font-mono font-bold text-lg">{isNaN(dateTs) ? 'Invalid date' : dateTs}</div>
            <button onClick={() => !isNaN(dateTs) && navigator.clipboard.writeText(String(dateTs))} className="text-xs text-primary mt-1">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
