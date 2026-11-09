import styles from "../sections/home/Hero.module.css";

// "Trusted by local & national brands" strip: small grey client logos in one
// row (used on the homepage and the AI Search Optimization page).
export default function ClientLogos({ dark = false }: { dark?: boolean } = {}) {
  return (
  <div className={`${styles.logos} ${dark ? styles.logosDark : ""}`}>
    <p className={styles.logosLabel}>
      <span className={styles.logosRule} aria-hidden="true" />
      Trusted by local &amp; national brands
    </p>
    <div className={styles.logoRow} aria-label="Selected clients">
    {[
      { src: "/images/client-logo-jensen-cpa.png", alt: "Jensen CPA", h: 22 },
      { src: "/images/client-logo-kinsmen-consulting.png", alt: "Kinsmen Consulting Limited", h: 24 },
      { src: "/images/client-logo-empire-accountants.png", alt: "Empire Accountants", h: 36 },
      { src: "/images/client-logo-msv-plumbing.png", alt: "MSV Plumbing Services", h: 24 },
    ].map((l) => (
      <div key={l.src} className={styles.logoCell}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={l.src} alt={l.alt} style={{ height: l.h }} />
      </div>
    ))}
    </div>
  </div>
  );
}
