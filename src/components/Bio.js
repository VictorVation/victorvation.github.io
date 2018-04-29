import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

import EmailForm from './EmailForm'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default function Bio({ isHomepage }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: rhythm(2.5),
      }}
    >
      {/* !isHomepage && (
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(1),
          }}
        >

          Liked what you read? <Link to="/">Read more things I've written</Link>.
        </div>
      )*/}
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Victor Szeto`}
          style={{
            borderRadius: rhythm(2),
            marginRight: rhythm(1 / 2),
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Thoughts and opinions written by Victor Szeto, Seattle-based software
          engineer from Canada and computer engineering graduate from the
          University of Waterloo.
        </p>
      </div>
      <div style={{ margin: '0 auto' }}>
        <small>
          {!isHomepage && <Link to="/">more writing</Link>}
          {!isHomepage && ' · '}
          <a href="https://www.twitter.com/victorvation">twitter</a> ·{' '}
          <a href="https://www.github.com/victorvation">github</a> ·{' '}
          <a href="https://www.instagram.com/victorvation">instagram</a> ·{' '}
          <a href="https://open.spotify.com/user/victorvation">spotify</a>
        </small>
      </div>
      {/*<EmailForm showPitch={true} />*/}
    </div>
  )
}
