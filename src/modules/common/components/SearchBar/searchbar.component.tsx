import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Input, Container, Icon, ButtonIcon, Form } from './searchbar.styles'
import icon from '../../../../assets/images/ic_Search.png'

export const SearchBar = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const queryGet = params.get('search')

  const [query, setQuery] = useState<string | undefined>(queryGet ?? '')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/items?search=${query}`)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Nunca dejes de buscar'
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <ButtonIcon type='submit'>
          <Icon src={icon} />
        </ButtonIcon>
      </Form>
    </Container>
  )
}
