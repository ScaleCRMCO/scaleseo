// Client testimonials shown by <Testimonials />. Add new entries here; the
// slider's arrows and progress bars appear once two or more are live.
//
// `placeholder: true` entries are previews only: they render in local
// development so the slider can be checked, and are never shown in
// production. Do not publish invented reviews.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  source?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had the chance to work with Corbin from Scale SEO on improving my Website performance for my Phone repair business. His expertise has boosted my online sales and I gained valuable insights to improving my local presence in the Calgary area. Highly recommend!",
    name: "Ben P.",
    role: "Business Owner, Phone Repair",
    source: "Google Review",
  },
  {
    quote:
      "Corbin from Scale SEO has done a excellent job with our website direction. Ever since partnering with Scale SEO, we've gained more clients and jobs in Calgary with his seo expertise. Highly recommend!",
    name: "Terry Jensen",
    role: "President & Founder of Kinsmen Consulting Ltd.",
  },
  {
    quote:
      "I've been working with Scale SEO for a few months now and can't reccommend how great an experience I've had! Corbin helped me improve my online sales and is very attentive for all my questions.",
    name: "Monika J.",
    role: "Keto-Chef",
    source: "Google Review",
  },
];
