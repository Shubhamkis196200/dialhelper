import { useParams, Navigate } from 'react-router-dom';
import { getToolBySlug } from '@/data/tools';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { lazy, Suspense } from 'react';

const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'international-dialing-code-lookup': lazy(() => import('@/components/tools/InternationalDialingCodeLookup')),
  'phone-number-formatter': lazy(() => import('@/components/tools/PhoneNumberFormatter')),
  'area-code-finder': lazy(() => import('@/components/tools/AreaCodeFinder')),
  'time-zone-converter': lazy(() => import('@/components/tools/TimeZoneConverter')),
  'call-cost-calculator': lazy(() => import('@/components/tools/CallCostCalculator')),
  'phone-number-validator': lazy(() => import('@/components/tools/PhoneNumberValidator')),
  'country-code-quiz': lazy(() => import('@/components/tools/CountryCodeQuiz')),
  'toll-free-number-checker': lazy(() => import('@/components/tools/TollFreeNumberChecker')),
  'reverse-phone-lookup-guide': lazy(() => import('@/components/tools/ReversePhoneLookupGuide')),
  'voicemail-greeting-generator': lazy(() => import('@/components/tools/VoicemailGreetingGenerator')),
  'conference-call-planner': lazy(() => import('@/components/tools/ConferenceCallPlanner')),
  'phone-tree-builder': lazy(() => import('@/components/tools/PhoneTreeBuilder')),
  'sip-uri-generator': lazy(() => import('@/components/tools/SipUriGenerator')),
  'dtmf-tone-generator': lazy(() => import('@/components/tools/DtmfToneGenerator')),
  'phone-hold-time-estimator': lazy(() => import('@/components/tools/PhoneHoldTimeEstimator')),
  'international-time-checker': lazy(() => import('@/components/tools/InternationalTimeChecker')),
  'callback-scheduler': lazy(() => import('@/components/tools/CallbackScheduler')),
  'whatsapp-link-generator': lazy(() => import('@/components/tools/WhatsAppLinkGenerator')),
  'sms-character-counter': lazy(() => import('@/components/tools/SmsCharacterCounter')),
  'qr-code-phone-generator': lazy(() => import('@/components/tools/QrCodePhoneGenerator')),
  'password-generator': lazy(() => import('@/components/tools/PasswordGenerator')),
  'qr-code-generator': lazy(() => import('@/components/tools/QrCodeGenerator')),
  'json-formatter': lazy(() => import('@/components/tools/JsonFormatter')),
  'base64-encoder-decoder': lazy(() => import('@/components/tools/Base64EncoderDecoder')),
  'url-shortener-preview': lazy(() => import('@/components/tools/UrlShortenerPreview')),
  'word-counter': lazy(() => import('@/components/tools/WordCounter')),
  'lorem-ipsum-generator': lazy(() => import('@/components/tools/LoremIpsumGenerator')),
  'color-picker-converter': lazy(() => import('@/components/tools/ColorPickerConverter')),
  'timestamp-converter': lazy(() => import('@/components/tools/TimestampConverter')),
  'markdown-preview': lazy(() => import('@/components/tools/MarkdownPreview')),
  'hash-generator': lazy(() => import('@/components/tools/HashGenerator')),
  'regex-tester': lazy(() => import('@/components/tools/RegexTester')),
  'csv-to-json-converter': lazy(() => import('@/components/tools/CsvToJsonConverter')),
  'html-entity-encoder-decoder': lazy(() => import('@/components/tools/HtmlEntityEncoderDecoder')),
  'cron-expression-builder': lazy(() => import('@/components/tools/CronExpressionBuilder')),
  'email-template-generator': lazy(() => import('@/components/tools/EmailTemplateGenerator')),
  'customer-service-script-builder': lazy(() => import('@/components/tools/CustomerServiceScriptBuilder')),
  'complaint-letter-generator': lazy(() => import('@/components/tools/ComplaintLetterGenerator')),
  'business-hours-checker': lazy(() => import('@/components/tools/BusinessHoursChecker')),
  'wait-time-tracker': lazy(() => import('@/components/tools/WaitTimeTracker')),
  'satisfaction-survey-builder': lazy(() => import('@/components/tools/SatisfactionSurveyBuilder')),
  'ticket-number-tracker': lazy(() => import('@/components/tools/TicketNumberTracker')),
  'cancellation-letter-generator': lazy(() => import('@/components/tools/CancellationLetterGenerator')),
  'refund-calculator': lazy(() => import('@/components/tools/RefundCalculator')),
  'bbb-rating-checker-guide': lazy(() => import('@/components/tools/BbbRatingCheckerGuide')),
  'consumer-rights-reference': lazy(() => import('@/components/tools/ConsumerRightsReference')),
  'fcc-complaint-guide': lazy(() => import('@/components/tools/FccComplaintGuide')),
  'chargeback-guide': lazy(() => import('@/components/tools/ChargebackGuide')),
  'price-match-calculator': lazy(() => import('@/components/tools/PriceMatchCalculator')),
  'warranty-tracker': lazy(() => import('@/components/tools/WarrantyTracker')),
};

function Loading() {
  return <div className="flex items-center justify-center py-12"><div className="w-7 h-7 border-3 border-primary border-t-transparent rounded-full animate-spin" /></div>;
}

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;
  if (!tool || !slug) return <Navigate to="/tools" replace />;
  const Component = toolComponents[slug];
  if (!Component) return <Navigate to="/tools" replace />;
  const catLabel = tool.category === 'phone' ? 'Phone & Communication' : tool.category === 'utility' ? 'Utility & Productivity' : 'Business & Customer Service';
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SEO title={tool.metaTitle} description={tool.metaDescription} />
      <Breadcrumbs items={[{ label: 'Tools', to: '/tools' }, { label: catLabel, to: '/tools' }, { label: tool.name }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
      <p className="text-gray-500 mb-8">{tool.description}</p>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </div>
  );
}
