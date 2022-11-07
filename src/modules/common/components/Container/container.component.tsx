import { FC } from 'react'

import { ContainerProps } from './container.props'
import { ScContainer } from './container.styles'

export const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return <ScContainer>{children}</ScContainer>
}
