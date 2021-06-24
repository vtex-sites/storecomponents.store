import React from 'react'
import {
  useBestSeller,
  useDetailsImages,
  useSku,
} from '@vtex/gatsby-theme-store'
import { Divider, ProductDetailsReference } from '@vtex/store-ui'
import { FormattedMessage } from 'react-intl'
import type { FC } from 'react'

import { useAsyncProduct } from '../../useAsyncProduct'
import BuyButton from '../../../../../components/ui/BuyButton/BuyButton.client'
import Offer from '../../../../../components/common/Offer'
import Social from '../../../../../components/common/Social'

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
  referenceId: Array<{ value: string | null | undefined }> | null | undefined
  name: string
}

interface Props {
  slug: string
}

type Product = {
  product: {
    id: string
    categoryTree: Array<{ name: string }>
    brand: string
    productReference: string | null | undefined
    items: Item[]
    productName: string
  }
}

const variant = 'default'

const Async: FC<Props> = ({ slug }) => {
  const { product } = useAsyncProduct({
    slug,
    regionId: undefined,
  }) as Product

  const [sku] = useSku<Item>(product)
  const { commercialOffer } = useBestSeller(sku)
  const { productReference } = product
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
        <FormattedMessage id="productDetails.reference" />: {productReference}
      </ProductDetailsReference>
      {isAvailable && <BuyButton sku={itemSku} product={product} />}
      <Social />
    </>
  )
}

export default Async
