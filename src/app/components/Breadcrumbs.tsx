import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type Crumb = {
  name: string;
  href?: string; // omit on the current/last page
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = "https://scaleseo.co";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${base}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.crumbs}>
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.name} className={styles.item}>
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.name}
                  </Link>
                ) : (
                  <span className={styles.current} aria-current="page">
                    {item.name}
                  </span>
                )}
                {!isLast && <span className={styles.sep}>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
