import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";
import SellingHero from "../../components/SellingHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO for Accounting Firms & CPA Practices in Canada | Scale SEO",
  description:
    "SEO built for accounting firms and CPA practices across Canada — designed to attract institutional retainers, fractional CFO leads, and advisory relationships, not tax-season foot traffic. Run personally by one specialist, with a strict two-firms-per-city cap.",
};

const included = [
  {
    num: "01",
    name: "Corporate & Advisory-Intent Content",
    desc: "I build your content strategy around the technical, complex search terms high-net-worth individuals and business owners actually use — not low-margin, seasonal tax-return queries.",
  },
  {
    num: "02",
    name: "Multi-Office Local SEO & Maps Domination",
    desc: "I optimize your Google Business Profiles, clean up citations, and build out localized landing pages for every office you operate across Canada.",
  },
  {
    num: "03",
    name: "Financial E-E-A-T & Trust Infrastructure",
    desc: "Google holds financial sites to a higher standard under its Your Money or Your Life (YMYL) guidelines. I implement schema markup, speed fixes, and author trust signals that protect your organic authority.",
  },
  {
    num: "04",
    name: "Generative AI Search Optimization (GEO)",
    desc: "I structure your site so AI tools like ChatGPT, Perplexity, and Google's AI Overviews actually cite and name your firm when someone asks for an advisory recommendation.",
  },
  {
    num: "05",
    name: "Bottom-Line Revenue Reporting",
    desc: "Monthly, plain-English reporting focused on what actually matters — qualified inquiries, calls, and pipeline value — not empty keyword screenshots.",
  },
  {
    num: "06",
    name: "Direct Partner Accountability",
    desc: "You work directly with me. Every audit, every strategy shift, every piece of content — executed personally, with no outsourcing and no rotating junior account managers.",
  },
];

const targetQueries = [
  "Corporate Structuring & Multi-Provincial Tax Strategies",
  "Fractional CFO Services & Virtual Bookkeeping Infrastructure",
  "M&A Advisory Support & Specialized Corporate Auditing",
];

export default function AccountingFirmsPage() {
  return (
    <main>
      <SellingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Accounting Firms" },
        ]}
        eyebrow="Industries / Accounting Firms"
        title={
          <>
            SEO for Accounting Firms{" "}
            <span className={styles.accent}>&amp; CPA Practices in Canada.</span>
          </>
        }
        sub="This isn't a Calgary-only, local offer — I build national search visibility for accounting and financial advisory practices anywhere in Canada. The goal isn't a superficial traffic spike; it's securing the high-value corporate retainers, fractional CFO leads, and tax advisory relationships that compound long after tax season ends."
        checkpoints={[
          "Independent specialist — no outsourcing",
          "Work directly with me, not an account manager",
          "Two accounting firms per city, so I'm never working against your competitor",
          "No lock-in contracts",
        ]}
      />

      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <div className="section-label reveal-up">The Problem</div>
          <h2 className={`${styles.problemHeadline} reveal-up`}>
            Generic SEO fails{" "}
            <span className={styles.accent}>modern accounting practices.</span>
          </h2>
          <p className={`${styles.problemBody} reveal-up`}>
            Traditional agencies optimize an accounting firm&rsquo;s website
            the same way they&rsquo;d optimize a home service
            contractor&rsquo;s — chase raw traffic volume, then move on. But
            your ideal corporate or high-net-worth client doesn&rsquo;t make
            a snap decision off a generic ad click. They research your
            firm&rsquo;s governance, compare advisory backgrounds, and
            evaluate authority before they ever pick up the phone. That
            sophisticated search journey needs strategic on-page content and
            technical work engineered to earn trust before the first
            consultation call — and it&rsquo;s exactly the work I do
            personally, for every firm I take on.
          </p>
        </div>
      </section>

      <section className={styles.list}>
        <div className="section-label reveal-up">What&rsquo;s Included</div>
        <div className={styles.grid}>
          {included.map((s) => (
            <div key={s.num} className={`${styles.item} reveal-up`}>
              <div className={styles.itemNum}>{s.num}</div>
              <h3 className={styles.itemName}>{s.name}</h3>
              <p className={styles.itemDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.targets}>
        <div className={styles.targetsInner}>
          <div className="section-label reveal-up">The Focus</div>
          <h2 className={`${styles.targetsHeadline} reveal-up`}>
            Direct targeting for{" "}
            <span className={styles.accent}>high-margin advisory queries.</span>
          </h2>
          <p className={`${styles.targetsBody} reveal-up`}>
            I don&rsquo;t spend your retainer chasing low-value traffic. My
            content frameworks are built to position your firm directly in
            front of businesses searching for specialized expertise,
            including:
          </p>
          <ul className={`${styles.targetsList} reveal-up`}>
            {targetQueries.map((q) => (
              <li key={q} className={styles.targetsItem}>
                <span className={styles.targetsArrow}>→</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.exclusivity}>
        <div className={styles.exclusivityInner}>
          <div className="section-label reveal-up">The Cap</div>
          <h2 className={`${styles.exclusivityHeadline} reveal-up`}>
            Two firms per city. <span className={styles.accent}>A strict hard cap.</span>
          </h2>
          <p className={`${styles.exclusivityBody} reveal-up`}>
            I maintain a strict maximum of two accounting firm clients per
            Canadian city. That&rsquo;s an operational guarantee, not a
            marketing line — it means I&rsquo;m never building dominant
            local rankings for your practice while handing the same
            competitive strategy to the firm across the street. If your
            market&rsquo;s already spoken for, I&rsquo;ll tell you directly
            on our first call.
          </p>
        </div>
      </section>

      <section className={styles.proof}>
        <div className={styles.proofInner}>
          <div className="section-label reveal-up">Proof</div>
          <h2 className={`${styles.proofHeadline} reveal-up`}>
            Case study: moving an advisory firm{" "}
            <span className={styles.accent}>to the top 10.</span>
          </h2>
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
              Over a six-month engagement, a combination of technical fixes,
              restructured page hierarchy, and intentional content
              optimization moved a premium accounting &amp; advisory
              practice from position 30 into the top 10 search results for
              their highest-intent target keywords. It doubled organic
              impressions, scaled clicks, and continues to bring in new
              advisory bookings weekly — the same process I&rsquo;d run for
              your firm.
            </p>
          </div>
          <p className={styles.proofNote}>
            Read the full breakdown:{" "}
            <Link
              href="/blog/how-accounting-firms-rank-on-google-in-canada"
              className={styles.proofLink}
            >
              How Accounting Firms Can Rank on Google in Canada →
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Two spots per city. <span className={styles.accent}>Check yours.</span>
        </h2>
        <p className={styles.ctaSub}>
          Tell me your city and what you&rsquo;re trying to grow — I&rsquo;ll
          tell you honestly whether there&rsquo;s room and whether I&rsquo;m
          the right fit.
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
        <p className={styles.signature}>
          — <Link href="/corbin-jensen">Corbin Jensen</Link>, SEO Specialist
          &amp; Founder, Scale SEO
        </p>
      </section>
      <RevealOnScroll />
    </main>
  );
}
