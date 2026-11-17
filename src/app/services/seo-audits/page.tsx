import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import v from "../../sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Audit Services Calgary | Scale SEO" },
  description:
    "Independent SEO audits for Calgary and Canadian businesses. Get a clear review of your website, technical issues, search visibility and opportunities.",
  alternates: { canonical: "/services/seo-audits" },
};

const included: { title: string; icon: string; body: string }[] = [
  {
    title: "Technical SEO & Indexing",
    icon: "gear",
    body: "We review how Google can discover and access your website, including indexing issues, redirects, canonical URLs, broken links, and other technical problems affecting important pages.",
  },
  {
    title: "Website Content & Structure",
    icon: "page",
    body: "We assess your main pages, headings, metadata, internal links, and website organization to identify weaknesses, overlapping content, and opportunities for improvement.",
  },
  {
    title: "Keywords & Search Performance",
    icon: "search",
    body: "Where search data is available, we review the queries bringing visitors to your website, the pages gaining visibility, and potential opportunities you’re currently missing.",
  },
  {
    title: "Competitors & Local SEO",
    icon: "pin",
    body: "For audits requiring a broader strategy review, we examine relevant search competitors and local visibility to identify where your website could better compete for valuable searches.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does an SEO audit cost?",
    a: [
      "Standalone audits are quoted individually. The cost depends on your website’s size, technical complexity, and whether you need a focused technical review or a broader assessment of keywords, competitors, and search opportunities.",
      "We’ll confirm the scope and price before beginning.",
    ],
  },
  {
    q: "Do you fix the issues found during the audit?",
    a: [
      "Implementation isn’t automatically included in a standalone audit.",
      "You’ll receive recommendations that you can use independently. If you need help making the changes, we can discuss a separate development project or ongoing SEO engagement.",
    ],
  },
  {
    q: "Do I need to sign up for monthly SEO?",
    a: ["No. A standalone audit is a one-time consulting service with no ongoing commitment."],
  },
  {
    q: "What access do you need?",
    a: [
      "We can review many aspects of a website without administrative access. Google Search Console access is useful for understanding existing search performance and indexing issues, but we’ll confirm what’s needed before the audit begins.",
    ],
  },
];


const auditsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo-audits#webpage",
      "url": "https://scaleseo.co/services/seo-audits",
      "name": "SEO Audit Services Calgary | Scale SEO",
      "description": "Independent SEO audits for Calgary and Canadian businesses. Get a clear review of your website, technical issues, search visibility and opportunities.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo-audits#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo-audits#service",
      "name": "SEO Audit Services",
      "alternateName": [
        "SEO Audits",
        "Website SEO Audit",
        "Technical SEO Audit"
      ],
      "serviceType": "SEO Audit",
      "url": "https://scaleseo.co/services/seo-audits",
      "description": "Standalone SEO audit services that assess technical SEO, crawlability, indexing, on-page optimization, content, internal linking, website architecture and organic search performance, with prioritized recommendations for improvement.",
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
        "audienceType": "Businesses seeking an independent SEO assessment and prioritized implementation roadmap"
      },
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#standard-audit-offer",
          "name": "SEO Audit",
          "description": "Standalone SEO audit covering technical website health, crawlability, indexing, on-page SEO, internal linking, website performance, basic keyword visibility and prioritized recommendations.",
          "url": "https://scaleseo.co/services/seo-audits",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Audit"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#advanced-audit-offer",
          "name": "Advanced SEO Audit",
          "description": "Advanced SEO audit including technical and on-page analysis plus detailed keyword research, competitor analysis, content gaps, website architecture, internal linking, local SEO where relevant, and a prioritized implementation roadmap.",
          "url": "https://scaleseo.co/services/seo-audits",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced SEO Audit"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo-audits#breadcrumb",
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
          "name": "SEO Audits",
          "item": "https://scaleseo.co/services/seo-audits"
        }
      ]
    }
  ]
};

export default function SeoAuditsPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditsJsonLd) }} />
      <ServiceTemplate
        crumb="SEO Audits"
        title="SEO Audit Services in Calgary"
        heroLead={"Find out what\u2019s holding your website back in Google Search and what you should improve first."}
        heroImage={{ src: "/images/web-development-hero.webp", alt: "Laptop showing an SEO audit dashboard with site health scores and issue reports" }}
        heroSecondary={{ href: "/contact", label: "Request an SEO Audit" }}
        statementLabel="SEO audits"
        statement="Scale SEO provides independent SEO audits for businesses in Calgary and across Canada."
        statementBody={[
          "Scale SEO reviews your website\u2019s technical health, search visibility, content, and structure to identify problems and opportunities worth addressing.",
          "You\u2019ll receive clear findings and practical recommendations, without committing to ongoing monthly SEO.",
        ]}
        explainer={{
          title: "What Is an SEO Audit?",
          lead: "An SEO audit is an assessment of how well your website is set up to appear in Google Search.",
          body: (
            <>
              <p>Sometimes the problem is technical, such as important pages not being indexed. Other times, the website simply isn&rsquo;t targeting the right searches, or competitors have more useful service pages.</p>
              <p>We use website crawling tools, Google Search Console data where available, and manual analysis to understand what&rsquo;s happening.</p>
              <p>The goal isn&rsquo;t to produce a long list of technical warnings. It&rsquo;s to identify what actually matters for your business and where improvements should begin.</p>
            </>
          ),
        }}
        included={{
          title: "What\u2019s Included in an SEO Audit?",
          lead: "Each audit is scoped to your website, business goals, and the questions you need answered.",
          items: included,
          image: { src: "/images/vancouver-aerial-bw.webp", alt: "Black and white aerial view of downtown Vancouver" },
        }}
        splits={[
          {
            title: "What You\u2019ll Receive",
            body: (
              <>
                <p>A completed standalone SEO audit includes a written assessment of your website, with findings explained in plain English and recommendations prioritized by importance.</p>
                <p>Rather than recommending every possible improvement, we focus on the issues and opportunities most relevant to your business.</p>
                <p>You can implement the recommendations yourself, share them with your developer or marketing team, or discuss having Scale SEO handle the work separately.</p>
                <p><strong>Standalone audits are quoted individually</strong> based on your website&rsquo;s size, complexity, and the depth of analysis required.</p>
              </>
            ),
            image: { src: "/images/toronto-skyline-bw.webp", alt: "Black and white downtown Toronto skyline" },
            cta: { href: "/contact", label: "Request a Custom Audit Quote" },
          },
        ]}
        panels={{
          title: "SEO Audits vs. Monthly SEO",
          lead: "Not every business needs ongoing SEO management.",
          items: [
            {
              title: "Standalone SEO Audit",
              strong: "An independent assessment and practical roadmap.",
              body: <p>A standalone audit is useful when you want an independent assessment, a second opinion, or a practical roadmap for your existing team to implement.</p>,
            },
            {
              title: "Monthly SEO",
              strong: "Implementation, content, and ongoing improvement.",
              body: (
                <>
                  <p>If you&rsquo;re considering <Link href="/services/seo">monthly SEO services</Link>, we provide a complimentary initial SEO assessment as part of evaluating a potential engagement.</p>
                  <p>This covers your website&rsquo;s main SEO issues, relevant competitors, and initial search opportunities, including local SEO considerations where applicable.</p>
                  <p>Monthly SEO goes further by implementing improvements, developing content, monitoring performance, and adjusting the strategy over time.</p>
                  <p>The initial assessment is not a substitute for a detailed standalone audit.</p>
                </>
              ),
            },
          ],
        }}
        faqs={faqs}
        cta={{ title: "Get an Independent Review of Your Website", lead: "If you\u2019re unsure why your website isn\u2019t performing as expected, we can review your requirements and recommend an appropriate audit scope." }}
      />
    </main>
  );
}
