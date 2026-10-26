import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SketchIcon from "../components/SketchIcon";
import ContactSection from "../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../services/ServicesFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO & Website Pricing in Calgary | Scale SEO" },
  description:
    "Transparent starting prices for SEO and websites in Calgary. Monthly SEO from $3,000 + GST and websites from $4,000 + GST. Month-to-month, no lock-in contracts.",
  alternates: { canonical: "/pricing" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const plans = [
  {
    name: "Monthly SEO Campaigns",
    icon: "search",
    price: "$3,000",
    unit: "/month + GST",
    summary:
      "Ongoing SEO campaigns designed to improve organic search visibility, attract qualified enquiries, and support long-term business growth.",
    listLabel: "Campaigns can include:",
    includes: [
      "Technical SEO and website improvements",
      "Keyword research and on-page optimization",
      "Local SEO and Google Business Profile",
      "Content strategy and internal linking",
      "AI search visibility optimization",
      "Performance tracking and monthly reporting",
    ],
    note: "Every campaign is managed directly by Corbin Jensen, with priorities tailored to your website and competitive market.",
    href: "/services/seo",
    cta: "Explore SEO Services",
    featured: true,
  },
  {
    name: "Website Design & Development",
    icon: "browser",
    price: "$4,000",
    unit: "one-time + GST",
    summary: "Custom websites built with search visibility, usability, and conversions in mind.",
    listLabel: "Projects can include:",
    includes: [
      "Custom website design and development",
      "SEO-friendly site structure",
      "Mobile-responsive layouts",
      "Technical SEO foundations",
      "Conversion-focused page design",
      "Analytics and search tracking setup",
    ],
    note: "Website projects are scoped individually, with optional hosting and ongoing SEO services available separately.",
    href: "/services/web-development",
    cta: "Explore Web Development",
    featured: false,
  },
];

const factors = [
  {
    title: "Competition & Target Market",
    body: "Competitive industries and larger geographic markets generally require more extensive SEO strategies.",
  },
  {
    title: "Website Condition",
    body: "Websites with technical issues, indexing problems, or outdated structures may require additional optimization.",
  },
  {
    title: "Content & Campaign Scope",
    body: "The number of services, target keywords, locations, and content improvements influences the amount of ongoing work.",
  },
];

const terms = [
  {
    title: "Founder-Led",
    body: "Work directly with Corbin Jensen, the specialist responsible for your strategy and implementation.",
  },
  {
    title: "Month-to-Month",
    body: "Ongoing SEO campaigns operate without long-term lock-in contracts.",
  },
  {
    title: "Your Website, Your Assets",
    body: "You retain ownership of your website, content, accounts, and data.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much do monthly SEO services cost?",
    a: [
      "Monthly SEO campaigns with Scale SEO start at $3,000 CAD plus GST.",
      "The final retainer depends on your website\u2019s condition, industry competition, target locations, and campaign requirements.",
    ],
  },
  {
    q: "What\u2019s included in monthly SEO management?",
    a: [
      "Campaigns can include technical SEO, on-page optimization, local SEO, content strategy, internal linking, AI search optimization, website improvements, and performance reporting.",
      "The exact work is tailored to your business rather than a fixed list of monthly deliverables.",
    ],
  },
  {
    q: "How much does a new business website cost?",
    a: [
      "Website design and development projects start at $4,000 CAD plus GST.",
      "Final pricing depends on the website\u2019s functionality, design requirements, content, and development scope. Optional hosting and ongoing SEO are quoted separately.",
    ],
  },
  {
    q: "Do you require long-term contracts?",
    a: [
      "No. Ongoing SEO campaigns are offered month-to-month, and clients retain ownership of their websites, content, accounts, and data.",
    ],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary, Alberta, and works with businesses across Canada and internationally, including clients in Australia.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/pricing#webpage",
      "url": "https://scaleseo.co/pricing",
      "name": "SEO & Website Pricing in Calgary | Scale SEO",
      "description": "View Scale SEO starting prices for monthly SEO campaigns and website development in Calgary. All pricing is in CAD and engagements are scoped around your business, website and market.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/#organization"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/pricing#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/pricing#offers"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://scaleseo.co/pricing#offers",
      "name": "Scale SEO Services & Starting Prices",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Monthly SEO Campaign",
          "url": "https://scaleseo.co/services/seo",
          "price": "3000",
          "priceCurrency": "CAD",
          "description": "Ongoing SEO campaign management starting from $3,000 CAD per month plus GST.",
          "seller": {
            "@id": "https://scaleseo.co/#organization"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly SEO Campaign",
            "url": "https://scaleseo.co/services/seo",
            "provider": {
              "@id": "https://scaleseo.co/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "name": "Website Design & Development",
          "url": "https://scaleseo.co/services/web-development",
          "price": "4000",
          "priceCurrency": "CAD",
          "description": "Custom website design and development starting from $4,000 CAD as a one-time fee plus GST.",
          "seller": {
            "@id": "https://scaleseo.co/#organization"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "url": "https://scaleseo.co/services/web-development",
            "provider": {
              "@id": "https://scaleseo.co/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/pricing#breadcrumb",
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
          "name": "Pricing",
          "item": "https://scaleseo.co/pricing"
        }
      ]
    }
  ]
};

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function PricingPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* === Hero === */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} schema={false} />
          </div>
          <h1 className={styles.heroTitle}>SEO &amp; Website Pricing in Calgary</h1>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroText}>
            <p className={styles.heroIntro}>
              Straightforward pricing for businesses investing in long-term
              search visibility and growth.
            </p>
            <p>
              Scale SEO offers founder-led SEO campaigns and website
              development, with transparent starting rates and custom quotes
              based on your business needs.
            </p>
          </div>
          <div className={styles.heroActions}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${styles.box} ${styles.boxNavy}`}>
              <Corner />
              <span>Book a Consultation &rarr;</span>
            </a>
            <a href="#plans" className={`${styles.box} ${styles.boxGrey}`}>
              <Corner />
              <span>See Starting Prices &darr;</span>
            </a>
          </div>
        </div>
      </header>

      {/* === Starting prices — two plan boxes === */}
      <section className={styles.plansSection} id="plans">
        <div className={styles.head}>
          <h2 className={styles.bigH2}>Starting Prices</h2>
          <p className={styles.headBody}>
            All prices in Canadian dollars (CAD), plus applicable GST. Final
            pricing is confirmed after reviewing your website, market, and
            project requirements.
          </p>
        </div>

        <div className={styles.plans}>
          {plans.map((p) => (
            <article key={p.name} className={`${styles.plan} ${p.featured ? styles.featured : ""}`}>
              <div className={styles.planTop}>
                <h3 className={styles.planName}>{p.name}</h3>
                <SketchIcon name={p.icon} className={styles.planIcon} />
              </div>
              <div className={styles.priceRow}>
                <span className={styles.from}>Starting at</span>
                <span className={styles.price}>
                  {p.price}
                  <span className={styles.unit}> {p.unit}</span>
                </span>
              </div>
              <p className={styles.planSummary}>{p.summary}</p>
              <div>
                <p className={styles.listLabel}>{p.listLabel}</p>
                <ul className={styles.planList}>
                  {p.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.planNote}>{p.note}</p>
              <Link href={p.href} className={styles.planLink}>
                <span>{p.cta} &rarr;</span>
                <span className={styles.plus} aria-hidden="true">+</span>
              </Link>
            </article>
          ))}
        </div>

        <p className={styles.plansNote}>
          Need a standalone SEO audit?{" "}
          <Link href="/services/seo-audits">Explore SEO Audit Services</Link> for
          an independent website assessment and tailored quote.
        </p>
      </section>

      {/* === What affects pricing — heading left, ruled rows right === */}
      <section className={styles.split}>
        <div className={styles.splitAside}>
          <h2 className={styles.bigH2}>What Affects SEO Pricing?</h2>
          <p className={styles.asideBody}>
            Every business competes in a different market. Your final quote
            reflects the work needed to achieve your goals.
          </p>
        </div>
        <div className={styles.rows}>
          {factors.map((f, i) => (
            <div key={f.title} className={styles.row}>
              <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.rowTitle}>{f.title}</h3>
              <p className={styles.rowBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Working with Scale SEO — blue, three boxes === */}
      <section className={styles.termsSection}>
        <h2 className={styles.bigH2}>Working With Scale SEO</h2>
        <div className={styles.terms}>
          {terms.map((t, i) => (
            <div key={t.title} className={styles.term}>
              <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.termTitle}>{t.title}</h3>
              <p className={styles.termBody}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Get a Quote for Your Business"
        lead="Whether you're looking for ongoing SEO management or a new website, I'll review your requirements and recommend a practical starting point."
        cta={{ href: BOOKING_URL, label: "Book a Consultation \u2192" }}
      />
    </main>
  );
}
