import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "./posts";
import Link from "next/link";
import SketchIcon from "../components/SketchIcon";
import styles from "./page.module.css";
import Contact from "../components/ContactCta";

export const metadata: Metadata = {
  title: "SEO Insights & Strategy | Scale SEO Blog",
  description:
    "Notes on what actually moves search rankings and revenue for accounting firms and professional service businesses in Canada — written by Corbin Jensen.",
  alternates: { canonical: "/blog" },
};

// Pick a sketch icon that matches the article's topic
function iconFor(category: string) {
  const c = category.toLowerCase();
  if (c.includes("pric") || c.includes("cost")) return "pricing";
  if (c.includes("account")) return "accounting";
  return "article";
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Edmonton",
  });

export default function BlogPage() {
  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          </div>
          <h1 className={styles.title}>
            SEO Insights &amp;{" "}
            <span className={styles.accent}>Growth Strategies</span> for
            Professional Services
          </h1>
          <p className={styles.sub}>
            Practical search engine optimization tactics, algorithm updates,
            and revenue-focused advice built specifically for Canadian
            accounting firms and B2B businesses.
          </p>
        </div>
        <SketchIcon name="newspaper" className={styles.heroSketch} />
      </header>

      <section className={styles.list}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${styles.tile} reveal-up`}
            >
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.tileCategory}>{post.category}</span>
              <h2 className={styles.tileTitle}>{post.title}</h2>
              <SketchIcon name={iconFor(post.category)} className={styles.tileIcon} />
              <p className={styles.tileExcerpt}>{post.description}</p>
              <span className={styles.tileMeta}>
                {formatDate(post.date)} · {post.readTime}
              </span>
              <span className={styles.tileLink}>
                Read article <span className={styles.tileArrow}>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <RevealOnScroll />
      <Contact />
    </main>
  );
}
