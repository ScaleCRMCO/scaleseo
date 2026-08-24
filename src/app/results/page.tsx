import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { caseStudies } from "../data/caseStudies";
import caseStyles from "../sections/home/CaseStudy.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Scale SEO",
  description:
    "Real client results from Corbin Jensen — SEO case studies spanning trades and service businesses in Australia to accounting and professional service firms across Canada.",
};

export default function ResultsPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} />
          <p className={styles.eyebrow}>Results</p>
          <h1 className={styles.title}>
            Client <span className={styles.accent}>Results.</span>
          </h1>
          <p className={styles.sub}>
            I started as an independent SEO specialist working with trades
            and service businesses in Australia — today I focus exclusively
            on accounting and professional service firms across Canada and
            the US. Every case study below is real work, with real clients,
            linked to the live sites.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className={caseStyles.grid}>
          {caseStudies.map((c, i) => (
            <a
              key={c.index}
              href={c.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`${caseStyles.tile} reveal-left`}
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className={caseStyles.imageWrap}>
                <Image
                  src={c.image}
                  alt={`${c.client} website`}
                  fill
                  className={caseStyles.image}
                  priority={i === 0}
                  unoptimized
                />
              </div>
              <div className={caseStyles.tileFooter}>
                <div>
                  <h3 className={caseStyles.client}>{c.client}</h3>
                  <p className={caseStyles.subhead}>{c.subhead}</p>
                  <p className={caseStyles.location}>
                    {c.location} &middot; {c.industry}
                  </p>
                </div>
                <div className={caseStyles.metric}>
                  <div className={caseStyles.metricValue}>{c.metric}</div>
                  <div className={caseStyles.metricLabel}>{c.metricLabel}</div>
                </div>
              </div>
              <p className={caseStyles.description}>{c.description}</p>
              <span className={caseStyles.visit}>{c.urlLabel} →</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Want results like these for your firm?
        </h2>
        <p className={styles.ctaSub}>
          Tell me about your business and where you&rsquo;re trying to grow
          — I&rsquo;ll tell you honestly whether I&rsquo;m the right fit.
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
          <a href="/contact" className={styles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </a>
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
