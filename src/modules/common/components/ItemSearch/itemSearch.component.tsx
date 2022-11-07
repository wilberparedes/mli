import { FC } from 'react'

import { ItemSearchProps } from './itemSearch.props'
import {
  Card,
  ContainerLeft,
  ContainerRight,
  ContainerTitle,
  Divider,
  Icon,
  Thumbnail,
} from './itemSearch.styles'
import shipping from '../../../../assets/images/ic_shipping.png'
import { colors } from '../../../../styles/colors'
import { Text } from '../Text'
import { Flex1 } from '../../../../styles/global-styles.component'
import { formatPrice } from '../../../../utils/common'

export const ItemSearch: FC<ItemSearchProps> = ({
  product,
  onClick,
}): JSX.Element => {
  return (
    <>
      <Card onClick={onClick}>
        <Thumbnail src={product.thumbnail} alt={product.title} />
        <Flex1>
          <ContainerLeft>
            <ContainerTitle>
              <Text color={colors.black} size={'24px'}>
                {formatPrice(product.price, product.currency_id)}
              </Text>
              {Boolean(product?.shipping?.free_shipping) && (
                <Icon src={shipping} alt='shipping' />
              )}
            </ContainerTitle>
            <Text color={colors.grayDark} size={'18px'}>
              {product.title}
            </Text>
          </ContainerLeft>
          <ContainerRight>
            <Text color={colors.grayDark} size={'12px'}>
              {product.address.state_name}
            </Text>
          </ContainerRight>
        </Flex1>
      </Card>
      <Divider />
    </>
  )
}
