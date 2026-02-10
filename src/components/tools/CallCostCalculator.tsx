import { useState } from 'react';

const rates: Record<string, Record<string, number>> = {
  'US': { 'UK': 0.02, 'Canada': 0.01, 'India': 0.03, 'China': 0.02, 'Japan': 0.03, 'Germany': 0.02, 'Australia': 0.03, 'Brazil': 0.05, 'Mexico': 0.02, 'France': 0.02 },
  'UK': { 'US': 0.02, 'Canada': 0.03, 'India': 0.04, 'China': 0.03, 'Japan': 0.04, 'Germany': 0.01, 'Australia': 0.04, 'Brazil': 0.06, 'Mexico': 0.04, 'France': 0.01 },
};
const countries = ['US', 'UK', 'Canada', 'India', 'China', 'Japan', 'Germany', 'Australia', 'Brazil', 'Mexico', 'France'];

export default function CallCostCalculator() {
  const [from, setFrom] = useState('US');
  const [to, setTo] = useState('UK');
  const [mins, setMins] = useState(10);
  const rate = rates[from]?.[to] || 0.03;
  const cost = rate * mins;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{countries.map(c => <option key={c}>{c}</option>)}</select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{countries.map(c => <option key={c}>{c}</option>)}</select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Minutes</label><input type="number" value={mins} onChange={e => setMins(Number(e.target.value))} min={1} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Estimated Costs for {mins} minutes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border"><div className="text-xs text-gray-400 mb-1">Skype</div><div className="text-2xl font-bold text-primary">${cost.toFixed(2)}</div><div className="text-xs text-gray-400">${rate.toFixed(3)}/min</div></div>
          <div className="bg-white rounded-lg p-4 border"><div className="text-xs text-gray-400 mb-1">WhatsApp (Data)</div><div className="text-2xl font-bold text-green-600">$0.00</div><div className="text-xs text-gray-400">Free over WiFi</div></div>
          <div className="bg-white rounded-lg p-4 border"><div className="text-xs text-gray-400 mb-1">Carrier (est.)</div><div className="text-2xl font-bold text-orange-600">${(rate * 10 * mins).toFixed(2)}</div><div className="text-xs text-gray-400">${(rate * 10).toFixed(2)}/min</div></div>
        </div>
      </div>
    </div>
  );
}
