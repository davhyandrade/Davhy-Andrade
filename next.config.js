/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'github.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      issuer: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
}

module.exports = nextConfig
