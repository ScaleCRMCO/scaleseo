import type { Metadata } from "next";
import ResultsList from "./ResultsList";
import ClientLogos from "../components/ClientLogos";
import v from "../sections/v3/v3.module.css";
import { Btn, Eyebrow } from "../sections/v3/ui";
import CountUp from "../components/CountUp";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./results.module.css";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Scale SEO",
  description:
    "Real client results from Corbin Jensen — SEO case studies spanning trades and service businesses in Australia to accounting and professional service firms across Canada.",
  alternates: { canonical: "/results" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

type Metric = { value: string; label: string };

type Study = {
  id: string;
  eyebrow: string;
  client: string;
  meta: string;
  metrics: Metric[];
  title: string;
  body: string[];
  // Individual case study pages are coming; until one exists the
  // "Read the … Case Study" button renders as a disabled "coming soon" pill.
  caseStudyHref?: string;
  // Optional until supplied: no image shows a placeholder, no url hides
  // the "Visit Client Website" link.
  image?: string;
  url?: string;
  featured?: boolean;
  tint: "blue" | "orange" | "neutral";
  category: string;
};

const studies: Study[] = [
  {
    id: "empire-accountants",
    category: "Accounting Firms",
    eyebrow: "Featured Case Study",
    client: "Empire Accountants",
    meta: "Accounting & Advisory · Brisbane, Australia",
    metrics: [
      { value: "Page 5 → Page 1", label: "Target keyword rankings" },
      { value: "+100%+", label: "Organic search visibility" },
    ],
    title: "SEO Strategy for an Accounting & Advisory Firm",
    body: [
      "Empire Accountants needed stronger organic visibility for the accounting and advisory services they wanted to grow.",
      "Ongoing SEO has included technical improvements, service-page optimization, content strategy, internal linking, structured data, and local search improvements.",
      "The result has been significant growth in organic visibility, with priority searches moving from deeper search results onto page one of Google.",
    ],
    caseStudyHref: "/results/empire-accountants",
    image: "/images/empire-accountants-cover.webp",
    url: "https://www.empireaccountants.com.au/",
    featured: true,
    tint: "blue",
  },
  {
    id: "jensen-cpa",
    category: "Accounting Firms",
    eyebrow: "Accounting Firms",
    client: "Jensen CPA",
    meta: "Accounting & Tax · Calgary, Alberta",
    metrics: [
      { value: "+227%", label: "Average daily search impressions" },
      { value: "+92%", label: "Average daily organic clicks" },
    ],
    title: "Building a Stronger Digital Presence for a Calgary CPA Firm",
    body: [
      "Website redevelopment, SEO, content strategy, and Google Ads combined to build a stronger digital presence for an established Calgary CPA firm.",
      "Within the first four months, organic search visibility increased substantially, with first-page visibility for commercially relevant Calgary accounting searches.",
    ],
    caseStudyHref: "/results/jensen-cpa",
    image: "/images/jensen-cpa-cover.webp",
    url: "https://www.jensencpa.ca/",
    tint: "neutral",
  },
  {
    id: "kinsmen-consulting",
    category: "Construction & Trades",
    eyebrow: "Calgary · B2B",
    client: "Kinsmen Consulting Ltd.",
    meta: "Concrete & Construction · Calgary, Alberta",
    metrics: [{ value: "$500K", label: "Revenue generated from new jobs" }],
    title: "SEO & Website Strategy for a Calgary Concrete Contractor",
    body: [
      "Scale SEO worked with Kinsmen Consulting to strengthen its website and search presence across residential and commercial concrete services in Calgary.",
      "The project combined website development, local SEO, service-page optimization, and search strategy around commercially important projects.",
    ],
    caseStudyHref: "/results/kinsmen-consulting",
    image: "/images/kinsmen-hero.jpg",
    url: "https://www.kinsmenconsulting.ca",
    tint: "orange",
  },
  {
    id: "msv-plumbing-services",
    category: "Construction & Trades",
    eyebrow: "Local SEO",
    client: "MSV Plumbing Services",
    meta: "Plumbing Services · Brisbane, Australia",
    metrics: [{ value: "0 → Weekly", label: "Consistent customer bookings" }],
    title: "Building Organic Visibility for a New Plumbing Business",
    body: [
      "MSV Plumbing Services started with a new business, a new website, and no established organic search presence.",
      "Scale SEO combined website development with local SEO, service-page optimization, Google Business Profile improvements, and ongoing search strategy to build visibility across Brisbane.",
      "The business now receives consistent customer enquiries and bookings through its online presence.",
    ],
    caseStudyHref: "/results/msv-plumbing-services",
    image: "/images/msv-plumbing-cover.webp",
    url: "https://msvplumbingservices.com.au/",
    tint: "blue",
  },
];

const resultsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scaleseo.co/results#webpage",
      url: "https://scaleseo.co/results",
      name: "SEO Results & Case Studies | Scale SEO",
      description: "Explore real SEO results and case studies from Scale SEO across accounting, B2B, construction and local service businesses.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results#case-studies"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "ItemList",
      "@id": "https://scaleseo.co/results#case-studies",
      name: "Scale SEO Case Studies",
      numberOfItems: 3,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Empire Accountants SEO Case Study",
          url: "https://scaleseo.co/results/empire-accountants"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kinsmen Consulting SEO Case Study",
          url: "https://scaleseo.co/results/kinsmen-consulting"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MSV Plumbing Services SEO Case Study",
          url: "https://scaleseo.co/results/msv-plumbing-services"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Results",
          item: "https://scaleseo.co/results"
        }
      ]
    }
  ]
};

/* === Page — Bilberrry work index: side label + intro, logos, filter tabs,
   alternating case rows; then how-we-get-results and a closing CTA ===== */
const points = [
  { value: "$1M+", title: "In Client Revenue Generated", body: "Our SEO and website projects have contributed to more than $1 million in client revenue across multiple businesses." },
  { value: "01", title: "Built Around Each Business", body: "Each campaign can involve technical SEO, service-page improvements, content strategy, local SEO, internal linking, structured data, website development, and ongoing analysis." },
  { value: "02", title: "Managed by the Founder", body: "Identify the opportunities that matter, improve the website around them, implement the work, and measure what changes. Every campaign is managed directly by founder Corbin Jensen." },
];

export default function ResultsPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsJsonLd) }} />

      <header className={`${v.white} ${styles.hero}`}>
        <div className={v.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} schema={false} />
          </div>
          <div className={styles.heroGrid}>
            <span className={styles.sideLabel}>Our client work</span>
            <div>
              <h1 className={styles.h1}>SEO Results &amp; Case Studies</h1>
              <p className={styles.lead}>
                We work with businesses across Canada and internationally to improve their search visibility, strengthen their websites, and attract more customers. Explore our case studies to see how practical SEO strategies, thoughtful execution, and ongoing improvements deliver measurable results.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.logos}><ClientLogos /></div>
      </header>

      <section className={`${v.white} ${styles.listSec}`}>
        <ResultsList studies={studies.map(({ id, client, meta, category, metrics, title, body, caseStudyHref, image, url }) => ({ id, client, meta, category, metrics, title, body, caseStudyHref, image, url }))} />
      </section>

      <section className={`${v.grey} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={v.head}>
            <div>
              <Eyebrow>How we get results</Eyebrow>
              <h2 className={v.h2}>Results Built Through Hands-On SEO</h2>
            </div>
            <div className={v.headSide}>
              <p className={v.p}>There isn&rsquo;t one tactic behind these results.</p>
              <Btn href="/corbin-jensen" tone="navy">Meet Corbin Jensen</Btn>
            </div>
          </div>
          <ol className={`${v.cards} ${v.cols3}`}>
            {points.map((p, i) => (
              <li key={p.title} className={v.card}>
                {i === 0 ? (
                  <span className={styles.bigStat}><CountUp to={1000} prefix="$" suffix="K" final="$1M+" duration={2000} /></span>
                ) : (
                  <span className={v.cardNum}>{p.value}</span>
                )}
                <h3 className={v.h3}>{p.title}</h3>
                <p className={v.p}>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Ready to Grow Your Accounting Firm?</h2>
            <p className={v.p}>Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and opportunities to attract more clients through Google. Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.</p>
            <Btn href={BOOKING_URL} external>Speak to an Expert</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
