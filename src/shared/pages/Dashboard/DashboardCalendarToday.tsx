import { Grid } from '@chakra-ui/react'
import React from 'react'
import RstScheduleTime from 'shared/components/ScheduleTime'
import { IHorariosControllerResponse } from 'shared/service/HorariosController'

interface iProps {
  data: IHorariosControllerResponse[]
}

const DashboardCalendarToday = ({ data }: iProps) => {
  console.log(data)
  return (
    <>
      <Grid gap={4} overflow="auto" p={3}>
        {data?.length ? (
          data.map((item) => <RstScheduleTime key={item.id} item={item} color="whatsapp" />)
        ) : (
          <p>Nenhum horário para hoje</p>
        )}
      </Grid>
    </>
  )
}

export default DashboardCalendarToday
