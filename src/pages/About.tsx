import SEO from '@/components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About DialHelper" description="DialHelper helps you find customer service phone numbers, wait times, and tips to reach a human faster." />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About DialHelper</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>DialHelper is a customer service directory designed to help you contact any company quickly. We provide verified phone numbers, estimated wait times, and tips to reach a real person.</p>
          <h2 className="text-xl font-bold text-gray-900 pt-4">Our Mission</h2>
          <p>We believe getting customer support shouldn't be frustrating. Our mission is to make it as easy as possible to find the right phone number, know what to expect, and get connected to a human who can help.</p>
          <h2 className="text-xl font-bold text-gray-900 pt-4">Methodology</h2>
          <p>Our data comes from official company sources, user reports, and regular verification. Wait times are estimated based on crowdsourced data and historical patterns.</p>
        </div>
      </div>
    </>
  );
}
