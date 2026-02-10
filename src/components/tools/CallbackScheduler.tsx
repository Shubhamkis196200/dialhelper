import { useState } from 'react';

export default function CallbackScheduler() {
  const [bizOpen, setBizOpen] = useState('09:00');
  const [bizClose, setBizClose] = useState('17:00');
  const [bizTz, setBizTz] = useState('America/New_York');
  const [myTz, setMyTz] = useState('America/Los_Angeles');

  const tzList = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'Europe/London', 'Europe/Paris', 'Asia/Tokyo', 'Asia/Kolkata', 'Australia/Sydney'];

  const now = new Date();
  const bizNow = now.toLocaleString('en-US', { timeZone: bizTz, hour: '2-digit', minute: '2-digit', hour12: false });
  const myNow = now.toLocaleString('en-US', { timeZone: myTz, hour: '2-digit', minute: '2-digit', hour12: true });
  const isOpen = bizNow >= bizOpen && bizNow < bizClose;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Timezone</label>
          <select value={bizTz} onChange={e => setBizTz(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{tzList.map(t => <option key={t} value={t}>{t}</option>)}</select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Timezone</label>
          <select value={myTz} onChange={e => setMyTz(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{tzList.map(t => <option key={t} value={t}>{t}</option>)}</select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opens At</label>
          <input type="time" value={bizOpen} onChange={e => setBizOpen(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Closes At</label>
          <input type="time" value={bizClose} onChange={e => setBizClose(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        </div>
      </div>
      <div className={`p-6 rounded-xl border-2 text-center ${isOpen ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
        <div className="text-3xl mb-2">{isOpen ? '🟢' : '🔴'}</div>
        <h3 className="text-xl font-bold">{isOpen ? 'Currently Open!' : 'Currently Closed'}</h3>
        <p className="text-sm text-gray-600 mt-1">Business time: {bizNow} | Your time: {myNow}</p>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">💡 Tip</h3>
        <p className="text-sm text-gray-600">Best time to call: right when they open at {bizOpen} ({bizTz.split('/')[1]?.replace('_', ' ')}) — wait times are typically shortest in the first hour.</p>
      </div>
    </div>
  );
}
