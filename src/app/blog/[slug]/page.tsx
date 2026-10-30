import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import Image from "next/image";
import CopyLink from "./CopyLink";
import RevealOnScroll from "../../components/RevealOnScroll";
import { posts, getPost } from "../posts";
import styles from "./page.module.css";
import ContactSection from "../../components/ContactSection";

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
      "@id": "https://scaleseo.co/corbin-jensen#person",
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

  const url = `https://scaleseo.co/blog/${post.slug}`;
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Edmonton",
    });
  const enc = encodeURIComponent;

  return (
    <main className="v2">
      <header className={styles.hero}>
        <div className={styles.crumbs}>
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
      </header>

      <div className={styles.layout}>
        {/* Sticky sidebar: back box, post details, share */}
        <aside className={styles.side}>
          <Link href="/blog" className={styles.backBox}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>See all articles</span>
          </Link>
          <ul className={styles.facts}>
            <li>{post.category}</li>
            <li>{post.readTime}</li>
            <li>Published on {fmt(post.date)}</li>
            {post.updated && <li>Updated on {fmt(post.updated)}</li>}
            <li>
              Written by{" "}
              <Link href="/corbin-jensen" className={styles.author}>
                Corbin Jensen
              </Link>
            </li>
            <li className={styles.share}>
              <span>Share</span>
              <span className={styles.shareBtns}>
                <a href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={styles.shareBtn}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={styles.shareBtn}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-4v-11z" /></svg>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={styles.shareBtn}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10.2 3.5 10.2 6.3v2.2H7.5v3.7h2.7V22H14v-9.8h2.8l.4-3.7H14z" /></svg>
                </a>
                <CopyLink url={url} className={styles.shareBtn} />
              </span>
            </li>
          </ul>
        </aside>

        <article className={styles.body}>
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
        </article>
      </div>

      {/* Author block */}
      <section className={styles.authorBlock} aria-label="About the author">
        <div className={styles.authorPhoto}>
          <Image
            src="/images/corbin-about.jpg"
            alt="Corbin Jensen, founder of Scale SEO"
            fill
            sizes="(max-width: 900px) 60vw, 300px"
          />
        </div>
        <div className={styles.authorText}>
          <p className={styles.authorLead}>
            Written by the person who does the SEO work, not an account manager.
          </p>
          <div>
            <Link href="/corbin-jensen" className={styles.authorName}>Corbin Jensen</Link>
            <p className={styles.authorRole}>Founder, Scale SEO</p>
          </div>
        </div>
      </section>

      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema ?? jsonLd) }}
      />
      <RevealOnScroll />
    </main>
  );
}
