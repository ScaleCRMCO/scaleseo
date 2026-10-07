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
      "I had the chance to work with Corbin from Scale SEO on improving my website performance for my phone repair business. His expertise has boosted my online sales and I gained valuable insights to improving my local presence in the Calgary area. Highly recommend!",
    name: "Ben P.",
    role: "Business Owner, Phone Repair",
    source: "Google Review",
  },
  {
    quote:
      "Placeholder testimonial for previewing the slider. Replace this entry with a real client quote before it goes live.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
];
