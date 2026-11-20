import Link from "next/link";
import TrustindexWidget from "./TrustindexWidget";
import DesignRushWidget from "./DesignRushWidget";
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
  { href: "/services/national-seo", label: "National SEO" },
  { href: "/services/on-page-seo", label: "On-Page SEO" },
  { href: "/services/seo-audits", label: "SEO Audits" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/google-ads-management", label: "Google Ads" },
  { href: "/services/geo", label: "GEO (AI Search)" },
];

const connect = [
  { href: "/corbin-jensen", label: "Corbin Jensen" },
  { href: "https://www.linkedin.com/company/scale-seo/", label: "LinkedIn", external: true },
  { href: "https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7", label: "Google Business", external: true },
  { href: "https://clutch.co/profile/scale-seo", label: "Clutch", external: true },
];

type Item = { href: string; label: string; external?: boolean };

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className={styles.col}>
      <div className={styles.colLabel}>/ {title}</div>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.row}>
                <span>{item.label}</span>
                <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              </a>
            ) : (
              <Link href={item.href} className={styles.row}>
                <span>{item.label}</span>
                <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} data-nav="dark">
      <div className={styles.wrap}>
        {/* CTA band (Bilberrry): statement left, button + note right */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Every great SEO campaign starts with a conversation</p>
          <div className={styles.ctaSide}>
            <a href="https://cal.com/corbinjensen-scaleseo/30min" target="_blank" rel="noopener noreferrer" className={styles.btn}>
              <span>Speak to an Expert</span>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            </a>
          </div>
        </div>

        {/* Main grid (Mamba): contact + office + badges left, link columns right */}
        <div className={styles.main}>
          <div className={styles.info}>
            <div>
              <div className={styles.colLabel}>/ Reach Out</div>
              <div className={styles.contactLines}>
                <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
                <a href="tel:+14038751110">(403) 875-1110</a>
              </div>
            </div>
            <div>
              <div className={styles.colLabel}>/ Calgary Office</div>
              <address className={styles.address}>
                1122 3 St SE Ste 1906
                <br />
                Calgary, AB T2G 0E7, Canada
              </address>
            </div>
            <div className={styles.badges}>
              <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="Semrush Certified Agency Partner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={52} height={52} />
              </a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="Scale SEO reviews on Clutch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={140} height={27} />
              </a>
              <DesignRushWidget className={styles.designrush} />
            </div>
            <TrustindexWidget id="17e0136848d8361029462bf7c16" className={styles.reviews} />
          </div>

          <div className={styles.cols}>
            <Column title="Company" items={pages} />
            <Column title="Services" items={services} />
            <Column title="Connect" items={connect} />
          </div>
        </div>

        {/* Wordmark, contained to the column */}
        <Link href="/" className={styles.wordmark} aria-label="Scale SEO home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/scaleseo-wordmark-white.svg" alt="Scale SEO" className={styles.logo} />
        </Link>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            © 2026 Scale SEO ·{" "}
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          </div>
          <div className={styles.bottomRight}>
            <Link href="/business-information" className={styles.link}>Business Information</Link>
            <span>SEO for Calgary · Serving Canada</span>
            <div google-add-preferred-source-btn="" data-theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
