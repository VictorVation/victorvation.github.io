import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import Typography from 'typography'
import TwinPeaks from 'typography-theme-twin-peaks'

import { linkColor, hoverColor } from './Constants'
import gray from 'gray-percentage'

const TwinSutro = {
    ...TwinPeaks,
    bodyColor: 'hsla(0,0%,0%,0.9)',
    googleFonts: [
        {
            name: 'Rosario',
            styles: ['700'],
        },
        {
            name: 'Andada',
            styles: ['400', '400i', '600'],
        },
    ],
    bodyFontFamily: ['Andada', 'serif'],
}

TwinSutro.overrideThemeStyles = ({ rhythm }) => {
    return {
        a: {
            backgroundImage: 'none',
            color: linkColor,
            textDecoration: 'none',
            textShadow: 'none',
        },
        'a:hover,a:active,a.top': {
            textShadow:
                '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
        },
        '.gatsby-resp-image-link:hover': {
            textShadow: 'none',
            backgroundImage: 'none',
            boxShadow: 'none',
        },
        // Border and shadows for email input
        'input[type=email]': {
            border: '1px solid hsla(0,0%,0%,0.28)',
            borderRadius: rhythm(1 / 5),
            transition: 'all 0.3s ease-in-out',
            outline: 'none',
        },
        'input[type=email]:focus': {
            boxShadow:
                'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(66,139,202,.15)',
            borderColor: 'rgba(229,25,55, 0.72)',
        },
        'input[type=email]:focus::placeholder': {
            color: gray(30),
        },
        // Border for submit button
        'input[type=submit]': {
            backgroundColor: hoverColor,
            border: '1px solid hsla(0,0%,0%,0.28)',
            borderRadius: rhythm(1 / 10),
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
        },
        'input[type=submit]:hover': {
            backgroundColor: linkColor,
        },
        // Blockquotes
        blockquote: {
            borderColor: linkColor,
        },
        [MOBILE_MEDIA_QUERY]: {
            blockquote: {
                borderColor: linkColor,
            },
        },
        '::selection': {
            color: '#555',
            backgroundColor: '#70d6ff',
        },
        hr: {
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
}

const typography = new Typography(TwinSutro)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
}

export default typography
