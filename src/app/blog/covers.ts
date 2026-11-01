// Cover image per post (card thumbnail, article hero and schema image).
export const covers: Record<string, { src: string; alt: string }> = {
  "why-business-not-showing-on-google-calgary": {
    src: "/images/blog-why-business-not-showing-on-google-calgary.webp",
    alt: "3D blue map location pin on a navy background, representing local search visibility in Calgary",
  },
  "how-long-does-seo-take": {
    src: "/images/blog-how-long-does-seo-take.webp",
    alt: "3D blue clock on a navy background, representing how long SEO takes",
  },
  "seo-cost-canada": {
    src: "/images/blog-seo-cost-canada.webp",
    alt: "Stack of 3D gold dollar coins on a navy background, representing SEO pricing in Canada",
  },
  "how-accounting-firms-rank-on-google-in-canada": {
    src: "/images/blog-how-accounting-firms-rank-on-google-in-canada.webp",
    alt: "Laptop showing an SEO site health dashboard, representing how accounting firms rank on Google",
  },
};

export const coverUrl = (slug: string) =>
  covers[slug] ? `https://scaleseo.co${covers[slug].src}` : undefined;
