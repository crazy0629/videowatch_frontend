/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "192.168.146.181",
        hostname: "3.89.134.159",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;
