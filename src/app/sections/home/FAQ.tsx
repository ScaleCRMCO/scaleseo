import styles from "./FAQ.module.css";

// Each answer is a list of paragraphs; the FAQPage schema joins them.
const faqs: { q: string; a: string[] }[] = [
  {
    q: "What SEO services do you provide for accounting firms?",
    a: [
      "Our SEO services include keyword research, technical SEO, service page optimization, local SEO, content development, internal linking, and ongoing performance monitoring.",
      "We build each campaign around the firm\u2019s services, target clients, competition, and existing website.",
    ],
  },
  {
    q: "How much does SEO for accounting firms cost?",
    a: [
      "Our ongoing SEO services start at $3,000 CAD per month, with the scope tailored to your firm\u2019s needs.",
      "We also offer Google Ads management and website development. Combined services are quoted based on the work required.",
    ],
  },
  {
    q: "Do you work with accounting firms outside Calgary?",
    a: [
      "Yes. Scale SEO is based in Calgary, Alberta, and works with accounting firms across Canada and Australia.",
      "Our services are delivered remotely, with strategies developed around each firm\u2019s location, services, and target market.",
    ],
  },
  {
    q: "Can SEO help us attract more corporate tax and business clients?",
    a: [
      "Yes. SEO can help your firm appear for relevant searches from businesses looking for corporate tax, bookkeeping, advisory, and other accounting services.",
      "We focus on improving visibility for the services that align with your ideal clients rather than simply increasing overall website traffic.",
    ],
  },
  {
    q: "Do you provide Google Ads for accounting firms?",
    a: [
      "Yes. We manage Google Search campaigns targeting people actively looking for accounting and tax services.",
      "Google Ads can complement an ongoing SEO strategy by providing an additional way to reach potential clients.",
    ],
  },
  {
    q: "How long does SEO take to produce results?",
    a: [
      "SEO results depend on your website\u2019s current visibility, competition, location, and the work required.",
      "Some improvements may become visible within a few weeks, while more competitive searches can take several months or longer.",
      "We focus on implementing meaningful improvements early while building toward long-term growth.",
    ],
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: [
      "No. Our ongoing SEO services use flexible month-to-month agreements.",
      "We believe you should continue working with us because you\u2019re satisfied with the service and progress, not because you\u2019re locked into a lengthy contract.",
    ],
  },
  {
    q: "What makes Scale SEO different from other SEO agencies?",
    a: [
      "We focus on accounting firms and the services that matter to their growth.",
      "Rather than using a fixed checklist for every client, we develop strategies around each firm\u2019s business goals, competition, and opportunities.",
      "Every campaign is managed directly by our founder, Corbin Jensen.",
    ],
  },
];

export default function FAQ() {
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
        {/* LEFT — big heading, sketch underneath */}
        <div className={styles.aside}>
          <h2 className={`${styles.heading} reveal-up`}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* RIGHT — accordion; answers stay in the HTML for search engines */}
        <div className={styles.list}>
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className={`${styles.item} reveal-up`}
              name="home-faq"
              open={i === 0}
            >
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.q}</h3>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                {item.a.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
