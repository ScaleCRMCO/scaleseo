export type CaseStudy = {
  index: string;
  client: string;
  subhead: string;
  location: string;
  country: "Canada" | "Australia";
  industry: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  url: string;
  urlLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    client: "Kinsmen Consulting Ltd",
    subhead: "Kinsmen Consulting: Local SEO & Web Optimization for Construction",
    location: "Calgary, Alberta",
    country: "Canada",
    industry: "Concrete & Construction",
    description:
      "Positioned a premium concrete contractor in Calgary to attract high-value residential and commercial projects.",
    metric: "26%",
    metricLabel: "Revenue growth",
    image: "/images/kinsmen-hero.jpg",
    url: "https://www.kinsmenconsulting.ca",
    urlLabel: "kinsmenconsulting.ca",
  },
  {
    index: "02",
    client: "MSV Plumbing Services",
    subhead: "MSV Plumbing: Organic Growth & Map Pack Scaling",
    location: "Brisbane, Queensland",
    country: "Australia",
    industry: "Plumbing Services",
    description:
      "Built from zero — a new website and local SEO strategy that took MSV from no clients to consistent weekly bookings.",
    metric: "0 → Weekly",
    metricLabel: "Consistent bookings",
    image: "/images/msv-screenshot.png",
    url: "https://msvplumbingservices.com.au/",
    urlLabel: "msvplumbing.com.au",
  },
  {
    index: "03",
    client: "Empire Accountants",
    subhead: "Empire Accountants: SEO Strategy for Accounting Firms",
    location: "Brisbane, Queensland",
    country: "Australia",
    industry: "Accounting & Advisory",
    description:
      "Technical fixes, on-page structure, and content built around the terms their clients search moved them from position 30 into the top 10 search results for their target keywords, doubling impressions and clicks. Now booking new clients weekly.",
    metric: "30 → Top 10",
    metricLabel: "Search ranking, target keywords",
    image: "/images/empireaccountants-hero-image.png",
    url: "https://www.empireaccountants.com.au/",
    urlLabel: "empireaccountants.com.au",
  },
];
