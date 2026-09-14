import type { Metadata } from "next";
import ContactSplit from "./ContactSplit";
import MapEmbed from "./MapEmbed";

export const metadata: Metadata = {
  title: "Contact — Scale SEO | Corbin Jensen",
  description:
    "Get in touch with Scale SEO. Email, phone, and Google Business Profile for Corbin Jensen, independent SEO specialist serving established businesses across Canada.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSplit />
      <MapEmbed />
    </main>
  );
}
