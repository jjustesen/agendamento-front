import { Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import RstNavBar from 'shared/components/NavBar'

import DashboardDesktop from './DashboardDesktop'
import DashboardMobile from './DashboardMobile'

const Dashboard = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)')
  console.log(isMobile)
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }}>
      <RstNavBar />
      {isMobile ? <DashboardMobile /> : <DashboardDesktop />}
    </Flex>
  )
}

export default Dashboard
