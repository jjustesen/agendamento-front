import { Flex, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import RstNavBar from 'shared/components/NavBar'
import DashboardCalendar from './DashboardCalendar'

const Dashboard = () => {
  const [isMobile] = useMediaQuery('(min-width: 767px)')

  return (
    <Flex>
      {isMobile && <RstNavBar />}
      <Grid
        p={3}
        w="100%"
        h={{ base: '100%', md: '100vh' }}
        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
        templateRows={{ md: 'repeat(2, 1fr)', base: '1fr' }}
        gap={6}
      >
        <GridItem colSpan={4} rowSpan={2} borderRadius={16} overflow="auto" maxH={{ base: '60vh', md: '100%' }}>
          <Text pl={3} fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Horários de hoje
          </Text>
          <DashboardCalendar />
        </GridItem>

        <GridItem colSpan={2} p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>

        <GridItem colSpan={2} p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>

        <GridItem colSpan={4} p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Dashboard
