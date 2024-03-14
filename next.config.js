/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Enable source maps in development mode
    if (dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};

module.exports = nextConfig;
