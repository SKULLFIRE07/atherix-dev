/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slashes for better SEO consistency
  trailingSlash: false,
  // Compress output
  compress: true,
  // Remove x-powered-by header for security
  poweredByHeader: false,
  // Generate ETags for caching
  generateEtags: true,
}

module.exports = nextConfig
