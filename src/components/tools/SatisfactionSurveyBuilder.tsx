import { useState } from 'react';

export default function SatisfactionSurveyBuilder() {
  const [type, setType] = useState<'nps' | 'csat'>('nps');
  const [q, setQ] = useState('How likely are you to recommend us?');
  const [responses, setResponses] = useState<number[]>([]);

  const addResponse = (v: number) => setResponses([...responses, v]);
  const avg = responses.length ? (responses.reduce((a, b) => a + b, 0) / responses.length).toFixed(1) : '—';
  const npsScore = type === 'nps' && responses.length ? Math.round((responses.filter(r => r >= 9).length - responses.filter(r => r <= 6).length) / responses.length * 100) : null;

  return (
    <div className="space-y-6">
      <div className="flex gap-2">{(['nps', 'csat'] as const).map(t => <button key={t} onClick={() => { setType(t); setResponses([]); setQ(t === 'nps' ? 'How likely are you to recommend us?' : 'How satisfied are you with our service?'); }} className={`px-4 py-2 rounded-lg text-sm font-medium uppercase ${type === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>{t}</button>)}</div>
      <input type="text" value={q} onChange={e => setQ(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
        <h3 className="font-semibold text-gray-900 mb-4">{q}</h3>
        <div className="flex justify-center gap-1 flex-wrap">
          {Array.from({ length: type === 'nps' ? 11 : 5 }, (_, i) => type === 'nps' ? i : i + 1).map(v => (
            <button key={v} onClick={() => addResponse(v)} className="w-10 h-10 rounded-lg border border-gray-300 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors">{v}</button>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-2 flex justify-between px-2">
          <span>{type === 'nps' ? 'Not at all likely' : 'Very unsatisfied'}</span>
          <span>{type === 'nps' ? 'Extremely likely' : 'Very satisfied'}</span>
        </div>
      </div>
      {responses.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-primary">{responses.length}</div><div className="text-xs text-gray-500">Responses</div></div>
          <div className="bg-blue-50 rounded-lg p-4 text-center border"><div className="text-2xl font-bold text-primary">{avg}</div><div className="text-xs text-gray-500">Average</div></div>
          {npsScore !== null && <div className="bg-blue-50 rounded-lg p-4 text-center border"><div className={`text-2xl font-bold ${npsScore >= 0 ? 'text-green-600' : 'text-red-600'}`}>{npsScore}</div><div className="text-xs text-gray-500">NPS Score</div></div>}
        </div>
      )}
    </div>
  );
}
