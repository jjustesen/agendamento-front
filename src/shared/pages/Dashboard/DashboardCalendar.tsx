import { Flex, Grid, Input } from '@chakra-ui/react'
import React from 'react'
import moment from 'moment'

const DashboardCalendar = () => {
  const [selectDate, setSelectDate] = React.useState(moment().format('YYYY-MM-DD'))
  return (
    <>
      <Flex mb={4} p={3}>
        <Input type="date" value={selectDate} onChange={({ target }) => setSelectDate(target.value)} />
      </Flex>

      <Grid gap={4} overflow="auto" p={3}></Grid>
    </>
  )
}

export default DashboardCalendar
