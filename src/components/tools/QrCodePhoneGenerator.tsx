import { useState } from 'react';

export default function QrCodePhoneGenerator() {
  const [phone, setPhone] = useState('');
  const digits = phone.replace(/\D/g, '');
  const telUri = `tel:+${digits}`;
  const qrUrl = digits.length >= 10 ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(telUri)}` : '';
  return (
    <div className="space-y-6">
      <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number with country code..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-lg font-mono" />
      {qrUrl && (
        <div className="text-center">
          <div className="inline-block bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <img src={qrUrl} alt="QR Code" className="w-[250px] h-[250px]" />
          </div>
          <p className="text-sm text-gray-500 mt-3">Scan to dial: <strong className="text-primary">{telUri}</strong></p>
          <a href={qrUrl} download="phone-qr.png" className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors">Download QR</a>
        </div>
      )}
      {!qrUrl && phone && <p className="text-center text-gray-400">Enter at least 10 digits.</p>}
    </div>
  );
}
