import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
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
    <main className="v2">
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          </div>
          <h1 className={styles.heroTitle}>Blog</h1>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImage}>
            <Image
              src="/images/gsc-performance-mockup-3d.webp"
              alt="Google Search Console performance report"
              fill
              sizes="(max-width: 900px) 90vw, 30vw"
              priority
            />
          </div>
          <p className={styles.heroIntro}>
            Explore practical SEO insights, strategies, and research from Scale
            SEO. Each article is written to help Canadian businesses better
            understand search, improve their organic visibility, and make
            smarter decisions about SEO.
          </p>
        </div>
      </header>

      <BlogBrowser posts={summaries} />
      <ContactSection />
    </main>
  );
}
