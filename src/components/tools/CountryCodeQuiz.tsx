import { useState } from 'react';

const quizData = [
  { country: 'United States', code: '+1' }, { country: 'United Kingdom', code: '+44' }, { country: 'Japan', code: '+81' },
  { country: 'Australia', code: '+61' }, { country: 'India', code: '+91' }, { country: 'Germany', code: '+49' },
  { country: 'France', code: '+33' }, { country: 'China', code: '+86' }, { country: 'Brazil', code: '+55' },
  { country: 'Mexico', code: '+52' }, { country: 'Russia', code: '+7' }, { country: 'South Korea', code: '+82' },
  { country: 'Italy', code: '+39' }, { country: 'Spain', code: '+34' }, { country: 'Canada', code: '+1' },
  { country: 'Turkey', code: '+90' }, { country: 'Saudi Arabia', code: '+966' }, { country: 'South Africa', code: '+27' },
  { country: 'Nigeria', code: '+234' }, { country: 'Egypt', code: '+20' },
];

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

function genOptions(correct: string): string[] {
  const all = [...new Set(quizData.map(q => q.code))].filter(c => c !== correct);
  const opts = shuffle(all).slice(0, 3);
  opts.push(correct);
  return shuffle(opts);
}

export default function CountryCodeQuiz() {
  const [questions] = useState(() => shuffle(quizData).slice(0, 10).map(q => ({ ...q, options: genOptions(q.code) })));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.code) setScore(s => s + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) { setDone(true); } else { setCurrent(c => c + 1); setSelected(null); }
    }, 1000);
  };

  if (done) return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">{score >= 8 ? '🏆' : score >= 5 ? '👍' : '📚'}</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
      <p className="text-lg text-gray-600">You got <span className="text-primary font-bold">{score}/{questions.length}</span> correct</p>
      <button onClick={() => { setCurrent(0); setScore(0); setSelected(null); setDone(false); }} className="mt-6 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Play Again</button>
    </div>
  );

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="flex justify-between items-center text-sm text-gray-500"><span>Question {current + 1}/{questions.length}</span><span>Score: {score}</span></div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <p className="text-sm text-gray-500 mb-2">What is the dialing code for...</p>
        <p className="text-2xl font-bold text-gray-900">{q.country}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map(opt => {
          let cls = 'border-gray-200 bg-white hover:border-primary';
          if (selected) { if (opt === q.code) cls = 'border-green-500 bg-green-50'; else if (opt === selected) cls = 'border-red-500 bg-red-50'; }
          return <button key={opt} onClick={() => handleSelect(opt)} className={`px-4 py-3 rounded-lg border-2 font-mono font-bold text-lg transition-colors ${cls}`}>{opt}</button>;
        })}
      </div>
    </div>
  );
}
