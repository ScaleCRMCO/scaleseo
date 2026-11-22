/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/llm-info",
        destination: "/business-information",
        permanent: true,
      },
      {
        source: "/industries/law-firms",
        destination: "/industries",
        statusCode: 301,
      },
      {
        source: "/services/on-page-seo",
        destination: "/services/seo",
        statusCode: 301,
      },
      {
        source: "/locations/edmonton",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/locations/vancouver",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/brisbane",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
