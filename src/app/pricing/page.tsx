import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SketchIcon from "../components/SketchIcon";
import Contact from "../components/ContactCta";
import ServicesFaq, { type FaqItem } from "../services/ServicesFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Pricing in Calgary — Monthly SEO, Audits & Websites | Scale SEO",
  description:
    "Transparent starting prices for SEO in Calgary. Monthly SEO from $2,000 + GST, SEO audits from $500, and websites from $3,000. Month-to-month, no lock-in contracts.",
  alternates: { canonical: "/pricing" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const BASE = "https://scaleseo.co";

type Plan = {
  name: string;
  price: number;
  unit: "month" | "one-time";
  icon: string;
  href: string;
  summary: string;
  includes: string[];
  note?: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Monthly SEO Campaign",
    price: 2000,
    unit: "month",
    icon: "search",
    href: "/services/seo",
    summary:
      "An ongoing campaign built around your market, competition, and growth targets. Priorities shift month to month based on the data.",
    includes: [
      "Technical SEO",
      "Local SEO & Google Business Profile",
      "On-page SEO & site structure",
      "GEO (AI search visibility)",
      "Design & CTA improvements to your existing site",
      "Tracking & monthly reporting",
    ],
    featured: true,
  },
  {
    name: "Website Build",
    price: 3000,
    unit: "one-time",
    icon: "browser",
    href: "/services/web-development",
    summary:
      "A complete website built from scratch, scoped around what your business needs rather than a per-page count.",
    includes: [
      "Custom design & development",
      "SEO-ready structure from day one",
      "Conversion-focused page layouts",
      "Optional monthly hosting add-on",
      "Monthly SEO can be added on top",
    ],
  },
  {
    name: "SEO Audit",
    price: 500,
    unit: "one-time",
    icon: "ledger",
    href: "/services/seo-audits",
    summary:
      "A focused review of the core technical and on-page factors affecting your organic search performance.",
    includes: [
      "Technical health check",
      "On-page review",
      "Prioritized fix list",
    ],
  },
  {
    name: "Advanced SEO Audit",
    price: 1500,
    unit: "one-time",
    icon: "caseStudy",
    href: "/services/seo-audits",
    summary:
      "Everything in the SEO Audit, plus deeper keyword, competitor, content, architecture, and local SEO analysis.",
    includes: [
      "Keyword & competitor analysis",
      "Content & architecture review",
      "Local SEO analysis",
      "Developer-ready roadmap",
    ],
  },
];

const factors = [
  { title: "Market competition", body: "Ranking for competitive commercial terms in Calgary takes more work than a niche with a handful of competitors." },
  { title: "Geographic reach", body: "Ranking in one city is a different campaign from ranking across Alberta, multiple locations, or nationally." },
  { title: "Technical debt", body: "Older websites with structural, speed, or indexing problems need more groundwork before growth work pays off." },
  { title: "Content requirements", body: "How many service, location, and supporting pages are needed to compete for the searches that matter." },
];

const agency = [
  "Sales team commissions",
  "Account managers relaying messages",
  "Work handed to junior staff",
  "Office and overhead costs",
  "Long-term contracts to lock in revenue",
];

const direct = [
  "You work directly with the person doing the work",
  "Retainer goes into technical work and content",
  "Strategy and execution under one roof",
  "Month-to-month — stay because it’s working",
  "Fast decisions, no departmental hand-offs",
];

const terms = [
  { title: "Month-to-Month", body: "No long-term commitments. All SEO retainers are strictly month-to-month." },
  { title: "You Own Everything", body: "You retain 100% ownership of your website, content, accounts, and data from day one." },
  { title: "Founder-Led", body: "Every campaign is run by Corbin Jensen directly — no junior account managers." },
  { title: "Clear Starting Prices", body: "Starting rates are published here. Your exact quote is confirmed in writing before any work begins." },
];

const faqs: FaqItem[] = [
  {
    q: "How much does SEO cost in Calgary?",
    a: [
      "Ongoing SEO campaigns with Scale SEO start from $2,000 + GST per month.",
      "The final price depends on your market competition, the number of locations or regions you want to rank in, your website’s current condition, and how much content is needed.",
    ],
  },
  {
    q: "Why is working with an independent SEO specialist more cost-effective than a Calgary SEO agency?",
    a: [
      "Agency retainers carry significant overhead — sales commissions, account managers, office space, and layers of staff between you and the person doing the work.",
      "With Scale SEO, your retainer goes into active technical optimization, content, and website improvements, and you deal directly with the specialist running your campaign.",
    ],
  },
  {
    q: "What factors increase the cost of an SEO campaign?",
    a: [
      "The biggest factors are how competitive your market is, technical problems on older websites, how much content is needed, and geographic reach — ranking across Calgary alone is a smaller job than ranking across Alberta or multiple locations.",
    ],
  },
  {
    q: "Do you require a long-term contract?",
    a: [
      "No. All SEO retainers are month-to-month, and your website, content, accounts, and data remain yours.",
    ],
  },
  {
    q: "What’s included in the monthly SEO price?",
    a: [
      "Depending on what your business needs, a campaign can include technical SEO, local SEO, on-page optimization, GEO (AI search visibility), and design or CTA improvements to your existing website, along with tracking and reporting.",
    ],
    link: { href: "/services/seo", label: "See What’s Included in SEO" },
  },
  {
    q: "How much does a new website cost?",
    a: [
      "Websites built from scratch start from $3,000 + GST as a one-time upfront fee. I don’t price per page — the scope covers what’s needed for a complete site.",
      "Monthly hosting is available as an optional add-on, and ongoing SEO can be added from the standard starting rate.",
    ],
  },
  {
    q: "Can I start with an SEO audit instead of a monthly campaign?",
    a: [
      "Yes. The SEO Audit starts from $500 + GST and the Advanced SEO Audit starts from $1,500 + GST. Both are one-time fees with no obligation to continue.",
    ],
    link: { href: "/services/seo-audits", label: "Learn More About SEO Audits" },
  },
];

const fmt = (n: number) => `$${n.toLocaleString("en-CA")}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Scale SEO Pricing",
  url: `${BASE}/pricing`,
  itemListElement: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    url: `${BASE}${p.href}`,
    description: p.summary,
    priceCurrency: "CAD",
    areaServed: { "@type": "City", name: "Calgary" },
    seller: { "@type": "ProfessionalService", name: "Scale SEO", url: BASE },
    itemOffered: { "@type": "Service", name: p.name, serviceType: p.name },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: p.price,
      price: p.price,
      priceCurrency: "CAD",
      valueAddedTaxIncluded: false,
      ...(p.unit === "month" ? { unitCode: "MON", unitText: "month" } : {}),
    },
  })),
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]}
        title={
          <>
            SEO Pricing in <span className="title-block">Calgary</span>
          </>
        }
        icon="pricing"
        actions={
          <>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span>Get a Custom Quote</span>
              <span>→</span>
            </a>
            <a href="#plans">
              <span>See Starting Prices</span>
              <span>↓</span>
            </a>
          </>
        }
      >
        <p>
          Every business is different, so every campaign is scoped individually —
          but you shouldn’t have to book a call just to find out what SEO costs.
          Here are my starting prices.
        </p>
      </PageHero>

      {/* === Plans === */}
      <section className={styles.plansSection} id="plans">
        <div className={styles.head}>
          <h2 className={styles.bigH2}>Starting Prices</h2>
          <p className={styles.headBody}>
            All prices in CAD, plus GST. I typically work with established
            businesses generating over $1M in annual revenue that want search to
            become a serious source of new clients.
          </p>
        </div>

        <div className={styles.plans}>
          {plans.map((p) => (
            <article
              key={p.name}
              className={`${styles.plan} ${p.featured ? styles.featured : ""}`}
            >
              <div className={styles.planTop}>
                <h3 className={styles.planName}>{p.name}</h3>
                <SketchIcon name={p.icon} className={styles.planIcon} />
              </div>
              <div className={styles.priceRow}>
                <span className={styles.from}>Starting from</span>
                <span className={styles.price}>
                  {fmt(p.price)}
                  <span className={styles.unit}>
                    {p.unit === "month" ? " /month" : " one-time"} + GST
                  </span>
                </span>
              </div>
              <p className={styles.planSummary}>{p.summary}</p>
              <ul className={styles.planList}>
                {p.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={p.href} className={styles.planLink}>
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <p className={styles.plansNote}>
          Google Ads management is quoted per account. Need a new website and
          ongoing SEO? The website fee is paid upfront and monthly SEO is added
          from the standard starting rate.
        </p>
      </section>

      {/* === What affects your price — navy === */}
      <section className={styles.factorsSection} data-nav-theme="dark">
        <h2 className={styles.bigH2}>What Affects Your Price</h2>
        <div className={styles.factors}>
          {factors.map((f, i) => (
            <div key={f.title} className={styles.factor}>
              <span className={styles.factorNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.factorTitle}>{f.title}</h3>
              <p className={styles.factorBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Agency vs direct === */}
      <section className={styles.compareSection}>
        <h2 className={styles.bigH2}>Where Your Retainer Actually Goes</h2>
        <div className={styles.compare}>
          <div className={styles.compareCol}>
            <h3 className={styles.compareLabel}>Typical Agency Retainer</h3>
            <ul className={styles.compareList}>
              {agency.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.compareCol} ${styles.compareUs}`}>
            <h3 className={styles.compareLabel}>Scale SEO Retainer</h3>
            <ul className={styles.compareList}>
              {direct.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === Terms — light blue === */}
      <section className={styles.termsSection}>
        <h2 className={styles.bigH2}>The Scale SEO Terms</h2>
        <div className={styles.terms}>
          {terms.map((t) => (
            <div key={t.title} className={styles.term}>
              <h3 className={styles.termTitle}>{t.title}</h3>
              <p className={styles.termBody}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesFaq
        items={faqs}
        eyebrow="Pricing Questions"
        title={
          <>
            SEO Pricing <em>Questions</em>
          </>
        }
      />

      <Contact />
    </main>
  );
}
