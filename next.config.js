/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Configure base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  
  // App directory is now stable, no experimental config needed
  images: {
    unoptimized: true, // Required for static export
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
