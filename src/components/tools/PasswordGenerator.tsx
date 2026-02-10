import { useState } from 'react';

export default function PasswordGenerator() {
  const [len, setLen] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [nums, setNums] = useState(true);
  const [syms, setSyms] = useState(true);
  const [pw, setPw] = useState('');

  const generate = () => {
    let chars = '';
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (nums) chars += '0123456789';
    if (syms) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    setPw(Array.from(arr, v => chars[v % chars.length]).join(''));
  };

  const strength = len >= 20 && syms ? 'Very Strong' : len >= 14 ? 'Strong' : len >= 10 ? 'Medium' : 'Weak';
  const color = strength === 'Very Strong' ? 'text-green-600' : strength === 'Strong' ? 'text-blue-600' : strength === 'Medium' ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl p-6 text-center">
        <div className="font-mono text-xl text-green-400 break-all min-h-[1.5rem]">{pw || 'Click Generate'}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={generate} className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">Generate Password</button>
        <button onClick={() => pw && navigator.clipboard.writeText(pw)} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Copy</button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Length: {len}</label>
        <input type="range" min={4} max={64} value={len} onChange={e => setLen(Number(e.target.value))} className="w-full" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[['Uppercase (A-Z)', upper, setUpper], ['Lowercase (a-z)', lower, setLower], ['Numbers (0-9)', nums, setNums], ['Symbols (!@#$)', syms, setSyms]].map(([label, val, setter]: any) => (
          <label key={label} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={val} onChange={e => setter(e.target.checked)} className="rounded" />{label}</label>
        ))}
      </div>
      {pw && <div className={`text-center font-semibold ${color}`}>Strength: {strength}</div>}
    </div>
  );
}
