import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
import CaseStudy, { type CaseCard } from "../sections/home/CaseStudy";

const industryCases: CaseCard[] = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA \u2014 Calgary, Canada",
    services: "Website Development / Technical SEO / Service Pages",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 92, prefix: "+", suffix: "%" },
    metricLabel: "Organic Clicks",
    summary: "Website redevelopment, technical SEO, service-page improvements, and ongoing search optimization helped Jensen CPA improve visibility for its accounting services.",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants \u2014 Brisbane, Australia",
    services: "Service Pages / Technical SEO / Accounting Content",
    image: "/images/empire-accountants-cover.webp",
    metric: { text: "Page One" },
    metricLabel: "Search Visibility",
    summary: "Service-page optimization, technical improvements, and accounting-focused content helped Empire Accountants improve visibility for priority accounting and advisory searches.",
  },
];
import hub from "../services/hub.module.css";
import styles from "./hub.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO for Accounting & Financial Firms | Scale SEO" },
  description:
    "Specialized SEO for CPA firms, tax accountants, bookkeeping practices, and financial advisory businesses in Canada and Australia. Explore Scale SEO's expertise.",
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
  cta?: string;
}[] = [
  {
    num: "01",
    title: "CPA & Accounting Firms",
    sub: "SEO for Accounting Firms",
    body: [
      "Help your accounting practice attract more relevant enquiries for corporate tax, business accounting, bookkeeping, and advisory services.",
      "With hands-on experience supporting accounting firms in Canada and Australia, Scale SEO builds search strategies around how businesses find and compare accounting professionals.",
    ],
    href: "/industries/accounting-firms",
    cta: "Explore SEO for Accounting Firms",
  },
  {
    num: "02",
    title: "Fractional CFO & Advisory Firms",
    sub: "SEO for Fractional CFO Services",
    body: [
      "Build visibility among established businesses searching for outsourced CFO services, financial planning, cash flow management, and strategic business advice.",
      "The focus is on reaching business owners and decision-makers researching long-term financial support.",
    ],
  },
  {
    num: "03",
    title: "Bookkeeping & Cloud Accounting",
    sub: "SEO for Bookkeeping Firms",
    body: [
      "Attract businesses looking for recurring bookkeeping, payroll support, financial reporting, and cloud accounting services.",
      "Strategies focus on relevant commercial searches, clear service pages, and building trust with prospective long-term clients.",
    ],
  },
  {
    num: "04",
    title: "Tax & Specialist Accounting Practices",
    sub: "SEO for Tax Accountants",
    body: [
      "Improve search visibility for specialized tax services, including corporate tax, tax planning, business structures, and other services relevant to your practice.",
      "Each strategy is built around your firm\u2019s expertise, target clients, and the services you want to grow.",
    ],
  },
];


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
      "name": "SEO for Accounting & Financial Firms | Scale SEO",
      "description": "Specialized SEO for CPA firms, tax accountants, bookkeeping practices, and financial advisory businesses in Canada and Australia.",
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
      "name": "Accounting Specialties Scale SEO Works With",
      "description": "Accounting and financial service specialties served by Scale SEO.",
      "numberOfItems": 4,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CPA & Accounting Firms", "url": "https://scaleseo.co/industries/accounting-firms" },
        { "@type": "ListItem", "position": 2, "name": "Fractional CFO & Advisory Firms" },
        { "@type": "ListItem", "position": 3, "name": "Bookkeeping & Cloud Accounting" },
        { "@type": "ListItem", "position": 4, "name": "Tax & Specialist Accounting Practices" }
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
          <h1 className={`${hub.heroTitle} ${styles.heroTitle}`}>SEO for Accounting Firms &amp; Financial Professionals</h1>
          <a href="#industries" className={hub.jump}>Explore Accounting Specialties &darr;</a>
        </div>
        <div className={hub.heroRight}>
          <div className={hub.heroImage}>
            <Image src="/images/calgary-skyline.webp" alt="Calgary skyline" fill priority sizes="(max-width: 900px) 90vw, 33vw" />
          </div>
          <div className={hub.heroIntro}>
            <p className={hub.heroLead}>
              Specialized SEO and Google Ads strategies for CPA firms, tax
              accountants, bookkeeping practices, and financial advisory
              businesses across Canada and Australia.
            </p>
            <p>
              Every campaign focuses on improving visibility for the services
              that matter most to your firm, from corporate tax and bookkeeping
              to higher-value advisory work.
            </p>
          </div>
        </div>
      </header>

      {/* === INDUSTRIES — three boxes === */}
      <section className={hub.services} id="industries">
        <h2 className={hub.h2}>Accounting Specialties We Work With</h2>
        <div className={styles.grid}>
          {industries.map((item) => (
            <IndustryCard key={item.num} item={item} />
          ))}
        </div>
      </section>

      {/* === STRATEGY — heading left of a rule, text right === */}
      <section className={hub.split}>
        <div className={hub.splitAside}>
          <h2 className={hub.h2}>Search Strategies Built Around Accounting Firms</h2>
        </div>
        <div className={hub.splitBody}>
          <p className={hub.lead}>
            Accounting firms often offer similar services, but their ideal
            clients and growth goals can be very different.
          </p>
          <p>
            A CPA firm targeting established corporations needs a different SEO
            strategy from a bookkeeping practice seeking monthly clients or an
            advisory firm promoting fractional CFO services.
          </p>
          <p>
            Scale SEO develops each campaign around your firm&rsquo;s most
            valuable services, the searches prospective clients make, and the
            competitive landscape in your market.
          </p>
          <p>
            The goal is not simply more website traffic. It&rsquo;s better
            visibility among businesses actively looking for the services your
            firm provides.
          </p>
        </div>
      </section>

      {/* === RESULTS — homepage case study row, industry-focused wording === */}
      <CaseStudy
        id="results"
        label="Client Work"
        heading="Results From Accounting Firm Campaigns"
        aside="Real SEO work with accounting firms in Canada and Australia."
        cards={industryCases}
      />

      <ContactSection
        heading="Work Directly With an Accounting SEO Specialist"
        lead="Scale SEO is an independent SEO consultancy founded by Corbin Jensen. You work directly with the person researching, developing, and implementing your search strategy."
        points={[
          "Direct communication with Corbin, no account managers",
          "Month-to-month engagements without long-term contracts",
          "Full ownership of your website, content, and data",
          "Experience working with accounting firms in Canada and Australia",
        ]}
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
