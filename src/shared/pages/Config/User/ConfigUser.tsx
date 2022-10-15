import { Button, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import RstInput from 'shared/components/Input'
import RstNavBar from 'shared/components/NavBar'

export const ConfigUser = () => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }}>
      <RstNavBar />
      <Flex p={1} m={3} bg="white" borderRadius={16} flexDir="column">
        <Text p={5} fontWeight="bold" color="gray.700" fontSize="lg">
          Configurações do usuário
        </Text>
        <Grid gap={4} p={3}>
          <RstInput label="Nome" />

          <RstInput label="E-mail" />

          <RstInput label="Horário de início" type="time" />
          <RstInput label="Horário de fechamento" type="time" />
          <RstInput
            label="Tempo por serviço"
            helperText="digite o valor em minutos ex: 45"
            errorMessage="digite o valor em minutos ex: 45"
          />
          <Divider mt={4} />
          <GridItem display="flex" justifyContent="flex-end">
            <Button colorScheme="whatsapp">Salvar</Button>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}
