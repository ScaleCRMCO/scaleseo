import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../services/ServicesFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Pricing for Accounting Firms | Scale SEO" },
  description:
    "Explore SEO pricing for accounting firms, CPA practices and tax accountants. Monthly SEO from $3,000 CAD, plus Google Ads and website development.",
  alternates: { canonical: "/pricing" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const plans = [
  {
    name: "Monthly SEO for Accounting Firms",
    price: "$3,000",
    unit: "/month + GST",
    summary:
      "Ongoing SEO campaigns designed to help accounting firms improve their visibility on Google and generate qualified enquiries for corporate tax, bookkeeping, fractional CFO, and advisory services.",
    listLabel: "Campaigns can include:",
    includes: [
      "Technical SEO and website optimization",
      "Accounting keyword research and competitor analysis",
      "Service-page development and on-page SEO",
      "Local SEO and Google Business Profile optimization",
      "Content strategy and internal linking",
      "AI search visibility optimization",
      "Monthly performance reporting",
    ],
    note: "We prioritize the accounting services and search opportunities that align with your firm\u2019s growth objectives.",
    href: "/services/seo",
    cta: "Explore SEO Services",
    featured: true,
  },
  {
    name: "SEO & Google Ads Management",
    price: "Custom Quote",
    unit: "",
    summary:
      "An integrated search strategy combining long-term organic visibility with targeted Google Ads campaigns. This approach helps accounting firms reach prospective clients through both organic and paid search, with campaign priorities built around the services they want to grow.",
    listLabel: "Campaigns can include:",
    includes: [
      "Ongoing SEO management",
      "Google Ads campaign strategy and management",
      "Accounting-specific keyword targeting",
      "Landing page optimization",
      "Conversion and enquiry tracking",
      "Combined performance analysis",
    ],
    note: "Google Ads management fees and advertising spend are quoted separately.",
    href: "/services/google-ads-management",
    cta: "Explore Google Ads Services",
    featured: false,
  },
  {
    name: "Website Design & Development",
    price: "$6,000",
    unit: "one-time + GST",
    summary:
      "Custom websites for accounting firms that need a professional online presence, clear service positioning, and a strong technical SEO foundation.",
    listLabel: "Projects can include:",
    includes: [
      "Custom website design and development",
      "Dedicated accounting and advisory service pages",
      "SEO-friendly website architecture",
      "Mobile-responsive layouts",
      "Conversion-focused enquiry forms",
      "Technical SEO and structured data foundations",
      "Analytics and search tracking setup",
    ],
    note: "Website projects are scoped individually, with optional hosting, maintenance, and ongoing SEO services available.",
    href: "/services/web-development",
    cta: "Explore Website Development",
    featured: false,
  },
  {
    name: "Enterprise & Multi-Location SEO",
    price: "Custom Quote",
    unit: "",
    summary:
      "Advanced SEO campaigns for larger accounting practices, established professional service firms, and businesses targeting multiple geographic markets.",
    listLabel: "Campaigns can include:",
    includes: [
      "National and multi-location SEO strategies",
      "Advanced technical SEO and website architecture",
      "Location-specific accounting service pages",
      "Large-scale content development",
      "Website improvements and ongoing optimization",
      "Custom performance reporting",
    ],
    note: "Every engagement is scoped around your firm\u2019s size, services, locations, and growth objectives.",
    href: "/contact",
    cta: "Request a Custom Quote",
    featured: false,
  },
];

const factors = [
  {
    title: "Competition & Target Market",
    body: "Ranking for corporate tax services in a competitive city may require a more extensive campaign than targeting a specialized accounting service in a smaller market.",
  },
  {
    title: "Website Condition",
    body: "Older accounting websites may need technical improvements, clearer navigation, updated service pages, or indexing fixes before ongoing SEO can reach its potential.",
  },
  {
    title: "Services & Campaign Scope",
    body: "The number of accounting services, geographic markets, and content opportunities influences the amount of ongoing optimization needed.",
  },
];

const terms = [
  {
    title: "Accounting Industry Experience",
    body: "We have hands-on experience improving search visibility for accounting firms in Canada and Australia, including corporate tax, bookkeeping, and business advisory services.",
  },
  {
    title: "Flexible Monthly Engagements",
    body: "Our ongoing SEO campaigns operate month-to-month without long-term lock-in contracts.",
  },
  {
    title: "Ownership & Transparency",
    body: "You retain ownership of your website, content, advertising accounts, and data, with clear reporting on campaign progress.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does SEO cost for an accounting firm?",
    a: [
      "Monthly SEO campaigns with Scale SEO start at $3,000 CAD plus applicable GST.",
      "Final pricing depends on your website\u2019s condition, competition, target services, geographic markets, and required optimization work.",
    ],
  },
  {
    q: "What\u2019s included in monthly SEO management?",
    a: [
      "Campaigns can include technical SEO, accounting keyword research, service-page optimization, local SEO, content strategy, internal linking, AI search optimization, and monthly reporting.",
      "We tailor priorities to your firm\u2019s services and business objectives.",
    ],
  },
  {
    q: "How much does a new accounting firm website cost?",
    a: [
      "Custom website development starts at $6,000 CAD plus applicable GST.",
      "Final pricing depends on the number of service pages, design requirements, functionality, and website complexity.",
    ],
  },
  {
    q: "Can you manage both SEO and Google Ads?",
    a: [
      "Yes. We offer integrated SEO and Google Ads management for accounting firms looking to improve organic visibility while reaching prospective clients through paid search.",
      "Management fees and advertising budgets are quoted separately based on campaign requirements.",
    ],
  },
  {
    q: "Do you require long-term contracts?",
    a: ["No. Our ongoing SEO campaigns operate on a month-to-month basis without long-term lock-in contracts."],
  },
  {
    q: "Do you work with accounting firms outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary, Alberta, and works with accounting firms across Canada and Australia.",
      "We develop strategies based on each firm\u2019s location, accounting services, and target clients.",
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
      "name": "SEO Pricing for Accounting Firms | Scale SEO",
      "description": "Explore SEO pricing for accounting firms, CPA practices and tax accountants. Monthly SEO from $3,000 CAD, plus Google Ads and website development.",
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
          "price": "6000",
          "priceCurrency": "CAD",
          "description": "Custom website design and development starting from $6,000 CAD as a one-time fee plus GST.",
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

      {/* === Hero — big title + small note left; B&W image, subheading and text right === */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} schema={false} />
          </div>
          <h1 className={styles.heroTitle}>SEO &amp; Website Pricing for Accounting Firms</h1>
          <a href="#plans" className={styles.heroNote}>See Starting Prices &darr;</a>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImage}>
            <Image
              src="/images/calgary-skyline.webp"
              alt="Calgary skyline"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 33vw"
            />
          </div>
          <p className={styles.heroSub}>
            Transparent starting prices for accounting firms investing in
            long-term search visibility and client acquisition.
          </p>
          <p className={styles.heroBody}>
            Scale SEO provides SEO, Google Ads management, and website
            development for CPA firms, tax accountants, bookkeeping practices,
            and financial advisory businesses across Canada and Australia.
          </p>
          <p className={styles.heroBody}>
            Our campaigns are tailored to your firm&rsquo;s services, target
            clients, and competitive market.
          </p>
        </div>
      </header>

      {/* === Starting prices — three plan columns === */}
      <section className={styles.plansSection} id="plans">
        <div className={styles.head}>
          <h2 className={styles.bigH2}>Starting Prices</h2>
          <p className={styles.headBody}>
            All prices listed in Canadian dollars (CAD), plus applicable GST.
            Final pricing is confirmed after reviewing your website, target
            market, and campaign requirements. Australian engagements are
            quoted separately in AUD.
          </p>
        </div>

        <div className={styles.plans}>
          {plans.map((p) => (
            <article key={p.name} className={`${styles.plan} ${p.featured ? styles.featured : ""}`}>
              <h3 className={styles.planName}>{p.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.from}>{p.unit ? "Starting at" : "Pricing"}</span>
                <span className={styles.price}>{p.price}</span>
                {p.unit && <span className={styles.unit}>{p.unit}</span>}
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
          Need an independent website assessment?{" "}
          <Link href="/services/seo-audits">Explore SEO Audit Services</Link> for
          a standalone technical SEO audit and tailored quote.
        </p>
      </section>

      {/* === What affects pricing — heading left, ruled rows right === */}
      <section className={styles.split}>
        <div className={styles.splitAside}>
          <h2 className={styles.bigH2}>What Affects SEO Pricing for Accounting Firms?</h2>
          <p className={styles.asideBody}>
            Every accounting practice has different competitors, services, and
            growth objectives. These factors help determine the work required.
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
        heading="Get a Quote for Your Accounting Firm"
        lead="Whether you're looking to improve organic visibility, launch Google Ads, or develop a new website, we'll review your firm's requirements and recommend a practical starting point."
        points={[
          "Experience with accounting firms in Canada and Australia",
          "Flexible month-to-month SEO campaigns",
          "Full ownership of your website, content, and data",
        ]}
        cta={{ href: BOOKING_URL, label: "Book a Consultation \u2192" }}
      />
    </main>
  );
}
