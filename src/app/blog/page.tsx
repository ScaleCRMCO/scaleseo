import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "./posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Insights & Strategy | Scale SEO Blog",
  description:
    "Notes on what actually moves search rankings and revenue for accounting firms and professional service businesses in Canada — written by Corbin Jensen.",
};

export default function BlogPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          <p className={styles.eyebrow}>Blog</p>
          <h1 className={styles.title}>
            Notes on <span className={styles.accent}>search, strategy,</span> and revenue.
          </h1>
          <p className={styles.sub}>
            What&rsquo;s actually working right now for accounting firms and
            professional service businesses — not general SEO theory,
            written by the specialist doing the work.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${styles.card} reveal-up`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardCategory}>{post.category}</span>
                <span className={styles.cardMeta}>{post.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <span className={styles.cardLink}>
                Read article <span className={styles.arrow}>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
