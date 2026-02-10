import { useState } from 'react';

const tzOptions = [
  { label: 'Eastern (ET)', offset: -5 }, { label: 'Central (CT)', offset: -6 }, { label: 'Mountain (MT)', offset: -7 },
  { label: 'Pacific (PT)', offset: -8 }, { label: 'GMT/UTC', offset: 0 }, { label: 'CET (Central Europe)', offset: 1 },
  { label: 'IST (India)', offset: 5.5 }, { label: 'CST (China)', offset: 8 }, { label: 'JST (Japan)', offset: 9 },
  { label: 'AEST (Australia)', offset: 10 }, { label: 'NZST (New Zealand)', offset: 12 },
];

export default function ConferenceCallPlanner() {
  const [zones, setZones] = useState([tzOptions[0], tzOptions[4]]);
  const addZone = () => { if (zones.length < 6) setZones([...zones, tzOptions[0]]); };
  const removeZone = (i: number) => setZones(zones.filter((_, j) => j !== i));
  const updateZone = (i: number, val: string) => { const z = [...zones]; z[i] = tzOptions.find(t => t.label === val) || tzOptions[0]; setZones(z); };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const businessHours = (h: number, offset: number) => {
    const local = ((h + offset - zones[0].offset) % 24 + 24) % 24;
    return local >= 9 && local < 17;
  };
  const allBusiness = (h: number) => zones.every(z => businessHours(h, z.offset));

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {zones.map((z, i) => (
          <div key={i} className="flex items-center gap-2">
            <select value={z.label} onChange={e => updateZone(i, e.target.value)} className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">
              {tzOptions.map(t => <option key={t.label} value={t.label}>{t.label} (UTC{t.offset >= 0 ? '+' : ''}{t.offset})</option>)}
            </select>
            {zones.length > 2 && <button onClick={() => removeZone(i)} className="text-red-500 hover:text-red-700 px-2">✕</button>}
          </div>
        ))}
        {zones.length < 6 && <button onClick={addZone} className="text-primary text-sm font-medium hover:underline">+ Add timezone</button>}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
        <h3 className="font-semibold text-gray-900 mb-3">Time Overlap (hours in {zones[0].label})</h3>
        <div className="grid gap-1" style={{ gridTemplateColumns: `120px repeat(24, 1fr)` }}>
          <div className="text-xs text-gray-500 font-medium">Zone</div>
          {hours.map(h => <div key={h} className="text-[10px] text-gray-400 text-center">{h}</div>)}
          {zones.map((z, i) => (
            <>{/* Fragment key set on outer */}
              <div key={`label-${i}`} className="text-xs text-gray-700 font-medium truncate">{z.label}</div>
              {hours.map(h => {
                const local = ((h + z.offset - zones[0].offset) % 24 + 24) % 24;
                const isBiz = local >= 9 && local < 17;
                const isAll = allBusiness(h);
                return <div key={h} className={`h-6 rounded-sm ${isAll ? 'bg-green-400' : isBiz ? 'bg-blue-200' : 'bg-gray-200'}`} title={`${local}:00 local`} />;
              })}
            </>
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded-sm inline-block" /> All in business hours</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-200 rounded-sm inline-block" /> Some in business hours</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-200 rounded-sm inline-block" /> Outside business hours</span>
        </div>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-semibold text-green-800 mb-1">✅ Best Meeting Times</h3>
        <p className="text-sm text-green-700">
          {hours.filter(allBusiness).length > 0 ? `${hours.filter(allBusiness).map(h => `${h}:00`).join(', ')} (${zones[0].label})` : 'No overlapping business hours found. Consider async communication.'}
        </p>
      </div>
    </div>
  );
}
