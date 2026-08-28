import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "../blog/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Corbin Jensen | Founder & Lead Specialist, Scale SEO",
  description:
    "Corbin Jensen is an independent organic search specialist and founder of Scale SEO, based in Calgary, Alberta — engineering technical search architectures for accounting practices, legal firms, and corporate consultancies across Canada.",
  alternates: { canonical: "/corbin-jensen" },
};

const onPageNav = [
  { id: "overview", label: "Overview" },
  { id: "expertise", label: "Expertise" },
  { id: "humanity", label: "Humanity" },
  { id: "articles", label: "Latest Articles" },
];

export default function CorbinJensenPage() {
  const latestPosts = posts.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://scaleseo.co/corbin-jensen",
        url: "https://scaleseo.co/corbin-jensen",
        mainEntity: {
          "@id": "https://scaleseo.co/corbin-jensen#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://scaleseo.co/corbin-jensen#person",
        name: "Corbin Jensen",
        jobTitle: "Founder & Lead Specialist",
        url: "https://scaleseo.co/corbin-jensen",
        image: "https://scaleseo.co/images/corbin-about.jpg",
        description:
          "Independent organic search specialist specializing in high-performance technical search architecture, schema deployment, and intent-focused SEO for Canadian professional services and accounting firms.",
        worksFor: {
          "@type": "ProfessionalService",
          name: "Scale SEO",
          url: "https://scaleseo.co",
        },
        nationality: {
          "@type": "Country",
          name: "Canada",
        },
        homeLocation: {
          "@type": "Place",
          name: "Calgary, Alberta, Canada",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "Alberta",
          addressCountry: "CA",
        },
        knowsAbout: [
          "Search Engine Optimization",
          "Technical SEO",
          "Local SEO",
          "Schema Markup & Structured Data",
          "Generative Engine Optimization (GEO)",
          "B2B Organic Search Strategy",
          "Accounting Firm Marketing",
          "Crawl Budget Optimization",
          "Google Ads",
          "YMYL Search Compliance",
        ],
        sameAs: [
          "https://www.linkedin.com/in/corbin-jensen-9a9b77127/",
          "https://www.instagram.com/scaleseo.co/",
          "https://clutch.co/profile/scale-seo",
          "https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7",
        ],
      },
    ],
  };

  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Corbin Jensen" }]} />

          <div className={styles.grid}>
            <div className={styles.portrait}>
              <img
                src="/images/corbin-about.jpg"
                alt="Corbin Jensen"
                className={styles.portraitImg}
              />
            </div>

            <div className={styles.headContent}>
              <h1 className={styles.title}>Corbin Jensen</h1>
              <p className={styles.role}>Founder &amp; Lead Specialist, Scale SEO</p>

              <div className={styles.ctaGroup}>
                <a
                  href="https://cal.com/corbinjensen-scaleseo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                >
                  <span>Book a call</span>
                  <span className={styles.arrow}>→</span>
                </a>
                <Link href="/contact" className={styles.ctaSecondary}>
                  <span>Send a Message</span>
                </Link>
              </div>

              <nav className={styles.onPageNav} aria-label="On this page">
                <span className={styles.onPageLabel}>On this page</span>
                <span className={styles.onPageLinks}>
                  {onPageNav.map((item, i) => (
                    <span key={item.id}>
                      {i > 0 && <span className={styles.onPageDivider}>/</span>}
                      <a href={`#${item.id}`} className={styles.onPageLink}>
                        {item.label}
                      </a>
                    </span>
                  ))}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="overview" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className="section-label reveal-up">Overview</div>
          <div className={`${styles.body} reveal-up`}>
            <p>
              Corbin Jensen is an independent organic search specialist and
              the founder of Scale SEO. Based in Calgary, Alberta, he
              engineers high-performance technical search architectures and
              intent-focused content systems specifically for accounting
              practices, legal firms, and corporate consultancies across
              Canada.
            </p>
            <p>
              Operating entirely outside the traditional agency framework,
              Corbin provides direct, senior-level intervention for
              professional service firms looking to secure high-margin
              advisory files. His work focuses heavily on data validation,
              algorithm alignment, and transforming underperforming websites
              into resilient, revenue-generating digital assets.
            </p>
          </div>
        </div>
      </section>

      <section id="expertise" className={`${styles.section} ${styles.sectionElevated}`}>
        <div className={styles.sectionInner}>
          <div className="section-label reveal-up">Expertise</div>
          <div className={`${styles.body} reveal-up`}>
            <p>
              Corbin&rsquo;s entry into search engine optimization was
              defined by a strict focus on tangible commercial outcomes
              rather than abstract traffic metrics. His foundational success
              involved architecting an aggressive local and technical search
              campaign for an industrial concrete contractor in Calgary,
              generating over $250,000 in tracked regional revenue within a
              60-day post-optimization window.
            </p>
            <p>
              This milestone established his core operational methodology:
              search optimization must function as a high-yield corporate
              asset, not a checklist of superficial vanity tasks.
            </p>
            <p>
              As the regulatory and competitive landscapes evolved, Corbin
              specialized exclusively in the professional services vertical.
              Because firms handling corporate accounting, corporate law,
              and private capital operate within Google&rsquo;s highly
              scrutinized Your Money or Your Life (YMYL) framework, he
              focuses on deploying advanced structural optimization and
              semantic schema networks that withstand intense technical and
              regulatory scrutiny.
            </p>
          </div>
        </div>
      </section>

      <section id="humanity" className={styles.humanity}>
        <div className={styles.sectionInner}>
          <div className="section-label reveal-up">Humanity</div>
          <div className={`${styles.quote} reveal-up`}>
            <p>
              I spent the early part of my career exploring different
              paths — experimenting with local review management, broad web
              design, and various entrepreneurial models. Each of those
              directions ended somewhere that felt incomplete, because they
              focused on selling basic services rather than solving
              fundamental business problems.
            </p>
            <p>
              The definitive pivot occurred when I stopped focusing on
              vanity traffic metrics and started focusing entirely on
              intent. I realized that premium businesses don&rsquo;t need
              more random clicks; they need to capture the exact moments
              when a highly literate, skeptical buyer is validating their
              expertise.
            </p>
            <p>
              I enjoy the deep, structural challenge that technical SEO
              brings — navigating the shifting rules of search algorithms,
              adapting to the emergence of AI search layers like ChatGPT and
              Perplexity, and building code architectures that clearly
              translate a firm&rsquo;s real-world authority to machines.
            </p>
            <p>
              The fully remote, performance-driven nature of this
              consultancy allows me to travel frequently, exploring regions
              like Singapore, Japan, and Malaysia. That mobility enforces a
              strict discipline: I am highly selective about the clients I
              onboard, partnering exclusively with professional practices
              that value direct accountability, transparent data, and
              flawless execution over traditional corporate office hours.
            </p>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section id="articles" className={`${styles.section} ${styles.sectionElevated}`}>
          <div className={styles.sectionInner}>
            <div className="section-label reveal-up">Latest Articles</div>
            <div className={`${styles.articlesGrid} reveal-up`}>
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.articleCard}
                >
                  <span className={styles.articleCategory}>{post.category}</span>
                  <h3 className={styles.articleTitle}>{post.title}</h3>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                  <span className={styles.articleLink}>
                    Read article <span className={styles.arrow}>→</span>
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/blog" className={styles.viewAllLink}>
              View all articles →
            </Link>
          </div>
        </section>
      )}

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaHeadline}>
          Want to talk through your firm&rsquo;s search visibility?
        </h2>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span>Book a call</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
        <p className={styles.finalCtaSub}>
          Or read the <Link href="/about" className={styles.inlineLink}>full Scale SEO story →</Link>
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealOnScroll />
    </main>
  );
}
