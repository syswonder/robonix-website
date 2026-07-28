/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
