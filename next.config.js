/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - will be configured based on repo name
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
}

module.exports = nextConfig
