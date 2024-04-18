import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        
        <Outlet />
      </section>
    </Container>
  )
}
