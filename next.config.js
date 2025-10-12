/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable, no experimental config needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable dev tools and development overlays
  experimental: {
    devOverlays: false,
  },
  // Disable React DevTools in production
  reactStrictMode: false,
  // Disable source maps in development
  productionBrowserSourceMaps: false,
  // Disable webpack dev middleware overlay
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
}

module.exports = nextConfig
