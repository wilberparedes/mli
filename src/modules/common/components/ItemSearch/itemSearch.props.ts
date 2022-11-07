export interface Shipping {
  free_shipping: boolean
}

export interface Address {
  city_id: null | string
  city_name: string
  state_id: string
  state_name: string
}

export interface Product {
  address: Address
  currency_id: string
  id: string
  price: number
  shipping: Shipping
  thumbnail: string
  title: string
}

export interface ItemSearchProps {
  onClick?: () => void
  product: Product
}
