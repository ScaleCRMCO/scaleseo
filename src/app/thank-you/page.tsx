import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Thank You | Scale SEO",
  description: "Your message has been sent to Scale SEO.",
  // This is a conversion/confirmation page, not content — keep it out of search results.
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <span className={styles.checkmark} aria-hidden="true">✓</span>

        <p className={styles.eyebrow}>Message sent</p>
        <h1 className={styles.title}>
          Thanks — I&rsquo;ve got it.
        </h1>
        <p className={styles.sub}>
          Your message just landed in my inbox. I reply to every enquiry
          personally, usually within 24 hours.
        </p>

        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span>Book a call instead</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/" className={styles.ctaSecondary}>
            <span>Back to home</span>
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/services" className={styles.link}>
            Explore services →
          </Link>
          <Link href="/results" className={styles.link}>
            See client results →
          </Link>
          <Link href="/blog" className={styles.link}>
            Read the blog →
          </Link>
        </div>
      </div>
    </main>
  );
}
