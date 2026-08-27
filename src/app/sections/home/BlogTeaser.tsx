import Link from "next/link";
import { posts } from "../../blog/posts";
import styles from "./BlogTeaser.module.css";

export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div>
          <div className="section-label reveal-up">Recent Articles</div>
          <h2 className={`${styles.heading} reveal-up`}>
            Insights on SEO, growth, and search strategy.
          </h2>
        </div>
        <Link href="/blog" className={`${styles.viewAll} reveal-up`}>
          Read more SEO &amp; Google Ads insights →
        </Link>
      </div>

      <div className={styles.grid}>
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`${styles.card} reveal-up`}
          >
            <div className={styles.tags}>
              <span className={styles.tag}>{post.category}</span>
              <span className={styles.tag}>{post.readTime}</span>
            </div>

            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.footer}>
              <span className={styles.author}>By Corbin Jensen</span>
              <span className={styles.link}>
                Read article <span className={styles.arrow}>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
