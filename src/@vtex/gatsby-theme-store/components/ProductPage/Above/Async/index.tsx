import React, { FC } from 'react'
import { useAsyncProduct } from '@vtex/gatsby-theme-store/src/components/ProductPage/useAsyncProduct'
import { useBestSeller } from '@vtex/gatsby-theme-store/src/sdk/product/useBestSeller'
import { useSku } from '@vtex/gatsby-theme-store/src/sdk/product/useSku'
import { Divider, ProductDetailsReference } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

import BuyButton from '../../../BuyButton'
import Offer from './Offer'
import Social from './Social'

type Item = {
  itemId: string
  sellers: Array<{
    sellerId: string
    commercialOffer: {
      availableQuantity: number
      price: number
    }
  }>
}

interface Props {
  slug?: string
}

type Product = {
  product: {
    productReference: string
    items: Item[]
  }
}

const variant = 'default'

const Async: FC<Props> = ({ slug }) => {
  const { product } = (useAsyncProduct({ slug }) as unknown) as Product
  const [sku] = useSku<Item>(product)
  const { commercialOffer } = useBestSeller(sku)
  const { formatMessage } = useIntl()
  const { productReference } = product

  if (product === null || sku === null) {
    return null
  }

  return (
    <>
      <Offer variant="productDetails" commercialOffer={commercialOffer} />

      <Divider />

      <ProductDetailsReference variant={variant}>
        {formatMessage({ id: 'productDetails.reference' })}: {productReference}
      </ProductDetailsReference>
      <BuyButton sku={sku} />
      <Social />
    </>
  )
}

export default Async
