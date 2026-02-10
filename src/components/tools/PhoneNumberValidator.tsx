import { useState } from 'react';

export default function PhoneNumberValidator() {
  const [num, setNum] = useState('');
  const digits = num.replace(/\D/g, '');
  const checks = [
    { label: 'Has enough digits (10+)', pass: digits.length >= 10 },
    { label: 'Not too many digits (≤15)', pass: digits.length <= 15 && digits.length > 0 },
    { label: 'Starts with valid digit', pass: digits.length > 0 && !digits.startsWith('0') },
    { label: 'US/CA format (10 digits)', pass: digits.length === 10 || (digits.length === 11 && digits.startsWith('1')) },
    { label: 'E.164 compatible', pass: digits.length >= 10 && digits.length <= 15 },
  ];
  return (
    <div className="space-y-6">
      <input type="text" value={num} onChange={e => setNum(e.target.value)} placeholder="Enter phone number..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg font-mono" />
      {num && (
        <div className="space-y-2">
          <div className="text-sm text-gray-500">Extracted digits: <span className="font-mono font-bold">{digits || 'none'}</span> ({digits.length} digits)</div>
          {checks.map((c, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border ${c.pass ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
              <span>{c.pass ? '✅' : '❌'}</span><span className="text-sm">{c.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
