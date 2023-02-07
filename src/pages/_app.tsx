import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SSRProvider } from 'react-aria'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { lightTheme, darkTheme } from '../styles/theme'
import Head from '../components/head'
import Layout from '../components/layout'
import * as gtag from '../lib/gtag'
import { ContactModalProvider } from '../contexts/ContactModalProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return () => {}
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <ContactModalProvider>
            <Head />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContactModalProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  )
}

export default MyApp
