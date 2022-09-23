import { useToast } from '@chakra-ui/react'
import Router from 'next/router'
import React, { useContext, createContext, useState } from 'react'
import { iLogin } from 'shared/pages/Auth/Login/AuthLogin'
import { useMutationControllerAuthLogin } from 'shared/service/Controllers'

export interface iCompany {
  created_at: string
  document: string
  email: string
  id: string
  nome: string
  nome_empresa: string
  password: string
  updated_at: string
}

export interface iAuthResponse {
  token: string
  company: iCompany
}

export interface iAuthContext {
  auth: iAuthResponse
  setAuth(item: unknown): void
  handleLogin(user: iLogin): void
}

export const Auth = createContext({} as iAuthContext)

export const useAuth = () => useContext(Auth)

export const AuthProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [auth, setAuth] = useState<iAuthResponse>({} as iAuthResponse)

  const toast = useToast()

  const { mutate: postAuth } = useMutationControllerAuthLogin()

  const handleLogin = (user: iLogin) => {
    postAuth(
      { email: user.user, password: user.password },
      {
        onSuccess: (data) => {
          setAuth(data)
          Router.push('/dashboard')
        },
        onError: () => {
          toast({
            title: 'Erro ao fazer login',
            description: 'Usuário ou senha incorretos',
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        }
      }
    )
  }

  return (
    <Auth.Provider
      value={{
        auth,
        setAuth,
        handleLogin
      }}
    >
      {children}
    </Auth.Provider>
  )
}
