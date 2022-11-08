export interface TextProps {
  bold?: boolean
}

export interface Category {
  id: string
  name: string
}

export interface BreadcrumbProps {
  categories?: Category[]
}
