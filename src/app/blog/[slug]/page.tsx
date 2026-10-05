import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import SketchIcon, { iconForCategory } from "../../components/SketchIcon";
import RevealOnScroll from "../../components/RevealOnScroll";
import { posts, getPost } from "../posts";
import styles from "./page.module.css";
import Contact from "../../components/ContactCta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? `${post.title} | Scale SEO Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

// Very small markdown-ish renderer: supports **bold** and [text](/link)
function renderInline(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] && match[3]) {
      const href = match[3];
      parts.push(
        /^https?:\/\//.test(href) ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            {match[2]}
          </a>
        ) : (
          <Link key={key++} href={href} className={styles.inlineLink}>
            {match[2]}
          </Link>
        )
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: "https://scaleseo.co/images/logo-social.png",
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: "Corbin Jensen",
      url: "https://scaleseo.co/corbin-jensen",
    },
    publisher: {
      "@type": "Organization",
      name: "Scale SEO",
      url: "https://scaleseo.co",
      logo: {
        "@type": "ImageObject",
        url: "https://scaleseo.co/images/logo-social.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://scaleseo.co/blog/${post.slug}`,
    },
  };

  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
            schema={!post.schema}
          />
          </div>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.byline}>
            <span>
              Written by{" "}
              <Link href="/corbin-jensen" className={styles.author}>
                Corbin Jensen
              </Link>
            </span>
            <span className={styles.dot}>&middot;</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "America/Edmonton",
              })}
            </span>
            <span className={styles.dot}>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <SketchIcon name={iconForCategory(post.category)} className={styles.heroSketch} />
      </header>

      <article className={styles.body}>
        <div className={styles.bodyInner}>
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className={styles.sectionHeading}>
                  {renderInline(block.text)}
                </h2>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        {block.head.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c}>{renderInline(cell)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (block.type === "references") {
              return (
                <ul key={i} className={styles.references}>
                  {block.items.map((ref) => (
                    <li key={ref.href} className={styles.reference}>
                      <a href={ref.href} target="_blank" rel="noopener noreferrer">
                        {ref.title} <span aria-hidden="true">↗</span>
                      </a>
                      <p>{ref.desc}</p>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={i} className={styles.subheading}>
                  {renderInline(block.text)}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className={styles.list}>
                  {block.items.map((item, j) => (
                    <li key={j} className={styles.listItem}>
                      {renderInline(item)}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className={styles.paragraph}>
                {renderInline(block.text)}
              </p>
            );
          })}
        </div>
      </article>

      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema ?? jsonLd) }}
      />
      <RevealOnScroll />
    </main>
  );
}
