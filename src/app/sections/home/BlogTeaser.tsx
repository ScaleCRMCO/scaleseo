import Link from "next/link";
import { posts } from "../../blog/posts";
import styles from "./BlogTeaser.module.css";

export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={`${styles.section} section-dark`} data-nav-theme="dark">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className="section-label reveal-up">Recent Articles</div>
            <h2 className={`${styles.heading} reveal-up`}>
              SEO Insights &amp; Resources
            </h2>
            <p className={`${styles.sub} reveal-up`}>
              Practical guides covering SEO, organic search, websites, and the
              strategies businesses can use to improve their visibility online.
            </p>
          </div>
          <Link href="/blog" className={`${styles.viewAll} reveal-up`}>
            View All SEO Resources →
          </Link>
        </div>

        <div className={styles.grid}>
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${styles.card} reveal-up`}
            >
              <div className={styles.cardGraphic} aria-hidden="true">
                <span className={styles.cardGraphicCategory}>{post.category}</span>
                <span className={styles.cardGraphicMark}>✕</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>{post.category}</span>
                  <span className={styles.cardMeta}>{post.readTime}</span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.link}>
                  Read Article <span className={styles.arrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
