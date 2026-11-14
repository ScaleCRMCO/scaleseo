"use client";
import { useState } from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import { covers } from "./covers";
import styles from "./page.module.css";

export type PostSummary = { slug: string; title: string; description: string; category: string; date: string; readTime: string };

// Category tabs with counts, a featured latest article, then the card grid
export default function BlogBrowser({ posts }: { posts: PostSummary[] }) {
  const cats = Array.from(new Set(posts.map((p) => p.category)));
  const [cat, setCat] = useState<string | null>(null);
  const visible = cat ? posts.filter((p) => p.category === cat) : posts;
  const [featured, ...rest] = visible;
  const cover = featured ? covers[featured.slug] : undefined;

  return (
    <section className={styles.browse} aria-label="All articles">
      <div className={styles.wrap}>
        <div className={styles.tabs} role="tablist" aria-label="Filter articles by category">
          {[null, ...cats].map((c) => {
            const n = c ? posts.filter((p) => p.category === c).length : posts.length;
            return (
              <button key={c ?? "all"} type="button" role="tab" aria-selected={cat === c} className={`${styles.tab} ${cat === c ? styles.tabOn : ""}`} onClick={() => setCat(c)}>
                {c ?? "All articles"} <span className={styles.count}>{n}</span>
              </button>
            );
          })}
        </div>

        {featured && (
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featText}>
              <span className={styles.featCat}>/ {featured.category}</span>
              <h2 className={styles.featTitle}>{featured.title}</h2>
              <p className={styles.featDesc}>{featured.description}</p>
              <div className={styles.featFoot}>
                <span className={styles.featBtn}>
                  Read the article
                  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
                </span>
                <span className={styles.featMeta}>{featured.readTime}</span>
              </div>
            </div>
            <div className={`${styles.featImg} ${cover?.fill ? styles.featFill : ""}`}>
              {cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover.src} alt={cover.alt} />
              )}
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className={styles.cards}>
            {rest.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        )}
        {!featured && <p className={styles.empty}>No articles in this category yet.</p>}
      </div>
    </section>
  );
}
