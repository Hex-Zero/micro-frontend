/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      externalsPresets: {
        web: false,
        webAsync: true,
      },
    });
    return config;
  },
};

module.exports = nextConfig;
