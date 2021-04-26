import React from 'react'
import type { FC } from 'react'
import { useAsyncProduct } from '@vtex/gatsby-theme-store/src/components/ProductPage/useAsyncProduct'
import {
  useBestSeller,
  useDetailsImages,
  useSku,
} from '@vtex/gatsby-theme-store'
import { Divider, ProductDetailsReference } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

import BuyButton from '../../../../../../components/BuyButton/BuyButton.client'
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
  images?: Array<{ imageUrl: string; imageText: string }>
}

interface Props {
  slug?: string
}

type Product = {
  product: {
    productReference: string
    items: Item[]
    productName: string
  }
}

const variant = 'default'

const Async: FC<Props> = ({ slug }) => {
  const { product } = (useAsyncProduct({
    slug,
    regionId: null,
  }) as unknown) as Product

  const [sku] = useSku<Item>(product)
  const { commercialOffer } = useBestSeller(sku)
  const { formatMessage } = useIntl()
  const { productReference, productName } = product
  const [{ props: itemImgProps }] = useDetailsImages(sku.images)

  const isAvailable =
    commercialOffer.price > 0 && commercialOffer.availableQuantity > 0

  if (product === null || sku === null) {
    return null
  }

  const itemSku = {
    ...sku,
    images: [
      {
        imageUrl: itemImgProps.placeholderProps.srcSet,
      },
    ],
  }

  return (
    <>
      <Offer variant="productDetails" commercialOffer={commercialOffer} />

      <Divider />

      <ProductDetailsReference variant={variant}>
        {formatMessage({ id: 'productDetails.reference' })}: {productReference}
      </ProductDetailsReference>
      {isAvailable && <BuyButton sku={itemSku} productName={productName} />}
      <Social />
    </>
  )
}

export default Async
