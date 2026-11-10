"use client";
import Link from "next/link";
import { useEffect, useRef, type MouseEvent } from "react";
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
  summary?: string;
};

const homeCases: CaseCard[] = [
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

// Short problem-and-fix line under each case study image
const summaries: Record<string, string> = {
  "/results/jensen-cpa": "An established Calgary CPA firm was hard to find for its core services. We rebuilt the website and service pages, and search impressions grew 227%.",
  "/results/empire-accountants": "Empire's priority accounting searches sat on page five. Service-page, technical and content work moved them onto page one.",
  "/results/kinsmen-consulting": "A Calgary concrete contractor needed a website that won real projects. A new site and local SEO led to $500K in new jobs.",
  "/results/msv-plumbing-services": "A brand-new plumbing business started with no online presence. A new website, SEO and Google Ads built steady weekly bookings.",
};

// Client logo shown centred on each case study image (white via CSS)
const logos: Record<string, { src: string; h: number }> = {
  "/results/jensen-cpa": { src: "/images/client-logo-jensen-cpa.png", h: 34 },
  "/results/empire-accountants": { src: "/images/client-logo-empire-accountants.png", h: 52 },
  "/results/kinsmen-consulting": { src: "/images/client-logo-kinsmen-consulting.png", h: 38 },
  "/results/msv-plumbing-services": { src: "/images/client-logo-msv-plumbing.png", h: 40 },
};

export default function CaseStudy({
  label = "Scale SEO Client Work",
  heading = "SEO Results From Real Client Campaigns",
  cards = homeCases,
  id = "work",
  aside,
  centered = false,
  startIndex = 0,
  order,
}: { label?: string; heading?: string; cards?: CaseCard[]; id?: string; aside?: string; centered?: boolean; startIndex?: number; order?: number[] } = {}) {
  const track = useRef<HTMLDivElement>(null);
  if (order) cards = order.map((i) => cards[i]);

  // Centered mode: start with the chosen card in the middle of the screen
  useEffect(() => {
    const t = track.current;
    if (!centered || !t) return;
    const card = t.querySelectorAll("a")[startIndex] as HTMLElement | undefined;
    if (!card) return;
    t.scrollLeft = card.offsetLeft - (t.clientWidth - card.offsetWidth) / 2;
  }, [centered, startIndex]);

  // A card that runs off either edge scrolls into view instead of navigating
  const onCardClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const t = track.current;
    if (!t) return;
    const card = e.currentTarget.getBoundingClientRect();
    const box = t.getBoundingClientRect();
    if (card.right > box.right + 2 || card.left < box.left - 2) {
      e.preventDefault();
      const target = centered ? card.left - box.left - (box.width - card.width) / 2 : card.left - box.left - 40;
      t.scrollBy({ left: target, behavior: "smooth" });
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
        <div className={styles.headRow}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.headSide}>
            {aside && <p className={styles.aside}>{aside}</p>}
            <Link href="/results" className={styles.allBox}>
              <svg className={styles.cornerIcon} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>View all case studies</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.track} ${centered ? styles.centered : ""}`} ref={track}>
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className={styles.card} onClick={onCardClick}>
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={`${c.client} case study`} loading="lazy" />
              {logos[c.href] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logos[c.href].src} alt="" aria-hidden="true" className={styles.clientLogo} style={{ height: logos[c.href].h }} />
              )}
              <div className={styles.metric}>
                <span className={styles.metricValue}>
                  {c.metric.text ?? (
                    <CountUp from={c.metric.from ?? 0} to={c.metric.to ?? 0} prefix={c.metric.prefix} suffix={c.metric.suffix} />
                  )}
                </span>
                <span className={styles.metricLabel}>{c.metricLabel}</span>
              </div>
            </div>
            {(c.summary ?? summaries[c.href]) && <p className={styles.summary}>{c.summary ?? summaries[c.href]}</p>}
            <h3 className={styles.client}>{c.client}</h3>
            <p className={styles.services}>{c.services}</p>
          </Link>
        ))}
      </div>

      <div className={styles.foot}>
        <div className={styles.arrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous case studies">&larr;</button>
          <button type="button" onClick={() => step(1)} aria-label="More case studies">&rarr;</button>
        </div>
      </div>
    </section>
  );
}
