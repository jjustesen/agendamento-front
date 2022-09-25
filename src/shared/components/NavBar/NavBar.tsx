import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import RstNavBarDesktop from './NavBarDesktop'
import RstNavBarMobile from './NavBarMobile'

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard'
  },
  {
    name: 'Perfil',
    path: '/profile'
  },
  {
    name: 'Perfil',
    path: '/profile'
  },
  {
    name: 'Perfil',
    path: '/profile'
  }
]

const RstNavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)')

  return isMobile ? <RstNavBarMobile routes={routes} /> : <RstNavBarDesktop routes={routes} />
}

export default RstNavBar
