import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Eyebrow } from "../sections/v3/ui";
import v3 from "../sections/v3/v3.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact - Scale SEO" },
  description:
    "Get in touch with Scale SEO. Email, phone, and Google Business Profile for Corbin Jensen, independent SEO specialist serving established businesses across Canada.",
  alternates: { canonical: "/contact" },
};

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

// Bilberrry-style contact: details + styled map on the left, form on the right
export default function ContactPage() {
  return (
    <main className={`v2 ${v3.page}`}>
      <section className={styles.contact}>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <Eyebrow>Contact</Eyebrow>
            <h1 className={styles.title}>How can we help</h1>
            <p className={styles.lead}>
              Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.
            </p>

            <div className={styles.clutchRow}>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.clutch} aria-label="Scale SEO reviews on Clutch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={150} height={29} />
              </a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                Read the reviews <Corner />
              </a>
            </div>

            <div className={styles.details}>
              <div>
                <span className={styles.label}>/ Reach out</span>
                <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
                <a href="tel:+14038751110">(403) 875-1110</a>
                <a href="https://cal.com/corbinjensen-scaleseo/30min" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                  Book a strategy call <Corner />
                </a>
              </div>
              <div>
                <span className={styles.label}>/ Location</span>
                <address>Calgary, AB, Canada</address>
                <a href="https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                  Get directions <Corner />
                </a>
              </div>
              <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" className={styles.badge} aria-label="Semrush Certified Agency Partner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={64} height={64} />
              </a>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.49227131513!2d-114.087835!3d51.027623299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xada14f19cf89503f%3A0xf1861b58b17f2c95!2sScale%20SEO!5e0!3m2!1sen!2sca!4v1789355132106!5m2!1sen!2sca"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Scale SEO — Google Business Profile map"
              />
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.formTitle}>Let&rsquo;s work together</h2>
            <p className={styles.formLead}>Fields marked (required) need to be filled in.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
