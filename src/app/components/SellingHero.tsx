import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import styles from "./SellingHero.module.css";

const defaultCheckpoints = [
  "Independent specialist — no outsourcing",
  "Work directly with me, not an account manager",
  "Focused on professional service businesses",
  "No lock-in contracts",
];

export type SellingHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  sub: string;
  checkpoints?: string[];
};

// Personal, portrait-led hero used on pages built to sell — services and
// industry pages — so the reader knows who they're dealing with before
// they get into the pitch. Homepage keeps its own animated Hero; this is
// the calmer, reusable version for interior pages.
export default function SellingHero({
  breadcrumbs,
  eyebrow,
  title,
  sub,
  checkpoints = defaultCheckpoints,
}: SellingHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Breadcrumbs items={breadcrumbs} />
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{sub}</p>

          <div className={styles.ctaGroup}>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <span>Book a call</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="mailto:team@scaleseo.co" className={styles.ctaSecondary}>
              <span>Email me</span>
            </a>
          </div>

          <span className={styles.availability}>Reply within 24 hours</span>
        </div>

        <div className={styles.right}>
          <div className={styles.portraitFrame}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, SEO Specialist at Scale SEO"
              className={styles.portraitImg}
            />
          </div>

          <ul className={styles.checklist}>
            {checkpoints.map((point) => (
              <li key={point} className={styles.checkItem}>
                <span className={styles.checkMark} aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
