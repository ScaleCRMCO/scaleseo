import type { Metadata } from "next";
import RevealOnScroll from "../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Services in Calgary | Scale SEO",
  description:
    "SEO services for established businesses, based in Calgary and working across Canada and internationally. On-page, local, technical SEO, content strategy, and AI search optimization — handled by one specialist.",
};

const services = [
  {
    num: "01",
    name: "On-Page SEO",
    desc: "Titles, structure, and internal links rebuilt around what your buyers actually search — so the right pages rank for the right terms.",
  },
  {
    num: "02",
    name: "Local SEO",
    desc: "Google Business Profile, reviews, citations, and location pages built to win the map pack in every city you serve — starting with Calgary.",
  },
  {
    num: "03",
    name: "Technical SEO",
    desc: "Speed, crawlability, schema, indexing. The unglamorous groundwork that decides whether the rest of your SEO counts for anything.",
  },
  {
    num: "04",
    name: "Content Strategy",
    desc: "Content built around real search intent and buyer questions, not filler — the kind that ranks and actually converts.",
  },
  {
    num: "05",
    name: "AI Search Optimization",
    desc: "Positioning your site so ChatGPT, Perplexity, and Google's AI answers name you when buyers ask.",
  },
  {
    num: "06",
    name: "Reporting & Strategy",
    desc: "Monthly calls and plain-English reporting on what moved, what's next, and what it means for leads and revenue.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
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
          {services.map((s) => (
            <div key={s.num} className={`${styles.item} reveal-up`}>
              <div className={styles.itemNum}>{s.num}</div>
              <h2 className={styles.itemName}>{s.name}</h2>
              <p className={styles.itemDesc}>{s.desc}</p>
            </div>
          ))}
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
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
