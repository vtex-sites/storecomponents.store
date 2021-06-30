import React from 'react'
import { graphql } from 'gatsby'
import DefaultProductView from '@vtex/gatsby-theme-store/src/views/product/index'
import type { FC } from 'react'

import type { ProductViewFragment_ProductFragment } from './__generated__/ProductViewFragment_product.graphql'

export interface ProductViewProps {
  slug: string
  product: ProductViewFragment_ProductFragment
}

const ProductView: FC<ProductViewProps> = (props: any) => (
  <DefaultProductView {...props} />
)

export const fragment = graphql`
  fragment ProductViewFragment_product on StoreProduct {
    ...StructuredProductFragment_product
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
