/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL_BE: process.env.BASE_URL_BE
  },
  reactStrictMode: true,
};

module.exports = nextConfig
