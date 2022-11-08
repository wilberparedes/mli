export interface Address {
  city_id: null | string
  city_name: string
  state_id: string
  state_name: string
}

export interface Price {
  amount: number
  currency: string
  decimals: number
}

export interface Product {
  condition: string
  free_shipping: boolean
  id: string
  picture: string
  price: Price
  title: string
  address?: Address
  sold_quantity?: string
}

export interface ItemSearchProps {
  onClick?: () => void
  product: Product
}
