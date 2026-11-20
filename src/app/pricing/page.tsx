import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { type FaqItem } from "../services/ServicesFaq";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import { Faq } from "../sections/v3/Sections";
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
    "id": "monthly-seo",
    "tab": "Monthly SEO",
    "name": "Monthly SEO Management",
    "price": "$3,000",
    "unit": "/month + applicable GST",
    "summary": [
      "Ongoing SEO campaigns designed to improve your visibility on Google and attract more qualified enquiries.",
      "We combine technical improvements, content strategy, and website development to help your business compete for the searches that matter."
    ],
    "listLabel": "Campaigns can include:",
    "includes": [
      "Technical SEO and website optimization",
      "Keyword research and competitor analysis",
      "Service-page development and on-page SEO",
      "Local SEO and Google Business Profile optimization",
      "Content strategy and internal linking",
      "AI search visibility optimization",
      "Monthly performance reporting"
    ],
    "note": "We prioritize the work based on your website’s needs, competitive market, and business goals.",
    "href": "/services/seo",
    "cta": "Explore SEO Services",
    "featured": true
  },
  {
    "id": "seo-google-ads",
    "tab": "SEO & Google Ads",
    "name": "SEO & Google Ads Management",
    "price": "Custom Quote",
    "unit": "",
    "summary": [
      "A combined approach to organic search and paid advertising, designed to reach potential customers while building long-term search visibility.",
      "We manage SEO and Google Ads together, aligning campaign targeting, landing pages, and conversion tracking around your business objectives."
    ],
    "listLabel": "Campaigns can include:",
    "includes": [
      "Ongoing SEO management",
      "Google Ads strategy and campaign management",
      "Keyword research and search targeting",
      "Landing page optimization",
      "Conversion and enquiry tracking",
      "Combined performance reporting"
    ],
    "note": "Google Ads management fees and advertising spend are quoted separately.",
    "href": "/services/google-ads-management",
    "cta": "Explore Google Ads Management",
    "featured": false
  },
  {
    "id": "website",
    "tab": "Website Development",
    "name": "Website Design & Development",
    "price": "$6,000",
    "unit": "one-time + applicable GST",
    "summary": [
      "Custom websites built around your services, customers, and business goals.",
      "Whether you’re replacing an outdated website or building something new, we focus on clear design, usability, and strong technical foundations for search."
    ],
    "listLabel": "Projects can include:",
    "includes": [
      "Custom website design and development",
      "Dedicated service and industry pages",
      "SEO-friendly website structure",
      "Responsive design for mobile and desktop",
      "Contact forms and conversion-focused layouts",
      "Technical SEO and structured data",
      "Analytics and search tracking setup"
    ],
    "note": "Website projects are scoped individually. Hosting, maintenance, and ongoing SEO services are available separately.",
    "href": "/services/web-development",
    "cta": "Explore Website Development",
    "featured": false
  },
  {
    "id": "enterprise",
    "tab": "Enterprise & Multi-Location",
    "name": "Enterprise & Multi-Location SEO",
    "price": "Custom Quote",
    "unit": "",
    "summary": [
      "Advanced SEO campaigns for established businesses with larger websites, multiple locations, or more competitive search markets.",
      "These engagements may involve broader technical work, ongoing website development, and search strategies across several geographic areas."
    ],
    "listLabel": "Campaigns can include:",
    "includes": [
      "National and multi-location SEO",
      "Advanced technical SEO and site architecture",
      "Location and service-page development",
      "Larger-scale content strategies",
      "Ongoing website improvements",
      "Custom reporting and performance analysis"
    ],
    "note": "Every engagement is scoped around your website, target markets, and business requirements.",
    "href": "/contact",
    "cta": "Request a Custom Quote",
    "featured": false
  }
];

const factors = [
  {
    "title": "Competition & Target Market",
    "body": "Your industry, location, and competitors influence the work required. A business competing across Canada will often need a different strategy from one serving a smaller local market."
  },
  {
    "title": "Website Condition",
    "body": "Some websites have strong foundations. Others need technical fixes, better navigation, new service pages, or improvements to existing content."
  },
  {
    "title": "Campaign Scope",
    "body": "The number of services, locations, and search opportunities you want to target determines the amount of ongoing work."
  }
];

const termIcons = ["M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6", "M4 6h16v15H4zM4 10h16M9 3v4M15 3v4", "M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"];
const terms = [
  {
    "title": "Experience Across Industries",
    "body": "We specialize in accounting and professional services, with additional experience across consulting, construction, and other established service businesses in Canada and Australia."
  },
  {
    "title": "Flexible Monthly Engagements",
    "body": "Our ongoing SEO campaigns operate month-to-month, without long-term contracts."
  },
  {
    "title": "Ownership & Transparency",
    "body": "You retain ownership of your website, content, and accounts. We provide clear reporting on the work completed and how your search performance is developing."
  }
];

const faqs: FaqItem[] = [
  {
    "q": "How much does monthly SEO cost?",
    "a": [
      "Our ongoing SEO campaigns start at $3,000 CAD per month, plus applicable GST.",
      "Final pricing depends on your website, competition, target markets, and campaign requirements."
    ]
  },
  {
    "q": "What’s included in monthly SEO management?",
    "a": [
      "Campaigns can include technical SEO, keyword research, service-page improvements, content development, local SEO, internal linking, and performance reporting.",
      "The scope is tailored to your business rather than a fixed monthly package."
    ]
  },
  {
    "q": "How much does a new website cost?",
    "a": [
      "Custom website design and development starts at $6,000 CAD, plus applicable GST.",
      "Pricing depends on the number of pages, design requirements, functionality, and technical complexity."
    ]
  },
  {
    "q": "Can you manage both SEO and Google Ads?",
    "a": [
      "Yes. We provide Google Ads management independently or alongside monthly SEO.",
      "Advertising spend is separate from our management fees, and you retain ownership of your Google Ads account."
    ]
  },
  {
    "q": "Do you require long-term contracts?",
    "a": [
      "No. Our ongoing SEO campaigns operate month-to-month, without long-term lock-in contracts.",
      "Website development and other standalone projects are quoted separately."
    ]
  },
  {
    "q": "Do you work with businesses outside Calgary?",
    "a": [
      "Yes. Scale SEO is based in Calgary, Alberta, and works with businesses across Canada and Australia.",
      "While accounting and professional services are our primary focus, we also work with established businesses in other industries."
    ]
  }
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
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);

// Bilberrry work-index layout: side-label hero, sticky plan tabs, then
// alternating rows (plan details | price panel), factors, terms, FAQ, CTA
export default function PricingPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={`${v.white} ${styles.hero}`}>
        <div className={v.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} schema={false} />
          </div>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>Pricing</span>
            <div>
              <h1 className={styles.h1}>SEO &amp; Website Development Pricing</h1>
              <p className={styles.lead}>Clear starting prices. Strategies built around your business.</p>
              <div className={styles.cols2}>
                <p className={v.p}>Scale SEO provides SEO, Google Ads management, and website development for accounting firms, professional services, and established businesses across Canada and Australia.</p>
                <p className={v.p}>Every engagement is tailored to your website, competitive market, and growth objectives. We don&rsquo;t apply the same strategy or monthly checklist to every business.</p>
              </div>
              <div className={styles.heroBtn}><Btn href="/services" tone="navy">Explore Our Services</Btn></div>
            </div>
          </div>
        </div>
      </header>

      <section className={`${v.white} ${styles.plansSec}`} id="plans">
        <div className={styles.tabsBar}>
          <nav className={`${v.wrap} ${styles.tabs}`} aria-label="Jump to a service">
            {plans.map((p) => <a key={p.id} href={`#${p.id}`} className={styles.tab}>{p.tab}</a>)}
          </nav>
        </div>
        <div className={v.wrap}>
          <p className={styles.plansNote}>All prices are in Canadian dollars (CAD), plus applicable GST. Final pricing is confirmed after reviewing your website, market, and project requirements. Australian engagements are quoted separately in AUD.</p>
          {plans.map((p, i) => (
            <article key={p.id} id={p.id} className={`${styles.row} ${i % 2 ? styles.flip : ""}`}>
              <div className={styles.text}>
                <h2 className={styles.planName}>{p.name}</h2>
                <div className={styles.summaryWrap}><p className={styles.summary}>{p.summary[0]}</p><p className={v.p}>{p.summary[1]}</p></div>
                <div>
                  <p className={styles.listLabel}>{p.listLabel}</p>
                  <ul className={styles.tags}>{p.includes.map((x) => <li key={x}>/ {x}</li>)}</ul>
                </div>
                <p className={v.small}>{p.note}</p>
                <Link href={p.href} className={`${v.btn} ${v.btn_navy}`}><span>{p.cta}</span><Corner /></Link>
              </div>
              <div className={`${styles.pricePanel} ${p.featured ? styles.panelBlue : ""}`}>
                <span className={styles.from}>{p.unit ? "Starting at" : "Pricing"}</span>
                <span className={styles.price}>{p.price}</span>
                {p.unit && <span className={styles.unit}>{p.unit}</span>}
              </div>
            </article>
          ))}
          <p className={styles.audit}>
            Need a one-time website assessment? <Link href="/services/seo-audits">Explore SEO Audit Services</Link> for a standalone technical audit and tailored quote.
          </p>
        </div>
      </section>

      <section className={`${v.grey} ${v.sec}`}>
        <div className={`${v.wrap} ${styles.labelled}`}>
          <div>
            <h2 className={v.h2}>What Affects SEO Pricing?</h2>
            <p className={`${v.p} ${styles.asideP}`}>No two websites require the same amount of work. We consider three main factors when preparing a quote.</p>
          </div>
          <ol className={styles.factors}>
            {factors.map((f, i) => (
              <li key={f.title}>
                <span className={styles.num}>/ 0{i + 1}</span>
                <h3 className={v.h3}>{f.title}</h3>
                <p className={v.p}>{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${v.white} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={v.head}><div><h2 className={v.h2}>Working With Scale SEO</h2></div></div>
          <div className={`${v.points} ${v.cols3}`}>
            {terms.map((t, i) => (
              <div key={t.title} className={v.point}>
                <span className={v.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={termIcons[i]} /></svg></span>
                <h3 className={v.h3}>{t.title}</h3>
                <p className={v.p}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={faqs} />

      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={`${v.ctaBox} ${styles.cta}`} data-nav="dark">
            <div>
              <h2 className={v.h2}>Get a Quote for Your Business</h2>
              <p className={v.p}>Tell us about your website, the services you want to grow, and what you&rsquo;re looking to achieve through Google.</p>
              <p className={v.p}>We&rsquo;ll review your requirements and recommend an approach based on your business and budget.</p>
              <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
            </div>
            <ul className={styles.points}>
              {["Flexible month-to-month SEO campaigns", "No fixed packages or unnecessary services", "Full ownership of your website, content, and accounts"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
