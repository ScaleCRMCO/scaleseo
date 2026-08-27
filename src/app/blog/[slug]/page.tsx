import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import { posts, getPost } from "../posts";
import styles from "./page.module.css";

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
    title: `${post.title} | Scale SEO Blog`,
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
      parts.push(
        <Link key={key++} href={match[3]} className={styles.inlineLink}>
          {match[2]}
        </Link>
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
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Corbin Jensen",
      url: "https://scaleseo.co/corbin-jensen",
    },
    publisher: {
      "@type": "Organization",
      name: "Scale SEO",
      url: "https://scaleseo.co",
    },
    mainEntityOfPage: `https://scaleseo.co/blog/${post.slug}`,
  };

  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
          <p className={styles.eyebrow}>{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.byline}>
            <Link href="/corbin-jensen" className={styles.author}>
              Corbin Jensen
            </Link>
            <span className={styles.dot}>&middot;</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className={styles.dot}>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <article className={styles.body}>
        <div className={styles.bodyInner}>
          {post.body.map((para, i) => (
            <p key={i} className={styles.paragraph}>
              {renderInline(para)}
            </p>
          ))}
        </div>
      </article>

      <section className={styles.cta}>
        <h2 className={styles.ctaHeadline}>
          Want a second opinion on your firm&rsquo;s search visibility?
        </h2>
        <a
          href="https://cal.com/corbinjensen-scaleseo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>Book a call</span>
          <span className={styles.arrow}>→</span>
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealOnScroll />
    </main>
  );
}
