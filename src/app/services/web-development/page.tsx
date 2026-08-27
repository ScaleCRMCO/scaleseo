import type { Metadata } from "next";
import ServicePage, { Accent } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Web Development & Design Services | Scale SEO",
  description:
    "Websites built for accounting firms and professional service businesses across Canada — fast, clean, and SEO-ready from the first line of code. Design and development handled directly by one specialist.",
  alternates: { canonical: "/services/web-development" },
};

const included = [
  {
    num: "01",
    name: "SEO-First Build",
    desc: "Every site is built on the same technical foundation the SEO work depends on — clean markup, fast load times, and proper structure from day one.",
  },
  {
    num: "02",
    name: "Design That Builds Trust",
    desc: "Clean, professional design suited to accounting and financial service brands — built to hold up under a skeptical prospect's scrutiny.",
  },
  {
    num: "03",
    name: "Conversion-Focused Structure",
    desc: "Pages built around how your buyers actually decide — clear calls to action, credible proof, no dead ends.",
  },
  {
    num: "04",
    name: "Mobile & Performance Optimized",
    desc: "Fast on every device. Site speed is a ranking factor and a trust signal — it's treated as core to the build, not an afterthought.",
  },
  {
    num: "05",
    name: "CMS & Ongoing Edits",
    desc: "A site you can actually update, with a straightforward content setup — no waiting on a developer for a simple text change.",
  },
  {
    num: "06",
    name: "Built to Scale With SEO",
    desc: "Structured from the start to support the content, local pages, and technical work that come after launch — not rebuilt six months in.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      schema={{
        name: "Web Development & Design Services",
        description:
          "Website design and development for accounting firms and professional service businesses across Canada, built on the same technical foundation their SEO depends on.",
        serviceType: "Web Development",
        url: "https://scaleseo.co/services/web-development",
      }}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Web Development" },
      ]}
      eyebrow="Services / Web Development"
      title={
        <>
          Websites Built to{" "}
          <Accent>Rank, Load Fast, and Convert.</Accent>
        </>
      }
      sub="A website that looks good but loads slow or can't be crawled properly is working against your SEO, not for it. I build and design sites the same way I optimize them — with performance and search visibility built in from the start."
      problemHeadline={
        <>
          Most web design has{" "}
          <Accent>nothing to do with how the site performs.</Accent>
        </>
      }
      problemBody="A lot of web design is judged on how it looks in a portfolio, not how it performs in the real world — page speed, crawlability, and structure are treated as someone else's problem to fix later. For a professional service business, that gap costs you twice: once in lost rankings, and again in lost trust from a prospect who bounces off a slow, cluttered site before ever reading your pitch. I build the site and the SEO as one system, not two separate projects."
      included={included}
      ctaHeadline="Need a site that's actually built to perform?"
      ctaSub="Whether it's a new build or fixing what you've already got, I'll tell you honestly what's holding your site back."
      relatedNote={
        <>
          Already have a site and just need the SEO fixed?{" "}
          <a href="/services/seo">See how core SEO works →</a>
        </>
      }
    />
  );
}
