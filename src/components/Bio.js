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
            Written by <strong>Victor Szeto</strong>, computer engineering
            student at the University of Waterloo.
          </p>
        </div>
        <EmailForm showPitch={true} />
      </div>
    )
  }
}

export default Bio
