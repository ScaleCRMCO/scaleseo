import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import v from "../../sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Services Calgary | Accounting & Business SEO | Scale SEO" },
  description:
    "Calgary SEO services for accounting firms and established businesses. Technical SEO, content strategy, local SEO and ongoing optimization from Scale SEO.",
  alternates: { canonical: "/services/seo" },
};


/* === Content ============================================================ */

const included = [
  { title: "SEO Strategy & Research", icon: "search", body: "We research your market, competitors, and the searches most relevant to your business. Every campaign starts with clear priorities and an understanding of what your customers are looking for." },
  { title: "Technical SEO", icon: "gear", body: "We address crawling, indexing, site structure, website performance, and other technical issues that affect how search engines access and understand your website." },
  { title: "On-Page SEO", icon: "page", body: "We improve page content, titles, headings, internal links, and website architecture to better match relevant searches and help visitors find the right services." },
  { title: "Content Strategy", icon: "pen", body: "We develop service pages and supporting articles that answer real customer questions, demonstrate expertise, and strengthen your website\u2019s coverage of important topics." },
  { title: "Local & National SEO", icon: "pin", body: "Whether you\u2019re targeting customers in Calgary or businesses across Canada, we build strategies around your service areas, competition, and search demand." },
  { title: "Website Improvements & Reporting", icon: "chart", body: "We make ongoing website improvements and track search visibility, organic traffic, and enquiries to understand what\u2019s working and where to focus next." },
];

const cases = [
  {
    name: "Jensen CPA \u2014 Calgary, Canada",
    body: [
      "Website redevelopment, technical SEO, and accounting service-page improvements helped Jensen CPA increase its organic search visibility during the first four months of the campaign.",
    ],
    stats: [
      { from: 0, to: 92, prefix: "+", suffix: "%", label: "Organic Clicks" },
      { from: 0, to: 125, prefix: "+", suffix: "%", label: "Search Impressions" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants \u2014 Brisbane, Australia",
    body: [
      "A combination of technical improvements, accounting-focused content, and service-page optimization helped Empire Accountants move priority searches from page five to page one.",
    ],
    stats: [
      { from: 5, to: 1, prefix: "Page ", suffix: "", label: "Visibility for Priority Searches" },
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const markets: { title: string; icon: string; body: string; href?: string; cta?: string }[] = [
  {
    title: "Accounting & Financial Services",
    icon: "building",
    body: "SEO for CPA firms, tax accountants, bookkeeping practices, and financial advisory businesses looking to attract more qualified clients.",
    href: "/industries/accounting-firms",
    cta: "Explore SEO for Accounting Firms",
  },
  {
    title: "Professional Services & B2B",
    icon: "briefcase",
    body: "Search strategies for consultants and specialist businesses whose clients research and compare providers before making an enquiry.",
  },
  {
    title: "Construction & Contracting",
    icon: "hammer",
    body: "Local and service-based SEO for contractors looking to improve visibility for relevant residential and commercial projects.",
    href: "/results",
    cta: "View Our Client Work",
  },
];

const process = [
  { title: "Research", body: "We review your website, search performance, competitors, and business priorities to identify where the best opportunities exist." },
  { title: "Implement", body: "We improve technical foundations, service pages, content, and internal linking based on the agreed strategy." },
  { title: "Refine", body: "We monitor performance, review changes in search demand, and adjust priorities as your website develops." },
];

const pricingPoints = [
  "Flexible month-to-month engagements",
  "No long-term contract lock-ins",
  "Clear priorities and performance reporting",
  "Full ownership of your website, content, and data",
];

const faqs: FaqItem[] = [
  { q: "How long does SEO take to work?", a: ["SEO typically takes several months to produce meaningful improvements. Timelines depend on your website\u2019s existing visibility, competition, and the work required."] },
  { q: "How much do SEO services cost?", a: ["Ongoing SEO starts at $3,000 CAD per month, plus applicable GST. Final pricing reflects your website, target markets, and campaign requirements."] },
  { q: "Do you provide SEO outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and works with businesses across Canada and Australia, with particular experience in accounting and professional services."] },
  { q: "Can you make SEO changes directly to our website?", a: ["Yes. Our services include hands-on implementation, from technical fixes and page optimization to content and website improvements. The exact scope depends on your website platform and engagement."] },
  { q: "Do you guarantee Google rankings?", a: ["No. Search rankings are influenced by competition, Google\u2019s algorithms, and other factors outside any agency\u2019s control. We focus on measurable improvements, relevant visibility, and sustainable growth."] },
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
      "description": "Ongoing SEO services combining SEO strategy, keyword research, technical SEO, on-page optimization, content strategy, local SEO, internal linking, website improvements and performance reporting.",
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
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Strategy and Keyword Research"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Content Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal Linking and Site Architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website and Conversion Improvements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Tracking and Reporting"
            }
          }
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
        heroLead="Scale SEO provides search engine optimization for accounting firms, professional services, and established businesses across Canada and Australia."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        statementLabel="Monthly SEO"
        statement="We combine technical SEO, content strategy, and website improvements to help businesses reach the people searching for their services."
        statementNote="Better search visibility. More qualified enquiries."
        included={{
          title: "What Goes Into Our SEO Campaigns?",
          lead: "Good SEO involves more than keywords and rankings. We identify what\u2019s holding your website back, find opportunities in your market, and make the improvements needed to compete.",
          items: included,
          image: { src: "/images/vancouver-aerial-bw.webp", alt: "Black and white aerial view of downtown Vancouver" },
        }}
        cases={{
          title: "SEO Results From Real Businesses",
          lead: "Our work is measured through actual client campaigns, not hypothetical projections.",
          items: cases.map((c) => ({ name: c.name, body: c.body[0], stats: c.stats, href: c.href, cta: c.cta, img: c.img })),
          note: "Results vary by client, competition, and campaign scope.",
        }}
        markets={{
          title: "Specialized in Accounting. Experienced Across Industries.",
          items: markets,
          outro: "Accounting and professional services are central to our work, but our experience extends across consulting, construction, and other established service businesses.",
        }}
        process={{ title: "Our SEO Process", lead: "SEO is ongoing work. Each stage builds on the improvements made before it.", items: process }}
        fit={{
          title: "Is Ongoing SEO Right for Your Business?",
          label: "Our campaigns are suited to established businesses looking to build a long-term source of qualified enquiries through Google.",
          body: (
            <>
              <p>We typically work with businesses that have clear services, defined growth objectives, and a willingness to invest in ongoing website improvements.</p>
              <p>
                For businesses needing a one-time assessment, we also provide <Link href="/services/seo-audits">SEO audits</Link>. Those looking for paid search support can explore our <Link href="/services/google-ads-management">Google Ads management</Link>.
              </p>
            </>
          ),
        }}
        pricing={{
          title: "Monthly SEO Pricing",
          price: "$3,000 CAD",
          unit: "per month + applicable GST",
          body: ["Our monthly SEO campaigns are scoped around your website, competitive market, and business objectives.", "Rather than fixed packages, we prioritize the work your website needs."],
          points: pricingPoints,
        }}
        faqs={faqs}
        cta={{ title: "Let\u2019s Improve Your Search Visibility", lead: "Tell us about your business, the services you want to grow, and what you\u2019re looking to achieve through Google. We\u2019ll review your requirements and discuss where SEO could make the greatest difference." }}
      />
    </main>
  );
}
