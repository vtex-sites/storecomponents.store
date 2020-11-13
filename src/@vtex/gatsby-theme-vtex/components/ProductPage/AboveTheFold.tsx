/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import ProductImageGallery from '@vtex/gatsby-theme-vtex/src/components/ProductImageGallery'
import { useDetailsImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useDetailsImage'
import { useGalleryItems } from '@vtex/gatsby-theme-vtex/src/sdk/product/useGalleryItems'
import { ProductPageProps } from '@vtex/gatsby-theme-vtex/src/templates/product'
import {
  Card,
  Flex,
  Grid,
  Breadcrumb,
  ProductDetailsTitle,
} from '@vtex/store-ui'
import React, { FC, Suspense } from 'react'
import { isServer } from '@vtex/gatsby-theme-vtex/src/utils/env'

import AsyncInfoContainer from './Above/Async/Container'
import AsyncInfoPreview from './Above/Async/Preview'
import AsyncInfo from './Above/Async'

const variant = 'default'

const AboveTheFold: FC<ProductPageProps> = ({
  data: {
    vtex: { product },
  },
  slug,
}) => {
  const {
    productName,
    categoryTree: breadcrumb = [],
    items: [{ images, videos }],
  } = product as any

  const imageItems = useDetailsImage(images)

  const galleryItems = useGalleryItems(imageItems, videos, productName)

  return (
    <Flex variant="productPage.container">
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />
        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, 2]}>
          <ProductImageGallery allItems={galleryItems} />

          <Card>
            <ProductDetailsTitle variant={variant}>
              {productName}
            </ProductDetailsTitle>

            <AsyncInfoContainer>
              {isServer ? null : (
                <Suspense fallback={<AsyncInfoPreview />}>
                  <AsyncInfo slug={slug!} />
                </Suspense>
              )}
            </AsyncInfoContainer>
          </Card>
        </Grid>
      </Container>
    </Flex>
  )
}

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/AboveTheFold'

export default AboveTheFold
