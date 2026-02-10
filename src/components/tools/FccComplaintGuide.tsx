export default function FccComplaintGuide() {
  const steps = [
    { step: '1', title: 'Determine If FCC Handles Your Issue', desc: 'The FCC handles complaints about phone (landline, wireless), internet, TV/radio, and robocalls/spam. For billing disputes with specific companies, try the company first.' },
    { step: '2', title: 'Gather Your Information', desc: 'You\'ll need: your name and contact info, the company name, account number, dates of the issue, description of the problem, and any reference numbers from previous contacts.' },
    { step: '3', title: 'File Online at FCC.gov', desc: 'Go to consumercomplaints.fcc.gov and select your issue category. The online form is the fastest way to file.' },
    { step: '4', title: 'Choose Your Category', items: ['Phone (billing, service, slamming, cramming)', 'Internet (speed, billing, availability)', 'TV (cable, satellite, antenna)', 'Robocalls and unwanted calls', 'Accessibility issues'] },
    { step: '5', title: 'Submit and Get a Ticket Number', desc: 'After submitting, you\'ll receive a confirmation with a tracking number. Save this.' },
    { step: '6', title: 'Company Must Respond in 30 Days', desc: 'The FCC forwards your complaint to the company, which must respond to you within 30 days. The FCC reviews to ensure compliance.' },
    { step: '7', title: 'Follow Up', desc: 'If the company\'s response is unsatisfactory, you can add to your complaint or file an "informal complaint" (free) or "formal complaint" ($225 fee, like a legal proceeding).' },
  ];
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 text-lg mt-0">📋 Filing an FCC Complaint</h3>
        <p className="text-sm text-gray-600">Use this when telecom/internet companies won't resolve your issue directly.</p>
      </div>
      <div className="space-y-3">
        {steps.map(s => (
          <div key={s.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
            <div>
              <h4 className="font-semibold text-gray-900">{s.title}</h4>
              {s.desc && <p className="text-sm text-gray-600 mt-0.5">{s.desc}</p>}
              {s.items && <ul className="mt-2 space-y-1">{s.items.map((item, i) => <li key={i} className="text-sm text-gray-600 flex items-center gap-1">• {item}</li>)}</ul>}
            </div>
          </div>
        ))}
      </div>
      <a href="https://consumercomplaints.fcc.gov" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">File FCC Complaint →</a>
    </div>
  );
}
