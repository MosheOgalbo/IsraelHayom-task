// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/writers',
          destination: 'http://localhost:3000/writers',
        },
      ];
    },
  };

  module.exports = nextConfig;
