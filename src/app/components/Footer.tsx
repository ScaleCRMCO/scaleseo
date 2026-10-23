import Link from "next/link";
import styles from "./Footer.module.css";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "All Services" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/seo-audits", label: "SEO Audits" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/google-ads-management", label: "Google Ads" },
  { href: "/services/geo", label: "GEO (AI Search)" },
];

const connect = [
  { href: "/corbin-jensen", label: "Corbin Jensen" },
  { href: "https://www.linkedin.com/company/scale-seo/", label: "LinkedIn", external: true },
  { href: "https://www.instagram.com/scaleseo.co/", label: "Instagram", external: true },
  { href: "https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7", label: "Google Business", external: true },
  { href: "https://clutch.co/profile/scale-seo", label: "Clutch", external: true },
];

type Item = { href: string; label: string; external?: boolean };

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className={styles.col}>
      <div className={styles.colLabel}>{title}</div>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item.href}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.row}>
                <span className={styles.num}>{i + 1}</span>
                <span>{item.label}</span>
              </a>
            ) : (
              <Link href={item.href} className={styles.row}>
                <span className={styles.num}>{i + 1}</span>
                <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.intro}>
          <p className={styles.tagline}>
            SEO for professional service businesses
          </p>
          <div className={styles.contactLines}>
            <a href="tel:+14038751110">(403) 875-1110</a>
            <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
            <span>Calgary, Alberta · Canada</span>
            <span>Remote · Est. 2025</span>
          </div>
        </div>

        <Column title="Pages" items={pages} />
        <Column title="Services" items={services} />
        <Column title="Connect" items={connect} />

        {/* Navy CTA box with a blue booking box inside */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Every great SEO campaign starts with a conversation</p>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBox}
          >
            <Corner />
            <span>Book a call</span>
          </a>
        </div>

        {/* Giant wordmark across the bottom */}
        <Link href="/" className={styles.wordmark} aria-label="Scale SEO home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/scaleseo-logo-square-2026.svg" alt="" className={styles.mark} />
          <span>Scale SEO</span>
        </Link>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2026 Scale SEO · Corbin Jensen ·{" "}
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </div>
        <div className={styles.bottomRight}>
          <Link href="/business-information" className={styles.link}>Business Information</Link>
          <span>SEO for Calgary · Serving Canada</span>
          {/* Google "Add to Preferred Sources" button */}
          <div google-add-preferred-source-btn="" data-theme="light" />
        </div>
      </div>
    </footer>
  );
}
