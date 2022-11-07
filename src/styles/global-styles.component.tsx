import styled from 'styled-components'
import { colors } from './colors'

export const Button = styled.button`
  background-color: ${colors.blue};
  border-radius: 4px;
  border: 0px;
  color: ${colors.white};
  cursor: pointer;
  padding: 12px;
`

export const Flex = styled.div`
  display: flex;
`

export const Flex1 = styled(Flex)`
  flex: 1;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1184px;
`
