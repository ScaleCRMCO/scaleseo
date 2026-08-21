import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO & Web Development Services in Calgary | Scale SEO",
  description:
    "SEO, web development, and AI search optimization for established businesses, based in Calgary and working across Canada and internationally. Handled directly by one specialist.",
};

const services = [
  {
    num: "01",
    name: "SEO",
    desc: "Technical, on-page, and local SEO built to improve real rankings and revenue — not just a checklist of tasks.",
    href: "/services/seo",
  },
  {
    num: "02",
    name: "Web Development & Design",
    desc: "Fast, clean websites for accounting and professional service businesses — designed and built with SEO in from the start.",
    href: "/services/web-development",
  },
  {
    num: "03",
    name: "Content Strategy",
    desc: "Content built around real search intent and buyer questions, not filler — the kind that ranks and actually converts.",
    href: "/services/seo",
  },
  {
    num: "04",
    name: "AI Search Optimization (GEO)",
    desc: "Positioning your site so ChatGPT, Perplexity, and Google's AI answers name you when buyers ask.",
    href: "/services/geo",
  },
  {
    num: "05",
    name: "Reporting & Strategy",
    desc: "Monthly calls and plain-English reporting on what moved, what's next, and what it means for leads and revenue.",
    href: null,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
          <p className={styles.eyebrow}>Services</p>
          <h1 className={styles.title}>
            SEO Services in <span className={styles.accent}>Calgary</span>,
            Built for Growth Everywhere.
          </h1>
          <p className={styles.sub}>
            I&rsquo;m based in Calgary, Alberta, and it&rsquo;s where my work
            is most concentrated — but the businesses I work with aren&rsquo;t
            limited to one city. Every service below is built the same way,
            whether the client is down the street or across the country: one
            specialist, doing the work directly.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className="section-label reveal-up">What I Do</div>
        <div className={styles.grid}>
          {services.map((s) => {
            const content = (
              <>
                <div className={styles.itemNum}>{s.num}</div>
                <h2 className={styles.itemName}>{s.name}</h2>
                <p className={styles.itemDesc}>{s.desc}</p>
                {s.href && (
                  <span className={styles.itemLink}>
                    Learn more <span className={styles.itemArrow}>→</span>
                  </span>
                )}
              </>
            );
            return s.href ? (
              <Link
                key={s.num}
                href={s.href}
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                {content}
              </Link>
            ) : (
              <div key={s.num} className={`${styles.item} reveal-up`}>
                {content}
              </div>
            );
          })}
        </div>
        <p className={styles.industriesNote}>
          Looking for something specific to your industry?{" "}
          <a href="/industries" className={styles.industriesLink}>
            See who I work with →
          </a>
        </p>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Calgary-based. <span className={styles.accent}>Working everywhere.</span>
        </h2>
        <p className={styles.ctaSub}>
          Tell me about your business and where you&rsquo;re trying to grow —
          I&rsquo;ll tell you honestly whether I&rsquo;m the right fit.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book a call</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
