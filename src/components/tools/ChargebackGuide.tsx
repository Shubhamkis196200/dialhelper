export default function ChargebackGuide() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 text-lg mt-0">💳 Credit Card Chargeback Guide</h3>
        <p className="text-sm text-gray-600">A chargeback reverses a credit card charge through your bank when a merchant won't resolve an issue.</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">When to File a Chargeback:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Item never received', 'Item significantly not as described', 'Unauthorized charge/fraud', 'Charged wrong amount', 'Duplicate charge', 'Merchant won\'t process refund', 'Defective product, merchant unresponsive', 'Subscription charged after cancellation'].map((r, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3"><span className="text-green-500">✓</span><span className="text-sm">{r}</span></div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Steps to File:</h4>
        {[
          { t: 'Try the merchant first', d: 'Contact the merchant and attempt to resolve. Document everything — you\'ll need proof you tried.' },
          { t: 'Call your credit card company', d: 'Call the number on the back of your card. Tell them you want to dispute a charge.' },
          { t: 'Provide documentation', d: 'Receipts, emails, photos, tracking info — anything that supports your case.' },
          { t: 'Temporary credit issued', d: 'Most banks issue a provisional credit while they investigate (30-90 days).' },
          { t: 'Investigation & resolution', d: 'The bank contacts the merchant. If the merchant can\'t prove you received what you paid for, you win.' },
        ].map((s, i) => (
          <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
            <div><h5 className="font-semibold text-gray-900">{s.t}</h5><p className="text-sm text-gray-600">{s.d}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 className="font-semibold text-red-800">⚠️ Important</h4>
        <ul className="text-sm text-red-700 mt-2 space-y-1">
          <li>• File within 60 days of the statement date (120 days for some banks)</li>
          <li>• Don't abuse chargebacks — excessive disputes can get your account closed</li>
          <li>• Debit card disputes have weaker protections than credit cards</li>
        </ul>
      </div>
    </div>
  );
}
