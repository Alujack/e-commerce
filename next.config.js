/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: true,
  experimental: { serverActions: true },
};

module.exports = nextConfig;
