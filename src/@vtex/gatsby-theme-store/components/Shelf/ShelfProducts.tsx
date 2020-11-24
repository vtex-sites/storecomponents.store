import React, { FC, Suspense } from 'react'
import Shelf from '@vtex/gatsby-theme-store/src/components/Shelf/index'
import ShelfContainer from '@vtex/gatsby-theme-store/src/components/Shelf/Container'
import {
  useProductsShelf,
  ProductsShelfOptions,
} from '@vtex/gatsby-theme-store/src/sdk/shelf/useProductsShelf'
import { Center, Spinner } from '@vtex/store-ui'

export interface Props {
  title: string
  searchParams: ProductsShelfOptions
}

const pageSizes = [1, 3, 4]

const ShelfProductsAsync: FC<Props> = ({ title, searchParams }) => {
  const { products } = useProductsShelf(searchParams)

  if (!products) {
    return null
  }

  return <Shelf pageSizes={pageSizes} products={products} title={title} />
}

const ShelfProducts: FC<Props> = (props) => (
  <ShelfContainer>
    <Suspense
      fallback={
        <Center height="100%">
          <Spinner />
        </Center>
      }
    >
      <ShelfProductsAsync {...props} />
    </Suspense>
  </ShelfContainer>
)

export default ShelfProducts
