import { useState } from 'react';

export default function SmsCharacterCounter() {
  const [text, setText] = useState('');
  const isGsm = /^[\x20-\x7E\n\r]*$/.test(text);
  const charLimit = isGsm ? 160 : 70;
  const multiLimit = isGsm ? 153 : 67;
  const segments = text.length === 0 ? 0 : text.length <= charLimit ? 1 : Math.ceil(text.length / multiLimit);
  const remaining = segments <= 1 ? charLimit - text.length : (segments * multiLimit) - text.length;

  return (
    <div className="space-y-6">
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type your SMS message here..." rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-lg" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-gray-900">{text.length}</div><div className="text-xs text-gray-500">Characters</div></div>
        <div className="bg-gray-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-primary">{segments}</div><div className="text-xs text-gray-500">Segments</div></div>
        <div className="bg-gray-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-green-600">{Math.max(0, remaining)}</div><div className="text-xs text-gray-500">Remaining</div></div>
        <div className="bg-gray-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-gray-900">{isGsm ? 'GSM-7' : 'UCS-2'}</div><div className="text-xs text-gray-500">Encoding</div></div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>💡 Tip:</strong> GSM-7 encoding (standard ASCII) allows 160 chars per segment. Using emoji, special characters, or non-Latin scripts triggers UCS-2 encoding, which limits each segment to 70 characters.
      </div>
    </div>
  );
}
