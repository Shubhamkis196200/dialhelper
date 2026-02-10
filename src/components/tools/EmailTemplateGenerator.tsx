import { useState } from 'react';

const templates: Record<string, { subject: string; body: string }> = {
  complaint: { subject: 'Formal Complaint Regarding {issue}', body: `Dear {company} Customer Service,

I am writing to formally express my dissatisfaction with {issue}.

On {date}, I {description}. Despite my attempts to resolve this matter through {previousAttempts}, the issue remains unresolved.

I am requesting {resolution} within {timeframe} business days.

My account/order details:
- Account/Order #: {reference}
- Date of incident: {date}

I expect a prompt response to this matter. If I do not receive a satisfactory resolution, I will be forced to escalate this complaint to the relevant consumer protection agencies.

Sincerely,
{name}
{email}
{phone}` },
  followUp: { subject: 'Follow-Up: Case #{reference}', body: `Dear {company} Customer Service,

I am following up on my previous communication regarding {issue} (Reference #{reference}).

It has been {timeframe} since my initial contact, and I have not yet received a satisfactory resolution. I would appreciate an update on the status of my case.

Please respond at your earliest convenience.

Best regards,
{name}
{email}` },
  escalation: { subject: 'Escalation Request: {issue} — Case #{reference}', body: `Dear {company} Management,

I am writing to escalate an unresolved issue that your customer service team has been unable to address satisfactorily.

Issue: {issue}
Original case #: {reference}
Date first reported: {date}

Despite multiple attempts to resolve this through standard channels ({previousAttempts}), the matter remains unresolved. I am requesting that this be escalated to a supervisor or manager who can authorize {resolution}.

I have been a loyal customer for {tenure} and I trust that {company} values customer satisfaction.

I look forward to a prompt resolution.

Sincerely,
{name}
{email}
{phone}` },
};

export default function EmailTemplateGenerator() {
  const [type, setType] = useState<keyof typeof templates>('complaint');
  const [fields, setFields] = useState<Record<string, string>>({});
  const set = (k: string, v: string) => setFields({ ...fields, [k]: v });

  const fillTemplate = (t: string) => t.replace(/{(\w+)}/g, (_, k) => fields[k] || `[${k}]`);
  const tmpl = templates[type];

  const fieldNames = [...new Set((tmpl.subject + tmpl.body).match(/{(\w+)}/g)?.map(m => m.slice(1, -1)) || [])];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">{Object.keys(templates).map(t => <button key={t} onClick={() => setType(t as any)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${type === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{t}</button>)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fieldNames.map(f => <input key={f} type="text" value={fields[f] || ''} onChange={e => set(f, e.target.value)} placeholder={f.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />)}
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <div className="text-sm font-medium text-gray-500 mb-1">Subject:</div>
        <div className="font-semibold text-gray-900 mb-4">{fillTemplate(tmpl.subject)}</div>
        <div className="text-sm font-medium text-gray-500 mb-1">Body:</div>
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">{fillTemplate(tmpl.body)}</pre>
      </div>
      <button onClick={() => navigator.clipboard.writeText(`Subject: ${fillTemplate(tmpl.subject)}\n\n${fillTemplate(tmpl.body)}`)} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Copy Email</button>
    </div>
  );
}
