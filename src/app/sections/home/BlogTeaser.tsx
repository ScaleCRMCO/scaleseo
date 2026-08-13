import Link from "next/link";
import { posts } from "../../blog/posts";
import styles from "./BlogTeaser.module.css";

export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="section-label reveal-up">From the Blog</div>
        <Link href="/blog" className={`${styles.viewAll} reveal-up`}>
          View all articles →
        </Link>
      </div>

      <div className={styles.grid}>
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`${styles.card} reveal-up`}
          >
            <span className={styles.category}>{post.category}</span>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <span className={styles.link}>
              Read article <span className={styles.arrow}>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
