/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/atherix-dev',
  assetPrefix: '/atherix-dev/',
}

module.exports = nextConfig
