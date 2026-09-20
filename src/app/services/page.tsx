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
            Calgary SEO &amp; <span className={styles.accent}>Digital Growth</span> Services
          </h1>
          <p className={styles.sub}>
            We help professional service firms get found by the right
            clients online. Scale SEO provides direct, senior-level strategy
            to grow your website&rsquo;s visibility, protect your
            reputation, and bring in a steady stream of qualified business
            leads. Explore our core services below to see how we help your
            business grow.
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
            Tailored to your specific sector.{" "}
            <a href="/industries" className={styles.industriesLink}>
              Discover the industries we partner with →
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
