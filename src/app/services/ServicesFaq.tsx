import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./ServicesFaq.module.css";

// Each answer is a list of paragraphs; the FAQPage schema joins them.
export type FaqItem = {
  q: string;
  a: string[];
  link?: { href: string; label: string };
};

// Default questions for the /services hub. Other service pages pass their
// own `items` and `title`.
const servicesFaqs: FaqItem[] = [
  {
    q: "Which service should I start with?",
    a: [
      "If your primary goal is generating more long-term traffic and enquiries from Google, ongoing SEO is usually the most appropriate starting point.",
      "A standalone SEO audit may make more sense if you already have a marketing or development team and primarily need an independent assessment and strategy.",
      "If the website itself is limiting performance, web development can be completed independently or as part of a wider SEO engagement.",
    ],
  },
  {
    q: "How are SEO services priced?",
    a: [
      "Ongoing SEO campaigns are structured as monthly retainers based on the website, competition, objectives, and amount of work required.",
      "I don’t use generic SEO packages because two businesses targeting different markets rarely require exactly the same work.",
      "Standalone SEO audits and web development projects are scoped separately.",
    ],
  },
  {
    q: "Do you require long-term contracts?",
    a: [
      "No.",
      "Ongoing Scale SEO engagements are month-to-month. Your website, accounts, content, data, and other digital assets remain yours.",
    ],
  },
  {
    q: "Can you manage my website as part of SEO?",
    a: [
      "Yes.",
      "Website changes are often necessary for SEO, which is one reason I work directly with websites rather than limiting campaigns to recommendations and reports.",
      "Depending on your website and platform, I can implement technical fixes, improve service pages, restructure content, add internal links, create new pages, and make other changes required by the strategy.",
    ],
  },
  {
    q: "Can I purchase an SEO audit without monthly SEO?",
    a: [
      "Yes.",
      "Standalone SEO audits are available for businesses that want an independent assessment and prioritized recommendations without committing to ongoing SEO.",
    ],
    link: { href: "/services/seo-audits", label: "Learn More About SEO Audits" },
  },
  {
    q: "Do you only work with businesses in Calgary?",
    a: [
      "No.",
      "Scale SEO is based in Calgary, Alberta, but SEO, web development, paid search, and AI search work can be managed remotely for businesses throughout Canada and internationally.",
      "Calgary is my home market, while the strategy itself is built around the locations and customers your business needs to reach.",
    ],
  },
];

export default function ServicesFaq({
  items = servicesFaqs,
  eyebrow = "Common Questions",
  title = (
    <>
      Frequently Asked Questions About <em>Scale SEO Services</em>
    </>
  ),
}: {
  items?: FaqItem[];
  eyebrow?: string;
  title?: ReactNode;
}) {
  const faqs = items;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.join(" "),
      },
    })),
  };

  return (
    <section className={styles.section} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.inner}>
        <div className={`index ${styles.eyebrow}`}>{eyebrow}</div>
        <h2 className={`${styles.heading} reveal-up`}>{title}</h2>

        <div className={styles.list}>
          {faqs.map((item) => (
            <div key={item.q} className={`${styles.item} reveal-up`}>
              <h3 className={styles.question}>{item.q}</h3>
              <div className={styles.answer}>
                {item.a.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {item.link && (
                  <Link href={item.link.href} className={styles.answerLink}>
                    {item.link.label} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
