export default function ReversePhoneLookupGuide() {
  const methods = [
    { name: 'Google Search', desc: 'Simply search the phone number in quotes on Google. Often reveals the owner, business, or spam reports.', free: true },
    { name: 'WhitePages.com', desc: 'One of the largest phone directories. Basic info is free; detailed reports require payment.', free: true },
    { name: 'TrueCaller', desc: 'Popular app that identifies callers using a crowdsourced database. Free basic lookups.', free: true },
    { name: 'USPhoneBook.com', desc: 'Free reverse phone lookup service that shows name and address associated with a number.', free: true },
    { name: 'Social Media Search', desc: 'Search the number on Facebook, LinkedIn, or other social platforms — people often link their numbers.', free: true },
    { name: 'Spokeo', desc: 'Aggregates public records for phone lookups. Limited free results; full reports are paid.', free: false },
    { name: 'BeenVerified', desc: 'Comprehensive background check service. Paid subscription required for detailed reports.', free: false },
    { name: 'Intelius', desc: 'People search engine with reverse phone lookup. Paid service with detailed reports.', free: false },
  ];
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">📱 How to Look Up Unknown Numbers</h3>
        <p className="text-sm text-gray-600">Got a call from an unknown number? Here are the best ways to find out who called you, from free to paid options.</p>
      </div>
      <div className="space-y-3">
        {methods.map((m, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-gray-900">{i + 1}. {m.name}</h4>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.free ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{m.free ? 'Free' : 'Paid'}</span>
            </div>
            <p className="text-sm text-gray-600">{m.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-semibold text-yellow-800 mb-1">⚠️ Beware of Scams</h3>
        <p className="text-sm text-yellow-700">Many "free reverse lookup" sites are scams that collect your data. Stick to reputable services listed above.</p>
      </div>
    </div>
  );
}
