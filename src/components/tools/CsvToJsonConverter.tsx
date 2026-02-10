import { useState } from 'react';

export default function CsvToJsonConverter() {
  const [csv, setCsv] = useState('');
  const [json, setJson] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      const lines = csv.trim().split('\n').map(l => l.split(',').map(c => c.trim().replace(/^"|"$/g, '')));
      if (lines.length < 2) { setError('Need at least a header row and one data row'); return; }
      const headers = lines[0];
      const data = lines.slice(1).map(row => {
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => { obj[h] = row[i] || ''; });
        return obj;
      });
      setJson(JSON.stringify(data, null, 2));
      setError('');
    } catch (e: any) { setError(e.message); setJson(''); }
  };

  return (
    <div className="space-y-4">
      <textarea value={csv} onChange={e => setCsv(e.target.value)} placeholder="name,email,age&#10;John,john@example.com,30&#10;Jane,jane@example.com,25" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-sm" />
      <button onClick={convert} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Convert to JSON</button>
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">❌ {error}</div>}
      {json && (
        <div>
          <div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">JSON Output:</span><button onClick={() => navigator.clipboard.writeText(json)} className="text-xs text-primary hover:underline">Copy</button></div>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto text-sm">{json}</pre>
        </div>
      )}
    </div>
  );
}
