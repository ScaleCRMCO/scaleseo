import styles from "./FAQ.module.css";

// Each answer is a list of paragraphs; the FAQPage schema joins them.
const faqs: { q: string; a: string[] }[] = [
  {
    q: "What SEO services do you provide?",
    a: [
      "My ongoing SEO campaigns can include technical SEO, on-page optimization, keyword research, content strategy, local SEO, internal linking, structured data, competitor research, and website improvements.",
      "The exact work depends on what your website needs rather than a predetermined monthly checklist.",
      "I also offer standalone SEO audits, web development, Google Ads management, and AI search optimization.",
    ],
  },
  {
    q: "How much do SEO services cost?",
    a: [
      "Ongoing SEO work is structured as a monthly retainer based on your website, competition, objectives, and the amount of work required.",
      "A preliminary audit is included for businesses that move forward with an ongoing campaign. More comprehensive standalone SEO audits are available separately.",
      "There are no long-term lock-in contracts.",
    ],
  },
  {
    q: "What types of businesses do you work with?",
    a: [
      "I primarily work with accounting firms, professional service businesses, consultants, and B2B companies where increasing qualified search traffic can translate into valuable new client relationships.",
      "Scale SEO is based in Calgary, but SEO campaigns can be managed for businesses throughout Canada and internationally.",
    ],
  },
  {
    q: "How long does SEO take?",
    a: [
      "SEO is a long-term acquisition channel rather than an immediate advertising campaign.",
      "Some improvements can appear relatively quickly, while competitive searches often take several months or longer to move meaningfully. Your starting authority, competition, website quality, market, and existing search presence all influence the timeline.",
      "I’ll give you a more realistic assessment after reviewing your website rather than promising a predetermined result.",
    ],
  },
  {
    q: "Do I have to sign a long-term SEO contract?",
    a: [
      "No. Ongoing Scale SEO campaigns are month-to-month.",
      "I want clients to continue because the work is producing value, not because they’re locked into a long-term agreement.",
    ],
  },
  {
    q: "Do you make changes to my website?",
    a: [
      "Yes. Website improvements are an important part of many SEO campaigns.",
      "Depending on your website and platform, I can implement technical fixes, update service pages, improve internal linking, restructure content, add new pages, and make other changes needed to support organic performance.",
    ],
  },
  {
    q: "What’s different about working with Scale SEO?",
    a: [
      "You work directly with the person doing the SEO.",
      "I personally handle the strategy, audits, website work, content direction, optimization, and reporting rather than passing the campaign through account managers or outsourced teams.",
      "Keeping the roster intentionally small gives me the ability to understand each client’s business and work directly on the areas most likely to improve performance.",
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
        {/* LEFT — pinned heading + help card */}
        <div className={styles.aside}>
          <div className={`section-label reveal-up ${styles.label}`}>FAQ</div>
          <h2 className={`${styles.heading} reveal-up`}>
            Common Questions About <em>Working With Scale SEO</em>
          </h2>
          <div className={`${styles.helpCard} reveal-up`}>
            <span className={styles.helpTitle}>Still have a question?</span>
            <p>
              Book a free 30-minute call and ask me directly. No pitch deck, no
              pressure.
            </p>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.helpBtn}
            >
              <span>Book a Strategy Call</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
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
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
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
