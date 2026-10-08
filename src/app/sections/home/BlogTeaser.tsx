import Link from "next/link";
import { posts } from "../../blog/posts";
import BlogTile from "../../blog/BlogTile";
import blog from "../../blog/page.module.css";
import styles from "./BlogTeaser.module.css";

export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className={styles.section} id="blog">
      <div className={styles.top}>
        <div>
          <div className="section-label reveal-up">Recent Articles</div>
          <h2 className={`${styles.heading} reveal-up`}>
            SEO Insights &amp; Resources
          </h2>
        </div>
        <div className={styles.side}>
          <p className={`${styles.sub} reveal-up`}>
            Practical guides covering SEO, organic search, websites, and the
            strategies businesses can use to improve their visibility online.
          </p>
          <Link href="/blog" className={`${styles.viewAll} reveal-up`}>
            View All SEO Resources →
          </Link>
        </div>
      </div>

      <div className={blog.grid}>
        {latest.map((post) => (
          <BlogTile key={post.slug} post={post} headingLevel="h3" />
        ))}
      </div>
    </section>
  );
}
