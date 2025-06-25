/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.growhub.shop',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
