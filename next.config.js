const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true,
  readingTime: true
})

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/'
  }
}

module.exports = withNextra(nextConfig)
