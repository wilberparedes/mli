import styled from 'styled-components'
import { FontProps } from './text.props'

export const ScText = styled.span`
  color: ${(props: FontProps) => props.color};
  font-size: ${(props: FontProps) => props.size};
  font-weight: ${(props: FontProps) => props.fontWeight};
  margin-bottom: ${(props: FontProps) => props.marginBotton};
`
