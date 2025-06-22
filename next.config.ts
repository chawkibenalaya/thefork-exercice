import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // permet de charger toutes les images du domaine
      },
      {
        protocol: 'https',
        hostname: 'c.tfstatic.com',
      },
    ],  },
};

export default nextConfig;
