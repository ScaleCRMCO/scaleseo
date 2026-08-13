import type { Metadata } from "next";
import RevealOnScroll from "../../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO for Accounting Firms in Canada | Scale SEO",
  description:
    "SEO built for accounting and advisory firms across Canada — designed to attract institutional retainers and higher-value clients, not tax-season foot traffic. One specialist, a strict two-firms-per-city cap.",
};

const included = [
  {
    num: "01",
    name: "Advisory-Intent Content",
    desc: "Content and on-page structure built around what corporate and high-net-worth clients search for — not generic tax-season keywords.",
  },
  {
    num: "02",
    name: "Local SEO, Every Office",
    desc: "Google Business Profile, citations, and location pages built out for every office you operate, wherever in Canada that is.",
  },
  {
    num: "03",
    name: "Technical & Trust Signals",
    desc: "Speed, schema, and the E-E-A-T groundwork Google expects from a firm handling other people's money.",
  },
  {
    num: "04",
    name: "AI Search Optimization",
    desc: "Positioning so ChatGPT, Perplexity, and Google's AI answers name your firm when a prospect asks who to trust.",
  },
  {
    num: "05",
    name: "Reporting Tied to Retainer Value",
    desc: "Monthly, plain-English reporting on what moved and what it means for new client value — not vanity ranking screenshots.",
  },
  {
    num: "06",
    name: "Direct Access to Me",
    desc: "Every audit, every call, every piece of content — handled personally. No account manager relaying to an offshore team.",
  },
];

export default function AccountingFirmsPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Industries / Accounting Firms</p>
          <h1 className={styles.title}>
            SEO for Accounting Firms,{" "}
            <span className={styles.accent}>Built for Canada.</span>
          </h1>
          <p className={styles.sub}>
            This isn&rsquo;t a Calgary-only offer — it&rsquo;s built for
            accounting and advisory firms anywhere in Canada. The goal isn&rsquo;t
            more traffic, it&rsquo;s more of the clients worth having:
            institutional retainers and advisory relationships that compound,
            not a spike of tax-season walk-ins.
          </p>
        </div>
      </header>

      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <div className="section-label reveal-up">The Problem</div>
          <h2 className={`${styles.problemHeadline} reveal-up`}>
            Most SEO is built for volume. <span className={styles.accent}>Accounting firms need trust.</span>
          </h2>
          <p className={`${styles.problemBody} reveal-up`}>
            A generic agency optimizes an accounting firm the same way it
            optimizes a plumber — chase volume, chase rankings, move on.
            But the client you actually want doesn&rsquo;t make a snap
            decision from a Google Ads click. They research, they compare,
            they check who else the firm works with. That&rsquo;s a
            different search journey, and it needs a different strategy:
            content and technical work built to earn trust before the first
            call, not just traffic before the first click.
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

      <section className={styles.exclusivity}>
        <div className={styles.exclusivityInner}>
          <div className="section-label reveal-up">The Cap</div>
          <h2 className={`${styles.exclusivityHeadline} reveal-up`}>
            Two firms per city. <span className={styles.accent}>Never competitors.</span>
          </h2>
          <p className={`${styles.exclusivityBody} reveal-up`}>
            I work with a maximum of two accounting firms in any one city.
            That&rsquo;s a hard cap, not a marketing line — it means I&rsquo;m
            never building search visibility for a firm and then handing the
            same playbook to the firm across the street. If your city is
            already spoken for, I&rsquo;ll tell you honestly on the call.
          </p>
        </div>
      </section>

      <section className={styles.proof}>
        <div className={styles.proofInner}>
          <div className="section-label reveal-up">Proof</div>
          <div className={`${styles.proofCard} reveal-up`}>
            <div className={styles.proofMetric}>
              <span className={styles.proofAccent}>30 → 14.0</span>
              <span className={styles.proofMetricLabel}>
                Avg. search position, 6 months
              </span>
            </div>
            <p className={styles.proofBody}>
              Six months of technical fixes, on-page structure, and content
              built around the terms their clients actually search moved
              this accounting &amp; advisory firm&rsquo;s average position
              from 30 to 14.0 — doubling impressions and clicks. They&rsquo;re
              now booking new clients weekly.
            </p>
          </div>
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
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
