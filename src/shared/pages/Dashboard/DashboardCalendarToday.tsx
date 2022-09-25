import { Grid, Skeleton } from '@chakra-ui/react'
import React from 'react'
import RstScheduleTime from 'shared/components/ScheduleTime'
import { useUserContext } from 'shared/providers/user'
import { useQueryHorariosControllerShow } from 'shared/service/HorariosController'

const DashboardCalendarToday = () => {
  const { user } = useUserContext()

  const { data = [], isLoading } = useQueryHorariosControllerShow({ id_func: user?.id })

  if (isLoading) {
    return (
      <Grid gap={4} overflow="auto" p={3}>
        <Skeleton h={93} borderRadius={16} />
        <Skeleton h={93} borderRadius={16} />
        <Skeleton h={93} borderRadius={16} />
      </Grid>
    )
  }

  return (
    <>
      <Grid gap={4} overflow="auto" p={3}>
        {data?.length ? (
          data.map((item) => <RstScheduleTime key={item.id} item={item} color={item.cliente ? 'whatsapp' : 'gray'} />)
        ) : (
          <p>Nenhum horário para hoje</p>
        )}
      </Grid>
    </>
  )
}

export default DashboardCalendarToday
