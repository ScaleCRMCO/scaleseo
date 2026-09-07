import type { Metadata } from "next";
import Link from "next/link";
import SellingHero from "../../components/SellingHero";
import RevealOnScroll from "../../components/RevealOnScroll";
import servicePageStyles from "../../components/ServicePage.module.css";
import processStyles from "../../sections/home/Process.module.css";
import faqStyles from "../../sections/home/FAQ.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Services | Technical, On-Page & Local SEO | Scale SEO",
  description:
    "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo" },
};

const outcomes = [
  {
    name: "Rank Higher",
    desc: "Show up where your buyers are already searching, not buried on page two.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19V11M12 19V5M20 19v-7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "More Qualified Leads",
    desc: "Traffic built around real buyer intent, not vanity keywords that never convert.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "A Faster Site",
    desc: "Technical fixes that speed up load times — good for rankings and for visitors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Plain-English Reporting",
    desc: "Monthly updates on what moved and what it means for leads, not a screenshot dump.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
        <line x1="8" y1="8.5" x2="16" y2="8.5" strokeLinecap="round" />
        <line x1="8" y1="12.5" x2="16" y2="12.5" strokeLinecap="round" />
        <line x1="8" y1="16.5" x2="13" y2="16.5" strokeLinecap="round" />
      </svg>
    ),
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

      <SellingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SEO" },
        ]}
        eyebrow="Services / SEO"
        title={
          <>
            Freelance SEO Specialist Calgary{" "}
            <span className={servicePageStyles.accent}>
              | Search Optimization for Professional Services
            </span>
          </>
        }
        sub="Technical fixes, on-page structure, and local search work that compounds — not a checklist of vanity tasks. Every audit, every fix, every piece of content handled directly by me."
        checkpoints={[
          "Independent specialist — no outsourcing",
          "Work directly with me, not an account manager",
          "Focused on Canadian professional service firms, including accounting practices, legal firms, and corporate advisors",
          "No lock-in contracts",
        ]}
      />

      {/* === AT A GLANCE: what you actually get === */}
      <section className={styles.outcomes}>
        <div className="section-label reveal-up">What You Get</div>
        <div className={styles.outcomesGrid}>
          {outcomes.map((o) => (
            <div key={o.name} className={`${styles.outcomeCard} reveal-up`}>
              <span className={styles.outcomeIcon} aria-hidden="true">
                {o.icon}
              </span>
              <h3 className={styles.outcomeName}>{o.name}</h3>
              <p className={styles.outcomeDesc}>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === THE PROBLEM === */}
      <section className={servicePageStyles.problem}>
        <div className={servicePageStyles.problemInner}>
          <div className="section-label reveal-up">The Problem</div>
          <h2 className={`${servicePageStyles.problemHeadline} reveal-up`}>
            Most SEO work never touches{" "}
            <span className={servicePageStyles.accent}>what actually moves rankings.</span>
          </h2>
          <div className={`${servicePageStyles.problemBody} reveal-up`}>
            <p>
              A lot of what gets sold as SEO is reporting and busywork —
              metrics you can screenshot but that don&rsquo;t move revenue.
              Real performance gains come from fixing what&rsquo;s actually
              broken: slow load times, thin content, missing structure, and a
              local presence that doesn&rsquo;t reflect how customers
              actually search. That&rsquo;s the work I focus on, for
              accounting firms and other professional service businesses
              across Canada.
            </p>
            <p>
              Based in Calgary, Alberta, I engineer high-performance search
              strategies tailored specifically for the Canadian regulatory
              and corporate landscape. Whether you&rsquo;re an accounting
              practice competing for high-margin corporate clients downtown
              or a multi-location professional service firm scaling
              visibility across Western Canada, your strategy is built around
              localized B2B intent.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED === */}
      <section className={servicePageStyles.list}>
        <div className="section-label reveal-up">What&rsquo;s Included</div>
        <div className={servicePageStyles.grid}>
          {included.map((item) => (
            <div key={item.num} className={`${servicePageStyles.item} reveal-up`}>
              <div className={servicePageStyles.itemNum}>{item.num}</div>
              <h3 className={servicePageStyles.itemName}>{item.name}</h3>
              <p className={servicePageStyles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === PROCESS TIMELINE === */}
      <section className={`${processStyles.section} ${styles.processSection}`}>
        <div className="section-label reveal-up">How It Works</div>
        <h2 className={`${processStyles.heading} reveal-up`}>
          Audit. Strategy. <em>Execute. Report.</em>
        </h2>
        <div className={`${processStyles.grid} reveal-up`}>
          {process.map((step) => (
            <div key={step.num} className={processStyles.step}>
              <div>
                <div className={processStyles.num}>{step.num}</div>
                <h3 className={processStyles.name}>{step.name}</h3>
                <p className={processStyles.body}>{step.body}</p>
              </div>
              <div className={processStyles.time}>{step.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === PROOF === */}
      <section className={servicePageStyles.proof}>
        <div className={servicePageStyles.proofInner}>
          <div className="section-label reveal-up">Proof</div>
          <div className={`${servicePageStyles.proofCard} reveal-up`}>
            <div className={servicePageStyles.proofMetric}>
              <span className={servicePageStyles.proofAccent}>
                30 → <span className={servicePageStyles.proofBadge}>Top 10</span>
              </span>
              <span className={servicePageStyles.proofMetricLabel}>
                Search ranking, target keywords, 6 months
              </span>
            </div>
            <p className={servicePageStyles.proofBody}>
              Six months of technical fixes, on-page structure, and content
              built around the terms their clients actually search moved an
              accounting &amp; advisory firm from position 30 into the top 10
              search results for their target keywords — doubling
              impressions and clicks. They&rsquo;re now booking new clients
              weekly.
            </p>
          </div>
          <p className={servicePageStyles.proofNote}>
            Read the full breakdown:{" "}
            <Link href="/industries/accounting-firms" className={servicePageStyles.proofLink}>
              See how this works for accounting firms →
            </Link>
          </p>
        </div>
      </section>

      {/* === FAQ === */}
      <section className={`${faqStyles.section} ${styles.faqSection}`}>
        <div className="section-label reveal-up">FAQ</div>
        <h2 className={`${faqStyles.heading} reveal-up`}>
          Common questions about <em>SEO.</em>
        </h2>
        <div className={faqStyles.list}>
          {faqs.map((item) => (
            <details key={item.q} className={`${faqStyles.item} reveal-up`}>
              <summary className={faqStyles.question}>
                <span>{item.q}</span>
                <span className={faqStyles.toggle} aria-hidden="true">+</span>
              </summary>
              <p className={faqStyles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className={servicePageStyles.cta}>
        <div className={servicePageStyles.ctaEyebrow}>
          <span className={servicePageStyles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={servicePageStyles.ctaHeadline}>
          Ready to fix what&rsquo;s actually holding your site back?
        </h2>
        <p className={servicePageStyles.ctaSub}>
          Tell me about your business and what you&rsquo;re trying to grow —
          I&rsquo;ll tell you honestly whether I&rsquo;m the right fit.
        </p>
        <div className={servicePageStyles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={servicePageStyles.ctaButton}
          >
            <span>Book a call</span>
            <span className={servicePageStyles.arrow}>→</span>
          </a>
          <Link href="/contact" className={servicePageStyles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
        <p className={servicePageStyles.relatedNote}>
          Also want your business showing up in AI answers?{" "}
          <a href="/services/geo">See how GEO works →</a>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
