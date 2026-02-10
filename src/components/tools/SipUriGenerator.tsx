import { useState } from 'react';

export default function SipUriGenerator() {
  const [user, setUser] = useState('');
  const [domain, setDomain] = useState('');
  const [port, setPort] = useState('5060');
  const [transport, setTransport] = useState('udp');
  const uri = user && domain ? `sip:${user}@${domain}${port !== '5060' ? ':' + port : ''}${transport !== 'udp' ? ';transport=' + transport : ''}` : '';
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Username / Extension</label><input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="john.doe or 1001" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Domain / IP</label><input type="text" value={domain} onChange={e => setDomain(e.target.value)} placeholder="sip.example.com" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Port</label><input type="text" value={port} onChange={e => setPort(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Transport</label><select value={transport} onChange={e => setTransport(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"><option value="udp">UDP</option><option value="tcp">TCP</option><option value="tls">TLS</option></select></div>
      </div>
      {uri && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="text-sm text-gray-500 mb-1">Generated SIP URI:</div>
          <div className="font-mono text-lg text-primary font-bold break-all">{uri}</div>
          <button onClick={() => navigator.clipboard.writeText(uri)} className="mt-3 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors">Copy</button>
        </div>
      )}
    </div>
  );
}
