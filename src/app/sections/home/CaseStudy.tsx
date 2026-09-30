"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import styles from "./CaseStudy.module.css";

/* Pinned "case study" scroller: the heading holds in the centre of the
   screen while the four case study cards rise up past it, alternating left
   and right. Once the last card has passed, the page scrolls on normally. */

type Card = {
  href: string;
  client: string;
  tag: string;
  metric: string;
  metricLabel: string;
  title: string;
  image: string;
  theme: "baby" | "navy" | "orange" | "blue";
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
    theme: "baby",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants",
    tag: "Accounting & Advisory · Brisbane",
    metric: "Page 5 → Page 1",
    metricLabel: "Target keyword rankings",
    title: "Moving priority accounting searches onto page one of Google",
    image: "/images/empireaccountants-hero-image.png",
    theme: "navy",
  },
  {
    href: "/results/kinsmen-consulting",
    client: "Kinsmen Consulting",
    tag: "Concrete & Construction · Calgary",
    metric: "$400K+",
    metricLabel: "Revenue from generated projects",
    title: "SEO and website development tied to real project revenue",
    image: "/images/kinsmen-hero.jpg",
    theme: "orange",
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
    theme: "blue",
  },
];

const themeClass: Record<Card["theme"], string> = {
  baby: styles.themeBaby,
  navy: styles.themeNavy,
  orange: styles.themeOrange,
  blue: styles.themeBlue,
};

function CaseCard({ card }: { card: Card }) {
  return (
    <Link href={card.href} className={`${styles.card} ${themeClass[card.theme]}`}>
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
          <span className={styles.cardArrow} aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

function FloatingCard({
  card,
  index,
  progress,
}: {
  card: Card;
  index: number;
  progress: MotionValue<number>;
}) {
  // Each card rises from below the screen to above it over its own slice
  // of the section's scroll range; slices overlap so two cards can share
  // the screen, like the reference.
  const start = index * 0.2;
  const end = start + 0.42;
  const y = useTransform(progress, (p) => {
    const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
    // From just below the screen (105vh) to fully above it (-110% of card)
    return `calc(${((1 - t) * 105).toFixed(3)}vh - ${(t * 110).toFixed(3)}%)`;
  });
  const side = index % 2 === 0 ? styles.left : styles.right;

  return (
    <motion.div className={`${styles.floating} ${side}`} style={{ y }}>
      <CaseCard card={card} />
    </motion.div>
  );
}

function Heading() {
  return (
    <div className={styles.center}>
      <span className={styles.eyebrow}>Case Studies</span>
      <h2 className={styles.heading}>SEO Results From Real Client Campaigns</h2>
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
        <span>View All Case Studies</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Reduced motion: no pinning, just the heading and a simple card grid.
  if (reduce) {
    return (
      <section className={`${styles.case} ${styles.static}`} id="work">
        <Heading />
        <div className={styles.staticGrid}>
          {cards.map((c) => (
            <CaseCard key={c.client} card={c} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={styles.case} id="work">
      <div className={styles.stage}>
        <Heading />
        {cards.map((c, i) => (
          <FloatingCard key={c.client} card={c} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
