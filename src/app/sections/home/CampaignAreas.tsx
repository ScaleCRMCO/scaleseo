import Link from "next/link";
import styles from "./CampaignAreas.module.css";

const areas = [
  {
    num: "01",
    title: "Technical SEO",
    body: [
      "I identify and fix technical issues that can make it harder for search engines to crawl, index, understand, and rank your website.",
      "This can include site architecture, indexation, redirects, canonicalization, page speed, structured data, internal linking, metadata, and other technical issues discovered during the campaign.",
    ],
  },
  {
    num: "02",
    title: "Content & On-Page SEO",
    body: [
      "Existing pages are improved around the searches your potential customers actually make, while new content is developed where genuine gaps exist.",
      "This includes keyword research, service-page optimization, content planning, headings, internal links, search intent, and creating useful supporting content around your core services.",
    ],
  },
  {
    num: "03",
    title: "Local SEO",
    body: [
      "For businesses targeting customers in specific cities or service areas, I work on the signals that influence local organic and Google Maps visibility.",
      "Depending on the business, this can include Google Business Profile optimization, local landing pages, citations, reviews, local relevance, and competitor analysis.",
    ],
  },
  {
    num: "04",
    title: "Website Improvements",
    body: [
      "Sometimes the thing holding SEO back is the website itself.",
      "Because I work directly with websites as part of my SEO campaigns, I can improve page structure, navigation, calls to action, content layouts, site architecture, and other elements that affect both organic visibility and conversions.",
    ],
  },
  {
    num: "05",
    title: "Measurement & Ongoing Strategy",
    body: [
      "SEO priorities change as rankings improve, competitors move, and new opportunities appear.",
      "I track organic performance using data from tools including Google Search Console and analytics platforms, then use that data to determine where the campaign should focus next.",
    ],
  },
];

export default function CampaignAreas() {
  return (
    <section className={styles.section} id="campaign">
      <div className={styles.intro}>
        <h2 className={`${styles.introTitle} reveal-up`}>
          What Goes Into a Scale SEO Campaign?
        </h2>
        <div className={`${styles.introBody} reveal-up`}>
          <p>
            SEO isn&rsquo;t one task. Sustainable organic growth usually
            requires improvements across your website, content, technical
            foundation, and search presence.
          </p>
          <p>
            Every campaign is different, but ongoing SEO typically includes the
            following areas.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {areas.map((a) => (
          <div key={a.num} className={`${styles.card} reveal-up`}>
            <div className={styles.cardHead}>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <span className={`index ${styles.cardIndex}`}>{a.num}</span>
            </div>
            {a.body.map((para) => (
              <p key={para} className={styles.cardDesc}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <Link href="/services/seo" className={styles.cta}>
          <span>Explore SEO Services</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
