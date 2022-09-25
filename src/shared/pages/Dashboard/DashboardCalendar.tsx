import { Flex, Grid, Input } from '@chakra-ui/react'
import React from 'react'
import RstScheduleTime from 'shared/components/ScheduleTime'
import moment from 'moment'
const times = [
  {
    id: 'asd',
    start: '08:00',
    end: '08:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '09:00',
    end: '09:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  },
  {
    id: 'asd',
    start: '10:00',
    end: '10:45',
    title: 'Corte de cabelo',
    client: 'Johannes Justesen'
  }
]

const DashboardCalendar = () => {
  const [selectDate, setSelectDate] = React.useState(moment().format('YYYY-MM-DD'))
  return (
    <>
      <Flex mb={4} p={3}>
        <Input type="date" value={selectDate} onChange={({ target }) => setSelectDate(target.value)} />
      </Flex>

      <Grid gap={4} overflow="auto" p={3}>
        {times.map((time) => (
          <RstScheduleTime key={time.id} color="gray" {...time} />
        ))}
      </Grid>
    </>
  )
}

export default DashboardCalendar
