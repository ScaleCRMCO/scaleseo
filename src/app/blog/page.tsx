import type { Metadata } from "next";
import PageHero from "../components/PageHero";
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
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
        title="Blog"
        icon="newspaper"
      >
        <p>
          Explore practical SEO insights, strategies, and research from Scale
          SEO. Each article is written to help Canadian businesses better
          understand search, improve their organic visibility, and make
          smarter decisions about SEO.
        </p>
      </PageHero>

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
