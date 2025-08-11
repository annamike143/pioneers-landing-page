// eslint.config.mjs

const nextConfig = require('next/dist/build/swc/eslint-config-custom').default;

module.exports = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off" // This will also fix the warnings about the <img> tag in your pixel code
    }
  }
];