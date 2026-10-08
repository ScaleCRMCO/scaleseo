import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { blocks } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Scale SEO",
  description:
    "How Scale SEO collects, uses, discloses, stores, and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
        title="Privacy Policy"
        icon="ledger"
      >
        <p>Last Updated: October 7, 2026</p>
      </PageHero>

      <section className={styles.section}>
        <article className={styles.body}>
          {blocks.map((b, i) => {
            if (b[0] === "ul")
              return (
                <ul key={i}>
                  {b[1].map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              );
            if (b[0] === "h2") return <h2 key={i}>{b[1]}</h2>;
            if (b[0] === "h3") return <h3 key={i}>{b[1]}</h3>;
            return <p key={i}>{b[1]}</p>;
          })}

          <address className={styles.contact}>
            <strong>Privacy Contact: Corbin Jensen</strong>
            <span>Scale SEO</span>
            <span>Calgary, Alberta, Canada</span>
            <span>
              Email: <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
            </span>
            <span>
              Website: <a href="https://scaleseo.co">scaleseo.co</a>
            </span>
          </address>

          <p>
            If you have a privacy concern, we encourage you to contact Scale SEO
            first so that we can review and respond to your request.
          </p>
        </article>
      </section>
    </main>
  );
}
