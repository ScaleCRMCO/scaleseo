"use client";
import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import CountUp from "../../components/CountUp";
import styles from "./CaseStudy.module.css";

/* Case studies (DD.NYC style): a horizontal row of large image cards that
   runs off the right edge. Each image carries an animated metric in its
   bottom-left corner; number, client and services sit underneath. Clicking a
   card that is only partly on screen slides it into view; clicking a fully
   visible card opens the case study. */

export type CaseCard = {
  href: string;
  client: string;
  services: string;
  image: string;
  metric: { from?: number; to?: number; prefix?: string; suffix?: string; text?: string };
  metricLabel: string;
};

const defaultCards: CaseCard[] = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA",
    services: "SEO / Web Development / Content Strategy / Google Ads",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 227, prefix: "+", suffix: "%" },
    metricLabel: "Search impressions",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants",
    services: "SEO / Technical SEO / Content Strategy",
    image: "/images/empire-accountants-cover.webp",
    metric: { from: 5, to: 1, prefix: "Page " },
    metricLabel: "Target rankings, up from page 5",
  },
  {
    href: "/results/kinsmen-consulting",
    client: "Kinsmen Consulting",
    services: "Web Development / Local SEO / Search Strategy",
    image: "/images/kinsmen-hero.jpg",
    metric: { to: 500, prefix: "$", suffix: "K" },
    metricLabel: "Revenue from new jobs",
  },
  {
    href: "/results/msv-plumbing-services",
    client: "MSV Plumbing Services",
    services: "Web Development / SEO / Google Ads",
    image: "/images/msv-plumbing-cover.webp",
    metric: { text: "Weekly" },
    metricLabel: "Bookings from a standing start",
  },
];

export default function CaseStudy({
  label = "Scale SEO Client Work",
  heading = "SEO Results From Real Client Campaigns",
  cards = defaultCards,
  id = "work",
}: { label?: string; heading?: string; cards?: CaseCard[]; id?: string } = {}) {
  const track = useRef<HTMLDivElement>(null);

  // A card that runs off either edge scrolls into view instead of navigating
  const onCardClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const t = track.current;
    if (!t) return;
    const card = e.currentTarget.getBoundingClientRect();
    const box = t.getBoundingClientRect();
    if (card.right > box.right + 2 || card.left < box.left - 2) {
      e.preventDefault();
      t.scrollBy({ left: card.left - box.left - 40, behavior: "smooth" });
    }
  };

  const step = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const first = t.querySelector("a");
    const w = first ? first.getBoundingClientRect().width + 24 : t.clientWidth * 0.6;
    t.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className={styles.case} id={id}>
      <div className={styles.head}>
        <p className={styles.label}>
          <span className={styles.rule} aria-hidden="true" />
          {label}
        </p>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      <div className={styles.track} ref={track}>
        {cards.map((c, i) => (
          <Link key={c.href} href={c.href} className={styles.card} onClick={onCardClick}>
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={`${c.client} case study`} loading="lazy" />
              <div className={styles.metric}>
                <span className={styles.metricValue}>
                  {c.metric.text ?? (
                    <CountUp from={c.metric.from ?? 0} to={c.metric.to ?? 0} prefix={c.metric.prefix} suffix={c.metric.suffix} />
                  )}
                </span>
                <span className={styles.metricLabel}>{c.metricLabel}</span>
              </div>
            </div>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={styles.client}>{c.client}</h3>
            <p className={styles.services}>{c.services}</p>
          </Link>
        ))}
      </div>

      <div className={styles.foot}>
        <Link href="/results" className={styles.all}>
          View all case studies <span aria-hidden="true">&rarr;</span>
        </Link>
        <div className={styles.arrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous case studies">&larr;</button>
          <button type="button" onClick={() => step(1)} aria-label="More case studies">&rarr;</button>
        </div>
      </div>
    </section>
  );
}
