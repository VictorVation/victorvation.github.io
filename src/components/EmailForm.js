import React from 'react'

import { hoverColor } from '../utils/Constants'
import { rhythm, scale } from '../utils/typography'

class EmailForm extends React.PureComponent {
  onSubmit() {
    window.open(
      'https://tinyletter.com/victors',
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    )
    return true
  }
  render() {
    return (
      <div>
        {this.props.showPitch && (
          <p>
            {/*I write concise, weekly summaries on consumer technology, software
                        engineering, maximalism and culture.*/}
            Liked what you read? I write about my views on philosophy,
            technology, productivity and culture.
          </p>
        )}
        <form
          action="https://tinyletter.com/victors"
          method="POST"
          target="popupwindow"
          onsubmit={this.onSubmit}
        >
          <input
            style={{
              marginBottom: rhythm(1 / 3),
              padding: rhythm(1 / 3),
              width: '100%',
            }}
            placeholder="Your email address..."
            type="email"
            name="email"
            id="tlemail"
          />
          <input type="hidden" value="1" name="embed" />
          <input
            style={{
              padding: rhythm(1 / 3),
            }}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    )
  }
}

export default EmailForm
