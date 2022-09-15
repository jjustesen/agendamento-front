import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Agendou</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
