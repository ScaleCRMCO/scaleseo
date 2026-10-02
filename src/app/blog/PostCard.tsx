import Link from "next/link";
import type { Post } from "./posts";
import styles from "./PostCard.module.css";

/* Template card for every blog post: soft lime panel with category, title,
   short description, then a lime-barred footer with the date + read link.
   No image slot — the type does the work. */

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Edmonton",
  });

export default function PostCard({
  post,
  className = "",
  headingLevel = "h2",
}: {
  post: Post;
  className?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className={`${styles.card} ${className}`}>
      <span className={styles.category}>{post.category}</span>
      <Heading className={styles.title}>{post.title}</Heading>
      <p className={styles.excerpt}>{post.description}</p>
      <div className={styles.footer}>
        <div className={styles.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <span className={styles.read}>
          Read article <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  );
}
