import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import { posts } from "./posts";
import BlogBrowser, { type PostSummary } from "./BlogBrowser";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Insights & Strategy | Scale SEO Blog",
  description:
    "Notes on what actually moves search rankings and revenue for accounting firms and professional service businesses in Canada — written by Corbin Jensen.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  // Only the fields the cards need go to the client component
  const summaries: PostSummary[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
  }));

  return (
    <main className={`v2 ${v.page}`}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          </div>
          <div className={styles.heroGrid}>
            <span className={styles.sideLabel}>Insights by Scale SEO</span>
            <div>
              <h1 className={styles.h1}>Blog</h1>
              <p className={styles.lead}>
                Explore practical SEO insights, strategies, and research from Scale SEO. Each article is written to help Canadian businesses better understand search, improve their organic visibility, and make smarter decisions about SEO.
              </p>
            </div>
          </div>
        </div>
      </header>

      <BlogBrowser posts={summaries} />

      <section className={`${v.white} ${v.ctaSec}`}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Ready to Grow Your Accounting Firm?</h2>
            <p className={v.p}>Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and opportunities to attract more clients through Google. Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.</p>
            <Btn href="https://cal.com/corbinjensen-scaleseo/30min" external>Speak to an Expert</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
