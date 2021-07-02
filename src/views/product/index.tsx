import React, { lazy } from 'react'
import { graphql } from 'gatsby'
import { useProductPixelEffect } from '@vtex/gatsby-theme-store'
import { SuspenseViewport } from '@vtex/store-ui'
import type { FC } from 'react'

import Seo from './Seo'
import AboveTheFold from './components/AboveTheFold'
import BelowTheFoldPreview from './components/BelowTheFoldPreview'
import type { ProductViewFragment_ProductFragment } from './__generated__/ProductViewFragment_product.graphql'

const loader = () => import('./components/BelowTheFold')
const BelowTheFold = lazy(loader)

export interface ProductViewProps {
  slug: string
  product: ProductViewFragment_ProductFragment
}

const ProductView: FC<ProductViewProps> = (props) => {
  useProductPixelEffect(props as any)

  return (
    <>
      <Seo {...props} />
      <AboveTheFold {...props} />
      <SuspenseViewport fallback={<BelowTheFoldPreview />}>
        <BelowTheFold {...props} />
      </SuspenseViewport>
    </>
  )
}

export const fragment = graphql`
  fragment ProductViewFragment_product on StoreProduct {
    ...SeoFragment_product
    id: productId
    productReference
    productName
    linkText
    items {
      name
      complementName
      itemId
      referenceId {
        value: Value
      }
      images {
        imageUrl
        imageText
      }
      videos {
        videoUrl
      }
      sellers {
        commercialOffer: commertialOffer {
          price: Price
          listPrice: ListPrice
          availableQuantity: AvailableQuantity
          priceValidUntil: PriceValidUntil
        }
      }
    }
    productClusters {
      id
      name
    }
    properties {
      name
      originalName
      values
    }
  }
`

export default ProductView
