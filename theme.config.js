// // const YEAR = new Date().getFullYear()

// export default {
//   footer: null
//   // footer: (
//   //   <small style={{ display: 'block', marginTop: '8rem' }}>
//   //     <time>{YEAR}</time> © Your Name.
//   //     <a href="/feed.xml">RSS</a>
//   //     <style jsx>{`
//   //       a {
//   //         float: right;
//   //       }
//   //       @media screen and (max-width: 480px) {
//   //         article {
//   //           padding-top: 2rem;
//   //           padding-bottom: 4rem;
//   //         }
//   //       }
//   //     `}</style>
//   //   </small>
//   // )
// }
export default {
  footer: <p>MIT 2023 © Nextra.</p>,
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
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Nextra'
    }
  ]
}
