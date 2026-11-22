import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import { type FaqItem } from "../services/ServicesFaq";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import { Faq } from "../sections/v3/Sections";
import styles from "./page.module.css";

const DESC = "Founder-led SEO from $4,500 CAD/month and website development from $6,000 CAD. Individually scoped engagements for accounting firms and professional services.";

export const metadata: Metadata = {
  title: { absolute: "SEO & Website Development Pricing | Scale SEO" },
  description:
    DESC,
  alternates: { canonical: "/pricing" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const plans = [
  {
    id: "monthly-seo",
    name: "Monthly SEO Management",
    price: "$4,500",
    unit: "CAD / month",
    tagline: "",
    body: [
      "We work closely with a select number of businesses, managing everything from strategy and technical SEO to content, website improvements, and authority development.",
      "Every engagement includes our complete SEO service. The priorities and level of work in each area are tailored to your website, competitive market, and business goals.",
    ],
    listLabel: "What’s included in every engagement:",
    includes: [
      "SEO strategy, keyword research, and competitor analysis",
      "Technical SEO and ongoing website improvements",
      "Service-page development and content strategy",
      "Local and national search optimization",
      "Digital PR and relevant authority development",
      "AI search optimization",
      "Performance monitoring and reporting",
      "Biweekly strategy calls and direct communication",
    ],
    notes: ["Our ongoing SEO engagements operate month-to-month, without long-term lock-in contracts."],
    href: "/services/seo",
    cta: "Explore Our SEO Services",
    featured: true,
  },
  {
    id: "website",
    name: "Website Design & Development",
    price: "$6,000",
    unit: "CAD / project",
    tagline: "Websites built around the businesses behind them.",
    body: [
      "We design and develop websites for accounting firms and established professional service businesses, with a focus on clear content, practical design, and strong technical foundations.",
      "Projects range from improving existing websites to complete redevelopment, depending on what’s required.",
      "Every website is individually scoped, with design, functionality, content requirements, and technical implementation agreed upon before work begins.",
    ],
    listLabel: "",
    includes: [] as string[],
    notes: ["Ongoing website improvements may be included in an SEO engagement. Major redevelopment projects are quoted separately."],
    href: "/services/web-development",
    cta: "Explore Website Development",
    featured: false,
  },
];

const factors = [
  { title: "Your Market", body: "The services you’re targeting, the clients you want to attract, and the competition you’re facing." },
  { title: "Your Website", body: "Its current performance, technical condition, content, and the improvements needed to support your goals." },
  { title: "The Work Required", body: "The level of ongoing research, implementation, content development, and authority building needed to make meaningful progress." },
];

const faqs: FaqItem[] = [
  { q: "How much does monthly SEO cost?", a: [
    "Our comprehensive monthly SEO engagements generally start at $4,500 CAD, plus applicable taxes.",
    "Final pricing depends on your website, competition, and the work required. Smaller, focused engagements may be quoted below this amount when a full campaign isn’t necessary.",
  ] },
  { q: "What is included in a monthly SEO engagement?", a: [
    "Every campaign is individually scoped. Depending on your priorities, work may include technical SEO, content development, website improvements, local and national search, and relevant authority-building initiatives.",
    "We also provide ongoing reporting, direct communication, and biweekly strategy discussions.",
  ] },
  { q: "Are website development and Google Ads included?", a: [
    "Ongoing website improvements can form part of your SEO engagement.",
    "Complete website builds, major redevelopment projects, and Google Ads management are scoped separately where required. Advertising spend and approved external costs are not included unless expressly agreed.",
  ] },
  { q: "Do you require a long-term contract?", a: [
    "No. Our ongoing SEO engagements operate month-to-month.",
    "We establish the initial strategy and priorities together, with no requirement to commit to a lengthy fixed-term agreement.",
  ] },
  { q: "Do you work with businesses outside Calgary?", a: [
    "Yes. We’re based in Calgary, Alberta, and work with businesses across Canada and Australia.",
    "Australian engagements are individually quoted in AUD.",
  ] },
];


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/pricing#webpage",
      url: "https://scaleseo.co/pricing",
      name: "SEO & Website Development Pricing | Scale SEO",
      description: DESC,
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": "https://scaleseo.co/#organization" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": "https://scaleseo.co/pricing#breadcrumb" },
      mainEntity: { "@id": "https://scaleseo.co/pricing#offers" },
      inLanguage: "en-CA",
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://scaleseo.co/pricing#offers",
      name: "Scale SEO Services & Starting Prices",
      description: "SEO and website development for accounting firms and professional service businesses.",
      itemListElement: [
      {
        "@type": "Offer",
        name: "Monthly SEO Management",
        url: "https://scaleseo.co/services/seo",
        description: "Ongoing, individually scoped SEO management starting at $4,500 CAD per month, plus applicable taxes.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 4500, priceCurrency: "CAD", description: "Starting monthly fee, excluding applicable taxes." },
        seller: { "@id": "https://scaleseo.co/#organization" },
        itemOffered: { "@type": "Service", name: "Monthly SEO Management", url: "https://scaleseo.co/services/seo", provider: { "@id": "https://scaleseo.co/#organization" } },
      },
      {
        "@type": "Offer",
        name: "Website Design & Development",
        url: "https://scaleseo.co/services/web-development",
        description: "Individually scoped website design and development starting at $6,000 CAD per project, plus applicable taxes.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 6000, priceCurrency: "CAD", description: "Starting project fee, excluding applicable taxes." },
        seller: { "@id": "https://scaleseo.co/#organization" },
        itemOffered: { "@type": "Service", name: "Website Design & Development", url: "https://scaleseo.co/services/web-development", provider: { "@id": "https://scaleseo.co/#organization" } },
      },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/pricing#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://scaleseo.co/pricing" },
      ],
    },
  ],
};

const Corner = () => (
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);

const P = ({ t }: { t: string }) => <p className={v.p}>{t}</p>;

// Mamba-style centred hero (gradient glow, badges, client logo marquee),
// then the plan rows, factors, founder statement, FAQ and CTA
export default function PricingPage() {
  const logos = [
    { src: "/images/client-logo-jensen-cpa.png", alt: "Jensen CPA", h: 24 },
    { src: "/images/client-logo-kinsmen-consulting.png", alt: "Kinsmen Consulting Limited", h: 28 },
    { src: "/images/client-logo-empire-accountants.png", alt: "Empire Accountants", h: 40 },
    { src: "/images/client-logo-msv-plumbing.png", alt: "MSV Plumbing Services", h: 28 },
  ];
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={styles.hero}>
        <div className={`${v.wrap} ${styles.heroInner}`}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} schema={false} />
          </div>
          <h1 className={styles.h1}>SEO &amp; Website Development Pricing</h1>
          <p className={styles.heroP}>Scale SEO provides founder-led SEO and website development for accounting firms and professional service businesses across Canada and Australia.</p>
          <p className={styles.heroP}>Every engagement is individually scoped around your website, competitive market, and business priorities. We agree on the work and investment before getting started.</p>
          <div className={styles.heroBtn}><Btn href="/services" tone="blue">Explore Our Services</Btn></div>
          <div className={styles.badges}>
            <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO — Semrush Certified Agency Partner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner badge" width={64} height={64} />
            </a>
            <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO reviews on Clutch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clutch-reviewed-dark.svg" alt="Reviewed on Clutch" width={168} height={32} />
            </a>
          </div>
          <p className={styles.trusted}>Trusted by local &amp; national brands</p>
        </div>
        <div className={styles.marquee} aria-label="Selected clients">
          <div className={styles.track}>
            {[0, 1, 2, 3].map((n) => logos.map((l) => (
              <div key={`${n}${l.src}`} className={styles.logoCell} aria-hidden={n > 0 || undefined}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={n ? "" : l.alt} style={{ height: l.h }} />
              </div>
            )))}
          </div>
        </div>
      </header>
      <div className={v.white}>
      <div className={styles.heroImgWrap}>
        <div className={`${v.wrap}`}>
          <div className={styles.photo}>
            <Image src="/images/calgary-skyline-bw.webp" alt="Black and white panorama of the downtown Calgary skyline above the Bow River valley, home of Scale SEO" fill sizes="(max-width: 1360px) 100vw, 1280px" />
          </div>
        </div>
      </div>
      </div>

      <section className={`${v.white} ${styles.plansSec}`} id="plans">
        <div className={v.wrap}>
          <p className={styles.plansNote}>All starting prices are in Canadian dollars (CAD), excluding applicable taxes. Australian engagements are quoted separately in AUD.</p>
          {plans.map((p, i) => (
            <article key={p.id} id={p.id} className={`${styles.row} ${i % 2 ? styles.flip : ""}`}>
              <div className={styles.text}>
                <h2 className={styles.planName}>{p.name}</h2>
                {p.tagline && <p className={styles.summary}>{p.tagline}</p>}
                <div className={styles.summaryWrap}>{p.body.map((t) => <P key={t} t={t} />)}</div>
                {p.includes.length > 0 && (
                  <div>
                    <p className={styles.listLabel}>{p.listLabel}</p>
                    <ul className={styles.tags}>{p.includes.map((x) => <li key={x}>/ {x}</li>)}</ul>
                  </div>
                )}
                <div className={styles.summaryWrap}>{p.notes.map((t) => <p key={t} className={v.small}>{t}</p>)}</div>
                <Link href={p.href} className={`${v.btn} ${v.btn_navy}`}><span>{p.cta}</span><Corner /></Link>
              </div>
              <div className={`${styles.pricePanel} ${p.featured ? styles.panelBlue : ""}`}>
                <span className={styles.from}>Starting at</span>
                <span className={styles.price}>{p.price}</span>
                <span className={styles.unit}>{p.unit}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${v.grey} ${v.sec}`}>
        <div className={`${v.wrap} ${styles.labelled}`}>
          <div>
            <h2 className={v.h2}>What Determines Your Investment?</h2>
            <p className={`${v.p} ${styles.asideP}`}>No two businesses start from the same position. We consider three things when preparing a proposal.</p>
          </div>
          <div>
            <ol className={styles.factors}>
              {factors.map((f, i) => (
                <li key={f.title}>
                  <span className={styles.num}>/ 0{i + 1}</span>
                  <h3 className={v.h3}>{f.title}</h3>
                  <p className={v.p}>{f.body}</p>
                </li>
              ))}
            </ol>
            <div className={styles.factorsEnd}>
              <p className={v.p}>Some businesses require a comprehensive campaign. Others need a smaller, more focused engagement.</p>
              <p className={v.p}>We&rsquo;ll recommend the scope that makes sense rather than selling work you don&rsquo;t need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${v.white} ${v.sec}`}>
        <div className={`${v.wrap} ${styles.personalGrid}`}>
          <div className={styles.portrait}>
            <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder of Scale SEO" width={985} height={900} sizes="(max-width: 900px) 100vw, 480px" />
          </div>
          <div>
            <h2 className={styles.personalH2}>A More Personal Way to Work.</h2>
            <div className={styles.personalCols}>
              <div className={styles.personal}>
                <p className={styles.personalLead}>When you work with Scale SEO, you&rsquo;re not passed between account managers.</p>
                <p className={v.p}>You&rsquo;ll work directly with founder <Link href="/corbin-jensen" className={v.inlineLink}>Corbin Jensen</Link>, who remains involved in your strategy, implementation, and ongoing performance reviews.</p>
              </div>
              <div className={styles.personal}>
                <p className={v.p}>We keep our client roster selective so we can give each engagement the attention it deserves.</p>
                <p className={v.p}>That means regular strategy conversations, direct answers to your questions, and someone who understands your business beyond its website.</p>
              </div>
            </div>
            <p className={styles.personalEnd}>One point of contact. Clear priorities. Work that gets done.</p>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} />

      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={`${v.ctaBox} ${styles.cta}`} data-nav="dark">
            <div>
              <h2 className={v.h2}>Let&rsquo;s Talk About Your Business.</h2>
              <p className={v.p}>Tell us where your business stands today, what you&rsquo;re looking to achieve, and where you feel your website could be doing more.</p>
              <p className={v.p}>We&rsquo;ll discuss your goals, review the work involved, and recommend an engagement that fits your business.</p>
              <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
