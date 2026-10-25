"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import SketchIcon, { iconForCategory } from "../components/SketchIcon";
import styles from "./page.module.css";

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Edmonton",
  });

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function BlogBrowser({ posts }: { posts: PostSummary[] }) {
  // Filters
  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (c: string) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));
  const visible = posts.filter(
    (p) => selected.length === 0 || selected.includes(p.category)
  );

  return (
    <>
      <section className={styles.browse} aria-label="All articles">
        <div className={styles.browseHead}>
          <h2 className={styles.browseTitle}>All articles</h2>
        </div>

        <div className={styles.browseBody}>
          <fieldset className={styles.filters}>
            <legend className={styles.filtersTitle}>Filters</legend>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={selected.length === 0}
                onChange={() => setSelected([])}
              />
              <span>All</span>
            </label>
            {categories.map((c) => (
              <label key={c} className={styles.check}>
                <input type="checkbox" checked={selected.includes(c)} onChange={() => toggle(c)} />
                <span>{c}</span>
              </label>
            ))}
          </fieldset>

          <div className={styles.cards}>
            {visible.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
                <Corner />
                <SketchIcon name={iconForCategory(p.category)} className={styles.cardIcon} />
                <div className={styles.cardMain}>
                  <div className={styles.cardMeta}>
                    <span className={styles.tagOutline}>{p.category}</span>
                    <span>{formatDate(p.date)}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.cardRead}>{p.readTime}</span>
                </div>
              </Link>
            ))}
            {visible.length === 0 && (
              <p className={styles.empty}>No articles match those filters.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
