import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true,
  readingTime: true
})

const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export'
}

export default withNextra(nextConfig)
