import React, { FC } from 'react'
import { Props } from '@vtex/gatsby-theme-store/src/components/ProductSummary'
import { useLink } from '@vtex/gatsby-theme-store/src/sdk/product/useLink'
import { useSummaryImage } from '@vtex/gatsby-theme-store/src/sdk/product/useSummaryImage'
import {
  Skeleton,
  OfferContainer,
  ProductSummaryContainer,
  ProductSummaryImage,
  ProductSummaryTitle,
} from '@vtex/store-ui'

import BuyButton from '../BuyButton'
import Offer from './Offer'

const OfferPreview: FC = () => (
  <OfferContainer variant="productSummary">
    <Skeleton height="25px" />
    <Skeleton height="40px" />
    <Skeleton height="45px" />
  </OfferContainer>
)

const ProductSummary: FC<Props> = ({
  product,
  loading = 'lazy',
  variant = 'default',
}) => {
  const {
    items: [sku],
    productName,
  } = product as any

  const {
    images: [{ imageUrl, imageText }],
    sellers,
  } = sku

  const linkProps = useLink(product)
  const imgProps = useSummaryImage(imageUrl)

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

      <BuyButton sku={sku} />
    </ProductSummaryContainer>
  )
}

export { fragment } from '@vtex/gatsby-theme-store/src/components/ProductSummary/index'

export default ProductSummary
