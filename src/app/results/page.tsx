import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";

// Hero from the industries hub, sections from the shared /services hub
// system; styles below are only the pieces specific to this page.
import hub from "../services/page.module.css";
import ind from "../industries/page.module.css";
import styles from "./page.module.css";

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsJsonLd) }}
      />

      {/* === HERO — dark, full-width left-aligned === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={ind.heroContent}>
          <div className={ind.crumbsOnDark}>
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Results" }]}
              schema={false}
            />
          </div>
          <h1 className={ind.title}>
            SEO Results &amp; <span className="title-block">Case Studies</span>
          </h1>

          <div className={ind.heroBottom}>
            <div className={ind.heroMain}>
              <p className={styles.tagline}>
                Real SEO work. Real businesses. Measurable results.
              </p>
              <div className={ind.sub}>
                <p>
                  Explore selected Scale SEO projects across accounting, B2B,
                  construction, and local service businesses in Canada and
                  Australia.
                </p>
                <p>
                  Each case study breaks down the starting point, the work
                  completed, and the results that followed.
                </p>
              </div>
              <div className={ind.heroCtaGroup}>
                <a href="#case-studies" className={ind.heroCta}>
                  <span>Explore Case Studies</span>
                  <span className={ind.arrow}>↓</span>
                </a>
              </div>
            </div>

            <nav className={ind.heroIndex} aria-label="Case studies">
              {studies.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={styles.heroIndexItem}>
                  <span className={styles.heroIndexClient}>{s.client}</span>
                  <span className={styles.heroIndexMetric}>{s.metrics[0].value}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* === CASE STUDIES — light, one large card each === */}
      <section className={`${hub.section} ${hub.light}`} id="case-studies">
        <div className={`${hub.inner} ${styles.studies}`}>
          {studies.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`${styles.study} ${s.tint === "orange" ? styles.tintOrange : s.tint === "blue" ? styles.tintBlue : ""} ${s.featured ? styles.featured : ""} ${
                i % 2 === 1 ? styles.flip : ""
              } reveal-up`}
            >
              <div className={styles.visual}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={`${s.client} website`}
                    className={styles.visualImg}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className={styles.visualPlaceholder}>
                    <span>Image coming soon</span>
                    {s.client} website screenshot
                  </div>
                )}
              </div>

              <div className={styles.content}>
                <div className={styles.eyebrow}>{s.eyebrow}</div>
                <h2 className={styles.client}>{s.client}</h2>
                <p className={styles.meta}>{s.meta}</p>

                <div className={styles.metrics}>
                  {s.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <h3 className={styles.studyTitle}>{s.title}</h3>
                <div className={styles.body}>
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <div className={styles.actions}>
                  {s.caseStudyHref ? (
                    <Link href={s.caseStudyHref} className={styles.readBtn}>
                      <span>Read the {s.client.replace(/ Ltd\.$/, "")} Case Study</span>
                      <span className={hub.arrow}>→</span>
                    </Link>
                  ) : (
                    <span className={`${styles.readBtn} ${styles.readBtnSoon}`} aria-disabled="true">
                      <span>Read the {s.client.replace(/ Ltd\.$/, "")} Case Study</span>
                      <span className={styles.soon}>Coming soon</span>
                    </span>
                  )}
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className={styles.visitLink}
                    >
                      Visit Client Website <span className={ind.arrow}>→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* === THE WORK BEHIND THE NUMBERS — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark} ${styles.label}`}>
                The Work Behind the Numbers
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                Results Built Through <em>Hands-On SEO</em>
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>There isn&rsquo;t one tactic behind these results.</p>
            <p>
              Each campaign is built around the needs of the business and can
              involve technical SEO, service-page improvements, content
              strategy, local SEO, internal linking, structured data, website
              development, and ongoing analysis.
            </p>
            <p>
              The common approach is simple:{" "}
              <strong className={styles.strongOnDark}>
                identify the search opportunities that matter to the business,
                improve the website around them, implement the work, and
                measure what changes.
              </strong>
            </p>
            <p>
              All Scale SEO campaigns are managed directly by{" "}
              <strong className={styles.strongOnDark}>Corbin Jensen</strong>,
              founder and SEO specialist at Scale SEO.
            </p>
            <Link href="/corbin-jensen" className={hub.pillLime}>
              <span>Meet Corbin Jensen</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WORK WITH SCALE SEO — light CTA (follows the dark section) === */}
      <section className={`${hub.cta} ${styles.ctaLight}`}>
        <div className={`section-label ${styles.labelCenter}`}>Work With Scale SEO</div>
        <h2 className={hub.ctaHeadline}>
          Build Your Own <span className="title-block">Search Growth Story</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>
            If your business has strong services but isn&rsquo;t getting the
            search visibility it should, I can help identify where the
            opportunities are and what needs to change.
          </p>
          <p>
            Scale SEO works primarily with professional service and B2B
            businesses through ongoing SEO campaigns and standalone SEO audits.
          </p>
        </div>
        <div className={`${hub.buttonGroupCenter} ${styles.ctaButtons}`}>
          <Link href="/services/seo" className={styles.ctaSecondary}>
            <span>Explore SEO Services</span>
            <span className={hub.arrow}>→</span>
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            <span>Book a Strategy Call</span>
            <span className={hub.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaSecondary}>
            <span>Send a Message</span>
            <span className={hub.arrow}>→</span>
          </Link>
        </div>
      </section>

      <RevealOnScroll />
    </main>
  );
}
