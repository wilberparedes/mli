import styled from 'styled-components'

import { colors } from '../../../../styles/colors'

export const Container = styled.div`
  display: block;
  background-color: ${colors.primary};
  height: 60px;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`

export const Logo = styled.img`
  height: 34px;
`
