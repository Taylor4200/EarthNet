/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 uses app directory by default, no need for experimental flag
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: false, // Enable optimization for production
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/fiber', '@react-three/drei'],
  },
}

module.exports = nextConfig
