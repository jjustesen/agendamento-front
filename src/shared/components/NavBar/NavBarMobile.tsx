import { Avatar, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { iRoutes } from 'shared/interface/routes'
import { FiMenu } from 'react-icons/fi'

interface iProps {
  routes: iRoutes[]
}
interface iUser {
  name: string
  avatar: string
}

const RstNavBarMobile = ({ routes }: iProps) => {
  // const { data } = useQueryCompaniesControllerShow({ id: '5909352b-6443-466d-8f64-a477043901e4' })

  const userLocal = localStorage.getItem('user')
  console.log(routes)
  const [user, setUser] = useState<iUser | null>(null)

  const users = [
    {
      name: 'Murilo',
      avatar: ''
    },
    {
      name: 'Johannes',
      avatar: ''
    }
  ]

  const handleSelectUser = (user: iUser) => {
    setUser(user)
    localStorage.setItem('user', user.name)
  }

  useEffect(() => {
    const currentUser = users.find((u) => u.name === userLocal) || users[0]
    setUser(currentUser)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Flex bg="white" justifyContent="space-between" alignItems="center" px={4} py={2}>
      <Menu>
        <MenuButton>
          <Avatar name={user?.name} size="md" src={user?.avatar} />
        </MenuButton>
        <MenuList>
          {users.map((user: iUser) => (
            <MenuItem key={user.name} onClick={() => handleSelectUser(user)}>
              <Avatar name={user.name} size="sm" src={user.avatar} mr={2} />
              <Text>{user.name}</Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Text fontWeight="bold" fontSize="lg">
        Agendaê
      </Text>

      <Menu>
        <MenuButton>
          <IconButton colorScheme="blue" size="lg" variant="ghost" aria-label="Menu" icon={<FiMenu />} />
        </MenuButton>
        <MenuList>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default RstNavBarMobile
