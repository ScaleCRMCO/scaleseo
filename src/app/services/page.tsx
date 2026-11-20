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
    lead: "Improve visibility for the searches that matter.",
    body: [
      "Our [SEO campaigns](/services/seo) combine technical improvements, content strategy, service-page optimization, and local search to help businesses reach more relevant customers through Google.",
      "Each campaign is shaped around your market, competition, and business priorities.",
    ],
    tags: ["Technical SEO", "Content Strategy", "Service Pages", "Local Search"],
    href: "/services/seo",
    cta: "Explore SEO Services",
  },
  {
    num: "02",
    title: "SEO Audits",
    lead: "Understand what\u2019s holding your website back.",
    body: [
      "Our [SEO audits](/services/seo-audits) examine crawling, indexing, website structure, content, and technical performance to identify issues and opportunities.",
      "We provide clear findings and prioritized recommendations, without unnecessary complexity.",
    ],
    tags: ["Crawling & Indexing", "Website Structure", "Content Review", "Technical Performance"],
    href: "/services/seo-audits",
    cta: "Explore SEO Audits",
  },
  {
    num: "03",
    title: "Website Development",
    lead: "Websites designed to perform.",
    body: [
      "We build and improve [business websites](/services/web-development) with clear navigation, strong technical foundations, and dedicated pages for important services.",
      "Every project considers search visibility, user experience, and long-term scalability.",
    ],
    tags: ["Clear Navigation", "Technical Foundations", "Service Pages", "User Experience"],
    href: "/services/web-development",
    cta: "Explore Website Development",
  },
  {
    num: "04",
    title: "Google Ads Management",
    lead: "Reach customers ready to take action.",
    body: [
      "Our [Google Ads management](/services/google-ads-management) focuses on relevant searches, efficient campaign structure, conversion tracking, and ongoing optimization.",
      "We prioritize qualified enquiries over traffic volume, with campaigns built around your business objectives.",
    ],
    tags: ["Relevant Searches", "Campaign Structure", "Conversion Tracking", "Ongoing Optimization"],
    href: "/services/google-ads-management",
    cta: "Explore Google Ads",
  },
  {
    num: "05",
    title: "AI Search Optimization",
    lead: "Improve how your business is understood across AI search.",
    body: [
      "Our [AI search optimization](/services/geo) services strengthen website content, structured data, and business information to support visibility across traditional and AI-assisted search experiences.",
      "We focus on accurate, useful information and measurable improvements where reliable data is available.",
    ],
    tags: ["Website Content", "Structured Data", "Business Information"],
    href: "/services/geo",
    cta: "Explore AI Search Optimization",
  },
];

const results = [
  {
    client: "Jensen CPA \u2014 Calgary, Canada",
    metric: "+395% Search Impressions",
    body: "Website redevelopment and SEO helped a Calgary accounting firm grow Google Search impressions by 395% and organic clicks by 205% (first vs. latest 30-day period, June\u2013November 2026).",
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
  },
  {
    client: "Empire Accountants \u2014 Brisbane, Australia",
    metric: "Page 5 \u2192 Page 1",
    body: "Technical SEO, accounting-focused content, and service-page improvements helped move priority searches onto page one.",
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
  {
    client: "Kinsmen Consulting \u2014 Calgary, Canada",
    metric: "$500K in New Projects",
    body: "Website development and ongoing SEO supported new project enquiries for a Calgary concrete contractor.",
    href: "/results/kinsmen-consulting",
    cta: "View Kinsmen Consulting Case Study",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which SEO service is right for my business?",
    a: [
      "For ongoing search visibility and website improvements, our [monthly SEO campaigns](/services/seo) are a suitable starting point.",
      "If you need to understand existing technical or content issues before committing to ongoing work, consider a [standalone SEO audit](/services/seo-audits).",
    ],
  },
  {
    q: "Can I purchase services individually?",
    a: ["Yes. SEO audits and website development are available as standalone projects. SEO and Google Ads management are offered as ongoing services, with scope tailored to your requirements."],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: ["Yes. Scale SEO is based in Calgary and works with accounting firms and established businesses across Canada and Australia."],
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
              <p className={styles.lead}>Search strategies built around the services your customers are looking for.</p>
              <div className={styles.cols2}>
                <p className={v.p}>Scale SEO provides search engine optimization, Google Ads, and website development for accounting firms and established service businesses across Canada and Australia.</p>
                <p className={v.p}>Based in Calgary, we specialize in accounting and professional services, combining technical expertise with practical strategies designed to improve search visibility and attract qualified enquiries.</p>
              </div>
              <ul className={styles.quick}>
                {services.map((x) => <li key={x.href}><Link href={x.href}>/ {x.title}</Link></li>)}
                <li><Link href="/services/national-seo">/ National SEO</Link></li>
              </ul>
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
            <p>Serving customers beyond one city? National SEO helps businesses build visibility for their specialized services across Canada.</p>
            <Btn href="/services/national-seo" tone="navy">Explore National SEO Services</Btn>
          </div>
        </div>
      </section>

      <section className={`${v.navy} ${v.sec}`} data-nav="dark">
        <div className={`${v.wrap} ${styles.labelled}`}>
          <span className={styles.sideLabel}>Who we work with</span>
          <div>
            <h2 className={styles.statement}>Specialized in Accounting. Experienced Across Industries.</h2>
            <p className={`${v.lead} ${styles.navyLead}`}>Accounting firms and professional services are central to our work, but our experience extends to consulting, construction, and other established service businesses.</p>
            <div className={styles.cols2Dark}>
              <p className={v.p}>We&rsquo;ve worked with companies in Canada and Australia to improve website structure, strengthen technical SEO, and develop content that supports their commercial goals.</p>
              <p className={v.p}>Our approach starts with understanding the services you want to grow, the customers you want to reach, and the competition in your market.</p>
            </div>
            <Btn href="/industries" tone="light">Explore Our Specialties</Btn>
          </div>
        </div>
      </section>

      <section className={`${v.white} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={v.head}>
            <div><h2 className={v.h2}>Results From Client Campaigns</h2></div>
            <div className={v.headSide}><Btn href="/results" tone="navy">View All Client Results</Btn></div>
          </div>
          <div className={styles.results}>
            {results.map((r) => (
              <Link key={r.href} href={r.href} className={styles.result}>
                <span className={v.small}>{r.client}</span>
                <span className={styles.metric}>{r.metric}</span>
                <span className={v.p}>{r.body}</span>
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
            <Btn href={BOOKING_URL} external tone="navy">Speak to an Expert</Btn>
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
          <div className={`${v.ctaBox} ${styles.cta}`} data-nav="dark">
            <div>
              <h2 className={v.h2}>Let&rsquo;s Improve Your Search Visibility</h2>
              <p className={v.p}>Tell us about your business, website, and growth goals. We&rsquo;ll help you identify where SEO, Google Ads, or website improvements could make the greatest difference.</p>
              <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
            </div>
            <ul className={styles.points}>
              {["Experience across accounting and professional services", "Flexible month-to-month SEO engagements", "Full ownership of your website, content, and data"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
