/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "localhost",
        hostname: "44.223.7.231",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
