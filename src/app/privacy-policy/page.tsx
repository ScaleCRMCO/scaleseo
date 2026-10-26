import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import { blocks } from "./content";
import styles from "../legal.module.css";

const slug = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Contents list: the numbered sections
const toc = blocks.filter((b) => b[0] === "h2").map((b) => b[1] as string);

export const metadata: Metadata = {
  title: "Privacy Policy | Scale SEO",
  description:
    "How Scale SEO collects, uses, discloses, stores, and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="v2">
      <header className={styles.hero}>
        <div className={styles.crumbs}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
        </div>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.meta}>
          <p>Last Updated: October 7, 2026</p>
        </div>
      </header>

      <div className={styles.layout}>
        <ol className={styles.toc}>
          {toc.map((h) => (
            <li key={h}>
              <a href={`#${slug(h)}`}>{h}</a>
            </li>
          ))}
          <li>
            <a href="#privacy-contact">Privacy Contact</a>
          </li>
        </ol>
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
            if (b[0] === "h2") return <h2 key={i} id={slug(b[1])}>{b[1]}</h2>;
            if (b[0] === "h3") return <h3 key={i}>{b[1]}</h3>;
            return <p key={i}>{b[1]}</p>;
          })}

          <address className={styles.contactBox} id="privacy-contact">
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
      </div>
    </main>
  );
}
