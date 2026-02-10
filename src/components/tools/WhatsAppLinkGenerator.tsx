import { useState } from 'react';

export default function WhatsAppLinkGenerator() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const digits = phone.replace(/\D/g, '');
  const link = digits ? `https://wa.me/${digits}${message ? '?text=' + encodeURIComponent(message) : ''}` : '';
  return (
    <div className="space-y-6">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (with country code)</label><input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="1234567890" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-lg font-mono" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Pre-filled Message (optional)</label><textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Hi, I'm interested in..." rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
      {link && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="text-sm text-gray-500 mb-1">Generated WhatsApp Link:</div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-green-700 font-mono text-sm break-all hover:underline">{link}</a>
          <div className="flex gap-2 mt-3">
            <button onClick={() => navigator.clipboard.writeText(link)} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">Copy Link</button>
            <a href={link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-green-300 text-green-700 rounded-lg text-sm hover:bg-green-50 transition-colors">Test Link</a>
          </div>
        </div>
      )}
    </div>
  );
}
