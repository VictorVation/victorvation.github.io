const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true
})

module.exports = withNextra()
