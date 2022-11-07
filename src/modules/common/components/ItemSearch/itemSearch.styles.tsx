import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { Flex } from '../../../../styles/global-styles.component'

export const Card = styled(Flex)`
  padding: 16px;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  margin-right: 16px;
  width: 180px;
  height: 180px;
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${colors.grayLight};
  margin: 0px 20px;
`

export const ContainerLeft = styled(Flex)`
  flex: 0.6;
  flex-direction: column;
`

export const ContainerTitle = styled(Flex)`
  margin-bottom: 32px;
  margin-top: 16px;
  align-items: center;
`

export const Icon = styled.img`
  margin-left: 16px;
  width: 24px;
  height: 24px;
`

export const ContainerRight = styled(Flex)`
  flex: 0.4;
  justify-content: center;
  margin-top: 32px;
`
