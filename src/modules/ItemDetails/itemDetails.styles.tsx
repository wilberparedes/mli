import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { Flex } from '../../styles/global-styles.component'

interface Props {
  margin?: string
}

export const Column = styled(Flex)`
  flex-direction: column;
  margin: ${(props: Props) => props.margin ?? '0px'};
`

export const Content = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 32px;
`

export const ContainerImage = styled.div`
  align-items: center;
  height: 500px;
  overflow: hidden;
  width: 680px;
`

export const Thumbnail = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`

export const ContainerLeft = styled(Column)`
  flex: 0.7;
`

export const ContainerRight = styled(Column)`
  flex: 0.3;
`

export const ContentPrice = styled.div`
  padding: 32px 0px;
`
