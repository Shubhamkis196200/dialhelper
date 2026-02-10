export interface Department {
  name: string;
  phone: string;
}

export interface Company {
  name: string;
  slug: string;
  category: string;
  mainPhone: string;
  departments: Department[];
  waitTime: string;
  waitMinutes: number;
  bestTimeToCall: string;
  tips: string[];
  liveChatUrl: string | null;
  website: string;
  hours: string;
  socialLinks: { twitter?: string; facebook?: string; instagram?: string };
  description: string;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  content: string;
}

export const categories: Category[] = [
  { name: 'Telecom', slug: 'telecom', icon: 'Wifi', description: 'Phone, internet, and cable TV providers' },
  { name: 'Banking', slug: 'banking', icon: 'Landmark', description: 'Banks and financial institutions' },
  { name: 'Airlines', slug: 'airlines', icon: 'Plane', description: 'Major airline customer service' },
  { name: 'Retail', slug: 'retail', icon: 'ShoppingBag', description: 'Retail stores and e-commerce' },
  { name: 'Insurance', slug: 'insurance', icon: 'Shield', description: 'Insurance companies' },
  { name: 'Tech', slug: 'tech', icon: 'Monitor', description: 'Technology companies' },
  { name: 'Utilities', slug: 'utilities', icon: 'Zap', description: 'Utility and energy companies' },
  { name: 'Government', slug: 'government', icon: 'Building2', description: 'Government agencies' },
  { name: 'Shipping', slug: 'shipping', icon: 'Truck', description: 'Shipping and delivery services' },
  { name: 'Streaming', slug: 'streaming', icon: 'Tv', description: 'Streaming and entertainment' },
];

export const companies: Company[] = [
  {
    name: 'Amazon', slug: 'amazon', category: 'retail', mainPhone: '1-888-280-4331',
    departments: [
      { name: 'General Customer Service', phone: '1-888-280-4331' },
      { name: 'Prime Membership', phone: '1-888-280-4331' },
      { name: 'AWS Support', phone: '1-800-343-8338' },
      { name: 'Kindle Support', phone: '1-866-321-8851' },
    ],
    waitTime: '5 min', waitMinutes: 5, bestTimeToCall: 'Tuesday 10:00 AM EST',
    tips: ['Say "representative" at the voice prompt to skip the menu', 'Use the Amazon app\'s "Call Me" feature for faster connection', 'Have your order number ready before calling', 'Chat support is often faster than phone for simple issues'],
    liveChatUrl: 'https://www.amazon.com/gp/help/customer/contact-us', website: 'https://www.amazon.com', hours: '24/7',
    socialLinks: { twitter: 'https://twitter.com/AmazonHelp' },
    description: 'Amazon is the world\'s largest online retailer and cloud computing company.',
  },
  {
    name: 'Walmart', slug: 'walmart', category: 'retail', mainPhone: '1-800-925-6278',
    departments: [
      { name: 'Customer Service', phone: '1-800-925-6278' },
      { name: 'Walmart.com Orders', phone: '1-800-966-6546' },
      { name: 'Pharmacy', phone: '1-800-273-3455' },
    ],
    waitTime: '10 min', waitMinutes: 10, bestTimeToCall: 'Wednesday 9:00 AM CST',
    tips: ['Press 0 repeatedly to reach a human operator', 'Call early morning for shortest wait times', 'For online orders, have your order confirmation email ready'],
    liveChatUrl: 'https://www.walmart.com/help', website: 'https://www.walmart.com', hours: 'Mon-Sun 8AM-11PM CST',
    socialLinks: { twitter: 'https://twitter.com/WalmartHelp' },
    description: 'Walmart is the world\'s largest retailer with thousands of stores across the US.',
  },
  {
    name: 'AT&T', slug: 'att', category: 'telecom', mainPhone: '1-800-288-2020',
    departments: [
      { name: 'Customer Service', phone: '1-800-288-2020' },
      { name: 'Billing', phone: '1-800-331-0500' },
      { name: 'Technical Support', phone: '1-800-288-2020' },
      { name: 'Wireless', phone: '1-800-331-0500' },
    ],
    waitTime: '15 min', waitMinutes: 15, bestTimeToCall: 'Tuesday 10:00 AM EST',
    tips: ['Say "agent" or "representative" at every prompt', 'Press 0 multiple times to bypass the automated system', 'Mention "cancel service" to get transferred to retention', 'Call early in the week for shorter waits'],
    liveChatUrl: 'https://www.att.com/support/contact-us/', website: 'https://www.att.com', hours: 'Mon-Fri 8AM-9PM EST',
    socialLinks: { twitter: 'https://twitter.com/ATTHelp' },
    description: 'AT&T is one of the largest telecommunications companies in the world.',
  },
  {
    name: 'Verizon', slug: 'verizon', category: 'telecom', mainPhone: '1-800-922-0204',
    departments: [
      { name: 'Customer Service', phone: '1-800-922-0204' },
      { name: 'Fios', phone: '1-800-837-4966' },
      { name: 'Prepaid', phone: '1-888-294-6804' },
    ],
    waitTime: '12 min', waitMinutes: 12, bestTimeToCall: 'Wednesday 9:00 AM EST',
    tips: ['Press 0 then say "representative" to skip menus', 'Use the My Verizon app chat for faster responses', 'Have your account PIN ready', 'Calling from your Verizon phone auto-verifies your account'],
    liveChatUrl: 'https://www.verizon.com/support/contact-us/', website: 'https://www.verizon.com', hours: 'Mon-Sun 8AM-9PM EST',
    socialLinks: { twitter: 'https://twitter.com/VerizonSupport' },
    description: 'Verizon is a leading provider of wireless and fiber-optic communications.',
  },
  {
    name: 'T-Mobile', slug: 't-mobile', category: 'telecom', mainPhone: '1-800-937-8997',
    departments: [
      { name: 'Customer Service', phone: '1-800-937-8997' },
      { name: 'Billing', phone: '1-877-746-0909' },
      { name: 'Prepaid', phone: '1-877-778-2106' },
    ],
    waitTime: '8 min', waitMinutes: 8, bestTimeToCall: 'Tuesday 10:00 AM CST',
    tips: ['Dial 611 from your T-Mobile phone for direct access', 'Use T-Mobile app messaging — often faster than phone', 'Say "Team of Experts" to get your dedicated support team'],
    liveChatUrl: 'https://www.t-mobile.com/contact-us', website: 'https://www.t-mobile.com', hours: 'Mon-Sun 6AM-12AM CST',
    socialLinks: { twitter: 'https://twitter.com/TMobileHelp' },
    description: 'T-Mobile is the third-largest wireless carrier in the United States.',
  },
  {
    name: 'Comcast / Xfinity', slug: 'comcast-xfinity', category: 'telecom', mainPhone: '1-800-934-6489',
    departments: [
      { name: 'Customer Service', phone: '1-800-934-6489' },
      { name: 'Technical Support', phone: '1-800-934-6489' },
      { name: 'Cancellation', phone: '1-800-934-6489' },
    ],
    waitTime: '20 min', waitMinutes: 20, bestTimeToCall: 'Wednesday 9:00 AM EST',
    tips: ['Say "cancel" to reach the retention department', 'Press 0 repeatedly or say "agent" to skip IVR', 'Try the Xfinity Assistant chat first', 'Visit an Xfinity store for in-person support'],
    liveChatUrl: 'https://www.xfinity.com/support/contact-us', website: 'https://www.xfinity.com', hours: 'Mon-Sun 8AM-12AM EST',
    socialLinks: { twitter: 'https://twitter.com/XfinitySupport' },
    description: 'Comcast Xfinity is the largest cable TV and internet provider in the US.',
  },
  {
    name: 'Bank of America', slug: 'bank-of-america', category: 'banking', mainPhone: '1-800-432-1000',
    departments: [
      { name: 'Customer Service', phone: '1-800-432-1000' },
      { name: 'Credit Card', phone: '1-800-732-9194' },
      { name: 'Mortgage', phone: '1-800-669-6607' },
      { name: 'Fraud Department', phone: '1-800-432-1000' },
    ],
    waitTime: '10 min', waitMinutes: 10, bestTimeToCall: 'Tuesday 9:00 AM EST',
    tips: ['Press 0 then say "representative" at the prompt', 'Have your account number or SSN last 4 digits ready', 'For fraud, press the fraud option — they prioritize these calls', 'Use the mobile app to schedule a callback'],
    liveChatUrl: 'https://www.bankofamerica.com', website: 'https://www.bankofamerica.com', hours: 'Mon-Fri 8AM-11PM EST',
    socialLinks: { twitter: 'https://twitter.com/BofA_Help' },
    description: 'Bank of America is one of the largest banks in the United States.',
  },
  {
    name: 'Chase', slug: 'chase', category: 'banking', mainPhone: '1-800-935-9935',
    departments: [
      { name: 'Customer Service', phone: '1-800-935-9935' },
      { name: 'Credit Card', phone: '1-800-432-3117' },
      { name: 'Mortgage', phone: '1-800-848-9136' },
      { name: 'Business Banking', phone: '1-800-242-7338' },
    ],
    waitTime: '8 min', waitMinutes: 8, bestTimeToCall: 'Wednesday 10:00 AM EST',
    tips: ['Press 0 to skip automated prompts', 'Say "speak to a representative" clearly', 'Sapphire cardholders get priority support lines', 'Use Chase app secure messaging for non-urgent issues'],
    liveChatUrl: 'https://www.chase.com/digital/customer-service', website: 'https://www.chase.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/ChaseSupport' },
    description: 'Chase is the consumer and commercial banking subsidiary of JPMorgan Chase.',
  },
  {
    name: 'Wells Fargo', slug: 'wells-fargo', category: 'banking', mainPhone: '1-800-869-3557',
    departments: [
      { name: 'Customer Service', phone: '1-800-869-3557' },
      { name: 'Credit Card', phone: '1-800-642-4720' },
      { name: 'Mortgage', phone: '1-800-357-6675' },
    ],
    waitTime: '12 min', waitMinutes: 12, bestTimeToCall: 'Tuesday 10:00 AM PST',
    tips: ['Press 0# to bypass the automated system', 'Have your debit card or account number handy', 'For fraud concerns, select the fraud option', 'Branch visits can be faster for complex account issues'],
    liveChatUrl: null, website: 'https://www.wellsfargo.com', hours: 'Mon-Fri 7AM-8PM PST',
    socialLinks: { twitter: 'https://twitter.com/WellsFargo' },
    description: 'Wells Fargo is a major American banking and financial services company.',
  },
  {
    name: 'Capital One', slug: 'capital-one', category: 'banking', mainPhone: '1-877-383-4802',
    departments: [
      { name: 'Credit Card', phone: '1-800-227-4825' },
      { name: 'Banking', phone: '1-877-383-4802' },
      { name: 'Auto Loans', phone: '1-800-946-0332' },
    ],
    waitTime: '7 min', waitMinutes: 7, bestTimeToCall: 'Wednesday 9:00 AM EST',
    tips: ['Say "representative" at the voice prompt', 'Capital One has excellent chat support in the app', 'Use Eno (virtual assistant) for quick account questions'],
    liveChatUrl: 'https://www.capitalone.com/support-center/contact-us', website: 'https://www.capitalone.com', hours: 'Mon-Sun 8AM-11PM EST',
    socialLinks: { twitter: 'https://twitter.com/AskCapitalOne' },
    description: 'Capital One is a bank holding company specializing in credit cards and banking.',
  },
  {
    name: 'Delta Airlines', slug: 'delta-airlines', category: 'airlines', mainPhone: '1-800-221-1212',
    departments: [
      { name: 'Reservations', phone: '1-800-221-1212' },
      { name: 'SkyMiles', phone: '1-800-323-2323' },
      { name: 'Baggage', phone: '1-800-325-8224' },
      { name: 'Refunds', phone: '1-800-847-0578' },
    ],
    waitTime: '18 min', waitMinutes: 18, bestTimeToCall: 'Tuesday 10:00 AM EST',
    tips: ['Press 0 then say "agent" to reach a person', 'SkyMiles Medallion members have dedicated faster lines', 'Tweet @DeltaAssist for fast social media support', 'Call during off-peak hours'],
    liveChatUrl: 'https://www.delta.com/contactus', website: 'https://www.delta.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/DeltaAssist' },
    description: 'Delta Air Lines is a major American airline and one of the oldest in the world.',
  },
  {
    name: 'United Airlines', slug: 'united-airlines', category: 'airlines', mainPhone: '1-800-864-8331',
    departments: [
      { name: 'Reservations', phone: '1-800-864-8331' },
      { name: 'MileagePlus', phone: '1-800-421-4655' },
      { name: 'Baggage', phone: '1-800-335-2247' },
    ],
    waitTime: '22 min', waitMinutes: 22, bestTimeToCall: 'Wednesday 9:00 AM CST',
    tips: ['Say "agent" repeatedly to bypass the IVR system', 'Use the United app for rebooking — often faster', 'Premier members should use their dedicated phone line'],
    liveChatUrl: 'https://www.united.com', website: 'https://www.united.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/united' },
    description: 'United Airlines is a major American airline headquartered in Chicago.',
  },
  {
    name: 'American Airlines', slug: 'american-airlines', category: 'airlines', mainPhone: '1-800-433-7300',
    departments: [
      { name: 'Reservations', phone: '1-800-433-7300' },
      { name: 'AAdvantage', phone: '1-800-882-8880' },
      { name: 'Baggage', phone: '1-800-535-5225' },
    ],
    waitTime: '15 min', waitMinutes: 15, bestTimeToCall: 'Tuesday 8:00 AM CST',
    tips: ['Press 1 for English, then say "representative"', 'AAdvantage Executive Platinum members get priority support', 'Use the AA app to manage most booking changes without calling'],
    liveChatUrl: null, website: 'https://www.aa.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/AmericanAir' },
    description: 'American Airlines is the world\'s largest airline by fleet size.',
  },
  {
    name: 'Southwest Airlines', slug: 'southwest-airlines', category: 'airlines', mainPhone: '1-800-435-9792',
    departments: [
      { name: 'Customer Service', phone: '1-800-435-9792' },
      { name: 'Rapid Rewards', phone: '1-800-445-5764' },
      { name: 'Baggage', phone: '1-888-202-1024' },
    ],
    waitTime: '14 min', waitMinutes: 14, bestTimeToCall: 'Wednesday 10:00 AM CST',
    tips: ['Say "agent" at the voice prompt', 'Southwest has no change fees — manage online when possible', 'Call early morning for shorter waits'],
    liveChatUrl: null, website: 'https://www.southwest.com', hours: 'Mon-Sun 6AM-11PM CST',
    socialLinks: { twitter: 'https://twitter.com/SouthwestAir' },
    description: 'Southwest Airlines is a major US airline known for low fares and no bag fees.',
  },
  {
    name: 'Apple', slug: 'apple', category: 'tech', mainPhone: '1-800-275-2273',
    departments: [
      { name: 'Customer Service', phone: '1-800-275-2273' },
      { name: 'Apple Store', phone: '1-800-676-2775' },
      { name: 'AppleCare', phone: '1-800-275-2273' },
    ],
    waitTime: '6 min', waitMinutes: 6, bestTimeToCall: 'Tuesday 9:00 AM PST',
    tips: ['Use the Apple Support app to schedule a callback — no hold time', 'Say "technical support" or "sales" to route correctly', 'Apple Genius Bar appointments are available online'],
    liveChatUrl: 'https://support.apple.com/contact', website: 'https://www.apple.com', hours: 'Mon-Sun 5AM-8PM PST',
    socialLinks: { twitter: 'https://twitter.com/AppleSupport' },
    description: 'Apple is a technology company known for iPhone, Mac, and other consumer electronics.',
  },
  {
    name: 'Microsoft', slug: 'microsoft', category: 'tech', mainPhone: '1-800-642-7676',
    departments: [
      { name: 'Customer Service', phone: '1-800-642-7676' },
      { name: 'Xbox Support', phone: '1-800-469-9269' },
      { name: 'Microsoft 365', phone: '1-800-642-7676' },
    ],
    waitTime: '10 min', waitMinutes: 10, bestTimeToCall: 'Wednesday 10:00 AM PST',
    tips: ['Use the Microsoft virtual agent chat for fastest resolution', 'Say "operator" to skip the automated system', 'For Xbox, use the Xbox Support app'],
    liveChatUrl: 'https://support.microsoft.com/contactus', website: 'https://www.microsoft.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/MicrosoftHelps' },
    description: 'Microsoft is a technology corporation known for Windows, Office, and Azure.',
  },
  {
    name: 'Google', slug: 'google', category: 'tech', mainPhone: '1-855-836-3987',
    departments: [
      { name: 'Google Fi', phone: '1-844-825-5234' },
      { name: 'Google Ads', phone: '1-866-246-6453' },
      { name: 'Google Workspace', phone: '1-855-836-3987' },
    ],
    waitTime: '8 min', waitMinutes: 8, bestTimeToCall: 'Tuesday 11:00 AM PST',
    tips: ['Google primarily uses chat and email support', 'Use the Google Support page to request a callback', 'Google Fi has the best phone support of all Google products'],
    liveChatUrl: 'https://support.google.com', website: 'https://www.google.com', hours: 'Mon-Fri 9AM-6PM PST',
    socialLinks: { twitter: 'https://twitter.com/Google' },
    description: 'Google is a technology company known for search, Android, and cloud services.',
  },
  {
    name: 'Netflix', slug: 'netflix', category: 'streaming', mainPhone: '1-888-638-3549',
    departments: [{ name: 'Customer Service', phone: '1-888-638-3549' }],
    waitTime: '3 min', waitMinutes: 3, bestTimeToCall: 'Any weekday morning',
    tips: ['Netflix has excellent customer service with short waits', 'Use the Netflix app/website live chat for instant support', 'Have your account email ready'],
    liveChatUrl: 'https://help.netflix.com/en/contactus', website: 'https://www.netflix.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/Netflixhelps' },
    description: 'Netflix is the world\'s leading streaming entertainment service.',
  },
  {
    name: 'Spectrum', slug: 'spectrum', category: 'telecom', mainPhone: '1-833-267-6094',
    departments: [
      { name: 'Customer Service', phone: '1-833-267-6094' },
      { name: 'New Service', phone: '1-855-860-9068' },
    ],
    waitTime: '15 min', waitMinutes: 15, bestTimeToCall: 'Tuesday 9:00 AM EST',
    tips: ['Press 0 or say "agent" to bypass the automated system', 'Say "cancel" to reach retention for better deals', 'Use the My Spectrum app for simple tasks'],
    liveChatUrl: 'https://www.spectrum.net/contact-us', website: 'https://www.spectrum.net', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/Ask_Spectrum' },
    description: 'Spectrum is a telecommunications brand of Charter Communications.',
  },
  {
    name: 'Cox Communications', slug: 'cox-communications', category: 'telecom', mainPhone: '1-800-234-3993',
    departments: [
      { name: 'Customer Service', phone: '1-800-234-3993' },
      { name: 'Technical Support', phone: '1-800-234-3993' },
    ],
    waitTime: '12 min', waitMinutes: 12, bestTimeToCall: 'Wednesday 10:00 AM EST',
    tips: ['Say "representative" at the voice prompt', 'Use the Cox app for quick troubleshooting', 'Press 0 to skip ahead'],
    liveChatUrl: 'https://www.cox.com/residential/contactus.html', website: 'https://www.cox.com', hours: 'Mon-Fri 8AM-8PM local',
    socialLinks: { twitter: 'https://twitter.com/CoxHelp' },
    description: 'Cox Communications is the third-largest cable television provider in the US.',
  },
  {
    name: 'Target', slug: 'target', category: 'retail', mainPhone: '1-800-440-0680',
    departments: [
      { name: 'Customer Service', phone: '1-800-440-0680' },
      { name: 'Target.com Orders', phone: '1-800-591-3869' },
      { name: 'RedCard', phone: '1-800-424-6888' },
    ],
    waitTime: '8 min', waitMinutes: 8, bestTimeToCall: 'Tuesday 10:00 AM CST',
    tips: ['Press 0 to reach a representative quickly', 'Target has great chat support on their website', 'Have your receipt or order number ready'],
    liveChatUrl: 'https://www.target.com/co/contact-us', website: 'https://www.target.com', hours: 'Mon-Sun 7AM-11PM CST',
    socialLinks: { twitter: 'https://twitter.com/AskTarget' },
    description: 'Target is the eighth-largest retailer in the United States.',
  },
  {
    name: 'USPS', slug: 'usps', category: 'shipping', mainPhone: '1-800-275-8777',
    departments: [
      { name: 'Customer Service', phone: '1-800-275-8777' },
      { name: 'Package Tracking', phone: '1-800-222-1811' },
    ],
    waitTime: '25 min', waitMinutes: 25, bestTimeToCall: 'Wednesday 8:00 AM EST',
    tips: ['Say "agent" then "other" to reach a human faster', 'Use USPS.com tracking for package status', 'Call early morning for shortest waits'],
    liveChatUrl: null, website: 'https://www.usps.com', hours: 'Mon-Fri 8AM-8:30PM EST',
    socialLinks: { twitter: 'https://twitter.com/USPSHelp' },
    description: 'The United States Postal Service is the federal agency handling mail delivery.',
  },
  {
    name: 'UPS', slug: 'ups', category: 'shipping', mainPhone: '1-800-742-5877',
    departments: [
      { name: 'Customer Service', phone: '1-800-742-5877' },
      { name: 'Freight', phone: '1-800-333-7400' },
    ],
    waitTime: '10 min', waitMinutes: 10, bestTimeToCall: 'Tuesday 9:00 AM EST',
    tips: ['Say "track a package" or "customer service" at the prompt', 'Use ups.com virtual assistant for tracking questions', 'UPS My Choice app gives real-time delivery updates'],
    liveChatUrl: 'https://www.ups.com/us/en/support/contact-us.page', website: 'https://www.ups.com', hours: 'Mon-Fri 8AM-12AM EST',
    socialLinks: { twitter: 'https://twitter.com/UPSHelp' },
    description: 'UPS is the world\'s largest package delivery company.',
  },
  {
    name: 'FedEx', slug: 'fedex', category: 'shipping', mainPhone: '1-800-463-3339',
    departments: [
      { name: 'Customer Service', phone: '1-800-463-3339' },
      { name: 'Freight', phone: '1-866-393-4585' },
    ],
    waitTime: '8 min', waitMinutes: 8, bestTimeToCall: 'Wednesday 9:00 AM EST',
    tips: ['Say "agent" to skip the automated menu', 'FedEx virtual assistant handles most tracking questions', 'Have your tracking number ready before calling'],
    liveChatUrl: 'https://www.fedex.com/en-us/customer-support.html', website: 'https://www.fedex.com', hours: 'Mon-Fri 8AM-8PM EST',
    socialLinks: { twitter: 'https://twitter.com/FedExHelp' },
    description: 'FedEx is a multinational courier delivery services company.',
  },
  {
    name: 'State Farm', slug: 'state-farm', category: 'insurance', mainPhone: '1-800-782-8332',
    departments: [
      { name: 'Customer Service', phone: '1-800-782-8332' },
      { name: 'Claims', phone: '1-800-732-5246' },
      { name: 'Roadside Assistance', phone: '1-800-424-0590' },
    ],
    waitTime: '5 min', waitMinutes: 5, bestTimeToCall: 'Tuesday 10:00 AM CST',
    tips: ['Contact your local agent directly for fastest service', 'Use the State Farm app to file claims with photos', 'Say "claims" immediately for faster routing'],
    liveChatUrl: null, website: 'https://www.statefarm.com', hours: 'Mon-Fri 8AM-8PM CST',
    socialLinks: { twitter: 'https://twitter.com/StateFarm' },
    description: 'State Farm is the largest property and casualty insurance provider in the US.',
  },
  {
    name: 'Geico', slug: 'geico', category: 'insurance', mainPhone: '1-800-207-7847',
    departments: [
      { name: 'Customer Service', phone: '1-800-207-7847' },
      { name: 'Claims', phone: '1-800-841-3000' },
      { name: 'Roadside Assistance', phone: '1-800-424-3426' },
    ],
    waitTime: '4 min', waitMinutes: 4, bestTimeToCall: 'Any weekday morning',
    tips: ['Geico has excellent phone service with short wait times', 'Use the Geico app for quick policy changes', 'For claims, the online reporting tool is very efficient'],
    liveChatUrl: 'https://www.geico.com/contact-us/', website: 'https://www.geico.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/GEICO' },
    description: 'Geico is the second-largest auto insurance company in the US.',
  },
  {
    name: 'Progressive', slug: 'progressive', category: 'insurance', mainPhone: '1-800-776-4737',
    departments: [
      { name: 'Customer Service', phone: '1-800-776-4737' },
      { name: 'Claims', phone: '1-800-776-4737' },
      { name: 'Roadside Assistance', phone: '1-800-776-2778' },
    ],
    waitTime: '6 min', waitMinutes: 6, bestTimeToCall: 'Tuesday 9:00 AM EST',
    tips: ['Say "representative" at the voice prompt', 'Use the Progressive app for claims filing', 'Have your policy number ready for faster service'],
    liveChatUrl: 'https://www.progressive.com/contact-us/', website: 'https://www.progressive.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/Progressive' },
    description: 'Progressive is one of the largest providers of car insurance in the US.',
  },
  {
    name: 'American Express', slug: 'american-express', category: 'banking', mainPhone: '1-800-528-4800',
    departments: [
      { name: 'Customer Service', phone: '1-800-528-4800' },
      { name: 'Platinum Card', phone: '1-800-525-3355' },
      { name: 'Travel', phone: '1-800-297-2977' },
    ],
    waitTime: '3 min', waitMinutes: 3, bestTimeToCall: 'Any time — Amex has excellent service',
    tips: ['Amex has top-rated phone support with minimal wait times', 'Platinum members get the best support', 'Chat support via the app is very responsive'],
    liveChatUrl: 'https://www.americanexpress.com/us/customer-service/', website: 'https://www.americanexpress.com', hours: 'Mon-Sun 24/7',
    socialLinks: { twitter: 'https://twitter.com/AskAmex' },
    description: 'American Express is a financial services corporation known for credit cards and travel services.',
  },
  {
    name: 'Best Buy', slug: 'best-buy', category: 'retail', mainPhone: '1-888-237-8289',
    departments: [
      { name: 'Customer Service', phone: '1-888-237-8289' },
      { name: 'Geek Squad', phone: '1-800-433-5778' },
      { name: 'Credit Card', phone: '1-888-574-1301' },
    ],
    waitTime: '10 min', waitMinutes: 10, bestTimeToCall: 'Wednesday 10:00 AM CST',
    tips: ['Press 0 to skip to a representative', 'For Geek Squad appointments, booking online is faster', 'Best Buy Totaltech members get priority support'],
    liveChatUrl: 'https://www.bestbuy.com/site/customer-service', website: 'https://www.bestbuy.com', hours: 'Mon-Sun 8AM-11PM CST',
    socialLinks: { twitter: 'https://twitter.com/BestBuySupport' },
    description: 'Best Buy is the largest consumer electronics retailer in the US.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Reach a Human at Amazon Customer Service', slug: 'how-to-reach-human-amazon', category: 'guides',
    excerpt: 'Skip the automated menus and talk to a real person at Amazon. Our step-by-step guide shows you the fastest way to get help.',
    date: '2026-02-01', content: 'Full guide on reaching Amazon customer service...',
  },
  {
    title: 'Best Time to Call Customer Service (Data-Backed Guide)', slug: 'best-time-to-call-customer-service', category: 'tips',
    excerpt: 'We analyzed thousands of calls to find the best times to reach customer service with minimal wait times.',
    date: '2026-01-28', content: 'Data-backed guide on optimal calling times...',
  },
  {
    title: '10 Tricks to Reduce Your Hold Time', slug: '10-tricks-reduce-hold-time', category: 'tips',
    excerpt: 'Spending too much time on hold? These proven strategies will help you get through to a real person faster.',
    date: '2026-01-25', content: 'Top tricks to reduce hold time...',
  },
  {
    title: 'How to Bypass the Phone Menu at Comcast', slug: 'how-to-bypass-phone-menu-comcast', category: 'guides',
    excerpt: 'Comcast\'s phone system is notoriously complex. Here\'s how to skip straight to a human agent.',
    date: '2026-01-20', content: 'Guide on bypassing Comcast phone menu...',
  },
  {
    title: 'How to Use Social Media to Get Better Customer Service', slug: 'social-media-customer-service', category: 'tips',
    excerpt: 'Companies respond faster on Twitter and Facebook than on the phone. Learn how to leverage social media for support.',
    date: '2026-01-15', content: 'Social media customer service guide...',
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find(c => c.slug === slug);
}

export function getCompaniesByCategory(categorySlug: string): Company[] {
  return companies.filter(c => c.category === categorySlug);
}

export function searchCompanies(query: string): Company[] {
  const q = query.toLowerCase();
  return companies.filter(c =>
    c.name.toLowerCase().includes(q) || c.slug.includes(q) || c.mainPhone.includes(q) || c.category.toLowerCase().includes(q)
  );
}
