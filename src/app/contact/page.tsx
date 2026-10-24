import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact - Scale SEO" },
  description:
    "Get in touch with Scale SEO. Email, phone, and Google Business Profile for Corbin Jensen, independent SEO specialist serving established businesses across Canada.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="v2">
      <section className={styles.contact}>
        <div className={styles.left}>
          <h1 className={styles.title}>Tell me how I can help</h1>
          <ul className={styles.methods}>
            <li>
              <span>Email</span>
              <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+14038751110">(403) 875-1110</a>
            </li>
            <li>
              <span>Book a call</span>
              <a href="https://cal.com/corbinjensen-scaleseo/30min" target="_blank" rel="noopener noreferrer">
                30-minute strategy call ↗
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <MapEmbed />
    </main>
  );
}
