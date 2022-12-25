/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko"
  },
  compiler: {
    styledComponents: true,
    emotion: true
  }
};

module.exports = nextConfig;
