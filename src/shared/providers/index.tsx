import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import GlobalStyles from 'styles/global'
import { AuthProvider } from './auth'

const queryClient = new QueryClient()

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const shadows = {
  green: ' 0 0 10px 0px #22c35e',
  gray: ' 0 0 10px 0px #718096'
}

export const theme = extendTheme({ colors, config, shadows })

function Providers({ children }: React.PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          {children}
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default Providers
