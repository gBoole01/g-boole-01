import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SSRProvider } from 'react-aria'
import { lightTheme, darkTheme } from '../styles/theme'
import Head from '../components/head'
import Layout from '../components/layout'
import { ContactModalProvider } from '../contexts/ContactModalProvider'

function MyApp({ Component, pageProps }: AppProps) {
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
