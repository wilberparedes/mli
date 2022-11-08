import { useParams } from 'react-router-dom'

import { colors } from '../../styles/colors'
import { Button, Container, Flex } from '../../styles/global-styles.component'
import { formatPrice } from '../../utils/common'
import { newProduct, error } from '../../utils/constants'
import { Breadcrumb, Text } from '../common/components'
import {
  Column,
  ContainerImage,
  ContainerLeft,
  ContainerRight,
  Content,
  ContentPrice,
  Thumbnail,
} from './itemDetails.styles'
import { useItemDetails } from './request'

export const ItemDetails = () => {
  const { productId } = useParams()
  const { data: product, isLoading, status } = useItemDetails({ productId })

  if ((status) === error) return <p>Error :(</p>

  return (
    <Container>
      {isLoading ? (
        <Text>Loading data...</Text>
      ) : (
        <>
          <Breadcrumb />
          <Content>
            <div>
              <Flex>
                <ContainerLeft>
                  <ContainerImage>
                    <Thumbnail src={product.item.picture} alt={product.item.title} />
                  </ContainerImage>
                  <Column margin='32px 0px'>
                    <Text
                      size={'28px'}
                      color={colors.black}
                      marginBotton={'32px'}
                    >
                      Descripción del producto
                    </Text>
                    <Text size={'16px'} color={colors.gray}>
                      {product.item.description}
                    </Text>
                  </Column>
                </ContainerLeft>
                <ContainerRight>
                  <Text
                    size={'14px'}
                    color={colors.black}
                    marginBotton={'16px'}
                  >
                    {product.item.condition === newProduct ? 'Nuevo' : 'Usado'} -{' '}
                    {product.item.sold_quantity} vendidos
                  </Text>
                  <Text size={'24px'} color={colors.black} fontWeight='600'>
                    {product.item.title}
                  </Text>
                  {Boolean(product.item?.price?.amount) && (
                    <ContentPrice>
                      <Text size={'46px'} color={colors.black} fontWeight='600'>
                        {formatPrice(product.item.price.amount, product.item.price.currency)}
                      </Text>
                    </ContentPrice>
                  )}
                  <Button>Comprar</Button>
                </ContainerRight>
              </Flex>
            </div>
          </Content>
        </>
      )}
    </Container>
  )
}
