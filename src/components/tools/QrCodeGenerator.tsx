import { useState } from 'react';

export default function QrCodeGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(300);
  const qrUrl = text ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}` : '';
  return (
    <div className="space-y-6">
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter text, URL, phone number, or email..." rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <div><label className="text-sm font-medium text-gray-700">Size: {size}px</label><input type="range" min={100} max={500} step={50} value={size} onChange={e => setSize(Number(e.target.value))} className="w-full mt-1" /></div>
      {qrUrl && (
        <div className="text-center">
          <div className="inline-block bg-white p-4 rounded-xl border shadow-sm"><img src={qrUrl} alt="QR Code" style={{ width: size, height: size }} /></div>
          <div className="mt-3"><a href={qrUrl} download="qr-code.png" className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors">Download</a></div>
        </div>
      )}
    </div>
  );
}
