import React from 'react'

import EmailForm from './EmailForm'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: rhythm(2.5),
        }}
      >
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
            Written by Victor Szeto, Seattle-based software engineer from Canada
            and computer engineering graduate from the University of Waterloo.
          </p>
        </div>
        <div style={{ margin: '0 auto' }}>
          <small>
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
}

export default Bio
