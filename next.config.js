/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  async headers() {
    return [
      {
        headers: [
          {
            key: 'x-api-key',
            value: 'live_jEGQJ7EX0TPQwwl6IgODgbTgkNkDTge8Kak0wC2d14ij8Y9Ndt3LEZwofhFQgBy9',
          },

        ],
      },
    ]
  },
}

module.exports = nextConfig
