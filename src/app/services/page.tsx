import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import { type FaqItem } from "./ServicesFaq";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import styles from "./hub.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO & Digital Marketing Services Calgary | Scale SEO" },
  description:
    "Explore SEO, Google Ads, website development, and technical audit services in Calgary. Specialized in accounting firms and professional services.",
  alternates: { canonical: "/services" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const services = [
  {
    num: "01",
    title: "Search Engine Optimization",
    lead: "Build a stronger presence where your customers are searching.",
    body: [
      "Our ongoing [SEO services](/services/seo) bring together technical improvements, content strategy, and website optimization to improve organic visibility for relevant searches.",
      "We establish priorities based on your business, competition, and existing website rather than working through the same monthly checklist for every client.",
    ],
    tags: ["Technical SEO", "Content Strategy", "Service-Page SEO", "Local & National Search"],
    href: "/services/seo",
    cta: "Explore SEO Services",
  },
  {
    num: "02",
    title: "AI Search Optimization",
    lead: "Make your business easier to understand and discover.",
    body: [
      "Our [AI search optimization services](/services/geo) focus on improving the information available about your business across its website and relevant online sources.",
      "We strengthen content, structured information, and website clarity to support visibility across traditional search engines and AI-powered search experiences.",
    ],
    tags: ["Content Improvements", "Structured Data", "Business Information"],
    href: "/services/geo",
    cta: "Explore AI Search Optimization",
  },
  {
    num: "03",
    title: "Website Development",
    lead: "Websites built with purpose.",
    body: [
      "We [design, develop, and improve websites](/services/web-development) that clearly explain what a business does, make important services easy to find, and provide a strong foundation for search.",
      "Whether we’re developing a new website or improving an established one, we consider usability, technical performance, and the ability to grow over time.",
    ],
    tags: ["Website Design", "Development", "Service-Page Architecture", "Technical Foundations"],
    href: "/services/web-development",
    cta: "Explore Website Development",
  },
  {
    num: "04",
    title: "Google Ads Management",
    lead: "Reach prospective clients when they’re ready to act.",
    body: [
      "Our [Google Ads management](/services/google-ads-management) focuses on commercially relevant searches, well-structured campaigns, and measurable enquiries.",
      "We typically use paid search to complement an organic strategy, helping businesses reach prospective clients while longer-term search visibility develops.",
    ],
    tags: ["Search Campaigns", "Keyword Targeting", "Conversion Tracking", "Ongoing Optimization"],
    href: "/services/google-ads-management",
    cta: "Explore Google Ads Management",
  },
  {
    num: "05",
    title: "SEO Audits & Consulting",
    lead: "Understand what needs attention before deciding what comes next.",
    body: [
      "Our [SEO audits](/services/seo-audits) examine a website’s technical foundations, indexing, content, and search performance to identify problems and opportunities.",
      "Each audit provides clear findings and prioritized recommendations, without unnecessary complexity or a requirement to commit to an ongoing campaign.",
    ],
    tags: ["Crawling & Indexing", "Website Architecture", "Content Review", "Technical Analysis"],
    href: "/services/seo-audits",
    cta: "Explore SEO Audits",
  },
];

const results = [
  {
    client: "Jensen CPA — Calgary, Canada",
    metric: "+395% Google Search Impressions",
    body: "Website redevelopment, technical SEO, and ongoing content strategy helped Jensen CPA strengthen its visibility for corporate tax, bookkeeping, and advisory services.",
    note: "Comparison of the first and latest 30-day reporting periods, June–November 2026.",
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
  },
  {
    client: "Empire Accountants — Brisbane, Australia",
    metric: "Page 5 → Page 1",
    body: "Service-page improvements, technical SEO, and accounting-focused content supported stronger visibility for priority accounting and advisory searches.",
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
  {
    client: "Kinsmen Consulting — Calgary, Canada",
    metric: "Approximately $500K in New Projects",
    body: "Website development and ongoing SEO supported new project enquiries for a Calgary concrete contractor.",
    href: "/results/kinsmen-consulting",
    cta: "View Kinsmen Consulting Case Study",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which service is right for my business?",
    a: [
      "For businesses seeking ongoing improvements in organic search, our [SEO campaigns](/services/seo) are generally the starting point.",
      "If your website needs substantial changes, we may recommend website development alongside SEO. For businesses looking to understand specific technical or content problems, a standalone audit may be more suitable.",
    ],
  },
  {
    q: "Can services be purchased individually?",
    a: [
      "Yes. We offer standalone SEO audits and website development projects, alongside ongoing SEO engagements.",
      "Google Ads and AI search optimization can also form part of a broader strategy, depending on your requirements and the scope we agree on.",
    ],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary and works with businesses across Canada and Australia.",
      "We manage projects remotely and tailor our work to the client’s location, competitive market, and business objectives.",
    ],
  },
  {
    q: "Do you work exclusively with accounting firms?",
    a: [
      "No. Accounting is our primary specialization, but we also work with selected professional and established service businesses where our experience is relevant.",
      "[Explore Our Industries](/industries)",
    ],
  },
  {
    q: "Do you require long-term contracts?",
    a: [
      "Our ongoing SEO engagements operate month-to-month without long-term lock-in contracts.",
      "Website development, audits, and other projects are scoped separately based on the work involved.",
    ],
  },
];

// Paragraph text with [label](/path) links rendered as <Link>s
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
function rich(t: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of t.matchAll(LINK)) {
    if (m.index! > last) out.push(t.slice(last, m.index));
    out.push(
      <Link key={m.index} href={m[2]} className={styles.inlineLink}>
        {m[1]}
      </Link>
    );
    last = m.index! + m[0].length;
  }
  if (last < t.length) out.push(t.slice(last));
  return out;
}

const Corner = () => (
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);
const strip = (t: string) => t.replace(LINK, "$1");

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
      name: "SEO & Digital Marketing Services Calgary | Scale SEO",
      description:
        "Explore SEO, Google Ads, website development, and technical audit services in Calgary. Specialized in accounting firms and professional services.",
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
      numberOfItems: 6,
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
          name: "AI Search Optimization",
          url: "https://scaleseo.co/services/geo",
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
          name: "SEO Audits & Consulting",
          url: "https://scaleseo.co/services/seo-audits",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "National SEO",
          url: "https://scaleseo.co/services/national-seo",
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

/* === Page — Bilberrry hub: side-label hero with quick links, numbered
   service list, statement split, results, FAQ, CTA ===================== */
export default function ServicesPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.map(strip).join(" ") } })) };
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className={`${v.white} ${styles.hero}`}>
        <div className={v.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} schema={false} />
          </div>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>Our services</span>
            <div>
              <h1 className={styles.h1}>SEO &amp; Digital Marketing Services in Calgary</h1>
              <p className={styles.lead}>Practical search strategies, better websites, and the work needed to put them into practice.</p>
              <div className={styles.cols2}>
                <p className={v.p}>Scale SEO is an independent Calgary consultancy providing SEO, website development, AI search optimization, and Google Ads for accounting firms and established professional service businesses across Canada and Australia.</p>
                <p className={v.p}>Our services can work independently or together, depending on your website, market, and business priorities.</p>
              </div>
              <ul className={styles.quick}>
                {services.map((x) => <li key={x.href}><Link href={x.href}>/ {x.title}</Link></li>)}
                <li><Link href="/services/national-seo">/ National SEO</Link></li>
              </ul>
              <a href="#services" className={v.textLink}>Explore Our Services ↓</a>
            </div>
          </div>
        </div>
      </header>

      <section className={`${v.white} ${styles.listSec}`} id="services">
        <div className={v.wrap}>
          <div className={styles.listHead}>
            <h2 className={v.h2}>Our Services</h2>
          </div>
          <ol className={styles.list}>
            {services.map((x) => (
              <li key={x.href} className={styles.row}>
                <span className={styles.num}>/ {x.num}</span>
                <div>
                  <Link href={x.href} className={styles.name}>{x.title} <Corner /></Link>
                  <p className={styles.rowLead}>{x.lead}</p>
                </div>
                <div className={styles.rowBody}>
                  {x.body.map((p) => <p key={p} className={v.p}>{rich(p)}</p>)}
                  <ul className={styles.tags}>{x.tags.map((t) => <li key={t}>/ {t}</li>)}</ul>
                  <Link href={x.href} className={v.textLink}>{x.cta} <Corner /></Link>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.national}>
            <div>
              <h3 className={v.h3}>National SEO</h3>
              <p className={styles.rowLead}>Reach customers beyond your local market.</p>
              <p className={v.p}>For businesses serving clients across multiple cities or throughout Canada, our <Link href="/services/national-seo" className={styles.inlineLink}>national SEO services</Link> focus on broader search opportunities, specialized content, and website structures suited to larger markets.</p>
            </div>
            <Btn href="/services/national-seo" tone="navy">Explore National SEO Services</Btn>
          </div>
        </div>
      </section>

      <section className={`${v.navy} ${v.sec}`} data-nav="dark">
        <div className={`${v.wrap} ${styles.labelled}`}>
          <span className={styles.sideLabel}>Who we work with</span>
          <div>
            <h2 className={styles.statement}>Specialized in Accounting. Experienced Beyond It.</h2>
            <p className={`${v.lead} ${styles.navyLead}`}>Accounting and professional services are at the centre of our work.</p>
            <div className={styles.cols2Dark}>
              <p className={v.p}>We&rsquo;ve developed search strategies and websites for accounting firms in Canada and Australia, alongside businesses in consulting, construction, and other specialist industries.</p>
              <p className={v.p}>While the markets differ, our starting point remains the same: understand the business, identify where search can make a difference, and carry out the work properly.</p>
            </div>
            <Btn href="/industries" tone="light">Explore Our Industries</Btn>
          </div>
        </div>
      </section>

      <section className={`${v.white} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={v.head}>
            <div><h2 className={v.h2}>Selected Client Work</h2><p className={v.p}>A look at how our services have been applied across different businesses and markets.</p></div>
            <div className={v.headSide}><Btn href="/results" tone="navy">View All Client Results</Btn></div>
          </div>
          <div className={styles.results}>
            {results.map((r) => (
              <Link key={r.href} href={r.href} className={styles.result}>
                <span className={v.small}>{r.client}</span>
                <span className={styles.metric}>{r.metric}</span>
                <span className={v.p}>{r.body}</span>
                {r.note && <span className={v.small}><em>{r.note}</em></span>}
                <span className={v.textLink}>{r.cta} <Corner /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${v.grey} ${v.sec}`} id="faq">
        <div className={`${v.wrap} ${v.faq}`}>
          <div>
            <h2 className={v.h2}>Frequently Asked Questions</h2>
            <Btn href={BOOKING_URL} external tone="navy">Book a Consultation</Btn>
          </div>
          <div className={v.acc}>
            {faqs.map((f, i) => (
              <details key={f.q} className={v.accItem} name="services-faq" open={i === 0}>
                <summary className={v.accSum}>
                  <h3 className={v.accQ}>{f.q}</h3>
                  <span className={v.plus} aria-hidden="true" />
                </summary>
                <div className={v.stack}>{f.a.map((p) => <p key={p} className={v.p}>{rich(p)}</p>)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={`${v.ctaBox} ${styles.cta} ${styles.ctaSolo}`} data-nav="dark">
            <div>
              <h2 className={v.h2}>Let&rsquo;s Talk About Your Business.</h2>
              <p className={v.p}>Whether you&rsquo;re looking to improve an existing website, strengthen your organic visibility, or explore a more complete search strategy, we&rsquo;d be glad to hear what you&rsquo;re working toward.</p>
              <p className={v.p}>We&rsquo;ll discuss your goals, review where things stand, and recommend an approach that makes sense for your business.</p>
              <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
