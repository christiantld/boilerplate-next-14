// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}

module.exports = nextConfig
