const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(wav)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/sounds/[name].[hash][ext]',
      },
    });

    return config;
  },
};
