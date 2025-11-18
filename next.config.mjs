/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lest-slavia-taxi.com',
      },
    ],
  },
  // Enable static export if deploying to GitHub Pages
  // output: 'export',
};

export default nextConfig;
