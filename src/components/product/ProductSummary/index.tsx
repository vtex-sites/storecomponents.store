import { useLink, useSummaryImage } from '@vtex/gatsby-theme-store'
import {
  ProductSummaryContainer,
  ProductSummaryImage,
  ProductSummaryTitle,
} from '@vtex/store-ui'
import React from 'react'
import type { Props } from '@vtex/gatsby-theme-store/src/components/ProductSummary'
import type { FC } from 'react'

import Offer from './Offer'
import OfferPreview from './OfferPreview'
import BuyButton from '../../ui/BuyButton'

export type Item = {
  itemId: string
  sellers: Array<{
    sellerId: string
    commercialOffer: {
      availableQuantity: number
      price: number
      listPrice: number
      maxInstallments: Array<{
        value: number
        numberOfInstallments: number
      }>
      teasers: Array<{ name?: string }>
    }
  }>
  images: Array<{ imageUrl: string; imageText: string }>
}

type Product = {
  productName: string
  items: Item[]
}

const ProductSummary: FC<Props> = ({
  product,
  loading = 'lazy',
  variant = 'default',
}) => {
  const {
    items: [sku],
    productName,
  } = (product as unknown) as Product

  const {
    images: [{ imageUrl, imageText }],
    sellers,
  } = sku

  const linkProps = useLink(product)
  const imgProps = useSummaryImage(imageUrl)

  const itemSku = {
    ...sku,
    images: [{ imageUrl: imgProps.src }],
  }

  return (
    <ProductSummaryContainer {...linkProps} variant={variant}>
      <ProductSummaryImage
        alt={imageText ?? 'Product Image'}
        loading={loading}
        variant={variant}
        {...imgProps}
      />
      <ProductSummaryTitle variant={variant}>{productName}</ProductSummaryTitle>

      {sellers === undefined ? (
        <OfferPreview />
      ) : sellers.length > 0 ? (
        <Offer
          variant="productSummary"
          commercialOffer={sellers[0].commercialOffer}
        />
      ) : null}

      <BuyButton sku={itemSku} productName={productName} />
    </ProductSummaryContainer>
  )
}

export default ProductSummary
