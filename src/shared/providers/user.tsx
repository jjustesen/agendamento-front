import React, { useContext, createContext, useState, useEffect } from 'react'
import { iEmployesControllerResponse, useQueryEmployesController } from 'shared/service/EmployesController'

interface iUser {
  user: iEmployesControllerResponse | undefined
  handleSetUser: (user: iEmployesControllerResponse) => void
}

export const UserContext = createContext({} as iUser)

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const { data: users = [] } = useQueryEmployesController()

  const [user, setUser] = useState<iEmployesControllerResponse | undefined>({} as iEmployesControllerResponse)

  const handleSetUser = (user: iEmployesControllerResponse) => {
    setUser(user)
    localStorage.setItem('user', user.name)
  }

  useEffect(() => {
    const userLocal = localStorage.getItem('user')
    if (userLocal) {
      const currentUser = users.find((u) => u.name === userLocal) || users[0]
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
