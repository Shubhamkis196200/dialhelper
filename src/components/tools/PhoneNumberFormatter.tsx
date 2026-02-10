import { useState } from 'react';

export default function PhoneNumberFormatter() {
  const [input, setInput] = useState('');
  const digits = input.replace(/\D/g, '');
  const formats = digits.length >= 10 ? {
    e164: `+${digits.length > 10 ? digits : '1' + digits}`,
    international: digits.length === 10 ? `+1 (${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}` : `+${digits.slice(0,digits.length-10)} ${digits.slice(-10,-7)} ${digits.slice(-7,-4)} ${digits.slice(-4)}`,
    national: digits.length >= 10 ? `(${digits.slice(-10,-7)}) ${digits.slice(-7,-4)}-${digits.slice(-4)}` : digits,
    dashes: digits.length >= 10 ? `${digits.slice(-10,-7)}-${digits.slice(-7,-4)}-${digits.slice(-4)}` : digits,
    dots: digits.length >= 10 ? `${digits.slice(-10,-7)}.${digits.slice(-7,-4)}.${digits.slice(-4)}` : digits,
  } : null;
  return (
    <div className="space-y-6">
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter phone number (e.g., 2125551234)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg font-mono" />
      {formats ? (
        <div className="grid gap-3">
          {Object.entries(formats).map(([label, val]) => (
            <div key={label} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              <div><span className="text-xs text-gray-400 uppercase font-semibold">{label}</span><div className="font-mono text-gray-900 font-medium">{val}</div></div>
              <button onClick={() => navigator.clipboard.writeText(val)} className="text-xs bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary-dark transition-colors">Copy</button>
            </div>
          ))}
        </div>
      ) : <p className="text-gray-400 text-center py-8">Enter at least 10 digits to format.</p>}
    </div>
  );
}
