import Link from "next/link";
import { covers } from "./covers";
import styles from "./PostCard.module.css";

const monthYear = (iso: string) =>
  new Date(iso)
    .toLocaleDateString("en-CA", { month: "short", year: "numeric", timeZone: "America/Edmonton" })
    .replace(".", "")
    .toUpperCase();

// Blog card: cover image on top, title, category + date pills at the bottom.
export default function PostCard({
  post,
  headingLevel = "h3",
}: {
  post: { slug: string; title: string; category: string; date: string };
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const cover = covers[post.slug];
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.image}>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover.src} alt={cover.alt} loading="lazy" />
        )}
      </div>
      <div className={styles.body}>
        <Heading className={styles.title}>{post.title}</Heading>
        <div className={styles.pills}>
          <span>{post.category}</span>
          <span>{monthYear(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}
