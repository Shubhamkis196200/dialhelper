import { useState } from 'react';

interface Ticket { id: string; company: string; ref: string; status: string; date: string; notes: string; }

export default function TicketNumberTracker() {
  const [tickets, setTickets] = useState<Ticket[]>(() => { try { return JSON.parse(localStorage.getItem('tickets') || '[]'); } catch { return []; } });
  const [company, setCompany] = useState('');
  const [ref, setRef] = useState('');
  const [notes, setNotes] = useState('');

  const save = (t: Ticket[]) => { setTickets(t); localStorage.setItem('tickets', JSON.stringify(t)); };
  const add = () => { if (!ref) return; save([{ id: Date.now().toString(), company, ref, status: 'Open', date: new Date().toISOString().slice(0, 10), notes }, ...tickets]); setCompany(''); setRef(''); setNotes(''); };
  const toggle = (id: string) => save(tickets.map(t => t.id === id ? { ...t, status: t.status === 'Open' ? 'Resolved' : 'Open' } : t));
  const remove = (id: string) => save(tickets.filter(t => t.id !== id));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="text" value={ref} onChange={e => setRef(e.target.value)} placeholder="Ticket/Reference #" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <button onClick={add} className="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Add Ticket</button>
      </div>
      <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notes (optional)" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" />
      {tickets.length > 0 ? (
        <div className="space-y-2">{tickets.map(t => (
          <div key={t.id} className={`border rounded-lg p-4 flex items-center justify-between ${t.status === 'Resolved' ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
            <div>
              <div className="flex items-center gap-2"><span className="font-bold text-primary">{t.ref}</span><span className={`text-xs px-2 py-0.5 rounded-full ${t.status === 'Open' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{t.status}</span></div>
              <div className="text-sm text-gray-500">{t.company} • {t.date}</div>
              {t.notes && <div className="text-xs text-gray-400 mt-1">{t.notes}</div>}
            </div>
            <div className="flex gap-2"><button onClick={() => toggle(t.id)} className="text-xs text-primary hover:underline">{t.status === 'Open' ? 'Resolve' : 'Reopen'}</button><button onClick={() => remove(t.id)} className="text-xs text-red-500 hover:underline">Delete</button></div>
          </div>
        ))}</div>
      ) : <p className="text-center text-gray-400 py-8">No tickets tracked yet.</p>}
    </div>
  );
}
