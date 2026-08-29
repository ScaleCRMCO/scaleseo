import type { Metadata } from "next";
import SellingHero from "../../components/SellingHero";
import RevealOnScroll from "../../components/RevealOnScroll";
import servicePageStyles from "../../components/ServicePage.module.css";
import processStyles from "../../sections/home/Process.module.css";
import faqStyles from "../../sections/home/FAQ.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Google Ads Management Services in Calgary & Canada | Scale SEO",
  description:
    "Google Ads management for accounting firms and professional service businesses in Calgary and across Canada. Campaign setup, keyword research, ad copy, landing pages, and bid management — run directly by one specialist.",
  alternates: { canonical: "/services/google-ads" },
};

const included = [
  {
    num: "01",
    name: "Campaign Setup & Account Architecture",
    desc: "Clean account structure built around your actual service lines, not a generic template — so budget goes to the campaigns that matter.",
  },
  {
    num: "02",
    name: "Keyword & Audience Research",
    desc: "Intent-based keyword targeting and audience layering focused on high-margin corporate and professional-service buyers, not broad consumer traffic.",
  },
  {
    num: "03",
    name: "Ad Copywriting & Creative",
    desc: "Ad copy written to qualify serious buyers before the click, so you're not paying for tire-kickers.",
  },
  {
    num: "04",
    name: "Landing Page Optimization",
    desc: "Dedicated, conversion-focused landing pages for each campaign — not a generic homepage link that tanks your Quality Score.",
  },
  {
    num: "05",
    name: "Bid & Budget Management",
    desc: "Ongoing bid adjustments and budget reallocation toward what's actually converting, reviewed weekly, not left on autopilot.",
  },
  {
    num: "06",
    name: "Reporting Tied to Revenue",
    desc: "Monthly, plain-English reporting on cost-per-lead and pipeline value — not just clicks and impressions.",
  },
];

const process = [
  {
    num: "01",
    name: "Audit",
    body: "A full teardown of your current account — or a from-scratch plan if you're starting new. Wasted spend, missed keywords, weak landing pages, all documented.",
    time: "Week 1",
  },
  {
    num: "02",
    name: "Strategy",
    body: "Campaign structure, keyword targeting, and budget allocation mapped out around your actual service lines and margins.",
    time: "Week 1–2",
  },
  {
    num: "03",
    name: "Launch",
    body: "Campaigns built, tracking installed, landing pages live. Nothing goes live until conversion tracking is verified working.",
    time: "Week 2–3",
  },
  {
    num: "04",
    name: "Optimize",
    body: "Weekly bid and budget adjustments, monthly reporting, and continuous testing on ad copy and landing pages.",
    time: "Ongoing",
  },
];

const faqs = [
  {
    q: "How much budget do I need to run Google Ads?",
    a: "It depends on your market and competition, but for professional service firms I typically recommend enough budget to gather meaningful data within the first 4–6 weeks. I'll give you a specific number for your market during the audit, not a generic minimum.",
  },
  {
    q: "How long until I see results?",
    a: "Google Ads can generate leads within days of launch, unlike SEO which compounds over months. Most accounts hit a stable, optimized cost-per-lead within 60–90 days as we gather enough data to refine targeting and bids.",
  },
  {
    q: "What's the difference between SEO and Google Ads — do I need both?",
    a: "Google Ads gets you in front of buyers immediately, for as long as you keep paying. SEO builds organic authority that keeps generating leads without ongoing ad spend, but takes months to compound. Most of my clients run both — Ads for immediate pipeline, SEO for long-term, lower-cost-per-lead growth.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. Same as my SEO work — no lock-in contracts. If the campaigns aren't performing, you're not locked into paying for months of underperformance.",
  },
  {
    q: "Will I get access to my own ad account?",
    a: "Yes — the account is yours, hosted under your own Google Ads login. I manage it directly, but you always have full ownership and visibility.",
  },
];

export default function GoogleAdsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Management Services",
    description:
      "Google Ads (PPC) management for accounting firms and professional service businesses in Calgary and across Canada.",
    serviceType: "Google Ads Management",
    url: "https://scaleseo.co/services/google-ads",
    provider: {
      "@type": "ProfessionalService",
      name: "Scale SEO",
      url: "https://scaleseo.co",
      founder: {
        "@type": "Person",
        name: "Corbin Jensen",
        url: "https://scaleseo.co/corbin-jensen",
      },
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      { "@type": "Country", name: "Canada" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SellingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Google Ads" },
        ]}
        eyebrow="Services / Google Ads"
        title={
          <>
            Google Ads Management Services{" "}
            <span className={servicePageStyles.accent}>in Calgary &amp; Canada.</span>
          </>
        }
        sub="Profitable PPC campaigns for accounting firms and professional service businesses — built, launched, and managed directly by me. Request a free PPC audit and I'll show you exactly where your ad spend is being wasted."
        checkpoints={[
          "Independent specialist — no outsourcing",
          "Work directly with me, not an account manager",
          "Focused on Canadian professional service firms, including accounting practices, legal firms, and corporate advisors",
          "No lock-in contracts",
        ]}
      />

      {/* === WHY US === */}
      <section className={servicePageStyles.problem}>
        <div className={servicePageStyles.problemInner}>
          <div className="section-label reveal-up">Why Us</div>
          <h2 className={`${servicePageStyles.problemHeadline} reveal-up`}>
            Paid search that compounds{" "}
            <span className={servicePageStyles.accent}>with organic — not against it.</span>
          </h2>
          <div className={`${servicePageStyles.problemBody} reveal-up`}>
            <p>
              Most agencies run your Google Ads and your SEO in separate
              silos, sometimes with different people who never talk to each
              other. I run both, which means your paid campaigns and your
              organic strategy pull from the same keyword research, the
              same landing pages, and the same understanding of what your
              buyers actually search for. Every dollar of ad spend teaches
              me something that makes your organic rankings stronger, and
              vice versa.
            </p>
            <p>
              For accounting firms, legal practices, and corporate
              consultancies across Calgary and Canada, that means faster
              time-to-lead while your organic authority builds in the
              background — instead of paying for clicks forever because
              nobody ever fixed the underlying SEO.
            </p>
          </div>
        </div>
      </section>

      {/* === SERVICES LIST === */}
      <section className={servicePageStyles.list}>
        <div className="section-label reveal-up">What&rsquo;s Included</div>
        <div className={servicePageStyles.grid}>
          {included.map((item) => (
            <div key={item.num} className={`${servicePageStyles.item} reveal-up`}>
              <div className={servicePageStyles.itemNum}>{item.num}</div>
              <h3 className={servicePageStyles.itemName}>{item.name}</h3>
              <p className={servicePageStyles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === PROCESS TIMELINE === */}
      <section className={`${processStyles.section} ${styles.processSection}`}>
        <div className="section-label reveal-up">How It Works</div>
        <h2 className={`${processStyles.heading} reveal-up`}>
          Audit. Strategy. <em>Launch. Optimize.</em>
        </h2>
        <div className={`${processStyles.grid} reveal-up`}>
          {process.map((step) => (
            <div key={step.num} className={processStyles.step}>
              <div>
                <div className={processStyles.num}>{step.num}</div>
                <h3 className={processStyles.name}>{step.name}</h3>
                <p className={processStyles.body}>{step.body}</p>
              </div>
              <div className={processStyles.time}>{step.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section className={`${faqStyles.section} ${styles.faqSection}`}>
        <div className="section-label reveal-up">FAQ</div>
        <h2 className={`${faqStyles.heading} reveal-up`}>
          Common questions about <em>Google Ads.</em>
        </h2>
        <div className={faqStyles.list}>
          {faqs.map((item) => (
            <details key={item.q} className={`${faqStyles.item} reveal-up`}>
              <summary className={faqStyles.question}>
                <span>{item.q}</span>
                <span className={faqStyles.toggle} aria-hidden="true">+</span>
              </summary>
              <p className={faqStyles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className={servicePageStyles.cta}>
        <div className={servicePageStyles.ctaEyebrow}>
          <span className={servicePageStyles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={servicePageStyles.ctaHeadline}>
          Ready for a free PPC audit?
        </h2>
        <p className={servicePageStyles.ctaSub}>
          Tell me about your business and current ad spend — I&rsquo;ll
          tell you honestly what&rsquo;s working, what&rsquo;s wasted, and
          whether I&rsquo;m the right fit.
        </p>
        <div className={servicePageStyles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={servicePageStyles.ctaButton}
          >
            <span>Book a call</span>
            <span className={servicePageStyles.arrow}>→</span>
          </a>
          <a href="/contact" className={servicePageStyles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </a>
        </div>
        <p className={servicePageStyles.relatedNote}>
          Want the organic side too? <a href="/services/seo">See how SEO works →</a>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
