import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import tpl from "../template.module.css";
import v from "../../sections/v3/v3.module.css";
import AiPlatforms from "./AiPlatforms";

const geoCases = [
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants",
    services: "Structured Data / Industry Content / Business Information Page",
    image: "/images/empire-accountants-cover.webp",
    metric: { from: 5, to: 1, prefix: "Page " },
    metricLabel: "Target rankings, up from page 5",
  },
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA",
    services: "Service Pages / Author Information / Technical SEO",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 395, prefix: "+", suffix: "%" },
    metricLabel: "Google Search impressions",
  },
  {
    href: "/results/kinsmen-consulting",
    client: "Kinsmen Consulting",
    services: "Service Pages / Local SEO / Website Development",
    image: "/images/kinsmen-hero.jpg",
    metric: { to: 500, prefix: "$", suffix: "K" },
    metricLabel: "Revenue from new jobs",
  },
  {
    href: "/results/msv-plumbing-services",
    client: "MSV Plumbing Services",
    services: "Website Development / SEO / Google Ads",
    image: "/images/msv-plumbing-cover.webp",
    metric: { text: "Weekly" },
    metricLabel: "Bookings from a standing start",
  },
];

export const metadata: Metadata = {
  title: "AI Search Optimization & GEO Services | Scale SEO",
  description:
    "AI search optimization and GEO services for professional service and B2B businesses. Improve visibility across Google AI Overviews, ChatGPT and AI-powered search.",
  alternates: { canonical: "/services/geo" },
};

const included: { title: string; icon: string; body: string[] }[] = [
  {
    title: "AI Search Visibility & Research",
    icon: "search",
    body: [
      "We review how your business and its services appear across relevant AI-powered search experiences.",
      "This helps identify opportunities to improve your website’s content, strengthen business information, and address topics potential customers are researching.",
    ],
  },
  {
    title: "Website Content & Structure",
    icon: "page",
    body: [
      "AI search optimization starts with useful information.",
      "We improve important service pages, supporting content, headings, and internal links so your website clearly explains what your business does and who it helps.",
      "Where appropriate, we also develop new pages that address genuine customer questions and relevant search opportunities.",
    ],
  },
  {
    title: "Technical SEO & Structured Data",
    icon: "gear",
    body: [
      "Your website needs to be accessible to search engines before its information can be discovered.",
      "We review crawling and indexing issues, website architecture, and relevant structured data. This can include information about your organization, services, people, and published content.",
      "Structured data helps describe your website’s information, but it doesn’t guarantee AI citations.",
    ],
  },
  {
    title: "Business Expertise & Trust",
    icon: "building",
    body: [
      "For professional service businesses, knowing who provides a service is often as important as understanding the service itself.",
      "We strengthen company information, author profiles, service descriptions, and relevant supporting evidence to make your business’s experience and expertise clearer.",
      "This work is based on accurate information about your business, not manufactured credentials or artificial authority signals.",
    ],
  },
];

const measures: [string, string][] = [
  ["AI citations and mentions", "Whether your business or website appears in relevant AI-generated answers."],
  ["AI referral traffic", "Visits arriving from identifiable AI platforms, where analytics data is available."],
  ["Organic search performance", "Search visibility, website traffic, enquiries, and conversions associated with the wider SEO strategy."],
];

const faqs: FaqItem[] = [
  {
    q: "Can GEO help my business get more leads?",
    a: [
      "It can create additional opportunities for potential customers to discover your business while researching services through AI-powered search.",
      "However, increased visibility doesn’t automatically produce enquiries. Results depend on search demand, your website, your services, and how customers choose providers.",
    ],
  },
  {
    q: "Is GEO different from SEO?",
    a: [
      "GEO builds on many of the same foundations as traditional SEO, including useful content, technical accessibility, clear website structure, and credible business information.",
      "The difference is that GEO also considers how your business appears across AI-powered search experiences.",
    ],
  },
  {
    q: "Can you guarantee my business will appear in ChatGPT?",
    a: [
      "No. AI platforms determine which information and sources they use.",
      "We focus on improving the website and business information you control rather than promising specific AI recommendations or citations.",
    ],
  },
  {
    q: "Do I need GEO if I’m already investing in SEO?",
    a: [
      "Not necessarily as a separate service.",
      "For many businesses, AI search optimization can be incorporated into an existing SEO strategy. The right approach depends on your website’s current condition, business goals, and search opportunities.",
    ],
  },
];

const geoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/geo#webpage",
      "url": "https://scaleseo.co/services/geo",
      "name": "AI Search Optimization & GEO Services | Scale SEO",
      "description": "AI search optimization and GEO services for Canadian businesses. Improve your website's visibility across ChatGPT, Google AI search and other platforms.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/geo#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/geo#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/geo#service",
      "name": "AI Search Optimization & GEO Services",
      "alternateName": [
        "Generative Engine Optimization",
        "GEO Services",
        "AI Search Optimization",
        "AI SEO Services"
      ],
      "serviceType": "AI Search Optimization",
      "url": "https://scaleseo.co/services/geo",
      "description": "AI search optimization and generative engine optimization services focused on improving website content, technical accessibility, business information, structured data and visibility across AI-powered search experiences.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://scaleseo.co/services/geo#webpage"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Professional service and B2B businesses"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Search Optimization Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Search Visibility & Research"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Content & Structure Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO & Structured Data"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Expertise & Trust Optimization"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/geo#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Search Optimization",
          "item": "https://scaleseo.co/services/geo"
        }
      ]
    }
  ]
};

export default function GeoServicePage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoJsonLd) }}
      />

      <ServiceTemplate
        crumb="GEO (AI Search)"
        title="AI Search Optimization & GEO Services"
        heroLead="Help potential customers discover your business through ChatGPT, Google AI search, and other AI-powered platforms."
        heroBleed
        heroImage={{ src: "/images/geo-ai-search-phone.webp", alt: "Hand holding a phone showing an AI assistant with ChatGPT, Gemini, Claude and Perplexity icons" }}
        statementLabel="AI search optimization"
        statement="Be the brand AI models name when your buyers ask."
        statementBody={[
          "Scale SEO provides AI search optimization and Generative Engine Optimization (GEO) for professional service and B2B businesses across Canada.",
          "We help businesses build a stronger presence in AI-powered search by improving their website content, technical foundations, and the information available about their services.",
        ]}
        explainer={{
          title: "What Is AI Search Optimization?",
          lead: "AI search optimization, also known as Generative Engine Optimization (GEO), focuses on improving how businesses are discovered, understood, and referenced in AI-generated search results.",
          body: (
            <>
              <p>Unlike traditional search, where users typically browse a list of websites, AI platforms can provide direct answers, summaries, and business recommendations.</p>
              <p>For example, a business owner might ask ChatGPT to recommend an accounting firm specializing in corporate tax or compare consulting companies that serve Canadian businesses.</p>
              <p>GEO builds on traditional <Link href="/services/seo">SEO</Link>, helping businesses adapt their online presence to how customers increasingly research and compare service providers.</p>
            </>
          ),
        }}
        included={{
          title: "What\u2019s Included in AI Search Optimization?",
          lead: "We improve the website and business information you control, so AI-powered search can better understand what your business does and who it helps.",
          items: included,
          image: { src: "/images/empire-accountants-cover.webp", alt: "The Empire Accountants team in Brisbane, a Scale SEO client" },
        }}
        feature={<AiPlatforms />}
        cases={{
          title: "AI Search Optimization in Practice",
          lead: "Begin seeing results in as soon as 30 days.",
          items: geoCases.map((c) => ({
            name: c.client,
            tag: c.services,
            stats: "to" in c.metric ? [{ from: (c.metric as { from?: number }).from ?? 0, to: (c.metric as { to: number }).to, prefix: (c.metric as { prefix?: string }).prefix, suffix: (c.metric as { suffix?: string }).suffix, label: c.metricLabel }] : [],
            body: "text" in c.metric ? `${(c.metric as { text: string }).text}: ${c.metricLabel}` : "",
            href: c.href,
            cta: `View ${c.client} Case Study`,
            img: c.image,
          })),
        }}
        fit={{
          title: "How Do You Measure AI Search Visibility?",
          label: "AI search doesn\u2019t work exactly like traditional Google rankings, so we look at several indicators.",
          body: (
            <>
              <ul className={tpl.measures}>
                {measures.map(([k, d]) => <li key={k}><strong>{k}</strong><span>{d}</span></li>)}
              </ul>
              <p>The goal isn&rsquo;t simply to increase mentions of your business. It&rsquo;s to improve relevant visibility and understand whether that visibility contributes to customer enquiries.</p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{ title: "Work Directly With an SEO Specialist", lead: "If you\u2019re interested in improving how your business is discovered online, we can review your current website and recommend where AI search optimization fits into your broader strategy." }}
      />
    </main>
  );
}
