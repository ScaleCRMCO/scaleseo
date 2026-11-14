import Link from "next/link";
import styles from "./Differently.module.css";

export type DiffPoint = { icon: string; title: string; body: string };

const ICONS = {
  calc: "M6 3h12v18H6zM9 7h6M9 11h2M13 11h2M9 15h2M13 15h2",
  lock: "M7 11V7a5 5 0 0 1 9.9-1M5 11h14v10H5z",
  heart: "M12 21s-7-4.4-9.3-9C1.2 8.8 3 5 6.6 5c2 0 3.4 1 5.4 3 2-2 3.4-3 5.4-3C21 5 22.8 8.8 21.3 12 19 16.6 12 21 12 21z",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
  briefcase: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  calendar: "M4 6h16v15H4zM4 10h16M9 3v4M15 3v4",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
};

const defaultPoints: DiffPoint[] = [
  {
    icon: ICONS.calc,
    title: "Built for Accounting Firms",
    body: "We understand the difference between generating more tax-season enquiries and attracting long-term business clients. Your strategy is built around your firm’s services, market, and growth goals.",
  },
  {
    icon: ICONS.lock,
    title: "No Long-Term Contracts",
    body: "Flexible month-to-month services with no lengthy commitments. We believe your marketing partner should earn your business every month.",
  },
  {
    icon: ICONS.heart,
    title: "100% Client Retention",
    body: "Every ongoing SEO client has stayed with us, reflecting the value we place on results and lasting relationships.",
  },
];

export const whyPoints: DiffPoint[] = [
  {
    icon: ICONS.chat,
    title: "Direct Communication",
    body: "Work directly with the person managing your campaign. You’ll always know who’s responsible for the work and what we’re focusing on.",
  },
  {
    icon: ICONS.briefcase,
    title: "Experience With Accounting Services",
    body: "We’ve worked on websites and search campaigns covering corporate tax, bookkeeping, fractional CFO, SMSF, and business advisory services.",
  },
  {
    icon: ICONS.calendar,
    title: "Flexible Monthly Agreements",
    body: "Our ongoing SEO services operate on month-to-month agreements, without lengthy contracts.",
  },
  {
    icon: ICONS.chart,
    title: "Focused on Business Results",
    body: "We measure progress through search visibility, relevant traffic, and qualified enquiries rather than rankings alone.",
  },
];

// Label + points divided by thin vertical rules (Mamba-style). The "wide"
// variant puts a full heading on top and four points underneath.
export default function Differently({
  label = "Here’s What We Do Differently.",
  points = defaultPoints,
  more = true,
  wide = false,
  id = "differently-label",
}: { label?: string; points?: DiffPoint[]; more?: boolean; wide?: boolean; id?: string } = {}) {
  return (
    <section className={`${styles.section} ${wide ? styles.wide : ""}`} aria-labelledby={id}>
      <h2 id={id} className={wide ? styles.wideTitle : styles.label}>{label}</h2>
      {points.map((p) => (
        <div key={p.title} className={styles.point}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={p.icon} />
            </svg>
          </span>
          <h3 className={styles.title}>{p.title}</h3>
          <p className={styles.body}>{p.body}</p>
        </div>
      ))}
      {more && (
        <div className={styles.foot}>
          <Link href="/about" className={styles.more}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>More About Scale SEO</span>
          </Link>
        </div>
      )}
    </section>
  );
}
