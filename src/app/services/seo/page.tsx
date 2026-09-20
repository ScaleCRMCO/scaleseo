import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Services | Technical, On-Page & Local SEO | Scale SEO",
  description:
    "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo" },
};

const matrix: {
  capability: string;
  us: string;
  agency: string;
  freelancer: string;
}[] = [
  {
    capability: "Direct Accountability",
    us: "1-on-1 access to Corbin Jensen.",
    agency: "Junior account managers with zero technical execution experience.",
    freelancer: "Fragmented communication and unstable project availability.",
  },
  {
    capability: "Deployment Speed",
    us: "Rapid execution workflows powered by a local Claude Code development stack.",
    agency: "Slow, multi-layered internal approval cycles and corporate red tape.",
    freelancer: "Highly variable timelines based on limited technical capacity.",
  },
  {
    capability: "Strategy & Content",
    us: "Custom semantic topic clusters built for high-value B2B conversion.",
    agency: "Recycled keyword checklists and generic template frameworks.",
    freelancer: "Heavy reliance on low-tier outsourced copywriters or generic AI spam.",
  },
  {
    capability: "Code Engineering",
    us: "Clean, machine-readable schema markup optimized for Google & LLMs.",
    agency: "Heavy, slow-loading page-builder sites that burn through crawl budgets.",
    freelancer: "Basic platform setups that fail core technical indexation audits.",
  },
  {
    capability: "Regional Context",
    us: "In-depth knowledge of Calgary and Western Canadian B2B landscapes.",
    agency: "Out-of-province generalists lacking local market familiarity.",
    freelancer: "Muted regional understanding with a broad, un-targeted focus.",
  },
];

const included = [
  {
    num: "01",
    name: "Technical SEO Audit",
    desc: "Site speed, crawlability, indexing, and schema markup — the foundation both search engines and AI crawlers rely on. Full optimization capabilities across core corporate CMS platforms including Webflow, WordPress, and custom JavaScript architectures.",
  },
  {
    num: "02",
    name: "On-Page Optimization",
    desc: "Titles, headers, and internal linking rebuilt around the terms your buyers actually search — so the right pages rank for the right terms.",
  },
  {
    num: "03",
    name: "Local SEO & Alberta Map Pack Optimization",
    desc: "Citations, reviews, and location pages built to win the map pack in every city you actually serve.",
  },
  {
    num: "04",
    name: "Content Strategy",
    desc: "Content built around real search intent and buyer questions, not filler — the kind that ranks and actually converts.",
  },
  {
    num: "05",
    name: "Site Architecture & Crawl Health",
    desc: "Fixing broken structure, redirects, and duplicate content that silently caps how well the rest of the site can rank. Clean semantic structure ensures your site's codebase is fully optimized for Generative Engine Optimization (GEO), allowing LLM crawlers like ChatGPT, Perplexity, and Google Gemini to accurately scrape and cite your business.",
  },
  {
    num: "06",
    name: "Reporting Tied to Revenue",
    desc: "Monthly, plain-English reporting on what moved and what it means for leads — not vanity ranking screenshots.",
  },
];

const process = [
  {
    num: "01",
    name: "Audit",
    body: "A full technical and content teardown of your current site — what's broken, what's missing, and what's already working, all documented in plain English.",
    time: "Week 1",
  },
  {
    num: "02",
    name: "Strategy",
    body: "A prioritized roadmap built around the keywords and pages that actually move revenue for your business, not a generic checklist.",
    time: "Week 1–2",
  },
  {
    num: "03",
    name: "Execute",
    body: "Technical fixes, on-page rebuilds, and content shipped directly by me — no outsourced writers or offshore link farms.",
    time: "Ongoing",
  },
  {
    num: "04",
    name: "Report",
    body: "Monthly, plain-English reporting on what moved and what it means for leads — reviewed together, not just emailed and forgotten.",
    time: "Monthly",
  },
];

const faqs = [
  {
    q: "How long until my site starts ranking higher?",
    a: "Most sites see meaningful movement within 3–6 months, with compounding gains after that. SEO is not instant — anyone promising overnight rankings is either lying or about to get your site penalized. I'll give you a realistic timeline based on your current site and competition during the audit.",
  },
  {
    q: "Do you guarantee a #1 ranking?",
    a: "No, and you should be skeptical of anyone who does — no one controls Google's algorithm. What I do guarantee is that every fix and every piece of content is built around what actually moves rankings, reported on honestly every month.",
  },
  {
    q: "What's the difference between SEO and Google Ads — do I need both?",
    a: "Google Ads gets you in front of buyers immediately, for as long as you keep paying. SEO builds organic authority that keeps generating leads without ongoing ad spend, but takes months to compound. Most of my clients run both — Ads for immediate pipeline, SEO for long-term, lower-cost-per-lead growth.",
  },
  {
    q: "Will I own the content and changes made to my site?",
    a: "Yes. Everything — content, technical fixes, site structure — lives on your own website. There's no proprietary lock-in; if we ever part ways, everything built stays exactly where it is.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. If the work isn't performing, you're not locked into paying for months of underperformance.",
  },
];

export default function SeoServicePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services",
    description:
      "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic.",
    serviceType: "Search Engine Optimization",
    url: "https://scaleseo.co/services/seo",
    provider: {
      "@type": "ProfessionalService",
      name: "Scale SEO",
      url: "https://scaleseo.co",
      founder: {
        "@type": "Person",
        name: "Corbin Jensen",
        url: "https://scaleseo.co/corbin-jensen",
      },
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      { "@type": "Country", name: "Canada" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO" },
              ]}
            />
          </div>
          <h1 className={styles.title}>
            Calgary SEO Specialist for{" "}
            <span className={styles.accent}>B2B &amp; Professional Services</span>
          </h1>
          <p className={styles.sub}>
            We engineer high-intent search optimization that turns local
            organic visibility into premium corporate inquiries, signed
            contracts, and qualified pipeline revenue. No vanity metrics. No
            checklist fluff. Just founder-led search engineering built to
            dominate Calgary and Canadian markets.
          </p>
          <div className={styles.heroCtaGroup}>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              <span>Book a Calgary Strategy Call</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#comparison" className={styles.heroCtaSecondary}>
              <span>Explore Our Alberta Case Studies</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* === TRUST BAR — thin strip attached to the bottom of the hero,
            no card/rounded treatment === */}
        <div className={styles.trustBar}>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">★</span>
            5.0 Client Rating | Founder-Led in Calgary, AB
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">✺</span>
            Advanced SEO Content Built for Google AI Overviews &amp; ChatGPT
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">✓</span>
            Flexible Month-to-Month Retainers | No Long-Term Lock-in Contracts
          </span>
        </div>
      </header>

      {/* === COMPARISON MATRIX (light, rounded) === */}
      <section className={styles.matrix} id="comparison">
        <div className={styles.matrixInner}>
          <h2 className={`${styles.matrixHeading} reveal-up`}>
            Scale SEO vs. Generalist Agencies{" "}
            <span className={styles.matrixHeadingBreak}>vs. Outsourced Freelancers</span>
          </h2>
          <p className={styles.matrixSub}>
            Choosing a search partner in Alberta dictates how fast your
            platform scales. Here is how Scale SEO eliminates the
            administrative friction of traditional agency models.
          </p>

          <div className={styles.tableWrap}>
            <div className={styles.tableHead}>
              <span>Capability</span>
              <span>Scale SEO (Calgary Founder)</span>
              <span>Traditional Agencies</span>
              <span>Standard Freelancers</span>
            </div>
            <div className={styles.tableBody}>
              {matrix.map((row) => (
                <div key={row.capability} className={styles.row}>
                  <span className={styles.capability}>{row.capability}</span>
                  <span className={styles.us}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {row.us}
                  </span>
                  <span className={styles.them}>
                    <span className={styles.xIcon} aria-hidden="true">✕</span>
                    {row.agency}
                  </span>
                  <span className={styles.them}>
                    <span className={styles.xIcon} aria-hidden="true">✕</span>
                    {row.freelancer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED (dark) === */}
      <section className={`${styles.included} section-dark`} data-nav-theme="dark">
        <div className={styles.includedInner}>
          <div className="section-label reveal-up">What&rsquo;s Included</div>
          <div className={styles.grid}>
            {included.map((item) => (
              <div key={item.num} className={`${styles.item} reveal-up`}>
                <div className={styles.itemNum}>{item.num}</div>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS TIMELINE (dark) === */}
      <section className={styles.process} data-nav-theme="dark">
        <div className={styles.processInner}>
          <div className="section-label reveal-up">How It Works</div>
          <h2 className={`${styles.processHeading} reveal-up`}>
            Audit. Strategy. <em>Execute. Report.</em>
          </h2>
          <div className={`${styles.processGrid} reveal-up`}>
            {process.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div>
                  <div className={styles.processNum}>{step.num}</div>
                  <h3 className={styles.processName}>{step.name}</h3>
                  <p className={styles.processBody}>{step.body}</p>
                </div>
                <div className={styles.processTime}>{step.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROOF (light) === */}
      <section className={styles.proof}>
        <div className={styles.proofInner}>
          <div className="section-label reveal-up">Proof</div>
          <div className={`${styles.proofCard} reveal-up`}>
            <div className={styles.proofMetric}>
              <span className={styles.proofAccent}>
                30 → <span className={styles.proofBadge}>Top 10</span>
              </span>
              <span className={styles.proofMetricLabel}>
                Search ranking, target keywords, 6 months
              </span>
            </div>
            <p className={styles.proofBody}>
              Six months of technical fixes, on-page structure, and content
              built around the terms their clients actually search moved an
              accounting &amp; advisory firm from position 30 into the top 10
              search results for their target keywords — doubling
              impressions and clicks. They&rsquo;re now booking new clients
              weekly.
            </p>
          </div>
          <p className={styles.proofNote}>
            Read the full breakdown:{" "}
            <Link href="/industries/accounting-firms" className={styles.proofLink}>
              See how this works for accounting firms →
            </Link>
          </p>
        </div>
      </section>

      {/* === FAQ (dark) === */}
      <section className={styles.faq} data-nav-theme="dark">
        <div className={styles.faqInner}>
          <div className="section-label reveal-up">FAQ</div>
          <h2 className={`${styles.faqHeading} reveal-up`}>
            Common questions about <em>SEO.</em>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={`${styles.faqItem} reveal-up`}>
                <summary className={styles.faqQuestion}>
                  <span>{item.q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">+</span>
                </summary>
                <p className={styles.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === BOTTOM CTA (light) === */}
      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Ready to fix what&rsquo;s actually holding your site back?
        </h2>
        <p className={styles.ctaSub}>
          Tell me about your business and what you&rsquo;re trying to grow —
          I&rsquo;ll tell you honestly whether I&rsquo;m the right fit.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book a call</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
        <p className={styles.relatedNote}>
          Also want your business showing up in AI answers?{" "}
          <a href="/services/geo">See how GEO works →</a>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
