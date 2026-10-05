import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./theme.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "Calgary SEO Specialist | Professional Services | Scale SEO",
  description:
    "Bespoke SEO architecture & Google Ads management for accounting firms, legal practices, and professional services in Calgary & across Canada. Book a strategy call to get started.",
  metadataBase: new URL("https://scaleseo.co"),
  openGraph: {
    title: "Scale SEO — Corbin Jensen",
    description:
      "Independent SEO specialist for established Canadian businesses. Few clients. Real revenue.",
    url: "https://scaleseo.co",
    siteName: "Scale SEO",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale SEO — Corbin Jensen",
    description:
      "Independent SEO specialist for established Canadian businesses.",
  },
  icons: {
    icon: [
      // SVG first: modern browsers (Chrome/Firefox/Edge) prefer it and it
      // renders our new X mark crisp at any tab size; PNG/ICO below remain
      // as fallbacks for browsers that don't support SVG favicons.
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

// Global site-wide schema, rendered on every page. Organization, founder
// (Person) and WebSite are linked by @id so page-level schema can reference
// them (e.g. { "@id": "https://scaleseo.co/#organization" }).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scaleseo.co/#organization",
      name: "Scale SEO",
      url: "https://scaleseo.co/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://scaleseo.co/#logo",
        url: "https://scaleseo.co/images/logo-mark.svg",
      },
      description:
        "Scale SEO is an independent SEO practice based in Calgary, Alberta, providing SEO, web development, Google Ads management, SEO audits, and AI search optimization for professional service and B2B businesses.",
      foundingDate: "2025",
      founder: {
        "@id": "https://scaleseo.co/#corbin-jensen",
      },
      areaServed: [
        { "@type": "City", name: "Calgary" },
        { "@type": "AdministrativeArea", name: "Alberta" },
        { "@type": "Country", name: "Canada" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/scale-seo/",
        "https://www.instagram.com/scaleseo.co/",
        "https://maps.app.goo.gl/DbV1TQJZQWrpiNf38",
        "https://clutch.co/profile/scale-seo",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://scaleseo.co/#corbin-jensen",
      name: "Corbin Jensen",
      url: "https://scaleseo.co/corbin-jensen",
      jobTitle: "SEO Specialist",
      worksFor: {
        "@id": "https://scaleseo.co/#organization",
      },
      sameAs: ["https://www.linkedin.com/in/corbin-jensen-seo/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://scaleseo.co/#website",
      url: "https://scaleseo.co/",
      name: "Scale SEO",
      publisher: {
        "@id": "https://scaleseo.co/#organization",
      },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TM8NF7DJ');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Manrope is now self-hosted (see globals.css @font-face) —
            only JetBrains Mono still loads from Google Fonts. */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Preferred Sources button library */}
        <script async src="https://news.google.com/swg/js/v1/publisher.js"></script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM8NF7DJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google tag (gtag.js) — Google Ads conversion tracking, loads on every page */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18236022589"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18236022589');
          `}
        </Script>
        <PageTransition />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
