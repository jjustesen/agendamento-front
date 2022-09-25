import { Collapse, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import RstAccordion from 'shared/components/Accordion'
import { useUserContext } from 'shared/providers/user'
import { useQueryHorariosControllerShow } from 'shared/service/HorariosController'
import DashboardCalendar from './DashboardCalendar'
import DashboardCalendarToday from './DashboardCalendarToday'

const DashboardMobile = () => {
  const { user } = useUserContext()

  console.log({ user })

  const { data = [] } = useQueryHorariosControllerShow({ id_func: user?.id })

  console.log(data)

  const { isOpen: isOpenToday, onToggle: onToggleToday } = useDisclosure()
  const { isOpen: isOpenCalendar, onToggle: onToggleCalendar } = useDisclosure()

  return (
    <Grid p={3} gap={2} w="100%">
      <RstAccordion title="Próximos horários de hoje" onToggle={onToggleToday} isOpen={isOpenToday} />

      <Collapse in={!!isOpenToday}>
        <GridItem p={1} bg="white" borderRadius={16} maxH="60vh" overflow="auto">
          <DashboardCalendarToday data={data} />
        </GridItem>
      </Collapse>

      <RstAccordion title="Todos os horários" onToggle={onToggleCalendar} isOpen={isOpenCalendar} />

      <Collapse in={!!isOpenCalendar}>
        <GridItem p={1} bg="white" borderRadius={16} maxH="60vh" overflow="auto">
          <DashboardCalendar />
        </GridItem>
      </Collapse>
    </Grid>
  )
}

export default DashboardMobile
