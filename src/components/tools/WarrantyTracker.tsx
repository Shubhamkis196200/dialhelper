import { useState } from 'react';

interface Warranty { id: string; product: string; brand: string; purchaseDate: string; warrantyMonths: number; notes: string; }

export default function WarrantyTracker() {
  const [items, setItems] = useState<Warranty[]>(() => { try { return JSON.parse(localStorage.getItem('warranties') || '[]'); } catch { return []; } });
  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [warrantyMonths, setWarrantyMonths] = useState(12);
  const [notes, setNotes] = useState('');

  const save = (w: Warranty[]) => { setItems(w); localStorage.setItem('warranties', JSON.stringify(w)); };
  const add = () => {
    if (!product || !purchaseDate) return;
    save([{ id: Date.now().toString(), product, brand, purchaseDate, warrantyMonths, notes }, ...items]);
    setProduct(''); setBrand(''); setPurchaseDate(''); setNotes('');
  };
  const remove = (id: string) => save(items.filter(w => w.id !== id));

  const getExpiry = (w: Warranty) => { const d = new Date(w.purchaseDate); d.setMonth(d.getMonth() + w.warrantyMonths); return d; };
  const isExpired = (w: Warranty) => getExpiry(w) < new Date();
  const daysLeft = (w: Warranty) => Math.ceil((getExpiry(w).getTime() - Date.now()) / 86400000);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input type="text" value={product} onChange={e => setProduct(e.target.value)} placeholder="Product name" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="text" value={brand} onChange={e => setBrand(e.target.value)} placeholder="Brand" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input type="date" value={purchaseDate} onChange={e => setPurchaseDate(e.target.value)} className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <div className="flex gap-2 items-center">
          <input type="number" value={warrantyMonths} onChange={e => setWarrantyMonths(Number(e.target.value))} min={1} className="w-20 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          <span className="text-sm text-gray-500">months</span>
        </div>
        <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notes (optional)" className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none sm:col-span-2" />
      </div>
      <button onClick={add} className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Add Warranty</button>
      {items.length > 0 ? (
        <div className="space-y-2">{items.map(w => {
          const expired = isExpired(w);
          const days = daysLeft(w);
          return (
            <div key={w.id} className={`border rounded-lg p-4 ${expired ? 'bg-red-50 border-red-200' : days < 30 ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">{w.product}</div>
                  <div className="text-sm text-gray-500">{w.brand} • Purchased: {w.purchaseDate}</div>
                  {w.notes && <div className="text-xs text-gray-400 mt-1">{w.notes}</div>}
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${expired ? 'text-red-600' : days < 30 ? 'text-yellow-600' : 'text-green-600'}`}>{expired ? 'Expired' : `${days} days left`}</div>
                  <div className="text-xs text-gray-400">Expires: {getExpiry(w).toLocaleDateString()}</div>
                  <button onClick={() => remove(w.id)} className="text-xs text-red-400 hover:text-red-600 mt-1">Remove</button>
                </div>
              </div>
            </div>
          );
        })}</div>
      ) : <p className="text-center text-gray-400 py-8">No warranties tracked yet.</p>}
    </div>
  );
}
