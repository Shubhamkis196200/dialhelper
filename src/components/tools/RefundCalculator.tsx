import { useState } from 'react';

export default function RefundCalculator() {
  const [amount, setAmount] = useState(100);
  const [daysOwned, setDaysOwned] = useState(10);
  const [returnWindow, setReturnWindow] = useState(30);
  const [restocking, setRestocking] = useState(0);
  const [shipping, setShipping] = useState(0);

  const eligible = daysOwned <= returnWindow;
  const restockFee = amount * (restocking / 100);
  const refund = eligible ? Math.max(0, amount - restockFee - shipping) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Purchase Amount ($)</label><input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} min={0} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Days Since Purchase</label><input type="number" value={daysOwned} onChange={e => setDaysOwned(Number(e.target.value))} min={0} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Return Window (days)</label><input type="number" value={returnWindow} onChange={e => setReturnWindow(Number(e.target.value))} min={0} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Restocking Fee (%)</label><input type="number" value={restocking} onChange={e => setRestocking(Number(e.target.value))} min={0} max={100} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Return Shipping ($)</label><input type="number" value={shipping} onChange={e => setShipping(Number(e.target.value))} min={0} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
      </div>
      <div className={`p-6 rounded-xl border-2 text-center ${eligible ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
        <div className="text-sm text-gray-500 mb-1">{eligible ? 'Estimated Refund' : 'Outside Return Window'}</div>
        <div className="text-4xl font-bold text-primary">${refund.toFixed(2)}</div>
        {eligible && (restockFee > 0 || shipping > 0) && (
          <div className="text-sm text-gray-500 mt-2">
            Original: ${amount.toFixed(2)}{restockFee > 0 ? ` — Restocking: $${restockFee.toFixed(2)}` : ''}{shipping > 0 ? ` — Shipping: $${shipping.toFixed(2)}` : ''}
          </div>
        )}
      </div>
    </div>
  );
}
