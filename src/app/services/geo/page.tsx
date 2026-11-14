import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import ServicesMark from "../../sections/home/ServicesMark";
// Shared service page template (new brand)
import t from "../svc.module.css";
import AiPlatforms from "./AiPlatforms";
import gi from "./GeoIntro.module.css";
import hero from "../../sections/home/Hero.module.css";
import ClientLogos from "../../components/ClientLogos";
import TrustindexWidget from "../../components/TrustindexWidget";
import CaseStudy, { type CaseCard } from "../../sections/home/CaseStudy";

const geoCases: CaseCard[] = [
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
    metric: { to: 227, prefix: "+", suffix: "%" },
    metricLabel: "Search impressions",
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

const included: { title: string; body: string[] }[] = [
  {
    title: "AI Search Visibility & Research",
    body: [
      "We review how your business and its services appear across relevant AI-powered search experiences.",
      "This helps identify opportunities to improve your website’s content, strengthen business information, and address topics potential customers are researching.",
    ],
  },
  {
    title: "Website Content & Structure",
    body: [
      "AI search optimization starts with useful information.",
      "We improve important service pages, supporting content, headings, and internal links so your website clearly explains what your business does and who it helps.",
      "Where appropriate, we also develop new pages that address genuine customer questions and relevant search opportunities.",
    ],
  },
  {
    title: "Technical SEO & Structured Data",
    body: [
      "Your website needs to be accessible to search engines before its information can be discovered.",
      "We review crawling and indexing issues, website architecture, and relevant structured data. This can include information about your organization, services, people, and published content.",
      "Structured data helps describe your website’s information, but it doesn’t guarantee AI citations.",
    ],
  },
  {
    title: "Business Expertise & Trust",
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

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

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
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoJsonLd) }}
      />

      {/* === HERO — title, then navy band with the animated logo === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "GEO (AI Search)" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>AI Search Optimization &amp; GEO Services</h1>
        </div>
        <div className={t.heroBand} style={{ alignItems: "flex-end", paddingBottom: 0, paddingTop: 88 }}>
          <ServicesMark className={t.heroMark} slow />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/geo-ai-search-phone.webp"
            alt="Hand holding a phone showing an AI assistant with ChatGPT, Gemini, Claude and Perplexity icons"
          />
        </div>
      </header>

      <ClientLogos />

      {/* === INTRO — statement + lead/CTA, proof row, two-column copy === */}
      <section className={gi.intro}>
        <div className={gi.top}>
          <h2 className={gi.statement}>Be the brand AI models name when your buyers ask.</h2>
          <div className={gi.leadCol}>
            <p className={gi.lead}>
              Help potential customers discover your business through ChatGPT,
              Google AI search, and other AI-powered platforms.
            </p>
            <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call</span>
            </Link>
          </div>
        </div>

        <div className={gi.proofRow}>
          <div className={hero.leftGroup}>
            <TrustindexWidget id="cebaa07845048474c13615cd1b2" className={hero.reviews} />
            <div className={hero.metric}>
              <span className={hero.metricValue}>$1M+</span>
              <span className={hero.metricLabel}>in Client Revenue Generated</span>
            </div>
          </div>
        </div>

        <div className={gi.cols}>
          <p className={gi.colLead}>
            Scale SEO provides AI search optimization and Generative Engine
            Optimization (GEO) for professional service and B2B businesses
            across Canada.
          </p>
          <p className={gi.colBody}>
            We help businesses build a stronger presence in AI-powered search
            by improving their website content, technical foundations, and the
            information available about their services.
          </p>
        </div>
      </section>

      {/* === WHAT IS — heading left, text right === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>What Is AI Search Optimization?</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <p className={t.lead}>
              AI search optimization, also known as Generative Engine
              Optimization (GEO), focuses on improving how businesses are
              discovered, understood, and referenced in AI-generated search
              results.
            </p>
            <p>
              Unlike traditional search, where users typically browse a list of
              websites, AI platforms can provide direct answers, summaries, and
              business recommendations.
            </p>
            <p>
              For example, a business owner might ask ChatGPT to recommend an
              accounting firm specializing in corporate tax or compare consulting
              companies that serve Canadian businesses.
            </p>
            <p>
              GEO builds on traditional{" "}
              <Link href="/services/seo" className={t.inlineLink}>SEO</Link>,
              helping businesses adapt their online presence to how customers
              increasingly research and compare service providers.
            </p>
          </div>
        </div>
      </section>

      {/* === AI PLATFORMS — hub diagram + four points === */}
      <AiPlatforms />

      {/* === WHAT'S INCLUDED — 2-column numbered steps === */}
      <section className={t.steps}>
        <h2 className={t.h2}>What&rsquo;s Included in AI Search Optimization?</h2>
        <div className={t.stepGrid}>
          {included.map((item, i) => (
            <div key={item.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> {item.title}
              </h3>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === IN PRACTICE — homepage-style case study row === */}
      <CaseStudy
        id="client-work"
        label="Client Work"
        heading="AI Search Optimization in Practice"
        aside="Begin seeing results in as soon as 30 days."
        cards={geoCases}
      />

      {/* === MEASUREMENT — heading left, ruled rows right === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>How Do You Measure AI Search Visibility?</h2>
          <p className={t.body}>
            AI search doesn&rsquo;t work exactly like traditional Google rankings,
            so we look at several indicators.
          </p>
        </div>
        <div className={t.rowsList}>
          {measures.map(([k, v]) => (
            <div key={k} className={t.rowsItem}>
              <h3 className={t.h3}>{k}</h3>
              <p className={t.body}>{v}</p>
            </div>
          ))}
          <div className={t.rowsItem}>
            <p className={t.lead}>
              The goal isn&rsquo;t simply to increase mentions of your business.
              It&rsquo;s to improve relevant visibility and understand whether that
              visibility contributes to customer enquiries.
            </p>
          </div>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Work Directly With an SEO Specialist"
        lead="If you're interested in improving how your business is discovered online, we can review your current website and recommend where AI search optimization fits into your broader strategy."
        cta={{ href: "/contact", label: "Book a Strategy Call →" }}
      />
    </main>
  );
}
