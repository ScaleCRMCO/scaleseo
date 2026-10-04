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


// Hand-drawn style line icons. Each is plain strokes run through the shared
// "sketch" SVG filter below, which roughens the edges so they read like a
// marker drawing rather than a crisp UI icon.
const icons: Record<string, JSX.Element> = {
  "01": (
    // Gear + wrench: technical fixes
    <g>
      <circle cx="60" cy="60" r="20" />
      <path d="M60 22v12M60 86v12M22 60h12M86 60h12M33 33l8 8M79 79l8 8M33 87l8-8M79 41l8-8" />
      <circle cx="60" cy="60" r="7" />
    </g>
  ),
  "02": (
    // Page with pencil: content
    <g>
      <path d="M30 22h40l16 16v58H30z" />
      <path d="M70 22v16h16" />
      <path d="M40 50h32M40 62h32M40 74h20" />
      <path d="M78 96l22-34 8 5-22 34-10 4z" />
    </g>
  ),
  "03": (
    // Map pin with a little route: local search
    <g>
      <path d="M60 100s-26-28-26-48a26 26 0 0 1 52 0c0 20-26 48-26 48z" />
      <circle cx="60" cy="52" r="9" />
      <path d="M20 104c14-6 24 2 40 0s28-8 42-2" />
    </g>
  ),
  "04": (
    // Browser window with layout blocks: website improvements
    <g>
      <rect x="18" y="26" width="84" height="66" rx="4" />
      <path d="M18 40h84" />
      <circle cx="28" cy="33" r="2" />
      <circle cx="36" cy="33" r="2" />
      <path d="M30 52h28v28H30zM66 52h26M66 64h26M66 76h18" />
    </g>
  ),
  "05": (
    // Rising chart with arrow: measurement
    <g>
      <path d="M20 22v78h84" />
      <path d="M30 86l20-22 16 12 28-36" />
      <path d="M80 40h14v14" />
    </g>
  ),
  cta: (
    // Paper airplane: get started
    <g>
      <path d="M16 58L104 20 82 100 58 72z" />
      <path d="M58 72l46-52" />
      <path d="M58 72l-6 26 14-16" />
      <path d="M14 92l14-8M30 106l8-12" />
    </g>
  ),
};

function Sketch({ id }: { id: string }) {
  return (
    <svg className={styles.icon} viewBox="0 0 120 120" aria-hidden="true">
      <g filter="url(#campaign-sketch)">{icons[id]}</g>
    </svg>
  );
}

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

      {/* Shared roughening filter for the sketch icons */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="campaign-sketch">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </svg>

      <div className={styles.grid}>
        {areas.map((a) => (
          <article key={a.num} className={`${styles.card} reveal-up`}>
            <span className={styles.tick} aria-hidden="true" />
            <span className={styles.cardIndex}>{a.num}</span>
            <h3 className={styles.cardTitle}>{a.title}</h3>
            <Sketch id={a.num} />
            {a.body.map((para) => (
              <p key={para} className={styles.cardDesc}>
                {para}
              </p>
            ))}
          </article>
        ))}

        <Link href="/services/seo" className={`${styles.card} ${styles.ctaCard} reveal-up`}>
          <span className={styles.tick} aria-hidden="true" />
          <span className={styles.cardIndex}>Next step</span>
          <h3 className={styles.cardTitle}>Explore SEO Services</h3>
          <Sketch id="cta" />
          <span className={styles.ctaLink}>
            Explore SEO Services <span className={styles.ctaArrow}>→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
