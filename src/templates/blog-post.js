import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import idx from 'idx'

import Bio from '../components/Bio'
import EmailForm from '../components/EmailForm'
import profilePic from '../components/profile-pic.jpg'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = idx(this.props, _ => _.data.site.siteMetadata.title)
    const pageTitle = `${post.frontmatter.title} | ${siteTitle}`
    return (
      <div>
        <Helmet title={pageTitle}>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://victorszeto.com${this.props.pathContext.slug}`}
          />
          <meta property="og:article:author" content="Victor Szeto" />
          <meta
            property="og:article:date"
            content={post.frontmatter.timestamp}
          />
          <meta property="og:image" content={profilePic} />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1 / 2),
          }}
        >
          {post.frontmatter.date} · {post.timeToRead} min read
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/*<div style={{ marginBottom: rhythm(1) }}>
          <small>
            Liked what you read? Check me out on{' '}
            <a href="https://www.twitter.com/VictorVation">Twitter</a> or check
            out <Link to="/">some of my other posts</Link>.
          </small>
        </div>*/}
        <hr />
        <Bio />
        {/*<h2>Get updates on new posts</h2>
                <EmailForm showPitch={true} />*/}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        timestamp: date
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`
