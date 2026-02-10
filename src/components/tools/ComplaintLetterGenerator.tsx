import { useState } from 'react';

export default function ComplaintLetterGenerator() {
  const [f, setF] = useState({ name: '', address: '', company: '', companyAddress: '', date: new Date().toISOString().slice(0, 10), account: '', issue: '', details: '', resolution: '', deadline: '14' });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });

  const letter = `${f.name || '[Your Name]'}
${f.address || '[Your Address]'}

${f.date}

${f.company || '[Company Name]'}
${f.companyAddress || '[Company Address]'}

Re: Formal Complaint — Account #${f.account || '[Account Number]'}

Dear ${f.company || '[Company]'} Customer Service Department,

I am writing to formally register a complaint regarding ${f.issue || '[brief description of the issue]'}.

${f.details || '[Provide detailed description of the problem, including dates, interactions, and any previous attempts to resolve.]'}

As a resolution, I am requesting ${f.resolution || '[state your desired outcome: refund, replacement, credit, etc.]'}. I respectfully request that this matter be resolved within ${f.deadline} business days from the date of this letter.

Please confirm receipt of this complaint and provide me with a case reference number. If I do not receive a satisfactory response within the stated timeframe, I will pursue further action, including filing complaints with the appropriate consumer protection agencies.

I have enclosed copies of relevant documentation for your reference.

Sincerely,

${f.name || '[Your Name]'}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[['name', 'Your Name'], ['address', 'Your Address'], ['company', 'Company Name'], ['companyAddress', 'Company Address'], ['date', 'Date'], ['account', 'Account/Order #'], ['issue', 'Issue Summary'], ['resolution', 'Desired Resolution'], ['deadline', 'Response Deadline (days)']].map(([k, l]) => (
          <input key={k} type={k === 'date' ? 'date' : k === 'deadline' ? 'number' : 'text'} value={(f as any)[k]} onChange={e => set(k, e.target.value)} placeholder={l} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />
        ))}
        <textarea value={f.details} onChange={e => set('details', e.target.value)} placeholder="Detailed description..." rows={3} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm sm:col-span-2" />
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6"><pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">{letter}</pre></div>
      <button onClick={() => navigator.clipboard.writeText(letter)} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Copy Letter</button>
    </div>
  );
}
