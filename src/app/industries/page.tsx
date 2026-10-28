import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
import hub from "../services/hub.module.css";
import styles from "./hub.module.css";

export const metadata: Metadata = {
  title: "SEO for Professional Services & B2B | Scale SEO",
  description:
    "SEO for professional service and B2B businesses, including accounting firms, consultants and advisory businesses. Build qualified organic visibility with Scale SEO.",
  alternates: { canonical: "/industries" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

// href only where the industry page exists; the others show no link yet.
const industries: {
  num: string;
  title: string;
  sub: string;
  body: string[];
  href?: string;
  cta: string;
}[] = [
  {
    num: "01",
    title: "Accounting & Financial Services",
    sub: "SEO for Accounting Firms",
    body: [
      "Search strategies for accounting firms, CPA practices, and advisory businesses looking to attract clients through corporate tax, bookkeeping, business advisory, and other specialized services.",
      "With hands-on experience working with accounting firms in Canada and Australia, Scale SEO understands the importance of technical accuracy, professional credibility, and service-specific search visibility.",
    ],
    href: "/industries/accounting-firms",
    cta: "Explore SEO for Accounting Firms",
  },
  {
    num: "02",
    title: "Construction & Contracting",
    sub: "SEO for Construction Companies",
    body: [
      "SEO for established construction businesses and specialty contractors targeting higher-value residential and commercial projects.",
      "Strategies can include technical SEO, local search, service-page development, project-specific content, and geographic targeting.",
    ],
    cta: "Explore SEO for Construction Companies",
  },
  {
    num: "03",
    title: "Consulting & B2B Services",
    sub: "SEO for Consulting Firms",
    body: [
      "Organic search strategies for consultants and B2B businesses selling specialized services to decision-makers.",
      "The focus is on relevant commercial searches, clear service positioning, technical SEO, and content that supports longer buying cycles.",
    ],
    cta: "Explore SEO for Consulting Firms",
  },
];

const results = [
  {
    client: "Jensen CPA",
    place: "Calgary, Alberta",
    body: "Technical SEO, content strategy, and service-page improvements supporting organic search visibility for a Calgary accounting firm.",
    href: "/results/jensen-cpa",
  },
  {
    client: "Empire Accountants",
    place: "Brisbane, Australia",
    body: "Search optimization for an established accounting and advisory firm, including service-page architecture, technical improvements, and content strategy.",
    href: "/results/empire-accountants",
  },
  {
    client: "Kinsmen Consulting",
    place: "Calgary, Alberta",
    body: "Website development and SEO supporting visibility for residential and commercial concrete construction services.",
    href: "/results/kinsmen-consulting",
  },
];

const Corner = () => (
  <svg className={hub.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

function IndustryCard({ item }: { item: (typeof industries)[number] }) {
  const inner = (
    <>
      <span className={hub.cardNum}>{item.num}</span>
      <h3 className={hub.cardTitle}>{item.title}</h3>
      <p className={hub.cardLead}>{item.sub}</p>
      <div className={hub.cardBody}>
        {item.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {item.href && (
        <span className={hub.cardLink}>
          <span>{item.cta} &rarr;</span>
          <span className={hub.plus} aria-hidden="true">+</span>
        </span>
      )}
    </>
  );
  return item.href ? (
    <Link href={item.href} className={hub.card}>{inner}</Link>
  ) : (
    <div className={`${hub.card} ${styles.staticCard}`}>{inner}</div>
  );
}

/* === Schema — CollectionPage + ItemList of industries + BreadcrumbList,
   linked to the global #website and #organization nodes in layout.tsx.
   Includes this page's BreadcrumbList, so <Breadcrumbs> is rendered with
   schema={false}. === */
const industriesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scaleseo.co/industries#webpage",
      "url": "https://scaleseo.co/industries",
      "name": "SEO for Professional Services & B2B Businesses | Scale SEO",
      "description": "SEO for accounting firms, consulting businesses, construction companies, and other established service providers across Canada and internationally.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/#organization"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/industries#industries"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/industries#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "ItemList",
      "@id": "https://scaleseo.co/industries#industries",
      "name": "Industries Scale SEO Works With",
      "description": "Professional service and B2B industries served by Scale SEO.",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accounting & Financial Services",
          "url": "https://scaleseo.co/industries/accounting-firms"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Construction & Contracting"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Consulting & B2B Services"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/industries#breadcrumb",
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
          "name": "Industries",
          "item": "https://scaleseo.co/industries"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function IndustriesPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />

      {/* === HERO — big title left, B&W image + intro right === */}
      <header className={hub.hero}>
        <div className={hub.heroLeft}>
          <div className={hub.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} schema={false} />
          </div>
          <h1 className={`${hub.heroTitle} ${styles.heroTitle}`}>SEO for Professional Service &amp; B2B Businesses</h1>
          <a href="#industries" className={hub.jump}>Industries I Work With &darr;</a>
        </div>
        <div className={hub.heroRight}>
          <div className={hub.heroImage}>
            <Image src="/images/calgary-skyline.webp" alt="Calgary skyline" fill priority sizes="(max-width: 900px) 90vw, 33vw" />
          </div>
          <div className={hub.heroIntro}>
            <p className={hub.heroLead}>
              Scale SEO provides search engine optimization for accounting
              firms, consulting businesses, construction companies, and other
              established service providers across Canada and internationally.
            </p>
            <p>
              Each campaign is built around your industry&rsquo;s search
              behaviour, competitive landscape, and the services that generate
              valuable business opportunities.
            </p>
          </div>
        </div>
      </header>

      {/* === INDUSTRIES — three boxes === */}
      <section className={hub.services} id="industries">
        <h2 className={hub.h2}>Industries I Work With</h2>
        <div className={styles.grid}>
          {industries.map((item) => (
            <IndustryCard key={item.num} item={item} />
          ))}
        </div>
      </section>

      {/* === EXPERIENCE — heading left of a rule, text right === */}
      <section className={hub.split}>
        <div className={hub.splitAside}>
          <h2 className={hub.h2}>Experience Across Different Industries</h2>
        </div>
        <div className={hub.splitBody}>
          <p className={hub.lead}>
            The fundamentals of SEO remain consistent, but the strategy needs to
            reflect how customers search within each market.
          </p>
          <p>
            For accounting firms, that may mean building visibility around
            corporate tax, advisory, and fractional CFO services.
          </p>
          <p>
            For construction companies, it may involve improving visibility for
            commercial projects, specialized services, and geographic service
            areas.
          </p>
          <p>
            For B2B consultants, the focus may be on technical service pages and
            the research potential clients conduct before making an enquiry.
          </p>
          <p>
            I develop each campaign around the business&rsquo;s actual services,
            competition, and growth objectives rather than applying the same
            keyword strategy across industries.
          </p>
        </div>
      </section>

      {/* === RESULTS — grey, three navy boxes === */}
      <section className={hub.results}>
        <h2 className={hub.h2}>Results From Client Campaigns</h2>
        <div className={styles.resultGrid}>
          {results.map((r) => (
            <Link key={r.href} href={r.href} className={hub.result}>
              <span className={hub.resultType}>{r.place}</span>
              <h3 className={styles.resultName}>{r.client}</h3>
              <p className={hub.resultBody}>{r.body}</p>
              <span className={hub.cardLink}>
                <span>View Case Study &rarr;</span>
                <span className={hub.plus} aria-hidden="true">+</span>
              </span>
            </Link>
          ))}
        </div>
        <div className={hub.resultsFoot}>
          <Link href="/results" className={`${hub.box} ${hub.boxBlue}`}>
            <Corner />
            <span>View All Client Results &rarr;</span>
          </Link>
        </div>
      </section>

      <ContactSection
        heading="Don't See Your Industry?"
        lead="Scale SEO also works with other established professional service and B2B businesses where organic search can support meaningful client acquisition. If your customers use Google to research and compare service providers, we can discuss whether SEO represents a worthwhile opportunity for your business."
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
