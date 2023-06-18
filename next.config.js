/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [500, 800, 1080, 1600, 2000, 2600, 3200],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
