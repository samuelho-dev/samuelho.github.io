const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/sounds/[name].[hash][ext]',
      },
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/ddhal4lbv/**',
      },
    ],
  },
};
