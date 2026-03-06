/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // 如果需要子路径，改为 '/yaowu-ai'
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
