import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import Process from "../sections/home/Process";
import ServicesList from "./ServicesList";
import ServicesComparison from "./ServicesComparison";
import ServicesProof from "./ServicesProof";
import ServicesFaq from "./ServicesFaq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO & Web Development Services in Calgary | Scale SEO",
  description:
    "SEO, web development, and AI search optimization for established businesses, based in Calgary and working across Canada and internationally. Handled directly by one specialist.",
  alternates: { canonical: "/services" },
};


export default function ServicesPage() {
  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
          </div>
          <h1 className={styles.title}>
            SEO Services in <span className={styles.accent}>Calgary</span>,
            Built for Growth Everywhere.
          </h1>
          <p className={styles.sub}>
            When you partner with Scale SEO, you bypass the typical agency
            layer of junior account managers and outsourced white-labeling.
            You get direct, 1-on-1 strategy and technical execution designed
            to scale high-intent organic traffic, protect your digital brand
            reputation, and drive predictable revenue growth for professional
            service firms.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className={styles.listInner}>
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>
              Calgary SEO &amp; Growth Services{" "}
              <span className={styles.introSub}>(Direct 1-on-1 Execution)</span>
            </h2>
            <p className={styles.introBody}>
              No junior managers or outsourced work—just direct execution
              from my Calgary base to scale your traffic and leads anywhere
              in Canada.
            </p>
          </div>

          <ServicesList />

          <p className={styles.industriesNote}>
            Looking for something specific to your industry?{" "}
            <a href="/industries" className={styles.industriesLink}>
              See who I work with →
            </a>
          </p>
        </div>
      </section>

      <ServicesComparison />
      <Process />
      <ServicesProof />
      <ServicesFaq />

      <section className={styles.cta} data-nav-theme="dark">
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
