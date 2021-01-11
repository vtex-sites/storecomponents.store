import Container from '@vtex/gatsby-theme-store/src/components/Container'
import ProductImageGallery from '@vtex/gatsby-theme-store/src/components/ProductImageGallery'
import { useDetailsImages } from '@vtex/gatsby-theme-store/src/sdk/product/useDetailsImages'
import { useDetailsVideos } from '@vtex/gatsby-theme-store/src/sdk/product/useDetailsVideos'
import { ProductPageProps } from '@vtex/gatsby-theme-store/src/templates/product'
import {
  Card,
  Flex,
  Grid,
  Breadcrumb,
  ProductDetailsTitle,
} from '@vtex/store-ui'
import React, { FC, Suspense } from 'react'
import { isServer } from '@vtex/gatsby-theme-store/src/utils/env'

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

  const imageItems = useDetailsImages(images)
  const videoItems = useDetailsVideos(videos, productName)
  const galleryItems = [...imageItems, ...videoItems]

  return (
    <Flex variant="productPage.container">
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />
        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, '60% 40%']}>
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

export { fragment } from '@vtex/gatsby-theme-store/src/components/ProductPage/AboveTheFold'

export default AboveTheFold
