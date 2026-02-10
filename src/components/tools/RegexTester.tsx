import { useState } from 'react';

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('gi');
  const [text, setText] = useState('');
  let matches: RegExpMatchArray[] = [];
  let error = '';
  try {
    if (pattern) {
      const re = new RegExp(pattern, flags);
      let m; while ((m = re.exec(text)) !== null) { matches.push(m); if (!re.global) break; }
    }
  } catch (e: any) { error = e.message; }

  const highlight = () => {
    if (!pattern || error) return text;
    try {
      const re = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g');
      return text.replace(re, m => `<mark class="bg-yellow-300 rounded px-0.5">${m}</mark>`);
    } catch { return text; }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input type="text" value={pattern} onChange={e => setPattern(e.target.value)} placeholder="Regex pattern..." className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono" />
        <input type="text" value={flags} onChange={e => setFlags(e.target.value)} placeholder="gi" className="w-16 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-center" />
      </div>
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-red-700 text-sm">❌ {error}</div>}
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Test string..." rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Matches: <span className="text-primary">{matches.length}</span></div>
        <div className="whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: highlight() }} />
      </div>
      {matches.length > 0 && (
        <div className="text-sm"><h4 className="font-medium text-gray-700 mb-1">Match details:</h4>
          {matches.slice(0, 20).map((m, i) => <div key={i} className="font-mono text-xs text-gray-600">Match {i + 1}: "{m[0]}" at index {m.index}</div>)}
        </div>
      )}
    </div>
  );
}
