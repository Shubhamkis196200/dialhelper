import { useState } from 'react';

const states: Record<string, { agency: string; url: string; phone: string; keyLaws: string[] }> = {
  'California': { agency: 'Dept. of Consumer Affairs', url: 'https://www.dca.ca.gov', phone: '1-800-952-5210', keyLaws: ['30-day right to cancel most contracts', 'Lemon Law for vehicles', 'Song-Beverly Consumer Warranty Act', 'Data privacy (CCPA)'] },
  'New York': { agency: 'Division of Consumer Protection', url: 'https://dos.ny.gov/consumer-protection', phone: '1-800-697-1220', keyLaws: ['Implied warranty protections', 'Plain language contracts', 'Robocall restrictions', 'Door-to-door sales 3-day right to cancel'] },
  'Texas': { agency: 'Office of Consumer Credit Commissioner', url: 'https://www.oag.state.tx.us', phone: '1-800-621-0508', keyLaws: ['Deceptive Trade Practices Act', 'Lemon Law', 'Right to cancel gym memberships within 3 days', 'Warranty protections'] },
  'Florida': { agency: 'Div. of Consumer Services', url: 'https://www.fdacs.gov', phone: '1-800-435-7352', keyLaws: ['Florida Deceptive and Unfair Trade Practices Act', '3-day cooling off period', 'Lemon Law', 'Price gouging protections'] },
  'Illinois': { agency: 'Attorney General Consumer Protection', url: 'https://www.illinoisattorneygeneral.gov', phone: '1-800-386-5438', keyLaws: ['Consumer Fraud and Deceptive Business Practices Act', 'Lemon Law', 'Gift card protections', 'Identity theft protections'] },
  'Pennsylvania': { agency: 'Bureau of Consumer Protection', url: 'https://www.attorneygeneral.gov', phone: '1-800-441-2555', keyLaws: ['Unfair Trade Practices and Consumer Protection Law', 'Lemon Law', 'Plain language contract requirements'] },
  'Ohio': { agency: 'Attorney General Consumer Protection', url: 'https://www.ohioattorneygeneral.gov', phone: '1-800-282-0515', keyLaws: ['Consumer Sales Practices Act', 'Lemon Law', 'Home repair protections'] },
  'Georgia': { agency: 'Governor\'s Office of Consumer Protection', url: 'https://consumer.georgia.gov', phone: '404-651-8600', keyLaws: ['Fair Business Practices Act', 'Lemon Law', 'Debt collection protections'] },
};

export default function ConsumerRightsReference() {
  const [state, setState] = useState('California');
  const info = states[state];
  return (
    <div className="space-y-6">
      <select value={state} onChange={e => setState(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-lg">
        {Object.keys(states).map(s => <option key={s}>{s}</option>)}
      </select>
      {info && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 text-lg">{state} Consumer Protection</h3>
            <div className="mt-3 space-y-1 text-sm">
              <div><strong>Agency:</strong> {info.agency}</div>
              <div><strong>Phone:</strong> <a href={`tel:${info.phone}`} className="text-primary">{info.phone}</a></div>
              <div><strong>Website:</strong> <a href={info.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{info.url}</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Consumer Protection Laws:</h4>
            <ul className="space-y-2">{info.keyLaws.map((law, i) => <li key={i} className="flex items-start gap-2 bg-white border border-gray-200 rounded-lg p-3"><span className="text-green-500">✓</span><span className="text-sm">{law}</span></li>)}</ul>
          </div>
        </div>
      )}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        <strong>Federal protections that apply in all states:</strong> FTC Act (unfair/deceptive practices), Fair Credit Reporting Act, Truth in Lending Act, Fair Debt Collection Practices Act, Magnuson-Moss Warranty Act.
      </div>
    </div>
  );
}
