/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
