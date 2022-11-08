import { Product } from "../../common/components/ItemSearch/itemSearch.props"

export interface UseItemDetailsProps {
  onError?: () => void
  onSuccess?: () => void
  productId: string
}

export interface ProductDescription {
  plain_text: string
}


export interface ProductWithDescription extends Product {
  description?: string
}

export interface ResponseItemWithDescription  {
  item: ProductWithDescription
}