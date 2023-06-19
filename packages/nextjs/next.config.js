const adorableCSS = require('./adorablecss/dist/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // config.cache = false
    config.plugins.push(
      new adorableCSS(),
    )
    return config
  }
}

module.exports = nextConfig
