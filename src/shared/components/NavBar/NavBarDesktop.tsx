import { Avatar, Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Router from 'next/router'
import React from 'react'
import { iRoutes } from 'shared/interface/routes'
import { useAuth } from 'shared/providers/auth'
import { useUserContext } from 'shared/providers/user'
import { iEmployesControllerResponse, useQueryEmployesController } from 'shared/service/EmployesController'
interface iProps {
  routes: iRoutes[]
}
const RstNavBarDesktop = ({ routes }: iProps) => {
  const { data: users = [] } = useQueryEmployesController()

  const { user, handleSetUser } = useUserContext()
  const { handleLogout } = useAuth()

  console.log({ users })

  const handleRedirect = (path: string) => {
    Router.push(path)
  }

  return (
    <Flex w={258} h="100vh" bg="white" flexDir="column" justifyContent="space-between">
      <Grid h="min-content" w="100%">
        <GridItem p={4}>
          <Text fontSize={20} fontWeight="bold">
            Agendou
          </Text>
        </GridItem>
        {routes.map((route, index) => (
          <GridItem
            key={index}
            _hover={{ bg: 'whatsapp.400' }}
            p={4}
            m={2}
            borderRadius={8}
            onClick={() => handleRedirect(route.path)}
            cursor="pointer"
          >
            <Text> {route.name}</Text>
          </GridItem>
        ))}
      </Grid>
      <Grid pb={10}>
        <GridItem p={4}>
          <Menu>
            <MenuButton>
              <Flex alignItems="center">
                <Avatar name={user?.name} size="sm" />
                <Text ml={2} textTransform="capitalize">
                  {user?.name}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              {users?.map((user: iEmployesControllerResponse) => (
                <MenuItem key={user.name} onClick={() => handleSetUser(user)}>
                  <Avatar name={user.name} size="sm" mr={2} />
                  <Text textTransform="capitalize">{user.name}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem _hover={{ bg: 'whatsapp.400' }} p={4} m={2} borderRadius={8} onClick={handleLogout} cursor="pointer">
          Sair
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default RstNavBarDesktop
