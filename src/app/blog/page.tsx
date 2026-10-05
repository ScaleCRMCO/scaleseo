import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "./posts";
import PostCard from "./PostCard";
import styles from "./page.module.css";
import Contact from "../components/ContactCta";

export const metadata: Metadata = {
  title: "SEO Insights & Strategy | Scale SEO Blog",
  description:
    "Notes on what actually moves search rankings and revenue for accounting firms and professional service businesses in Canada — written by Corbin Jensen.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          </div>
          <h1 className={styles.title}>
            Notes on <span className={styles.accent}>search, strategy,</span> and revenue.
          </h1>
          <p className={styles.sub}>
            What&rsquo;s actually working right now for accounting firms and
            professional service businesses.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} className="reveal-up" />
          ))}
        </div>
      </section>
      <RevealOnScroll />
      <Contact />
    </main>
  );
}
