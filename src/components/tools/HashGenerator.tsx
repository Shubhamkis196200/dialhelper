import { useState } from 'react';

async function hash(algo: string, text: string): Promise<string> {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function HashGenerator() {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const generate = async () => {
    if (!input) return;
    const [md5Placeholder, sha1, sha256, sha512] = await Promise.all([
      Promise.resolve('(MD5 not available in Web Crypto)'),
      hash('SHA-1', input), hash('SHA-256', input), hash('SHA-512', input),
    ]);
    setHashes({ 'SHA-1': sha1, 'SHA-256': sha256, 'SHA-512': sha512 });
  };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text to hash..." rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <button onClick={generate} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Generate Hashes</button>
      {Object.keys(hashes).length > 0 && (
        <div className="space-y-3">
          {Object.entries(hashes).map(([algo, val]) => (
            <div key={algo} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-gray-500">{algo}</span><button onClick={() => navigator.clipboard.writeText(val)} className="text-xs text-primary hover:underline">Copy</button></div>
              <div className="font-mono text-xs break-all text-gray-800">{val}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
