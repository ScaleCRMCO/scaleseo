import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import Image from "next/image";
import ServiceTemplate from "../ServiceTemplate";
import tpl from "../template.module.css";
import { Btn } from "../../sections/v3/ui";
import v from "../../sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Services Calgary | Accounting & Business SEO | Scale SEO" },
  description:
    "Calgary SEO services for accounting firms and established businesses. Technical SEO, content strategy, local SEO and ongoing optimization from Scale SEO.",
  alternates: { canonical: "/services/seo" },
};


/* === Content ============================================================ */

const included = [
  { title: "SEO Strategy & Research", icon: "search", body: ["Every campaign starts with understanding your business.", "We research your competitors, identify relevant search opportunities, and develop a strategy around the services and customers you want to reach."] },
  { title: "Technical SEO", icon: "gear", body: ["A strong website needs to be accessible, organized, and technically sound.", "We address crawling, indexing, website architecture, performance, and technical issues that may affect how search engines access and understand your content."] },
  { title: "On-Page SEO", icon: "page", body: ["We improve the pages that matter most to your business.", "This includes page content, headings, metadata, internal linking, and website structure, with a focus on matching relevant searches and helping visitors find the right information."] },
  { title: "Content Strategy & Development", icon: "pen", body: ["Useful content gives people a reason to visit your website and helps demonstrate your expertise.", "We develop and improve service pages, supporting articles, and other relevant resources, working with your team where specialist industry knowledge is required."] },
  { title: "Local & National SEO", icon: "pin", body: ["Whether your business serves one city or operates across several markets, your search strategy needs to reflect where your customers are.", "We work on relevant local and national search opportunities, including location targeting, business information, and Google Business Profile improvements where applicable."] },
  { title: "Digital PR & Authority Development", icon: "megaphone", body: ["A strong search presence extends beyond your own website.", "We work on relevant industry outreach, digital PR opportunities, and initiatives that help your business earn recognition and authoritative references.", "Our focus is on legitimate, relevant exposure rather than fixed backlink quotas."] },
  { title: "AI Search Optimization", icon: "spark", body: ["Search is changing, but clear and trustworthy information remains important.", "We improve content, structured data, and business information to help search engines and AI-powered platforms interpret your business and its services more accurately."] },
  { title: "Website Improvements & Reporting", icon: "chart", body: ["SEO often requires changes to the website itself.", "We handle ongoing page development, technical improvements, and content updates as part of your campaign.", "We also monitor rankings, search visibility, organic traffic, and enquiries where tracking is available, using that information to guide the next priorities."] },
];

const cases = [
  {
    name: "Jensen CPA — Calgary, Canada",
    body: [
      "We redeveloped Jensen CPA’s website and expanded its search presence across corporate tax, bookkeeping, and fractional CFO services.",
      "Through technical improvements, dedicated service pages, and ongoing accounting content, the firm recorded substantial growth in organic search visibility.",
    ],
    note: "Results compare the first and latest 30-day reporting periods, June–November 2026.",
    stats: [
      { from: 0, to: 395, prefix: "+", suffix: "%", label: "Google Search Impressions" },
      { from: 0, to: 205, prefix: "+", suffix: "%", label: "Organic Search Clicks" },
    ],
    href: "/results/jensen-cpa",
    cta: "View the Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants — Brisbane, Australia",
    body: ["Technical SEO, service-page improvements, and accounting-focused content helped Empire Accountants improve its visibility for important business accounting and advisory searches."],
    stats: [{ from: 5, to: 1, prefix: "Page ", suffix: "", label: "Page-One Visibility for Priority Searches" }],
    href: "/results/empire-accountants",
    cta: "View the Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const process = [
  { title: "Understand & Plan", body: ["We review your website, current search performance, competitors, and business priorities.", "From there, we establish the initial strategy and agree on the work that needs attention."] },
  { title: "Implement", body: ["We get to work improving your website, developing content, addressing technical issues, and building relevant authority.", "We manage implementation directly rather than leaving you with a list of recommendations."] },
  { title: "Review & Improve", body: ["We monitor performance, discuss progress during biweekly strategy calls, and adjust priorities based on what we’re learning.", "Some months require more technical work. Others call for content, website development, or authority building. The strategy evolves with your business."] },
];

const pricingPoints = [
  "Month-to-month agreements without long-term lock-ins",
  "Direct communication and biweekly strategy calls",
  "Strategy, implementation, and ongoing performance reporting",
  "Full ownership of your website, content, and accounts",
];

const faqs: FaqItem[] = [
  { q: "What’s included in monthly SEO management?", a: ["Every ongoing engagement includes SEO strategy, technical improvements, on-page optimization, content development, local and national SEO, digital PR and authority development, AI search optimization, website improvements, and performance reporting.", "The amount of work in each area is tailored to your business rather than restricted by fixed deliverable quotas."] },
  { q: "How long does SEO take to work?", a: ["SEO typically takes several months to produce meaningful improvements. Results depend on your existing website, competition, and the work required.", "We establish realistic priorities after reviewing your website and current search performance."] },
  { q: "How much do your SEO services cost?", a: ["Our comprehensive monthly SEO engagements start at $4,500 CAD, plus applicable taxes.", "Final pricing depends on your website, competitive market, and campaign requirements. Smaller, focused engagements may be quoted separately when a full campaign isn’t necessary."] },
  { q: "Do you implement changes directly?", a: ["Yes. We handle technical improvements, content development, on-page SEO, and ongoing website updates as part of our engagements.", "Major website redevelopment projects are quoted separately."] },
  { q: "Do you provide SEO outside Calgary?", a: ["Yes. We’re based in Calgary, Alberta, and work with businesses throughout Canada and Australia."] },
  { q: "Do you guarantee rankings or backlinks?", a: ["No. Search results and third-party editorial decisions are outside any agency’s direct control.", "We focus on sound implementation, relevant authority development, and measurable progress rather than guaranteed ranking positions or backlink quantities."] },
];

/* === Schema — WebPage + Service + BreadcrumbList graph, linked to the
   global #website and #organization nodes in layout.tsx. Includes this
   page's BreadcrumbList, so <Breadcrumbs> is rendered with schema={false}.
   The FAQPage schema comes from <ServicesFaq>. === */
const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo#webpage",
      "url": "https://scaleseo.co/services/seo",
      "name": "SEO Services Calgary | Accounting & Business SEO | Scale SEO",
      "description": "Calgary SEO services for accounting firms and established businesses. Technical SEO, content strategy, local SEO and ongoing optimization from Scale SEO.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo#service",
      "name": "Search Engine Optimization Services",
      "alternateName": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "url": "https://scaleseo.co/services/seo",
      "description": "Comprehensive monthly SEO management combining SEO strategy and research, technical SEO, on-page SEO, content strategy and development, local and national SEO, digital PR and authority development, AI search optimization, website improvements and reporting.",
      "offers": {
        "@type": "Offer",
        "url": "https://scaleseo.co/pricing",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "minPrice": 4500,
          "priceCurrency": "CAD",
          "unitText": "MONTH",
          "description": "Starting monthly fee, excluding applicable taxes."
        },
        "seller": { "@id": "https://scaleseo.co/#organization" }
      },
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        },
        {
          "@type": "Country",
          "name": "Canada"
        },
        {
          "@type": "Country",
          "name": "Australia"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Professional service and B2B businesses"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Campaign Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Strategy & Research" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Strategy & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local & National SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital PR & Authority Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Improvements & Reporting" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://scaleseo.co/services/seo"
        }
      ]
    }
  ]
};

/* === Page — shared service template ==================================== */
export default function SeoServicePage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }} />
      <ServiceTemplate
        crumb="SEO"
        title="SEO Services for Accounting Firms & Professional Services"
        heroLead="Comprehensive SEO management for accounting firms and professional businesses across Canada and Australia."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        statementLabel="Monthly SEO"
        statementHeading
        statement="Comprehensive SEO. Built Around Your Business."
        statementBody={[
          "Good SEO takes more than a strategy document. We bring together technical SEO, content, website development, and authority building to improve how your business is found online.",
          "Every engagement includes our complete SEO service, with the priorities and level of work tailored to your website, competitive market, and business goals.",
        ]}
        statementNote="One dedicated partner. No preset packages or arbitrary deliverable limits."
        statementNoteAfter
        included={{
          title: "What’s Included in Our SEO Campaigns?",
          lead: "We manage the work behind your search performance, from the initial research through to implementation and ongoing improvements.",
          items: included,
          note: "Every service is included. The amount of work in each area is determined by what your business needs.",
          image: { src: "/images/vancouver-aerial-bw.webp", alt: "Black and white aerial view of a downtown skyline" },
        }}
        cases={{
          title: "Selected Client Results",
          lead: "Our work is supported by real client campaigns, with measurable improvements across different industries and markets.",
          allLabel: "View All Client Results",
          items: cases,
          note: "Results vary depending on the client, competition, and campaign requirements.",
        }}
        afterCases={
          <section className={`${v.navy} ${v.sec} ${tpl.whoSec}`} data-nav="dark">
            <div className={`${v.wrap} ${tpl.whoGrid}`}>
              <span className={tpl.whoLabel}>Who we work with</span>
              <div>
                <h2 className={tpl.whoH2}>Specialized in Accounting. Experienced Beyond It.</h2>
                <p className={tpl.whoLead}>Accounting and professional services are central to our work.</p>
                <div className={tpl.whoCols}>
                  <p className={v.p}>We&rsquo;ve developed websites and search strategies for accounting firms in Canada and Australia, alongside established businesses in consulting, construction, and other specialist industries.</p>
                  <p className={v.p}>Our experience with accounting practices has shaped our understanding of how businesses use search to find and evaluate professional service providers.</p>
                </div>
                <div className={tpl.whoBtns}>
                  <Btn href="/industries/accounting-firms" tone="light">Explore SEO for Accounting Firms</Btn>
                  <Btn href="/industries" tone="line">Explore All Industries</Btn>
                </div>
              </div>
            </div>
          </section>
        }
        process={{ title: "How We Work", lead: "Every campaign starts with a clear strategy. From there, we carry out the work, measure progress, and adjust as your business develops.", items: process }}
        feature2={
          <section className={`${v.grey} ${v.sec}`}>
            <div className={`${v.wrap} ${tpl.perGrid}`}>
              <div className={tpl.perImg}>
                <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder of Scale SEO" width={985} height={900} sizes="(max-width: 900px) 100vw, 480px" />
              </div>
              <div>
                <h2 className={tpl.perH2}>A More Involved Way to Work.</h2>
                <div className={tpl.perCols}>
                  <div>
                    <p className={tpl.perLead}>When you work with Scale SEO, you work directly with the person responsible for your campaign.</p>
                    <p className={v.p}>Our founder, <Link href="/corbin-jensen" className={v.inlineLink}>Corbin Jensen</Link>, remains directly involved in strategy, implementation, and performance reviews.</p>
                  </div>
                  <div>
                    <p className={v.p}>We keep our client roster selective so we can give each engagement the attention it deserves.</p>
                    <p className={v.p}>That means regular conversations, direct answers to your questions, and a clear understanding of what we&rsquo;re working toward.</p>
                  </div>
                </div>
                <p className={tpl.perEnd}>One point of contact. Clear priorities. Work that gets done.</p>
              </div>
            </div>
          </section>
        }
        fit={{
          title: "Is Ongoing SEO Right for Your Business?",
          label: "Our monthly engagements are designed for established businesses looking to build a stronger, long-term presence in organic search.",
          body: (
            <>
              <p>We work best with businesses that have clear services, defined growth objectives, and a willingness to invest in their website.</p>
              <p>If you only need a one-time assessment, we also provide <Link href="/services/seo-audits">standalone SEO audits</Link>.</p>
            </>
          ),
        }}
        pricing={{
          title: "Monthly SEO Pricing",
          price: "$4,500 CAD",
          unit: "per month",
          body: ["One comprehensive SEO engagement, individually scoped around your website, market, and business priorities.", "Every client receives our full SEO service, with the level of work in each area determined by the agreed scope."],
          points: pricingPoints,
          note: "Plus applicable taxes. Major website rebuilds and separately approved third-party expenses are quoted independently.",
          cta: "View Our Pricing",
        }}
        faqs={faqs}
        ctaMark
        cta={{
          title: "Let’s Talk About Your Business.",
          lead: (
            <>
              <p>Tell us about your website, the services you&rsquo;re looking to grow, and where you want your business to go.</p>
              <p>We&rsquo;ll discuss your current search presence, the opportunities worth pursuing, and whether Scale SEO is the right fit.</p>
            </>
          ),
        }}
      />
    </main>
  );
}
