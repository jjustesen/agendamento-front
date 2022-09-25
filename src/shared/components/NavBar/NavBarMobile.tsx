import { Avatar, Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { useAuth } from 'shared/providers/auth'
import { useUserContext } from 'shared/providers/user'
import { IFuncionariosControllerResponse, useQueryFuncionariosController } from 'shared/service/FuncionariosController'

const RstNavBarMobile = () => {
  const { data: users = [] } = useQueryFuncionariosController()

  const { handleLogout } = useAuth()

  const { user, handleSetUser } = useUserContext()

  return (
    <>
      <Box h={16} />
      <Flex
        position="fixed"
        w="100vw"
        bg="white"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        zIndex={9999}
      >
        <Menu>
          <MenuButton>
            <Avatar name={user?.nome} size="md" />
          </MenuButton>
          <MenuList>
            {users.map((user: IFuncionariosControllerResponse) => (
              <MenuItem key={user.nome} onClick={() => handleSetUser(user)}>
                <Avatar name={user.nome} size="sm" mr={2} />
                <Text textTransform="capitalize">{user.nome}</Text>
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
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  )
}

export default RstNavBarMobile
