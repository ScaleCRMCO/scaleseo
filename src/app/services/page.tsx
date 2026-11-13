import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ServicesFaq, { type FaqItem } from "./ServicesFaq";
import ServicesMark from "../sections/home/ServicesMark";
import ContactSection from "../components/ContactSection";
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
    href: "/services/geo",
    cta: "Explore AI Search Optimization",
  },
];

const results = [
  {
    client: "Jensen CPA \u2014 Calgary, Canada",
    metric: "+92% Organic Clicks",
    body: "Website redevelopment and SEO improvements helped a Calgary accounting firm increase organic clicks by 92% during the first four months of its campaign.",
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
          <h1 className={styles.heroTitle}>SEO &amp; Digital Marketing Services in Calgary</h1>
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
              Search strategies built around the services your customers are
              looking for.
            </p>
            <p>
              Scale SEO provides search engine optimization, Google Ads, and
              website development for accounting firms and established service
              businesses across Canada and Australia.
            </p>
            <p>
              Based in Calgary, we specialize in accounting and professional
              services, combining technical expertise with practical strategies
              designed to improve search visibility and attract qualified
              enquiries.
            </p>
          </div>
        </div>
      </header>

      {/* === SERVICES — heading, card | animated mark | card, then three cards === */}
      <section className={styles.services} id="services">
        <h2 className={styles.h2}>Our Services</h2>
        <div className={styles.grid}>
          <ServiceCard s={services[0]} />
          <ServicesMark className={styles.markCell} />
          <ServiceCard s={services[1]} />
          <ServiceCard s={services[2]} />
          <ServiceCard s={services[3]} />
          <ServiceCard s={services[4]} />
          <div className={styles.outro}>
            <p>
              Serving customers beyond one city? National SEO helps businesses
              build visibility for their specialized services across Canada.
            </p>
            <Link href="/services/national-seo" className={styles.outroLink}>
              Explore National SEO Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — heading left of a rule, text + link right === */}
      <section className={styles.split}>
        <div className={styles.splitAside}>
          <h2 className={styles.h2}>Specialized in Accounting. Experienced Across Industries.</h2>
        </div>
        <div className={styles.splitBody}>
          <p className={styles.lead}>
            Accounting firms and professional services are central to our work,
            but our experience extends to consulting, construction, and other
            established service businesses.
          </p>
          <p>
            We&rsquo;ve worked with companies in Canada and Australia to improve
            website structure, strengthen technical SEO, and develop content
            that supports their commercial goals.
          </p>
          <p>
            Our approach starts with understanding the services you want to
            grow, the customers you want to reach, and the competition in your
            market.
          </p>
          <Link href="/industries" className={`${styles.box} ${styles.boxNavy}`}>
            <Corner />
            <span>Explore Our Specialties &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === RESULTS — grey section, navy case boxes === */}
      <section className={styles.results}>
        <h2 className={styles.h2}>Results From Client Campaigns</h2>
        <div className={styles.resultGrid}>
          {results.map((r) => (
            <Link key={r.href} href={r.href} className={styles.result}>
              <span className={styles.resultType}>{r.client}</span>
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
        heading="Let's Improve Your Search Visibility"
        lead="Tell us about your business, website, and growth goals. We'll help you identify where SEO, Google Ads, or website improvements could make the greatest difference."
        points={[
          "Experience across accounting and professional services",
          "Flexible month-to-month SEO engagements",
          "Full ownership of your website, content, and data",
        ]}
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
