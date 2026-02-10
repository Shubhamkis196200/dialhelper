import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, '').length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(s => s.trim()).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const speakingTime = Math.max(1, Math.ceil(words / 130));

  return (
    <div className="space-y-6">
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type your text here..." rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[['Words', words], ['Characters', chars], ['No Spaces', charsNoSpace], ['Sentences', sentences], ['Paragraphs', paragraphs], ['Read Time', `${readingTime}m`]].map(([label, val]) => (
          <div key={label as string} className="bg-gray-50 rounded-lg p-3 text-center border"><div className="text-xl font-bold text-gray-900">{val}</div><div className="text-xs text-gray-500">{label}</div></div>
        ))}
      </div>
      <div className="text-sm text-gray-500 text-center">📖 ~{readingTime} min reading time • 🗣️ ~{speakingTime} min speaking time</div>
    </div>
  );
}
