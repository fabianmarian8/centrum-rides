/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lest-slavia-taxi.com',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
