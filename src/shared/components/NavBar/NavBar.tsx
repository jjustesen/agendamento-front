import React from 'react'
import { useMobileContext } from 'shared/providers/isMobile'
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
  const { isMobile } = useMobileContext()

  return isMobile ? <RstNavBarMobile routes={routes} /> : <RstNavBarDesktop routes={routes} />
}

export default RstNavBar
