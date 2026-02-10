import { useState } from 'react';

const tollFreePrefixes = ['800', '888', '877', '866', '855', '844', '833'];

export default function TollFreeNumberChecker() {
  const [num, setNum] = useState('');
  const digits = num.replace(/\D/g, '');
  const areaCode = digits.length >= 10 ? digits.slice(digits.length === 11 ? 1 : 0, digits.length === 11 ? 4 : 3) : '';
  const isTollFree = tollFreePrefixes.includes(areaCode);
  return (
    <div className="space-y-6">
      <input type="text" value={num} onChange={e => setNum(e.target.value)} placeholder="Enter phone number..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg font-mono" />
      {digits.length >= 10 && (
        <div className={`p-6 rounded-xl border-2 text-center ${isTollFree ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
          <div className="text-4xl mb-2">{isTollFree ? '✅' : '⚠️'}</div>
          <h3 className="text-xl font-bold">{isTollFree ? 'This is a Toll-Free Number' : 'This is NOT a Toll-Free Number'}</h3>
          <p className="text-sm text-gray-600 mt-1">Area code: <strong>{areaCode}</strong></p>
        </div>
      )}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Toll-Free Prefixes in the US:</h3>
        <div className="flex flex-wrap gap-2">{tollFreePrefixes.map(p => <span key={p} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-mono font-bold">{p}</span>)}</div>
      </div>
    </div>
  );
}
