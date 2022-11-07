import { Outlet } from 'react-router-dom'

import { Navbar } from '../common/components'
import { Container } from './dashboard.styles'

export const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}
