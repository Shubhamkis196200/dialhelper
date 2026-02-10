export default function BbbRatingCheckerGuide() {
  return (
    <div className="space-y-6 prose prose-gray max-w-none">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mt-0">How to Check BBB Ratings</h3>
        <p className="text-sm text-gray-600 mb-0">The Better Business Bureau rates businesses on a scale of A+ to F. Here's how to use it.</p>
      </div>
      <div className="space-y-4">
        {[
          { step: '1', title: 'Go to BBB.org', desc: 'Visit bbb.org and use the search bar at the top of the page.' },
          { step: '2', title: 'Search by Company Name', desc: 'Enter the company name and location. BBB will show matching businesses.' },
          { step: '3', title: 'Check the Rating', desc: 'The letter grade (A+ to F) is based on complaint history, business age, licensing, and more.' },
          { step: '4', title: 'Read Complaints', desc: 'Scroll down to see actual customer complaints and the company\'s responses.' },
          { step: '5', title: 'Check "Accredited" Status', desc: 'Accredited businesses have agreed to BBB standards. Non-accredited can still be rated.' },
          { step: '6', title: 'File Your Own Complaint', desc: 'Click "File a Complaint" to submit your issue. BBB mediates between you and the business.' },
        ].map(s => (
          <div key={s.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
            <div><h4 className="font-semibold text-gray-900">{s.title}</h4><p className="text-sm text-gray-600 mt-0.5">{s.desc}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h4 className="font-semibold text-yellow-800">⚠️ Keep in Mind</h4>
        <ul className="text-sm text-yellow-700 mt-2 space-y-1">
          <li>BBB ratings aren't the only indicator of quality — some great businesses aren't listed</li>
          <li>Accreditation requires a fee, so some good businesses choose not to pay</li>
          <li>Always read the actual complaints, not just the letter grade</li>
        </ul>
      </div>
      <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors no-underline">Visit BBB.org →</a>
    </div>
  );
}
