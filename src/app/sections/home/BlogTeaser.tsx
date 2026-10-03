import Link from "next/link";
import { posts } from "../../blog/posts";
import PostCard from "../../blog/PostCard";
import styles from "./BlogTeaser.module.css";

export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={`${styles.section} section-dark`} id="blog" data-nav-theme="dark">
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
            <PostCard key={post.slug} post={post} headingLevel="h3" className="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
}
