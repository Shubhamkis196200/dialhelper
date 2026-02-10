import { useState } from 'react';

export default function CustomerServiceScriptBuilder() {
  const [company, setCompany] = useState('');
  const [issue, setIssue] = useState('');
  const [desired, setDesired] = useState('');
  const [ref, setRef] = useState('');

  const script = `Opening:
"Hi, my name is [Your Name]. I'm calling about ${issue || '[your issue]'} with my account${ref ? ` (reference #${ref})` : ''} at ${company || '[company]'}."

State the Problem:
"The issue is ${issue || '[describe issue clearly]'}. This has been going on since [date]."

Request Resolution:
"What I'd like is ${desired || '[your desired outcome]'}."

If Transferred:
"I was just speaking with [previous agent's name] about ${issue || 'my issue'}. Can you pull up my case?"

If They Can't Help:
"I understand. Can I speak with a supervisor who might have the authority to resolve this?"

Escalation:
"I've been a customer for [X years] and I'd like to get this resolved today. If we can't reach a solution, I may need to file a complaint with [BBB/FCC/state AG]."

Closing:
"Thank you for your help. Can I get a reference number for this call? And your name for my records?"`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="text" value={ref} onChange={e => setRef(e.target.value)} placeholder="Reference/Account # (optional)" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="text" value={issue} onChange={e => setIssue(e.target.value)} placeholder="Brief description of issue" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none sm:col-span-2" />
        <input type="text" value={desired} onChange={e => setDesired(e.target.value)} placeholder="Desired outcome (refund, fix, etc.)" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none sm:col-span-2" />
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans leading-relaxed">{script}</pre>
      </div>
      <button onClick={() => navigator.clipboard.writeText(script)} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Copy Script</button>
    </div>
  );
}
