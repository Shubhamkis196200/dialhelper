import { useState } from 'react';

export default function PriceMatchCalculator() {
  const [items, setItems] = useState([{ name: '', store1: '', price1: 0, store2: '', price2: 0 }]);
  const update = (i: number, k: string, v: any) => { const next = [...items]; (next[i] as any)[k] = v; setItems(next); };
  const add = () => setItems([...items, { name: '', store1: '', price1: 0, store2: '', price2: 0 }]);

  const totalSavings = items.reduce((s, item) => s + Math.max(0, item.price1 - item.price2), 0);

  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-end">
            <input type="text" value={item.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Item name" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" />
            <input type="text" value={item.store1} onChange={e => update(i, 'store1', e.target.value)} placeholder="Store 1" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" />
            <input type="number" value={item.price1 || ''} onChange={e => update(i, 'price1', Number(e.target.value))} placeholder="Price 1" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" />
            <input type="text" value={item.store2} onChange={e => update(i, 'store2', e.target.value)} placeholder="Store 2" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" />
            <input type="number" value={item.price2 || ''} onChange={e => update(i, 'price2', Number(e.target.value))} placeholder="Price 2" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" />
          </div>
          {item.price1 > 0 && item.price2 > 0 && (
            <div className={`mt-2 text-sm font-medium ${item.price2 < item.price1 ? 'text-green-600' : item.price2 > item.price1 ? 'text-red-600' : 'text-gray-500'}`}>
              {item.price2 < item.price1 ? `Save $${(item.price1 - item.price2).toFixed(2)} at ${item.store2 || 'Store 2'}` : item.price2 > item.price1 ? `${item.store1 || 'Store 1'} is cheaper by $${(item.price2 - item.price1).toFixed(2)}` : 'Same price'}
            </div>
          )}
        </div>
      ))}
      <button onClick={add} className="text-primary text-sm font-medium hover:underline">+ Add another item</button>
      {totalSavings > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-sm text-gray-500">Total Potential Savings</div>
          <div className="text-3xl font-bold text-green-600">${totalSavings.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}
