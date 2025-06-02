import type { NextConfig } from 'next';
import StylelintPlugin from 'stylelint-webpack-plugin';

const nextConfig: NextConfig = {
  webpack(config) {
    config.plugins.push(new StylelintPlugin());

    return config;
  },
};

export default nextConfig;
