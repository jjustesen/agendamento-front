import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import GlobalStyles from 'styles/global'
import { AuthProvider } from './auth'

const queryClient = new QueryClient()

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}
const theme = extendTheme({ colors })

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
