import { useState } from 'react';

export default function Base64EncoderDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    try {
      setOutput(mode === 'encode' ? btoa(unescape(encodeURIComponent(input))) : decodeURIComponent(escape(atob(input))));
    } catch { setOutput('Error: Invalid input'); }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['encode', 'decode'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === m ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>{m === 'encode' ? 'Encode' : 'Decode'}</button>
        ))}
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-sm" />
      <button onClick={process} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">{mode === 'encode' ? 'Encode' : 'Decode'}</button>
      {output && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">Result:</span><button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-primary hover:underline">Copy</button></div>
          <pre className="font-mono text-sm break-all whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}
