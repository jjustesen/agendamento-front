import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import RstNavBar from 'shared/components/NavBar'
import DashboardCalendar from './DashboardCalendar'

const Dashboard = () => {
  return (
    <Flex>
      <RstNavBar />
      <Grid
        p={6}
        w="100%"
        templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
        gap={6}
      >
        <GridItem colSpan={4} p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Horários do dia
          </Text>

          <Grid gap={2}>
            <DashboardCalendar />
            <DashboardCalendar />
            <DashboardCalendar />
            <DashboardCalendar />
          </Grid>
        </GridItem>
        <GridItem p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>
        <GridItem p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>
        <GridItem p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>
        <GridItem p={6} bg="white" borderRadius={16}>
          <Text fontWeight="bold" color="gray.700" fontSize="lg" mb={4}>
            Dash
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Dashboard
