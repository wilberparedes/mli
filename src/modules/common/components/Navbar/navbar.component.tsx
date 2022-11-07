import { Link } from 'react-router-dom'

import { Container, Content, Logo } from './navbar.styles'
import logo from '../../../../assets/images/logo_mli.png'
import { SearchBar } from '../SearchBar/searchbar.component'

export const Navbar = () => {
  return (
    <Container>
      <Content>
        <Link to='/'>
          <Logo src={logo} alt='logo' />
        </Link>
        <SearchBar />
      </Content>
    </Container>
  )
}
