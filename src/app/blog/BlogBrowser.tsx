"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import PostCard from "./PostCard";
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
              <PostCard key={p.slug} post={p} />
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
