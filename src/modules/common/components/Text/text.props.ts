import { HTMLAttributes } from 'react'

export interface FontProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: string
  fontWeight?: string
  marginBotton?: string
  size?: string
}

export type TextProps = FontProps
