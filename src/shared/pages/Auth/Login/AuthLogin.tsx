import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useMemo, useState } from 'react'
import RstInput from 'shared/components/Input'

interface iLogin {
  user: string
  password: string
}

const AuthLogin = () => {
  const initialValues: iLogin = useMemo(() => {
    return {
      user: '',
      password: ''
    }
  }, [])
  const [formValues, setFormValues] = useState<iLogin>(initialValues)

  const handleChangeValue = (fname: keyof iLogin, value: unknown) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [fname]: value
    }))
  }

  const handleSubmit = () => {
    axios
      .post('https://agendamentos2.herokuapp.com/auth', {
        email: formValues.user,
        password: formValues.password
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" bg="gray.100">
      <Grid maxW={480} w="100%" gap={4} p={8} bg="white" borderRadius={16} boxShadow="sm" m={6}>
        {/* <GridItem>
          <Text fontSize="xxx-large">Logo</Text>
        </GridItem> */}

        <GridItem>
          <Text fontSize="lg">Faça seu login</Text>
        </GridItem>

        <GridItem>
          <RstInput
            placeholder="Usuário"
            onChange={({ target }) => handleChangeValue('user', target.value)}
            value={formValues.user}
          />
        </GridItem>

        <GridItem>
          <RstInput
            placeholder="Senha"
            onChange={({ target }) => handleChangeValue('password', target.value)}
            type="password"
            value={formValues.password}
          />
        </GridItem>

        <GridItem display="flex" justifyContent="space-between">
          <Button colorScheme="gray">Register</Button>
          <Button colorScheme="whatsapp" onClick={handleSubmit}>
            Login
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default AuthLogin
