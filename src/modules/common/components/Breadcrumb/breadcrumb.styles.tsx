import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { TextProps } from './breadcrumb.props'

export const Content = styled.div`
  padding: 16px 0px;
`

export const Ol = styled.ol`
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  display: inline-block;
  list-style: none;
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: ${(props: TextProps) => (props.bold ? 'bold' : 'normal')};
  color: ${colors.gray};
`

export const Chevron = styled(Text)`
  padding: 0 6px;
`

export const Active = styled(Text)`
  font-weight: bold;
`
