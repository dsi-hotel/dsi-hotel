import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes URLs indexées par Google (ancien site), à rediriger vers
      // les pages actuelles pour ne pas perdre le référencement acquis.
      { source: '/es/wifi', destination: '/services/wifi-hotel', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
      { source: '/es/:path*', destination: '/', permanent: true },
      { source: '/service', destination: '/', permanent: true },
      { source: '/notreapproche', destination: '/', permanent: true },
      { source: '/single-post/:path*', destination: '/', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
