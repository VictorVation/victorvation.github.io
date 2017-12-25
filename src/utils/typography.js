import Typography from 'typography'
import TwinPeaks from 'typography-theme-twin-peaks'

import { linkColor, hoverColor } from './Constants'
import gray from 'gray-percentage'

TwinPeaks.bodyColor = 'hsla(0,0%,0%,0.9)'
TwinPeaks.overrideThemeStyles = ({ rhythm }) => {
    return {
        a: {
            color: linkColor,
            textShadow: 'none',
            backgroundImage: 'none',
        },
        'a:hover,a:active': {
            textDecoration: 'none',
            textShadow:
                '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
        },
        // Border and shadows for email input
        'input[type=email]': {
            border: '1px solid hsla(0,0%,0%,0.28)',
            borderRadius: rhythm(1 / 5),
            transition: 'border-color 0.3s ease',
            outline: 'none',
        },
        'input[type=email]:focus': {
            boxShadow:
                'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(66,139,202,.15)',
            borderColor: 'rgba(255, 87, 0, 0.72)',
        },
        'input[type=email]:focus::placeholder': {
            color: gray(30),
        },
        // Border for submit button
        'input[type=submit]': {
            backgroundColor: linkColor,
            border: '1px solid hsla(0,0%,0%,0.28)',
            borderRadius: rhythm(1 / 10),
            color: 'white',
            cursor: 'pointer',
        },
        'input[type=submit]:hover': {
            backgroundColor: hoverColor,
        },
    }
}

const typography = new Typography(TwinPeaks)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
}

export default typography
