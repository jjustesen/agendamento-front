import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const DashboardCalendar = () => {
  const [active, setActive] = React.useState(false)

  return (
    <Flex>
      <Grid w="100%" templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={2}>
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          py={{ base: 1, md: 6 }}
          px={4}
          bg="whatsapp.50"
          borderStyle="solid"
          borderWidth={4}
          borderColor="whatsapp.500"
          borderRadius={16}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Text color="whatsapp.500" fontWeight="bold">
            08:00
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 10 }} p={4} bg="whatsapp.500" borderRadius={16}>
          <Box>
            <Text color="white" fontSize="lg" fontWeight="bold">
              Johannes
            </Text>
            <Text color="white">08:20 - 09:00</Text>
            <Flex
              p={2}
              justifyContent="center"
              onClick={() => setActive(!active)}
              _hover={{ bg: 'whatsapp.600' }}
              borderRadius={8}
              mt={2}
            >
              {active ? <FiChevronUp fontSize={20} color="white" /> : <FiChevronDown fontSize={20} color="white" />}
            </Flex>
          </Box>
          {active && (
            <Flex flexDir="column" mt={4}>
              <Button mb={2} colorScheme="orange">
                Cancelar
              </Button>
              <Button>Remarcar</Button>
            </Flex>
          )}
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default DashboardCalendar
