import { useState } from 'react';

export default function CancellationLetterGenerator() {
  const [f, setF] = useState({ name: '', address: '', company: '', service: '', account: '', date: new Date().toISOString().slice(0, 10), reason: '' });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });

  const letter = `${f.name || '[Your Name]'}
${f.address || '[Your Address]'}

${f.date}

${f.company || '[Company Name]'}
Cancellation Department

Re: Cancellation of ${f.service || '[Service/Subscription]'} — Account #${f.account || '[Account Number]'}

To Whom It May Concern,

I am writing to formally request the cancellation of my ${f.service || '[service/subscription]'} account, effective immediately.

Account Details:
- Account Holder: ${f.name || '[Your Name]'}
- Account Number: ${f.account || '[Account Number]'}
- Service: ${f.service || '[Service Name]'}

${f.reason ? `Reason for cancellation: ${f.reason}\n` : ''}Please confirm the cancellation in writing and ensure that no further charges are applied to my account. If there is a final bill, please send it to the address listed above.

Please also confirm:
1. The effective date of cancellation
2. Any final charges or credits on my account
3. Instructions for returning any equipment (if applicable)

Thank you for your prompt attention to this matter.

Sincerely,
${f.name || '[Your Name]'}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[['name', 'Your Name'], ['address', 'Your Address'], ['company', 'Company Name'], ['service', 'Service/Subscription'], ['account', 'Account Number'], ['reason', 'Reason (optional)']].map(([k, l]) => (
          <input key={k} type="text" value={(f as any)[k]} onChange={e => set(k, e.target.value)} placeholder={l} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />
        ))}
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6"><pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">{letter}</pre></div>
      <button onClick={() => navigator.clipboard.writeText(letter)} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Copy Letter</button>
    </div>
  );
}
