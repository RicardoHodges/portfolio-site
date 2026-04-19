import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // Default to dark mode for professional portfolio
  useEffect(() => {
    try {
      document.documentElement.classList.add('dark')
    } catch (e) {
      // ignore server-side
    }
  }, [])

  return <Component {...pageProps} />
}
