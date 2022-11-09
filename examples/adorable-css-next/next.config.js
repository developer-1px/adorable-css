const adorableCSS = () => {

}












/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, context) {
    config.plugins.push()
    if (context.buildId !== "development") {
      config.cache = false;
    }
    return config
  }
}

module.exports = nextConfig
