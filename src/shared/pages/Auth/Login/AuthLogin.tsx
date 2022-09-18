import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import RstInput from 'shared/components/Input'

const AuthLogin = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="gray.100"
    >
      <Grid
        maxW={480}
        w="100%"
        gap={4}
        p={8}
        bg="white"
        borderRadius={16}
        boxShadow="sm"
        m={6}
      >
        {/* <GridItem>
          <Text fontSize="xxx-large">Logo</Text>
        </GridItem> */}

        <GridItem>
          <Text fontSize="lg">Faça seu login</Text>
        </GridItem>

        <GridItem>
          <RstInput placeholder="Usuário" />
        </GridItem>

        <GridItem>
          <RstInput placeholder="Senha" />
        </GridItem>

        <GridItem display="flex" justifyContent="space-between">
          <Button colorScheme="gray">Register</Button>
          <Button colorScheme="whatsapp">Login</Button>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default AuthLogin
