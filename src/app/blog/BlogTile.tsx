import Link from "next/link";
import type { Post } from "./posts";
import SketchIcon, { iconForCategory } from "../components/SketchIcon";
import styles from "./page.module.css";

// White portrait tile used on /blog and the homepage blog section.
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Edmonton",
  });

export default function BlogTile({
  post,
  headingLevel = "h2",
}: {
  post: Post;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className={`${styles.tile} reveal-up`}>
      <span className={styles.tick} aria-hidden="true" />
      <span className={styles.tileCategory}>{post.category}</span>
      <Heading className={styles.tileTitle}>{post.title}</Heading>
      <SketchIcon name={iconForCategory(post.category)} className={styles.tileIcon} />
      <p className={styles.tileExcerpt}>{post.description}</p>
      <span className={styles.tileMeta}>
        {formatDate(post.date)} · {post.readTime}
      </span>
      <span className={styles.tileLink}>
        Read article <span className={styles.tileArrow}>→</span>
      </span>
    </Link>
  );
}
