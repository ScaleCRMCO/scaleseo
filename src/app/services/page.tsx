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
    lead: "Build long-term organic visibility around the services that matter to your business.",
    body: [
      "[Monthly SEO campaigns](/services/seo) combine technical improvements, service-page optimization, content development, internal linking, and local search strategy.",
      "Rather than following a fixed monthly checklist, I prioritize work based on your website’s existing performance, competitive opportunities, and the searches most likely to generate qualified enquiries.",
    ],
    href: "/services/seo",
    cta: "Explore SEO Services",
  },
  {
    num: "02",
    title: "SEO Audits",
    lead: "Understand what’s limiting your website’s search performance.",
    body: [
      "[Standalone SEO audits](/services/seo-audits) investigate technical issues, indexing and crawling problems, website architecture, content gaps, and missed search opportunities.",
      "Findings are translated into prioritized recommendations, helping you understand what needs attention and where improvements are likely to have the greatest impact.",
    ],
    href: "/services/seo-audits",
    cta: "Explore SEO Audits",
  },
  {
    num: "03",
    title: "Web Development",
    lead: "Websites built with search visibility, usability, and long-term growth in mind.",
    body: [
      "[Website development](/services/web-development) focuses on clear site architecture, responsive design, technical performance, and dedicated pages for important business services.",
      "Drawing on experience improving existing client websites, I build sites that are straightforward to navigate, maintain, and expand as your business grows.",
    ],
    href: "/services/web-development",
    cta: "Explore Web Development",
  },
  {
    num: "04",
    title: "Google Ads Management",
    lead: "Reach potential customers when they’re actively searching for your services.",
    body: [
      "[Google Ads management](/services/google-ads-management) focuses on commercially relevant search terms, campaign structure, negative keywords, conversion tracking, and ongoing performance improvements.",
      "Campaigns are managed around lead quality and business objectives, rather than traffic volume alone. Paid search can also complement an ongoing SEO campaign.",
    ],
    href: "/services/google-ads-management",
    cta: "Explore Google Ads",
  },
  {
    num: "05",
    title: "AI Search Optimization",
    lead: "Help search engines and AI systems better understand your business.",
    body: [
      "[AI Search Optimization](/services/geo) strengthens the content, structure, and business information that AI-assisted search systems can use when discovering and referencing websites.",
      "Work includes improving entity clarity, service information, structured data, and the quality of supporting website content, alongside monitoring visibility where reliable data is available.",
    ],
    href: "/services/geo",
    cta: "Explore AI Search Optimization",
  },
];

const results = [
  {
    client: "Empire Accountants",
    type: "Organic SEO",
    metric: "Page 5 → Page 1",
    body: "Improved target keyword visibility for a Brisbane accounting firm through technical SEO, stronger service-page content, and website structure improvements.",
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
  {
    client: "Kinsmen Consulting",
    type: "Website & SEO",
    metric: "$500K in Revenue From New Jobs",
    body: "Website development and ongoing SEO supporting growth for a Calgary concrete contractor, including improvements to service-page targeting, technical foundations, and organic search visibility.",
    href: "/results/kinsmen-consulting",
    cta: "View Kinsmen Consulting Case Study",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which SEO service is right for my business?",
    a: [
      "If you want ongoing improvements to organic search visibility, a [monthly SEO campaign](/services/seo) may be the best fit. If you’re unsure why your website isn’t performing or want an independent assessment before investing further, a [standalone SEO audit](/services/seo-audits) is a practical starting point.",
    ],
  },
  {
    q: "Can I purchase services individually?",
    a: [
      "Yes. [SEO audits](/services/seo-audits) and [web development](/services/web-development) are available as standalone projects. Monthly SEO and Google Ads management are recurring services, with the scope determined by your business needs.",
    ],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary, Alberta, and works with businesses across Canada and internationally, including Australia. Campaigns are developed around your target market rather than your physical proximity to Calgary.",
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
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardNum}>{s.num}</span>
      <h3 className={styles.cardTitle}>{s.title}</h3>
      <p className={styles.cardLead}>{s.lead}</p>
      <div className={styles.cardBody}>
        {s.body.map((p) => (
          <p key={p}>{rich(p)}</p>
        ))}
      </div>
      <Link href={s.href} className={styles.cardLink}>
        <span>{s.cta} &rarr;</span>
        <span className={styles.plus} aria-hidden="true">+</span>
      </Link>
    </div>
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
              Scale SEO provides SEO campaigns, technical audits, web
              development, Google Ads management, and AI search optimization for
              professional service and B2B businesses across Canada and
              internationally.
            </p>
            <p>
              Based in Calgary, Scale SEO is led by founder{" "}
              <Link href="/corbin-jensen" className={styles.inlineLink}>Corbin Jensen</Link>,
              who works directly on client strategy and implementation. Every
              engagement is shaped around the business&rsquo;s services,
              competitive market, and opportunities for measurable growth.
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
      </section>

      {/* === EXPERIENCE — heading left of a rule, text + link right === */}
      <section className={styles.split}>
        <div className={styles.splitAside}>
          <h2 className={styles.h2}>SEO Experience Applied to Real Businesses</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.lead}>
            Scale SEO works primarily with professional service and B2B
            businesses, including accounting firms, consultants, and advisory
            practices.
          </p>
          <p>
            My approach is informed by hands-on work across Canadian and
            Australian client websites, from restructuring service pages and
            resolving technical SEO issues to developing content strategies and
            improving internal linking.
          </p>
          <p>
            This experience shapes how I prioritize projects. Rather than
            recommending more content by default, I assess whether existing
            pages, website structure, or technical limitations should be
            addressed first.
          </p>
          <p>
            Whether you&rsquo;re improving an established website or building a
            new one, the focus is on work that supports your business goals and
            creates a stronger foundation for organic visibility.
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
                <span>{r.cta} &rarr;</span>
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
        points={[
          "Work directly with Corbin, no account managers",
          "Month-to-month SEO campaigns, no long-term contracts",
          "You own your website, content, and data",
        ]}
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
