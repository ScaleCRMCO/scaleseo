import Link from "next/link";
import { covers } from "./covers";
import styles from "./PostCard.module.css";

const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric", timeZone: "America/Edmonton" });

// Article card (Mamba resources style): cover, category tag + read time,
// title, short description, date and a corner-arrow "Read article".
export default function PostCard({
  post,
  headingLevel = "h3",
}: {
  post: { slug: string; title: string; category: string; date: string; description?: string; readTime?: string };
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const cover = covers[post.slug];
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={`${styles.image} ${cover?.fill ? styles.fill : ""}`}>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover.src} alt={cover.alt} loading="lazy" />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          <span className={styles.tag}>{post.category}</span>
          {post.readTime && <span className={styles.meta}>{post.readTime}</span>}
        </div>
        <Heading className={styles.title}>{post.title}</Heading>
        {post.description && <p className={styles.desc}>{post.description}</p>}
        <div className={styles.foot}>
          <span>{monthYear(post.date)}</span>
          <span className={styles.read}>
            Read article
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
