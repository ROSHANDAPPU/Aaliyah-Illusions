/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath and assetPrefix removed to ensure compatibility with custom domain deployments (Vercel, Netlify, VPS)
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
      },
    ],
  },
};

export default nextConfig;
