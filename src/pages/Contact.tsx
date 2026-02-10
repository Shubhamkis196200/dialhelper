import SEO from '@/components/SEO';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us - DialHelper" description="Contact the DialHelper team." />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">Have a correction, want to add a company, or have a question?</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600"><Mail className="w-5 h-5 text-primary" /><a href="mailto:hello@dialhelper.com" className="hover:text-primary">hello@dialhelper.com</a></div>
              <div className="flex items-center gap-3 text-gray-600"><MapPin className="w-5 h-5 text-primary" /><span>United States</span></div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary" />
            <input type="email" placeholder="Your email" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary" />
            <textarea rows={4} placeholder="Your message" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary resize-none" />
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
