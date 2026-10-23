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

const pad = (n: number) => String(n).padStart(2, "0");

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d={dir === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
  </svg>
);

export default function BlogBrowser({ posts }: { posts: PostSummary[] }) {
  // Featured slider: the three most recent posts
  const featured = posts.slice(0, 3);
  const [active, setActive] = useState(0);
  const go = (step: number) =>
    setActive((i) => (i + step + featured.length) % featured.length);

  // Filters
  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const toggle = (c: string) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));
  const q = query.trim().toLowerCase();
  const visible = posts.filter(
    (p) =>
      (selected.length === 0 || selected.includes(p.category)) &&
      (!q || `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q))
  );

  const f = featured[active];

  return (
    <>
      {featured.length > 0 && (
        <section className={styles.featuredWrap} aria-label="Featured articles">
          <div className={styles.featured}>
            {featured.length > 1 && (
              <div className={styles.arrows}>
                <button type="button" onClick={() => go(1)} aria-label="Next article">
                  <Chevron dir="right" />
                </button>
                <button type="button" onClick={() => go(-1)} aria-label="Previous article">
                  <Chevron dir="left" />
                </button>
              </div>
            )}

            {featured.map((p, i) =>
              i === active ? (
                <article key={p.slug} className={styles.slide}>
                  <span className={styles.slideNum}>{i + 1}</span>
                  <div className={styles.slideMeta}>
                    <span className={styles.tag}>{p.category}</span>
                    <span>{formatDate(p.date)}</span>
                  </div>
                  <h2 className={styles.slideTitle}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p className={styles.slideDesc}>{p.description}</p>
                  <div className={styles.slideBottom}>
                    <span>Featured · {p.readTime}</span>
                    <Link href={`/blog/${f.slug}`} className={styles.readMore}>
                      <Corner />
                      <span>Read more</span>
                    </Link>
                    <span className={styles.counter}>
                      {pad(active + 1)} &nbsp;/&nbsp; {pad(featured.length)}
                    </span>
                  </div>
                </article>
              ) : (
                <button
                  key={p.slug}
                  type="button"
                  className={styles.tab}
                  onClick={() => setActive(i)}
                  aria-label={`Show article ${i + 1}: ${p.title}`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </section>
      )}

      <section className={styles.browse} aria-label="All articles">
        <div className={styles.browseHead}>
          <h2 className={styles.browseTitle}>All articles</h2>
          <label className={styles.search}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
            />
          </label>
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
