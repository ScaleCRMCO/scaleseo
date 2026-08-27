import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Corbin Jensen | SEO Specialist, Scale SEO",
  description:
    "Corbin Jensen is an independent SEO specialist based in Calgary, Alberta, working with accounting firms and established service businesses across Canada.",
  alternates: { canonical: "/corbin-jensen" },
};

export default function CorbinJensenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Corbin Jensen",
    jobTitle: "SEO Specialist",
    url: "https://scaleseo.co/corbin-jensen",
    image: "https://scaleseo.co/images/corbin-about.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Scale SEO",
      url: "https://scaleseo.co",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.linkedin.com/in/corbin-jensen-9a9b77127/",
      "https://www.instagram.com/scaleseo.co/",
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

            <div className={styles.content}>
              <p className={styles.eyebrow}>Author</p>
              <h1 className={styles.title}>Corbin Jensen</h1>
              <p className={styles.role}>
                SEO Specialist &middot; Founder, Scale SEO
              </p>
              <p className={styles.bio}>
                I&rsquo;m an independent SEO specialist based in Calgary,
                Alberta, working with a small number of accounting firms and
                established service businesses across Canada. Strategy,
                content, and technical SEO &mdash; handled by me, not handed
                off to a junior or an offshore team.
              </p>
              <p className={styles.bio}>
                I write here about what actually moves rankings and revenue
                for professional and financial service businesses &mdash;
                not general SEO theory, but what I&rsquo;m seeing work in
                the accounts I run day to day.
              </p>

              <div className={styles.links}>
                <a href="/about" className={styles.link}>
                  Full story →
                </a>
                <a
                  href="https://www.linkedin.com/in/corbin-jensen-9a9b77127/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LinkedIn →
                </a>
                <a
                  href="https://cal.com/corbinjensen-scaleseo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Book a call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
