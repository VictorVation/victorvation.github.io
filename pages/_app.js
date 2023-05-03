import 'nextra-theme-blog/style.css'
import { Inter } from 'next/font/google'
import '../styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export default function Nextra({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component className={inter.className} {...pageProps} />
    </main>
  )
}
