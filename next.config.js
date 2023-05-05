const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true
})

const nextConfig = {
  images: {
    unoptimized: true
  }
}

module.exports = withNextra(nextConfig)
