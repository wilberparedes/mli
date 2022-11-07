import { FC } from 'react'
import { colors } from '../../../../styles/colors'
import { FontProps } from './text.props'
import { ScText } from './text.style'

export const Text: FC<FontProps> = ({
  children,
  size = '12px',
  color = colors.black,
  fontWeight = '400',
  ...props
}): JSX.Element => (
  <ScText {...props} size={size} color={color} fontWeight={fontWeight}>
    {children}
  </ScText>
)
