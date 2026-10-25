import Link from "next/link";
import styles from "./CaseStudy.module.css";

/* Case studies: split heading row, then a 2x2 grid of boxed cards
   (image on top, metric and title below). */

type Card = {
  href: string;
  client: string;
  tag: string;
  metric: string;
  metricLabel: string;
  title: string;
  image: string;
  theme: "sky" | "midnight" | "lime" | "pink";
};

const cards: Card[] = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA",
    tag: "Accounting & Tax · Calgary",
    metric: "+227%",
    metricLabel: "Average daily search impressions",
    title: "Building a stronger digital presence for a Calgary CPA firm",
    image: "/images/jensen-cpa-homepage.webp",
    theme: "sky",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants",
    tag: "Accounting & Advisory · Brisbane",
    metric: "Page 5 → Page 1",
    metricLabel: "Target keyword rankings",
    title: "Moving priority accounting searches onto page one of Google",
    image: "/images/empireaccountants-hero-image.png",
    theme: "midnight",
  },
  {
    href: "/results/kinsmen-consulting",
    client: "Kinsmen Consulting",
    tag: "Concrete & Construction · Calgary",
    metric: "$400K+",
    metricLabel: "Revenue from generated projects",
    title: "SEO and website development tied to real project revenue",
    image: "/images/kinsmen-hero.jpg",
    theme: "lime",
  },
  {
    // No dedicated page yet — links to its card on the results hub.
    href: "/results#msv-plumbing-services",
    client: "MSV Plumbing Services",
    tag: "Plumbing Services · Brisbane",
    metric: "0 → Weekly",
    metricLabel: "Consistent customer bookings",
    title: "Building organic visibility for a brand-new plumbing business",
    image: "/images/msv-screenshot.png",
    theme: "pink",
  },
];

function CaseCard({ card }: { card: Card }) {
  return (
    <Link
      href={card.href}
      className={`${styles.card} ${styles.cardDark} reveal-up`}
    >
      <div className={styles.cardImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.image} alt={`${card.client} website`} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardTag}>{card.tag}</span>
        <span className={styles.cardMetric}>{card.metric}</span>
        <span className={styles.cardMetricLabel}>{card.metricLabel}</span>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <span className={styles.cardFooter}>
          <span className={styles.cardClient}>{card.client}</span>
          <span className={styles.cardArrow} aria-hidden="true">+</span>
        </span>
      </div>
    </Link>
  );
}

export default function CaseStudy() {
  return (
    <section className={styles.case} id="work">
      <div className={styles.head}>
        <div className={styles.headLeft}>
          <span className={styles.eyebrow}>Case Studies</span>
          <h2 className={styles.heading}>SEO Results From Real Client Campaigns</h2>
        </div>
        <div className={styles.headRight}>
          <div className={styles.intro}>
            <p>
              Search rankings are useful, but they only matter when increased
              visibility contributes to real business growth.
            </p>
            <p>
              Scale SEO campaigns are built around improving the search visibility
              that matters to each client, whether that means ranking important
              service pages, expanding organic traffic, generating qualified
              enquiries, or supporting broader revenue growth.
            </p>
          </div>
          <Link href="/results" className={styles.button}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>View All Case Studies</span>
          </Link>
        </div>
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <CaseCard key={c.client} card={c} />
        ))}
      </div>
    </section>
  );
}
