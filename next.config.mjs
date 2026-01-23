/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-website-v0',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
