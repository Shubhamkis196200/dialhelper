import { useState } from 'react';

const loremWords = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');

function gen(count: number, unit: 'words' | 'sentences' | 'paragraphs'): string {
  const word = () => loremWords[Math.floor(Math.random() * loremWords.length)];
  const sentence = () => { const len = 8 + Math.floor(Math.random() * 12); const s = Array.from({ length: len }, word).join(' '); return s.charAt(0).toUpperCase() + s.slice(1) + '.'; };
  const paragraph = () => Array.from({ length: 3 + Math.floor(Math.random() * 4) }, sentence).join(' ');
  if (unit === 'words') return Array.from({ length: count }, word).join(' ');
  if (unit === 'sentences') return Array.from({ length: count }, sentence).join(' ');
  return Array.from({ length: count }, paragraph).join('\n\n');
}

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<'words' | 'sentences' | 'paragraphs'>('paragraphs');
  const [output, setOutput] = useState('');
  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-end flex-wrap">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Count</label><input type="number" value={count} onChange={e => setCount(Number(e.target.value))} min={1} max={100} className="w-24 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Unit</label><select value={unit} onChange={e => setUnit(e.target.value as any)} className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none">{['words', 'sentences', 'paragraphs'].map(u => <option key={u} value={u}>{u}</option>)}</select></div>
        <button onClick={() => setOutput(gen(count, unit))} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Generate</button>
      </div>
      {output && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex justify-between mb-3"><span className="text-sm text-gray-500">{output.split(/\s+/).length} words</span><button onClick={() => navigator.clipboard.writeText(output)} className="text-xs text-primary hover:underline">Copy</button></div>
          <p className="text-gray-700 whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
}
