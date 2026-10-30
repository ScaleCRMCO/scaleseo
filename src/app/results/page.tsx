import type { Metadata } from "next";
import Link from "next/link";
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
    image: "/images/empireaccountants-hero-image.png",
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
    image: "/images/jensen-cpa-homepage.webp",
    url: "https://www.jensencpa.ca/",
    tint: "neutral",
  },
  {
    id: "kinsmen-consulting",
    eyebrow: "Calgary · B2B",
    client: "Kinsmen Consulting Ltd.",
    meta: "Concrete & Construction · Calgary, Alberta",
    metrics: [{ value: "+26%", label: "Revenue growth" }],
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
    image: "/images/msv-screenshot.png",
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
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={hub.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} schema={false} />
          </div>
          <h1 className={styles.heroTitle}>SEO Results &amp; Case Studies</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.heroLead}>
            Explore selected Scale SEO projects across accounting, B2B,
            construction, and local service businesses in Canada and Australia.
          </p>
          <p>
            Each case study breaks down the starting point, the work completed,
            and the results that followed.
          </p>
          <a href="#case-studies" className={styles.jump}>Explore Case Studies &darr;</a>
        </div>
      </header>

      {/* === CASE STUDIES — card grid: image, tags, client, headline result, button === */}
      <section className={styles.studies} id="case-studies">
        <div className={styles.grid}>
          {studies.map((s, i) => {
            const [industry, place] = s.meta.split(" · ");
            const lead = s.metrics[0];
            return (
              <article key={s.id} id={s.id} className={styles.card}>
                <div className={styles.image}>
                  {s.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.image} alt={`${s.client} website`} loading={i < 2 ? "eager" : "lazy"} />
                  ) : null}
                </div>
                <div className={styles.tags}>
                  <span>{industry}</span>
                  {place && <span>{place}</span>}
                </div>
                <p className={styles.client}>{s.client}</p>
                <h2 className={styles.result}>
                  {lead.value} <span>{lead.label.toLowerCase()}</span>
                </h2>
                <p className={styles.summary}>{s.title}</p>
                {s.caseStudyHref ? (
                  <Link href={s.caseStudyHref} className={styles.button}>
                    Read case study
                  </Link>
                ) : (
                  <span className={`${styles.button} ${styles.buttonSoon}`} aria-disabled="true">
                    Case study coming soon
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* === THE WORK BEHIND THE NUMBERS — heading left, text right === */}
      <section className={hub.split}>
        <div className={hub.splitAside}>
          <span className={styles.eyebrow}>The Work Behind the Numbers</span>
          <h2 className={hub.h2}>Results Built Through Hands-On SEO</h2>
        </div>
        <div className={hub.splitBody}>
          <p className={hub.lead}>There isn&rsquo;t one tactic behind these results.</p>
          <p>
            Each campaign is built around the needs of the business and can
            involve technical SEO, service-page improvements, content strategy,
            local SEO, internal linking, structured data, website development,
            and ongoing analysis.
          </p>
          <p>
            The common approach is simple:{" "}
            <strong>
              identify the search opportunities that matter to the business,
              improve the website around them, implement the work, and measure
              what changes.
            </strong>
          </p>
          <p>
            All Scale SEO campaigns are managed directly by{" "}
            <strong>Corbin Jensen</strong>, founder and SEO specialist at Scale
            SEO.
          </p>
          <Link href="/corbin-jensen" className={`${hub.box} ${hub.boxNavy}`}>
            <span>Meet Corbin Jensen &rarr;</span>
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
