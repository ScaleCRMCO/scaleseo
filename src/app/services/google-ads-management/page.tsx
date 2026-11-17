import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import v from "../../sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "Google Ads Management Calgary | Scale SEO" },
  description:
    "Google Ads management in Calgary for accounting firms and professional services. Search campaigns, conversion tracking, and ongoing optimization.",
  alternates: { canonical: "/services/google-ads-management" },
};

const PAGE = "https://scaleseo.co/services/google-ads-management";

const included: { title: string; icon: string; body: string[] }[] = [
  {
    title: "Campaign Strategy & Setup",
    icon: "search",
    body: [
      "We research relevant search terms, assess competition, and structure campaigns around your services, locations, and advertising budget.",
      "This includes keyword targeting, ad copy, campaign settings, and negative keywords.",
    ],
  },
  {
    title: "Conversion Tracking",
    icon: "chart",
    body: [
      "We track meaningful actions, including phone calls and website enquiries, to understand how campaigns contribute to your business.",
      "The focus is on lead quality, not just clicks.",
    ],
  },
  {
    title: "Landing Page Optimization",
    icon: "page",
    body: [
      "A good advertisement needs a relevant landing page.",
      "We review your service pages, messaging, and enquiry process to help visitors find the information they need and take the next step.",
    ],
  },
  {
    title: "Ongoing Optimization",
    icon: "gear",
    body: [
      "We monitor search terms, budgets, bidding, and conversion performance.",
      "Campaigns are refined using actual performance data, with a focus on reducing wasted spend and improving results over time.",
    ],
  },
];

const steps: { title: string; body: string }[] = [
  { title: "Review", body: "We assess your website, target market, advertising goals, and existing campaign performance." },
  { title: "Launch", body: "We develop the campaign structure, configure targeting and tracking, and prepare the landing pages." },
  { title: "Optimize", body: "We monitor campaign performance, refine targeting, and report on enquiries, costs, and opportunities for improvement." },
];

const faqs: FaqItem[] = [
  { q: "Can I use Google Ads without monthly SEO?", a: ["Yes. We offer standalone Google Ads management as well as integrated SEO and paid search campaigns."] },
  { q: "How quickly can Google Ads generate leads?", a: ["Campaigns can begin showing eligible ads shortly after launch. Generating qualified enquiries depends on your budget, competition, targeting, and landing page performance."] },
  { q: "Do I need a separate landing page?", a: ["Not always. Existing service pages may be suitable if they\u2019re relevant to the advertisement and make it easy for visitors to enquire."] },
  { q: "Do you manage Google Ads outside Calgary?", a: ["Yes. We work with accounting firms and established service businesses across Canada and Australia, tailoring campaigns to their target markets."] },
  { q: "Do I own my Google Ads account?", a: ["Yes. You retain ownership of your advertising account, campaign data, and assets."] },
];

const adsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Google Ads Management Calgary | Scale SEO",
      description:
        "Google Ads management in Calgary for accounting firms and professional services. Search campaigns, conversion tracking, and ongoing optimization.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      mainEntity: { "@id": `${PAGE}#service` },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": `${PAGE}#breadcrumb` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Google Ads Management",
      alternateName: ["PPC Management", "Google Search Ads Management"],
      serviceType: "Google Ads Management",
      url: PAGE,
      description:
        "Google Ads management including campaign setup and targeting, conversion tracking, landing page improvements and ongoing campaign optimization, managed alongside or independently of SEO.",
      provider: { "@id": "https://scaleseo.co/#organization" },
      mainEntityOfPage: { "@id": `${PAGE}#webpage` },
      areaServed: [
        { "@type": "City", name: "Calgary" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Professional service and B2B businesses" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://scaleseo.co/services" },
        { "@type": "ListItem", position: 3, name: "Google Ads Management", item: PAGE },
      ],
    },
  ],
};


export default function GoogleAdsPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adsJsonLd) }} />
      <ServiceTemplate
        crumb="Google Ads Management"
        title="Google Ads Management in Calgary"
        heroLead="Scale SEO provides Google Ads management for accounting firms, professional services, and established businesses across Canada and Australia."
        heroImgScale={0.85}
        heroImage={{ src: "/images/google-ads-search-results.webp", alt: "Monitor showing sponsored Google Ads results for a corporate tax search" }}
        statementLabel="Google Ads management"
        statement="We build and manage search campaigns around relevant keywords, qualified enquiries, and measurable business outcomes."
        statementNote="Reach potential clients when they’re searching for your services."
        included={{
          title: "What\u2019s Included in Google Ads Management?",
          lead: "Every campaign is built around your services, locations, and advertising budget, with a focus on lead quality rather than clicks.",
          items: included,
          image: { src: "/images/toronto-skyline-bw.webp", alt: "Black and white downtown Toronto skyline" },
        }}
        splits={[
          {
            title: "Google Ads & SEO, Working Together",
            lead: "Paid visibility today. Organic growth over time.",
            body: (
              <>
                <p>Google Ads helps businesses reach potential customers through sponsored search results, while SEO builds long-term organic visibility.</p>
                <p>We manage both channels with your wider website strategy in mind, aligning keywords, landing pages, and conversion tracking.</p>
                <p>For accounting firms, this can mean targeting searches for corporate tax, bookkeeping, and advisory services while developing organic visibility for those same services.</p>
              </>
            ),
            image: { src: "/images/jensen-cpa-cover.webp", alt: "The Jensen CPA team in Calgary" },
            cta: { href: "/services/seo", label: "Explore Monthly SEO Services" },
          },
          {
            title: "Google Ads Management in Practice",
            lead: "MSV Plumbing Services \u2014 Brisbane, Australia",
            body: (
              <>
                <p><strong>Google Ads, SEO &amp; Website Development</strong></p>
                <p>We manage Google Search campaigns for MSV Plumbing Services, targeting high-intent plumbing searches across Brisbane.</p>
                <p>Our work includes keyword research, location targeting, negative keywords, call conversion tracking, and ongoing optimization.</p>
                <p>With SEO and website development managed alongside advertising, we can make improvements across both the campaigns and the pages receiving traffic.</p>
              </>
            ),
            image: { src: "/images/msv-plumbing-cover.webp", alt: "Matthew Main of MSV Plumbing Services with his work ute in Brisbane" },
            cta: { href: "/results/msv-plumbing-services", label: "View MSV Plumbing Services Case Study" },
          },
        ]}
        process={{ title: "Our Google Ads Process", lead: "From review to launch to ongoing optimization, each stage builds on the one before it.", items: steps }}
        pricing={{
          title: "Google Ads Management Pricing",
          from: "Pricing",
          price: "Custom Monthly Quote",
          unit: "",
          body: [
            "Our management fees are based on your campaign scope, target markets, and advertising requirements.",
            "Google Ads can be managed independently or alongside an ongoing SEO campaign.",
            "Advertising spend is paid directly to Google and is separate from our management fees. You retain ownership of your account and campaign data.",
          ],
          points: ["Campaigns focused on qualified enquiries", "Clear reporting and ongoing optimization", "Full ownership of your advertising account and data"],
          cta: "View Pricing",
        }}
        faqs={faqs}
        cta={{ title: "Get More From Google Ads", lead: "Whether you\u2019re starting a new campaign or looking to improve an existing one, we\u2019ll review your goals and recommend a practical approach." }}
      />
    </main>
  );
}
