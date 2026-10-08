import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "./posts";
import BlogTile from "./BlogTile";
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
            <BlogTile key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <RevealOnScroll />
      <Contact />
    </main>
  );
}
