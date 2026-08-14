import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import RevealOnScroll from "./RevealOnScroll";
import styles from "./ServicePage.module.css";

export type IncludedItem = {
  num: string;
  name: string;
  desc: string;
};

export type ServicePageProof = {
  metric: ReactNode; // e.g. "30 → " plus a <span> badge
  metricLabel: string;
  body: string;
  linkHref?: string;
  linkText?: string;
};

// Reusable inline helpers so every service page highlights text the same way.
export function Accent({ children }: { children: ReactNode }) {
  return <span className={styles.accent}>{children}</span>;
}

export function ProofBadge({ children }: { children: ReactNode }) {
  return <span className={styles.proofBadge}>{children}</span>;
}

export type ServicePageProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  sub: string;
  problemLabel?: string;
  problemHeadline: ReactNode;
  problemBody: string;
  includedLabel?: string;
  included: IncludedItem[];
  proof?: ServicePageProof;
  ctaHeadline: ReactNode;
  ctaSub: string;
  relatedNote?: ReactNode;
};

export default function ServicePage({
  breadcrumbs,
  eyebrow,
  title,
  sub,
  problemLabel = "The Problem",
  problemHeadline,
  problemBody,
  includedLabel = "What's Included",
  included,
  proof,
  ctaHeadline,
  ctaSub,
  relatedNote,
}: ServicePageProps) {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Breadcrumbs items={breadcrumbs} />
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{sub}</p>
        </div>
      </header>

      <section className={styles.problem}>
        <div className={styles.problemInner}>
          <div className="section-label reveal-up">{problemLabel}</div>
          <h2 className={`${styles.problemHeadline} reveal-up`}>
            {problemHeadline}
          </h2>
          <p className={`${styles.problemBody} reveal-up`}>{problemBody}</p>
        </div>
      </section>

      <section className={styles.list}>
        <div className="section-label reveal-up">{includedLabel}</div>
        <div className={styles.grid}>
          {included.map((item) => (
            <div key={item.num} className={`${styles.item} reveal-up`}>
              <div className={styles.itemNum}>{item.num}</div>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {proof && (
        <section className={styles.proof}>
          <div className={styles.proofInner}>
            <div className="section-label reveal-up">Proof</div>
            <div className={`${styles.proofCard} reveal-up`}>
              <div className={styles.proofMetric}>
                <span className={styles.proofAccent}>{proof.metric}</span>
                <span className={styles.proofMetricLabel}>
                  {proof.metricLabel}
                </span>
              </div>
              <p className={styles.proofBody}>{proof.body}</p>
            </div>
            {proof.linkHref && (
              <p className={styles.proofNote}>
                Read the full breakdown:{" "}
                <Link href={proof.linkHref} className={styles.proofLink}>
                  {proof.linkText} →
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>{ctaHeadline}</h2>
        <p className={styles.ctaSub}>{ctaSub}</p>
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
        {relatedNote && <p className={styles.relatedNote}>{relatedNote}</p>}
      </section>
      <RevealOnScroll />
    </main>
  );
}
