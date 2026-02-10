import { useState } from 'react';

export default function HtmlEntityEncoderDecoder() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const encode = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c));
  const decode = (s: string) => { const el = document.createElement('textarea'); el.innerHTML = s; return el.value; };
  const output = mode === 'encode' ? encode(input) : decode(input);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">{(['encode', 'decode'] as const).map(m => <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === m ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>{m === 'encode' ? 'Encode' : 'Decode'}</button>)}</div>
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'encode' ? 'Enter HTML to encode...' : 'Enter entities to decode...'} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-sm" />
      {input && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between mb-2"><span className="text-sm font-medium text-gray-700">Result:</span><button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-primary hover:underline">Copy</button></div>
          <pre className="font-mono text-sm break-all whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}
