import type { Metadata } from "next";
import Link from "next/link";
import CaseStudy from "../sections/home/CaseStudy";
import CountUp from "../components/CountUp";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
import hub from "../services/hub.module.css";
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
};

const studies: Study[] = [
  {
    id: "empire-accountants",
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

/* === Page =============================================================== */

export default function ResultsPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsJsonLd) }}
      />

      {/* === HERO — big title left, intro right === */}
      {/* === HERO — navy: H1 left, intro right === */}
      <header className={styles.navyHero} data-nav="dark">
        <div className={styles.navyCrumbs}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} schema={false} />
        </div>
        <div className={styles.navyRow}>
          <h1 className={styles.navyTitle}>SEO Results &amp; Case Studies</h1>
          <p className={styles.navyLead}>
            We work with businesses across Canada and internationally to improve
            their search visibility, strengthen their websites, and attract more
            customers. Explore our case studies to see how practical SEO
            strategies, thoughtful execution, and ongoing improvements deliver
            measurable results.
          </p>
        </div>
      </header>

      {/* === CASE STUDIES — homepage carousel, centred on Jensen CPA === */}
      <CaseStudy
        id="case-studies"
        label="Client Work"
        heading=""
        centered
        startIndex={1}
        order={[3, 0, 1, 2]}
        hideAll
      />

      {/* === RESULTS BUILT THROUGH HANDS-ON SEO — three points === */}
      <section className={styles.how}>
        <div className={styles.howHead}>
          <h2 className={styles.howTitle}>Results Built Through Hands-On SEO</h2>
          <p className={styles.howLead}>There isn&rsquo;t one tactic behind these results.</p>
        </div>
        <div className={styles.howGrid}>
          <div className={styles.howPoint}>
            <span className={styles.howValue}>
              <CountUp to={1000} prefix="$" suffix="K" final="$1M+" duration={2000} />
            </span>
            <h3 className={styles.howPointTitle}>In Client Revenue Generated</h3>
            <p className={styles.howBody}>
              Our SEO and website projects have contributed to more than $1
              million in client revenue across multiple businesses.
            </p>
          </div>
          <div className={styles.howPoint}>
            <span className={styles.howIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg>
            </span>
            <h3 className={styles.howPointTitle}>Built Around Each Business</h3>
            <p className={styles.howBody}>
              Each campaign can involve technical SEO, service-page improvements,
              content strategy, local SEO, internal linking, structured data,
              website development, and ongoing analysis.
            </p>
          </div>
          <div className={styles.howPoint}>
            <span className={styles.howIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" /></svg>
            </span>
            <h3 className={styles.howPointTitle}>Managed by the Founder</h3>
            <p className={styles.howBody}>
              Identify the opportunities that matter, improve the website around
              them, implement the work, and measure what changes. Every campaign
              is managed directly by founder Corbin Jensen.
            </p>
          </div>
        </div>
        <div className={styles.howFoot}>
          <Link href="/corbin-jensen" className={styles.howBtn}>
            <svg className={styles.howCorner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            <span>Meet Corbin Jensen</span>
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
