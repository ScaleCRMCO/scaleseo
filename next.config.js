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
        source: "/brisbane",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
