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

const locations = [
  { href: "/", label: "Calgary" },
  { href: "/locations/edmonton", label: "Edmonton" },
  { href: "/locations/vancouver", label: "Vancouver" },
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
      <div className={styles.colLabel}>{title}</div>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.row}>
                <span>{item.label}</span>
              </a>
            ) : (
              <Link href={item.href} className={styles.row}>
                <span>{item.label}</span>
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
      <div className={styles.top}>
        {/* Left: CTA, contact details, trust badges */}
        <div className={styles.lead}>
          <p className={styles.ctaText}>Every great SEO campaign starts with a conversation</p>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSlim}
          >
            <svg className={styles.ctaCorner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>Speak to an Expert</span>
          </a>
          <div className={styles.contactLines}>
            <a href="tel:+14038751110">(403) 875-1110</a>
            <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
          </div>
        </div>

        {/* Right: categorized link columns */}
        <div className={styles.cols}>
          <Column title="Company" items={pages} />
          <Column title="Services" items={services} />
          <Column title="Locations" items={locations} />
          <Column title="Connect" items={connect} />
        </div>

        {/* Trust row: badges left, office address right */}
        <div className={styles.trust}>
          <div className={styles.badges}>
            <TrustindexWidget id="17e0136848d8361029462bf7c16" className={styles.reviews} />
            <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="Semrush Certified Agency Partner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={56} height={56} />
            </a>
            <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.badgeLink} aria-label="Scale SEO reviews on Clutch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={158} height={30} className={styles.clutch} />
            </a>
            <DesignRushWidget className={styles.designrush} />
          </div>
          <div className={styles.office}>
            <span className={styles.officeLabel}>Calgary Office</span>
            <address className={styles.address}>
              1122 3 St SE Ste 1906
              <br />
              Calgary, AB T2G 0E7, Canada
            </address>
          </div>
        </div>

        {/* Giant wordmark across the bottom */}
        <Link href="/" className={styles.wordmark} aria-label="Scale SEO home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/scaleseo-wordmark-white.svg" alt="Scale SEO" className={styles.logo} />
        </Link>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2026 Scale SEO ·{" "}
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </div>
        <div className={styles.bottomRight}>
          <Link href="/business-information" className={styles.link}>Business Information</Link>
          <span>SEO for Calgary · Serving Canada</span>
          {/* Google "Add to Preferred Sources" button */}
          <div google-add-preferred-source-btn="" data-theme="dark" />
        </div>
      </div>
    </footer>
  );
}
