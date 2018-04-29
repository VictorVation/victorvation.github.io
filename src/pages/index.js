import React from 'react'
import Link from 'gatsby-link'
import idx from 'idx'
import Helmet from 'react-helmet'

import profilePic from '../components/profile-pic.jpg'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = idx(this.props, _ => _.data.site.siteMetadata.title)
    const posts = idx(this.props, _ => _.data.allMarkdownRemark.edges)

    return (
      <div>
        <Helmet title={siteTitle}>
          <meta property="og:title" content={siteTitle} />
          <meta property="og:url" content="https://victorszeto.com" />
          <meta
            property="og:description"
            content="Thoughts and opinions written by Victor Szeto, Seattle-based software engineer from Canada and computer engineering graduate from the University of Waterloo."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`https://victorszeto.com${profilePic}`}
          />
          <meta
            property="og:image:url"
            content={`https://victorszeto.com${profilePic}`}
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="320" />
          <meta property="og:image:height" content="320" />
        </Helmet>
        <Bio isHomepage={true} />
        {posts.map(({ node }) => {
          const title = idx(node, _ => _.frontmatter.title) || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>
                {node.frontmatter.date} · {node.timeToRead} min read
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`
