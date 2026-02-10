import { useState } from 'react';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const format = () => { try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError(''); } catch (e: any) { setError(e.message); setOutput(''); } };
  const minify = () => { try { setOutput(JSON.stringify(JSON.parse(input))); setError(''); } catch (e: any) { setError(e.message); setOutput(''); } };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder='Paste JSON here...' rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-sm" />
      <div className="flex gap-2">
        <button onClick={format} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Beautify</button>
        <button onClick={minify} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Minify</button>
        <button onClick={() => output && navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Copy Output</button>
      </div>
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">❌ {error}</div>}
      {output && <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto text-sm">{output}</pre>}
    </div>
  );
}
