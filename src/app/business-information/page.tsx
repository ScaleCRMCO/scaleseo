import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { posts } from "../blog/posts";
import styles from "./page.module.css";

// Plain, factual reference page about the business. Kept as simple semantic
// HTML (headings, lists, definition lists) so people, search engines and AI
// systems can all read it easily. Update LAST_UPDATED when anything changes.
const LAST_UPDATED = "2026-10-23";
const LAST_UPDATED_LABEL = "October 23, 2026";

const BASE = "https://scaleseo.co";
const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

export const metadata: Metadata = {
  title: "Business Information | Scale SEO",
  description:
    "Business information for Scale SEO: an independent SEO company in Calgary, Alberta, founded by Corbin Jensen. Services, pricing, service area, contact details and key facts.",
  alternates: { canonical: "/business-information" },
};

const facts: [string, React.ReactNode][] = [
  ["Business name", "Scale SEO"],
  ["Business type", "Independent SEO company (search engine optimization and web development)"],
  ["Founder", <Link key="f" href="/corbin-jensen">Corbin Jensen</Link>],
  ["Founded", "2025"],
  ["Based in", "Calgary, Alberta, Canada"],
  ["Service area", "Calgary, Alberta and across Canada, with remote work for businesses internationally"],
  ["Clients", "Professional service and B2B businesses, with particular experience in accounting and advisory firms"],
  ["Phone", <a key="p" href="tel:+14038751110">(403) 875-1110</a>],
  ["Email", <a key="e" href="mailto:team@scaleseo.co">team@scaleseo.co</a>],
  ["Website", <a key="w" href={BASE}>scaleseo.co</a>],
  ["Book a call", <a key="b" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">30-minute consultation</a>],
];

const services = [
  {
    name: "SEO Services",
    href: "/services/seo",
    price: "From $2,000 + GST per month",
    desc: "Ongoing SEO campaigns covering technical SEO, on-page optimization, content, local SEO, internal linking, website improvements, and reporting.",
  },
  {
    name: "SEO Audits",
    href: "/services/seo-audits",
    price: "From $500 + GST (Advanced SEO Audit from $1,500 + GST)",
    desc: "Standalone audits of technical SEO, indexing, on-page optimization, content, and website structure, with prioritized recommendations.",
  },
  {
    name: "Web Development & Website Design",
    href: "/services/web-development",
    price: "From $3,000 + GST (one-time project fee)",
    desc: "New websites, redesigns, and improvements to existing sites, built with responsive layouts and SEO foundations. Platforms include Webflow, custom-coded Next.js sites, and existing platforms such as WordPress.",
  },
  {
    name: "Google Ads Management",
    href: "/services/google-ads-management",
    price: "Quoted per account",
    desc: "Search campaigns built around high-intent keywords, conversion tracking, negative keyword management, and ongoing optimization.",
  },
  {
    name: "AI Search Optimization (GEO)",
    href: "/services/geo",
    price: "Included in SEO campaigns where relevant",
    desc: "Improving how a business and its content are understood by AI-powered search experiences such as Google AI Overviews and ChatGPT.",
  },
];

const howItWorks = [
  "Every engagement is managed directly by Corbin Jensen. There are no account managers or outsourced teams.",
  "Monthly SEO is month-to-month, with no long-term contract.",
  "Clients keep ownership of their website, content, accounts, and data.",
  "Work is implemented directly on the website where access allows, rather than delivered only as recommendations.",
  "Scale SEO works with a deliberately limited number of clients at a time.",
];

const caseStudies = [
  { name: "Empire Accountants", href: "/results/empire-accountants" },
  { name: "Jensen CPA", href: "/results/jensen-cpa" },
  { name: "Kinsmen Consulting", href: "/results/kinsmen-consulting" },
];

const profiles = [
  { name: "LinkedIn (Scale SEO)", href: "https://www.linkedin.com/company/scale-seo/" },
  { name: "LinkedIn (Corbin Jensen)", href: "https://www.linkedin.com/in/corbin-jensen-seo/" },
  { name: "Instagram", href: "https://www.instagram.com/scaleseo.co/" },
  { name: "Google Business Profile", href: "https://maps.app.goo.gl/DbV1TQJZQWrpiNf38" },
  { name: "Clutch", href: "https://clutch.co/profile/scale-seo" },
];

const keyPages = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Industries", href: "/industries" },
  { name: "SEO for Accounting Firms", href: "/industries/accounting-firms" },
  { name: "Case Studies", href: "/results" },
  { name: "About Scale SEO", href: "/about" },
  { name: "Corbin Jensen", href: "/corbin-jensen" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "XML Sitemap", href: "/sitemap.xml" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE}/business-information#webpage`,
      url: `${BASE}/business-information`,
      name: "Business Information | Scale SEO",
      description:
        "Key facts about Scale SEO, an independent SEO company in Calgary, Alberta: services, pricing, service area, and contact details.",
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#organization` },
      mainEntity: { "@id": `${BASE}/#organization` },
      publisher: { "@id": `${BASE}/#organization` },
      breadcrumb: { "@id": `${BASE}/business-information#breadcrumb` },
      dateModified: LAST_UPDATED,
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}/business-information#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Business Information", item: `${BASE}/business-information` },
      ],
    },
  ],
};

export default function BusinessInformationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Business Information" }]}
        breadcrumbSchema={false}
        title="Business Information"
        icon="about"
      >
        <p>
          Key facts about Scale SEO: who we are, what we do, where we work, and
          how to get in touch.
        </p>
        <p>
          Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
        </p>
      </PageHero>

      <section className={styles.section}>
        <article className={styles.body}>
          <h2>Summary</h2>
          <p>
            Scale SEO is an independent SEO company based in Calgary, Alberta,
            founded in 2025 by Corbin Jensen. It provides SEO services, SEO
            audits, web development, Google Ads management, and AI search
            optimization for professional service and B2B businesses in Calgary
            and across Canada, with particular experience in accounting and
            advisory firms.
          </p>

          <h2>Key Facts</h2>
          <dl className={styles.facts}>
            {facts.map(([k, v]) => (
              <div key={k} className={styles.fact}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <h2>Services &amp; Starting Prices</h2>
          <p>All prices are in Canadian dollars, before GST. Final pricing depends on scope.</p>
          <ul className={styles.services}>
            {services.map((s) => (
              <li key={s.href}>
                <h3>
                  <Link href={s.href}>{s.name}</Link>
                </h3>
                <p className={styles.price}>{s.price}</p>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
          <p>
            Full pricing details: <Link href="/pricing">scaleseo.co/pricing</Link>
          </p>

          <h2>Industries Served</h2>
          <ul>
            <li>
              Accounting and financial services firms (
              <Link href="/industries/accounting-firms">SEO for accounting firms</Link>)
            </li>
            <li>Professional service businesses</li>
            <li>B2B companies and consultancies</li>
          </ul>

          <h2>How Scale SEO Works</h2>
          <ul>
            {howItWorks.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h2>Selected Results</h2>
          <p>
            In a six-month engagement for an accounting and advisory firm, target
            keyword rankings improved from page 5 to page 1 of Google, alongside
            a 125% increase in Google Search impressions.
          </p>
          <p>Published case studies:</p>
          <ul>
            {caseStudies.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
          </ul>

          <h2>Founder</h2>
          <p>
            <Link href="/corbin-jensen">Corbin Jensen</Link> is the founder and
            SEO specialist behind Scale SEO. He works directly on technical SEO,
            on-page optimization, content strategy, local SEO, website
            architecture, structured data, and website implementation. Before
            founding Scale SEO, he worked with businesses in Australia across
            organic search, local SEO, and website optimization.
          </p>

          <h2>Articles</h2>
          <ul>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>

          <h2>Online Profiles</h2>
          <ul>
            {profiles.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>

          <h2>Key Pages</h2>
          <ul className={styles.columns}>
            {keyPages.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.name}</Link>
              </li>
            ))}
          </ul>

          <h2>Contact</h2>
          <p>
            Phone: <a href="tel:+14038751110">(403) 875-1110</a>
            <br />
            Email: <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
            <br />
            Contact form: <Link href="/contact">scaleseo.co/contact</Link>
            <br />
            Book a consultation:{" "}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              cal.com/corbinjensen-scaleseo/30min
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}
