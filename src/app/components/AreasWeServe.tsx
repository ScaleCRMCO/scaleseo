import Link from "next/link";
import styles from "./AreasWeServe.module.css";

// "Areas we serve" block for location pages: label + big heading on the left,
// contact details on the right, then a full-width Google Maps embed.
export default function AreasWeServe({ place, others }: { place: string; others: { label: string; href: string }[] }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(place)}&z=10&output=embed`;
  return (
    <section className={styles.section} aria-labelledby="areas-heading">
      <div className={styles.top}>
        <span className={styles.label}>Locations</span>
        <h2 id="areas-heading" className={styles.title}>Areas We Serve</h2>
        <dl className={styles.details}>
          <div>
            <dt>Email</dt>
            <dd><a href="mailto:team@scaleseo.co">team@scaleseo.co</a></dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd><a href="tel:+14038751110">(403) 875-1110</a></dd>
          </div>
          <div>
            <dt>Service area</dt>
            <dd>Providing SEO services across {place}</dd>
          </div>
          <div>
            <dt>Connect</dt>
            <dd className={styles.links}>
              <a href="https://www.linkedin.com/company/scale-seo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7" target="_blank" rel="noopener noreferrer">Google Business</a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer">Clutch</a>
            </dd>
          </div>
          <div className={styles.wide}>
            <dt>Other locations</dt>
            <dd className={styles.links}>
              {others.map((o) => (
                <Link key={o.href} href={o.href}>SEO in {o.label}</Link>
              ))}
            </dd>
          </div>
        </dl>
      </div>
      <div className={styles.map}>
        <iframe
          src={mapSrc}
          title={`Map of ${place}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
