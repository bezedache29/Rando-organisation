/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_URL_API: 'http://localhost:3000/api'
    // REACT_APP_URL_API: 'http://rando-cdlvtt.gfcs0478.odns.fr/api'
  }
}

module.exports = nextConfig
