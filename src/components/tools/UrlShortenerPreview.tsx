import { useState } from 'react';

export default function UrlShortenerPreview() {
  const [url, setUrl] = useState('');
  const shorteners = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly', 'amzn.to', 'rb.gy'];
  const isShort = shorteners.some(s => url.includes(s)) || url.length < 30;

  return (
    <div className="space-y-6">
      <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="Paste a shortened URL..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Safety Check</h3>
        <p className="text-sm text-yellow-700 mb-4">For security reasons, browsers prevent direct URL resolution from JavaScript. Use these trusted services to preview short URLs:</p>
        <div className="space-y-3">
          <a href={`https://checkshorturl.com/expand.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-3 border border-yellow-200 hover:shadow-md transition-shadow"><strong>CheckShortURL.com</strong><span className="text-sm text-gray-500 ml-2">— Expands and previews short URLs</span></a>
          <a href={`https://unshorten.it/?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-3 border border-yellow-200 hover:shadow-md transition-shadow"><strong>Unshorten.it</strong><span className="text-sm text-gray-500 ml-2">— Shows full URL + safety check</span></a>
          <a href={`https://www.getlinkinfo.com/info?link=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-3 border border-yellow-200 hover:shadow-md transition-shadow"><strong>GetLinkInfo.com</strong><span className="text-sm text-gray-500 ml-2">— Detailed link information</span></a>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        <strong>Common short URL services:</strong> {shorteners.join(', ')}
      </div>
    </div>
  );
}
