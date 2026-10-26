import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ServicesFaq, { type FaqItem } from "./ServicesFaq";
import ServicesMark from "../sections/home/ServicesMark";
import ContactSection from "../components/ContactSection";
import styles from "./hub.module.css";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services Calgary | Scale SEO",
  description:
    "Explore SEO, SEO audits, web development, Google Ads and AI search services from Scale SEO in Calgary. Direct, month-to-month support with no long-term contracts.",
  alternates: { canonical: "/services" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const services = [
  {
    num: "01",
    title: "Search Engine Optimization (SEO)",
    lead: "Build long-term organic visibility and attract the right customers.",
    body: [
      "Ongoing, month-to-month SEO campaigns combining technical SEO, keyword research, on-page optimization, content strategy, local SEO, and website improvements.",
      "Campaigns are tailored to your business and adjusted using search performance data rather than a fixed monthly checklist.",
    ],
    href: "/services/seo",
    cta: "Explore SEO Services",
  },
  {
    num: "02",
    title: "SEO Audits",
    lead: "Understand what\u2019s holding your website back.",
    body: [
      "Standalone SEO audits that uncover technical issues, indexing problems, content gaps, and opportunities to improve organic search performance.",
      "Receive prioritized recommendations without committing to an ongoing SEO campaign.",
    ],
    href: "/services/seo-audits",
    cta: "Explore SEO Audits",
  },
  {
    num: "03",
    title: "Web Development",
    lead: "Websites designed for search visibility and conversions.",
    body: [
      "Search-friendly websites built around clear site architecture, responsive design, technical performance, and user experience.",
      "Available as standalone projects or alongside ongoing SEO campaigns.",
    ],
    href: "/services/web-development",
    cta: "Explore Web Development",
  },
  {
    num: "04",
    title: "Google Ads Management",
    lead: "Reach potential customers actively searching for your services.",
    body: [
      "Targeted Google Ads campaigns focused on high-intent keywords, relevant landing pages, conversion tracking, and ongoing optimization.",
      "Paid search can complement SEO by generating visibility while organic rankings develop.",
    ],
    href: "/services/google-ads-management",
    cta: "Explore Google Ads",
  },
  {
    num: "05",
    title: "AI Search Optimization",
    lead: "Strengthen your visibility across AI-powered search.",
    body: [
      "Improve how your business is understood and represented across AI-assisted search experiences, including ChatGPT, Perplexity, and Google AI features.",
      "Services focus on content quality, website structure, entity clarity, and AI search visibility monitoring.",
    ],
    href: "/services/geo",
    cta: "Explore AI Search Optimization",
  },
];

const results = [
  {
    client: "Empire Accountants",
    type: "Organic SEO",
    metric: "Page 5 \u2192 Page 1",
    body: "Improved target keyword rankings for a Brisbane accounting firm through technical SEO, service-page optimization, and content improvements.",
    href: "/results/empire-accountants",
  },
  {
    client: "Kinsmen Consulting",
    type: "Website & SEO",
    metric: "26% Revenue Growth in Six Months",
    body: "Website development and search optimization supporting growth for a Calgary concrete contractor.",
    href: "/results/kinsmen-consulting",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which SEO service is right for my business?",
    a: [
      "If you\u2019re looking for ongoing organic growth, monthly SEO management is generally the best starting point. If you need to understand your website\u2019s current issues first, a standalone SEO audit may be more appropriate.",
    ],
  },
  {
    q: "Can I purchase services individually?",
    a: [
      "Yes. SEO audits and web development are available as standalone projects. Ongoing SEO and Google Ads management are offered as recurring services, depending on your business needs.",
    ],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary, Alberta, but works with businesses across Canada and internationally, including clients in Australia. Services can be delivered remotely and tailored to your target market.",
    ],
  },
];

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

function ServiceCard({ s, className = "" }: { s: (typeof services)[number]; className?: string }) {
  return (
    <Link href={s.href} className={`${styles.card} ${className}`}>
      <span className={styles.cardNum}>{s.num}</span>
      <h3 className={styles.cardTitle}>{s.title}</h3>
      <p className={styles.cardLead}>{s.lead}</p>
      <div className={styles.cardBody}>
        {s.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <span className={styles.cardLink}>
        <span>{s.cta} &rarr;</span>
        <span className={styles.plus} aria-hidden="true">+</span>
      </span>
    </Link>
  );
}

/* === Schema — /services only. Links to the global #website and
   #organization nodes in layout.tsx; includes this page's BreadcrumbList
   (so <Breadcrumbs> is rendered with schema={false}). === */
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scaleseo.co/services#webpage",
      url: "https://scaleseo.co/services",
      name: "SEO & Digital Marketing Services in Calgary | Scale SEO",
      description:
        "Explore SEO, SEO audits, web development, Google Ads management, and AI search optimization services from Scale SEO in Calgary. Services are managed directly for professional service and B2B businesses.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": "https://scaleseo.co/#organization" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      mainEntity: { "@id": "https://scaleseo.co/services#services" },
      breadcrumb: { "@id": "https://scaleseo.co/services#breadcrumb" },
      inLanguage: "en-CA",
    },
    {
      "@type": "ItemList",
      "@id": "https://scaleseo.co/services#services",
      name: "Scale SEO Services",
      description: "SEO and digital marketing services offered by Scale SEO.",
      numberOfItems: 5,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Search Engine Optimization (SEO)",
          url: "https://scaleseo.co/services/seo",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Audits",
          url: "https://scaleseo.co/services/seo-audits",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development",
          url: "https://scaleseo.co/services/web-development",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Google Ads Management",
          url: "https://scaleseo.co/services/google-ads-management",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "AI Search Optimization",
          url: "https://scaleseo.co/services/geo",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://scaleseo.co/services",
        },
      ],
    },
  ],
};

/* === Page =============================================================== */

export default function ServicesPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* === HERO — big title left, B&W image + intro right === */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} schema={false} />
          </div>
          <h1 className={styles.heroTitle}>Calgary SEO &amp; Digital Growth Services</h1>
          <a href="#services" className={styles.jump}>Explore Our Services &darr;</a>
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
          <div className={styles.heroIntro}>
            <p className={styles.heroLead}>
              Scale SEO provides search engine optimization, SEO audits, web
              development, Google Ads management, and AI search optimization for
              businesses across Canada and internationally.
            </p>
            <p>
              Based in Calgary and managed directly by founder Corbin Jensen,
              each service is tailored to your website, market, and business
              goals.
            </p>
          </div>
        </div>
      </header>

      {/* === SERVICES — heading, card | animated mark | card, then three cards === */}
      <section className={styles.services} id="services">
        <h2 className={styles.h2}>Search &amp; Digital Growth Services</h2>
        <div className={styles.grid}>
          <ServiceCard s={services[0]} />
          <ServicesMark className={styles.markCell} />
          <ServiceCard s={services[1]} />
          <ServiceCard s={services[2]} />
          <ServiceCard s={services[3]} />
          <ServiceCard s={services[4]} />
        </div>
        <p className={styles.servicesNote}>
          Whether you need ongoing SEO, a technical audit, a better website, or
          paid search management, Scale SEO provides practical solutions to
          improve your online visibility and attract qualified enquiries.
        </p>
      </section>

      {/* === EXPERIENCE — heading left of a rule, text + link right === */}
      <section className={styles.split}>
        <div className={styles.splitAside}>
          <h2 className={styles.h2}>SEO Experience Across Canada &amp; Australia</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.lead}>
            Scale SEO works primarily with professional service and B2B
            businesses, including accounting firms, advisory practices,
            consultants, and other service providers.
          </p>
          <p>
            From Calgary to Brisbane, campaigns are developed around each
            client&rsquo;s industry, competition, and target market.
          </p>
          <Link href="/industries" className={`${styles.box} ${styles.boxNavy}`}>
            <Corner />
            <span>Explore Industries &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === RESULTS — grey section, navy case boxes === */}
      <section className={styles.results}>
        <h2 className={styles.h2}>Results From Real Client Campaigns</h2>
        <div className={styles.resultGrid}>
          {results.map((r) => (
            <Link key={r.href} href={r.href} className={styles.result}>
              <span className={styles.resultType}>{r.client} &mdash; {r.type}</span>
              <h3 className={styles.resultMetric}>{r.metric}</h3>
              <p className={styles.resultBody}>{r.body}</p>
              <span className={styles.cardLink}>
                <span>View Case Study &rarr;</span>
                <span className={styles.plus} aria-hidden="true">+</span>
              </span>
            </Link>
          ))}
        </div>
        <div className={styles.resultsFoot}>
          <Link href="/results" className={`${styles.box} ${styles.boxBlue}`}>
            <Corner />
            <span>View All Client Results &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Ready to Improve Your Search Visibility?"
        lead="Tell me about your business, website, and growth goals. I'll help you determine which services make sense for your situation."
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
