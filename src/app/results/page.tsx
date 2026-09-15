import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { caseStudies } from "../data/caseStudies";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Scale SEO",
  description:
    "Real client results from Corbin Jensen — SEO case studies spanning trades and service businesses in Australia to accounting and professional service firms across Canada.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} />
          </div>
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
        <div className={styles.grid}>
          {caseStudies.map((c, i) => (
            <a
              key={c.index}
              href={c.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`${styles.card} reveal-up`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={c.image}
                  alt={`${c.client} website`}
                  fill
                  className={styles.image}
                  priority={i === 0}
                  unoptimized
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h2 className={styles.client}>{c.client}</h2>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>{c.metric}</div>
                    <div className={styles.metricLabel}>{c.metricLabel}</div>
                  </div>
                </div>
                <p className={styles.subhead}>{c.subhead}</p>
                <p className={styles.location}>
                  {c.location} &middot; {c.industry}
                </p>
                <p className={styles.description}>{c.description}</p>
                <span className={styles.visit}>{c.urlLabel} →</span>
              </div>
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
