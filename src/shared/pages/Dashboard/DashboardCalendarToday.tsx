import { Grid } from '@chakra-ui/react'
import React from 'react'
import RstScheduleTime from 'shared/components/ScheduleTime'

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

const DashboardCalendarToday = () => {
  return (
    <>
      <Grid gap={4} overflow="auto" p={3}>
        {times.map((time) => (
          <RstScheduleTime key={time.id} {...time} color="whatsapp" />
        ))}
      </Grid>
    </>
  )
}

export default DashboardCalendarToday
