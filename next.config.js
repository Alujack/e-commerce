/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.module.rules.forEach((rule) => {
        if (rule.test?.toString().includes('css')) {
          rule.use.forEach((loader) => {
            if (loader.loader?.includes('css-loader')) {
              loader.options.sourceMap = false;
            }
          });
        }
      });
    }
    return config;
  },
}

module.exports = nextConfig