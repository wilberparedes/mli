import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Container } from '../../styles/global-styles.component'
import { orderArray } from '../../utils/common'
import {  error } from '../../utils/constants'
import { Breadcrumb, Text } from '../common/components'
import { ItemSearch } from '../common/components/ItemSearch'
import { Product } from '../common/components/ItemSearch/itemSearch.props'
import { useSearch } from './request'
import { Content } from './search.styles'

export const Search = () => {
  const [categories, setCategories] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get('search')

  const { data: productList, isLoading, status } = useSearch({ query })

  useEffect(() => {
    if (productList?.categories?.values?.length) {
      categoryBreadcrumb()
    }
  }, [productList])

  const categoryBreadcrumb = () => {
    const categories = productList.categories
    const maxResult = categories?.values?.length
      ? orderArray(categories?.values, 'results')
      : []

    setCategories(maxResult.slice(0, 3))
  }

  if (status === error) return <p>Error :(</p>

  return (
    <Container>
      {isLoading ? (
        <Text>Loading data...</Text>
      ) : (
        <>
          <Breadcrumb categories={categories} />
          <Content>
            {!isLoading &&
              productList?.items
                .slice(0, 4)
                .map((product: Product) => (
                  <ItemSearch
                    product={product}
                    key={`${product.id}`}
                    onClick={() => navigate(`${product.id}`)}
                  />
                ))}
          </Content>
        </>
      )}
    </Container>
  )
}
