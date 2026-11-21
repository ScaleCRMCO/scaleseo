import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";

const industryCases = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA \u2014 Calgary, Canada",
    services: "Website Development / Technical SEO / Service Pages",
    image: "/images/jensen-cpa-cover.webp",
    metric: "+395%",
    metricLabel: "Google Search Impressions",
    summary: "Website redevelopment, technical SEO, service-page improvements, and ongoing search optimization helped Jensen CPA improve visibility for its accounting services.",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants \u2014 Brisbane, Australia",
    services: "Service Pages / Technical SEO / Accounting Content",
    image: "/images/empire-accountants-cover.webp",
    metric: "Page One",
    metricLabel: "Search Visibility",
    summary: "Service-page optimization, technical improvements, and accounting-focused content helped Empire Accountants improve visibility for priority accounting and advisory searches.",
  },
];
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
  icon: string;
  title: string;
  sub: string;
  body: string[];
  href?: string;
  cta?: string;
}[] = [
  {
    num: "01",
    icon: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6",
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
    icon: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    title: "Fractional CFO & Advisory Firms",
    sub: "SEO for Fractional CFO Services",
    body: [
      "Build visibility among established businesses searching for outsourced CFO services, financial planning, cash flow management, and strategic business advice.",
      "The focus is on reaching business owners and decision-makers researching long-term financial support.",
    ],
  },
  {
    num: "03",
    icon: "M6 3h12v18H6zM9 7h6M9 11h6M9 15h4",
    title: "Bookkeeping & Cloud Accounting",
    sub: "SEO for Bookkeeping Firms",
    body: [
      "Attract businesses looking for recurring bookkeeping, payroll support, financial reporting, and cloud accounting services.",
      "Strategies focus on relevant commercial searches, clear service pages, and building trust with prospective long-term clients.",
    ],
  },
  {
    num: "04",
    icon: "M9 14l6-6M9.5 8.5h.01M14.5 13.5h.01M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z",
    title: "Tax & Specialist Accounting Practices",
    sub: "SEO for Tax Accountants",
    body: [
      "Improve search visibility for specialized tax services, including corporate tax, tax planning, business structures, and other services relevant to your practice.",
      "Each strategy is built around your firm\u2019s expertise, target clients, and the services you want to grow.",
    ],
  },
];


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
      "numberOfItems": 5,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CPA & Accounting Firms", "url": "https://scaleseo.co/industries/accounting-firms" },
        { "@type": "ListItem", "position": 2, "name": "Fractional CFO & Advisory Firms" },
        { "@type": "ListItem", "position": 3, "name": "Bookkeeping & Cloud Accounting" },
        { "@type": "ListItem", "position": 4, "name": "Tax & Specialist Accounting Practices" },
        { "@type": "ListItem", "position": 5, "name": "Accounting Firms in Australia", "url": "https://scaleseo.co/industries/accounting-firms-australia" }
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
          "name": "Specialties",
          "item": "https://scaleseo.co/industries"
        }
      ]
    }
  ]
};

/* === Page — Mamba industry layout: navy split hero, labelled statement,
   icon accordion beside a sticky image, strategy rows, results, CTA ===== */
const Corner = () => (
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);

export default function IndustriesPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }} />

      {/* Hero */}
      <header className={`${v.navy} ${styles.hero}`} data-nav="dark">
        <div className={`${v.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <div className={styles.crumbs}>
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Specialties" }]} schema={false} />
            </div>
            <h1 className={styles.h1}>Industries We Work With</h1>
            <p className={v.lead}>
              Specialized SEO for accounting firms and professional service businesses across Canada and Australia.
            </p>
            <div className={styles.heroBtns}>
              <Btn href="#specialties">Explore Our Specialties</Btn>
            </div>
            <div className={styles.badges}>
              <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" aria-label="Semrush Certified Agency Partner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={56} height={56} />
              </a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO reviews on Clutch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={140} height={27} />
              </a>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image src="/images/calgary-skyline.webp" alt="Calgary skyline" fill priority sizes="(max-width: 900px) 100vw, 600px" />
          </div>
        </div>
      </header>

      {/* Focus */}
      <section className={`${v.white} ${v.sec}`}>
        <div className={`${v.wrap} ${styles.labelled}`}>
          <h2 className={v.h2}>A Focus on Accounting &amp; Professional Services</h2>
          <div className={styles.copy}>
            <p className={styles.copyLead}>Good search strategy starts with understanding the industry behind the website.</p>
            <p className={v.p}>An accounting firm seeking corporate tax clients has different priorities from a construction company pursuing commercial projects. What works for one business won&rsquo;t necessarily work for another.</p>
            <p className={v.p}>At Scale SEO, accounting is our primary specialty. Our experience working with firms in Canada and Australia has given us practical insight into how professional services are searched for, compared, and selected.</p>
            <p className={v.p}>We apply that understanding to every engagement, with a focus on the services and clients that matter most to the business.</p>
          </div>
        </div>
      </section>

      {/* Two markets */}
      <section className={`${v.grey} ${v.sec}`} id="specialties">
        <div className={v.wrap}>
          <div className={v.head}>
            <div><h2 className={v.h2}>Accounting Expertise Across Two Markets</h2></div>
            <div className={v.headSide}>
              <p className={v.p}>We&rsquo;ve worked with accounting firms in Canada and Australia, where regulations, terminology, and search behaviour can differ considerably.</p>
              <p className={v.p}>Our approach is grounded in the same principle: understand the firm, its market, and the work it wants more of.</p>
            </div>
          </div>
          <div className={styles.markets}>
            {[
              { label: "Canada", title: "SEO for Canadian Accounting Firms", body: "Our Canadian experience includes corporate tax, bookkeeping, fractional CFO, and business advisory services, supported by our work with Jensen CPA in Calgary.", href: "/industries/accounting-firms", cta: "Explore Accounting SEO in Canada", img: "/images/calgary-downtown-bow-river.webp", alt: "Downtown Calgary skyline and the Bow River" },
              { label: "Australia", title: "SEO for Australian Accounting Firms", body: "Our Australian experience includes business taxation, BAS, SMSF, bookkeeping, and advisory services, supported by our work with Empire Accountants in Brisbane.", href: "/industries/accounting-firms-australia", cta: "Explore Accounting SEO in Australia", img: "/images/melbourne-skyline-bw.webp", alt: "Black and white view of the downtown Melbourne skyline in Victoria, Australia" },
            ].map((m) => (
              <div key={m.label} className={styles.market}>
                <div className={styles.marketImg}><Image src={m.img} alt={m.alt} fill sizes="(max-width: 900px) 100vw, 620px" /></div>
                <div className={styles.marketText}>
                  <h3 className={styles.marketLabel}>{m.label}</h3>
                  <p className={styles.marketTitle}>{m.title}</p>
                  <p className={v.p}>{m.body}</p>
                  <Btn href={m.href} tone="navy">{m.cta}</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond accounting */}
      <section className={`${v.white} ${v.sec}`}>
        <div className={`${v.wrap} ${styles.labelled}`}>
          <h2 className={v.h2}>Experience Beyond Accounting</h2>
          <div className={styles.copy}>
            <p className={styles.copyLead}>While accounting is our main focus, our experience extends to other professional and specialist service businesses.</p>
            <p className={v.p}>We&rsquo;ve worked with businesses in consulting, construction, and skilled trades, where reputation, technical expertise, and relevant search visibility are equally important.</p>
            <p className={v.p}>We take on selected projects outside accounting where our experience and approach are a good fit.</p>
            <div><Btn href="/results" tone="navy">Explore Our Client Work</Btn></div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className={`${v.grey} ${v.sec}`} id="results">
        <div className={v.wrap}>
          <div className={v.head}>
            <div>
              <h2 className={v.h2}>Selected Client Results</h2>
            </div>
            <div className={v.headSide}>
              <p className={v.p}>A look at our work with accounting firms in two different markets.</p>
            </div>
          </div>
          <div className={styles.results}>
            {industryCases.map((c) => (
              <Link key={c.href} href={c.href} className={styles.result}>
                <span className={styles.resultImg}>
                  <Image src={c.image} alt={c.client} fill sizes="(max-width: 900px) 100vw, 620px" />
                </span>
                <span className={styles.resultMeta}>
                  <span className={v.small}>{c.client}</span>
                  <span className={styles.metric}>{c.metric} <span className={v.small}>{c.metricLabel}</span></span>
                  <span className={v.p}>{c.summary}</span>
                  <span className={v.textLink}>Read the Case Study <Corner /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Work With Scale SEO</h2>
            <p className={v.p}>We&rsquo;re an independent Calgary SEO consultancy working with accounting firms and selected professional service businesses across Canada and Australia.</p>
            <p className={v.p}>If you&rsquo;re looking for a more considered approach to search, we&rsquo;d be glad to learn about your business.</p>
            <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
