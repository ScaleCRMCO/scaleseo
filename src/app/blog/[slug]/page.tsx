import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import Image from "next/image";
import CopyLink from "./CopyLink";
import { covers, coverUrl } from "../covers";
import { posts, getPost } from "../posts";
import styles from "./page.module.css";
import v from "../../sections/v3/v3.module.css";
import { Btn } from "../../sections/v3/ui";

// Add the cover image to hand-written schema's BlogPosting/Article nodes
// that don't already declare one.
function withImage(schema: Record<string, unknown> | undefined, img?: string) {
  if (!schema || !img) return schema;
  const clone = JSON.parse(JSON.stringify(schema));
  const nodes: Record<string, unknown>[] = Array.isArray(clone["@graph"]) ? clone["@graph"] : [clone];
  for (const n of nodes) {
    if ((n["@type"] === "BlogPosting" || n["@type"] === "Article") && !n.image) {
      n.image = { "@type": "ImageObject", url: img, width: 1600, height: 1083 };
    }
  }
  return clone;
}

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

const slugify = (t: string) => t.replace(/\*\*/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
    image: coverUrl(post.slug) ?? "https://scaleseo.co/images/logo-social.png",
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

  const toc = post.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2").map((b) => ({ id: slugify(b.text), text: b.text.replace(/\*\*/g, "") }));
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const cover = covers[post.slug];
  const Corner = () => (
    <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
  );

  return (
    <main className={`v2 ${v.page}`}>
      {/* Header: crumbs, tags, title, lead, author/date/read-time row, cover */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} schema={!post.schema} />
          </div>
          <div className={styles.head}>
            <div className={styles.tags}>
              <span className={styles.tag}>{post.category}</span>
              <span className={styles.tagGrey}>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.lead}>{post.description}</p>
            <div className={styles.meta}>
              <Link href="/corbin-jensen" className={styles.byline}>
                <span className={styles.avatar}>
                  <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen" fill sizes="48px" />
                </span>
                <span>
                  <span className={styles.metaLabel}>Written by</span>
                  <span className={styles.metaValue}>Corbin Jensen</span>
                  <span className={styles.metaSub}>Founder, Scale SEO</span>
                </span>
              </Link>
              <div>
                <span className={styles.metaLabel}>Published</span>
                <span className={styles.metaValue}>{fmt(post.date)}</span>
              </div>
              {post.updated && (
                <div>
                  <span className={styles.metaLabel}>Updated</span>
                  <span className={styles.metaValue}>{fmt(post.updated)}</span>
                </div>
              )}
              <div>
                <span className={styles.metaLabel}>Read time</span>
                <span className={styles.metaValue}>{post.readTime.replace(" read", "")}</span>
              </div>
            </div>
          </div>
          {cover && (
            <div className={styles.cover}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cover.src} alt={cover.alt} style={cover.fill ? { objectFit: "cover" } : undefined} />
            </div>
          )}
        </div>
      </header>

      <div className={`${styles.wrap} ${styles.layout}`}>
        {/* Sticky sidebar: table of contents, share, small CTA */}
        <aside className={styles.side}>
          <Link href="/blog" className={styles.back}>&larr; Back to Blog</Link>
          {toc.length > 0 && (
            <nav aria-label="On this page" className={styles.toc}>
              <span className={styles.sideLabel}>On this page</span>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>
                ))}
              </ol>
            </nav>
          )}
          <div className={styles.share}>
            <span className={styles.sideLabel}>Share</span>
            <span className={styles.shareBtns}>
              <a href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.2 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-4v-11z" /></svg>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={styles.shareBtn}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10.2 3.5 10.2 6.3v2.2H7.5v3.7h2.7V22H14v-9.8h2.8l.4-3.7H14z" /></svg>
              </a>
              <CopyLink url={url} className={styles.shareBtn} />
            </span>
          </div>
          <div className={styles.sideCta}>
            <p>Want help applying this to your firm?</p>
            <Btn href="https://cal.com/corbinjensen-scaleseo/30min" external>Speak to an Expert</Btn>
          </div>
        </aside>

        <article className={styles.body}>
          {post.takeaways && post.takeaways.length > 0 && (
            <section className={styles.takeaways} aria-label="Key takeaways">
              <span className={styles.takeLabel}>Key takeaways</span>
              <ul>
                {post.takeaways.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </section>
          )}
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} id={slugify(block.text)} className={styles.sectionHeading}>
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

          {/* Author box */}
          <section className={styles.authorBox} aria-label="About the author">
            <span className={styles.authorImg}>
              <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder of Scale SEO" fill sizes="96px" />
            </span>
            <div>
              <span className={styles.metaLabel}>About the author</span>
              <Link href="/corbin-jensen" className={styles.authorName}>Corbin Jensen</Link>
              <span className={styles.metaSub}>Founder, Scale SEO</span>
              <p className={styles.authorLead}>Written by the person who does the SEO work, not an account manager.</p>
            </div>
          </section>
        </article>
      </div>

      {/* Related articles — Bilberrry list */}
      {related.length > 0 && (
        <section className={styles.related} aria-labelledby="related-h">
          <div className={`${styles.wrap} ${styles.relatedGrid}`}>
            <h2 id="related-h" className={styles.relatedTitle}>Related articles</h2>
            <ul className={styles.relatedList}>
              {related.map((r) => {
                const c = covers[r.slug];
                return (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className={styles.relatedRow}>
                      <span className={styles.relatedImg}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {c && <img src={c.src} alt="" loading="lazy" style={c.fill ? { objectFit: "cover" } : undefined} />}
                      </span>
                      <span>
                        <span className={styles.relatedCat}>/ {r.category}</span>
                        <span className={styles.relatedName}>{r.title} <Corner /></span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className={`${v.white} ${v.ctaSec}`}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Ready to Grow Your Accounting Firm?</h2>
            <p className={v.p}>Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and opportunities to attract more clients through Google. Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.</p>
            <Btn href="https://cal.com/corbinjensen-scaleseo/30min" external>Speak to an Expert</Btn>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withImage(post.schema, coverUrl(post.slug)) ?? jsonLd) }}
      />
    </main>
  );
}
