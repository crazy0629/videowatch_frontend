/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "localhost",
        hostname: "54.198.206.126",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
