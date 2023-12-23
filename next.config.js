/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["d2seqvvyy3b8p2.cloudfront.net", "bs.plantnet.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2seqvvyy3b8p2.cloudfront.net",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
