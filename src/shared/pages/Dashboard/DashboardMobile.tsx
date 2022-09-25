import { Collapse, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import DashboardCalendar from './DashboardCalendar'
import DashboardCalendarToday from './DashboardCalendarToday'

const DashboardMobile = () => {
  const [todayTab, setTodayTab] = React.useState(true)
  const [calendarTab, setCalendarTab] = React.useState(false)

  return (
    <Grid p={3} gap={2} w="100%">
      <GridItem p={6} bg="white" borderRadius={16} onClick={() => setTodayTab(!todayTab)}>
        <Text fontWeight="bold" color="gray.700" fontSize="lg">
          Próximos horários de hoje
        </Text>
      </GridItem>
      <Collapse in={!!todayTab}>
        <GridItem p={1} bg="white" borderRadius={16} maxH="60vh" overflow="auto">
          <DashboardCalendarToday />
        </GridItem>
      </Collapse>

      <GridItem p={6} bg="white" borderRadius={16} onClick={() => setCalendarTab(!calendarTab)}>
        <Text fontWeight="bold" color="gray.700" fontSize="lg">
          Todos os horários
        </Text>
      </GridItem>
      <Collapse in={!!calendarTab}>
        <GridItem p={1} bg="white" borderRadius={16} maxH="60vh" overflow="auto">
          <DashboardCalendar />
        </GridItem>
      </Collapse>
    </Grid>
  )
}

export default DashboardMobile
