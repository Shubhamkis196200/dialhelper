import { useState } from 'react';

const templates = {
  professional: [
    "Hi, you've reached {name} at {company}. I'm currently unavailable. Please leave your name, number, and a brief message, and I'll return your call as soon as possible. Thank you.",
    "Thank you for calling {name} at {company}. I'm away from my desk right now. Please leave a detailed message and I'll get back to you within one business day.",
    "Hello, this is {name} with {company}. I'm unable to take your call at the moment. Please leave a message after the tone, and I'll return your call promptly. For urgent matters, please email {email}.",
  ],
  personal: [
    "Hey, you've reached {name}. Can't pick up right now — leave a message and I'll call you back!",
    "Hi there! This is {name}. I'm not available right now, but leave a message and I'll get back to you soon.",
    "You've reached {name}'s voicemail. Sorry I missed your call! Leave a message and I'll ring you back.",
  ],
  outOfOffice: [
    "Hi, you've reached {name}. I'm currently out of the office until {date} with limited access to voicemail. For immediate assistance, please contact {altContact}. Otherwise, leave a message and I'll return your call when I'm back.",
    "Thank you for calling {name} at {company}. I'm out of the office until {date}. Please contact {altContact} for urgent matters, or leave a message after the tone.",
  ],
};

export default function VoicemailGreetingGenerator() {
  const [type, setType] = useState<keyof typeof templates>('professional');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [altContact, setAltContact] = useState('');
  const [selected, setSelected] = useState(0);

  const greeting = templates[type][selected]
    ?.replace(/{name}/g, name || '[Your Name]')
    .replace(/{company}/g, company || '[Company]')
    .replace(/{email}/g, email || '[email]')
    .replace(/{date}/g, date || '[date]')
    .replace(/{altContact}/g, altContact || '[alternate contact]');

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {(['professional', 'personal', 'outOfOffice'] as const).map(t => (
          <button key={t} onClick={() => { setType(t); setSelected(0); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${type === t ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t === 'outOfOffice' ? 'Out of Office' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company Name" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        {type === 'professional' && <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (optional)" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />}
        {type === 'outOfOffice' && <>
          <input type="text" value={date} onChange={e => setDate(e.target.value)} placeholder="Return Date" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          <input type="text" value={altContact} onChange={e => setAltContact(e.target.value)} placeholder="Alternate Contact" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        </>}
      </div>
      <div className="flex gap-2">{templates[type].map((_, i) => <button key={i} onClick={() => setSelected(i)} className={`px-3 py-1.5 rounded-md text-sm ${selected === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>Template {i + 1}</button>)}</div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <p className="text-gray-800 leading-relaxed">{greeting}</p>
      </div>
      <button onClick={() => navigator.clipboard.writeText(greeting || '')} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Copy to Clipboard</button>
    </div>
  );
}
