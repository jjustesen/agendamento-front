import React, { useContext, createContext, useState, useEffect } from 'react'
import { IFuncionariosControllerResponse, useQueryFuncionariosController } from 'shared/service/FuncionariosController'

interface iUser {
  user: IFuncionariosControllerResponse | undefined
  handleSetUser: (user: IFuncionariosControllerResponse) => void
}

export const UserContext = createContext({} as iUser)

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const { data: users = [] } = useQueryFuncionariosController()

  const [user, setUser] = useState<IFuncionariosControllerResponse | undefined>({} as IFuncionariosControllerResponse)

  const handleSetUser = (user: IFuncionariosControllerResponse) => {
    setUser(user)
    localStorage.setItem('user', user.nome)
  }

  useEffect(() => {
    const userLocal = localStorage.getItem('user')
    if (userLocal) {
      const currentUser = users.find((u) => u.nome === userLocal) || users[0]
      setUser(currentUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

  return (
    <UserContext.Provider
      value={{
        user,
        handleSetUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
