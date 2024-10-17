import Link from 'next/link'

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Victor Szeto.
      <Link style={{ float: 'right' }} href="/">
        Home
      </Link>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: true,
  navs: [],
  titleSuffix: ' | Victor Szeto'
}

// footer: (
// )
