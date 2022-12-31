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
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    }
  }
};

module.exports = nextConfig;
