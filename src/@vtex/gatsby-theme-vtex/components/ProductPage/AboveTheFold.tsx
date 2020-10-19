/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import SuspenseSSR from '@vtex/gatsby-theme-vtex/src/components/Suspense/SSR'
import ProductImageGallery from '@vtex/gatsby-theme-vtex/src/components/ProductImageGallery'
import { useDetailsImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useDetailsImage'
import { ProductPageProps } from '@vtex/gatsby-theme-vtex/src/templates/product'
import {
  Card,
  Flex,
  Grid,
  Breadcrumb,
  ProductDetailsTitle,
} from '@vtex/store-ui'
import React, { FC, lazy } from 'react'

import AsyncInfoContainer from './Above/Async/Container'
import AsyncInfoPreview from './Above/Async/Preview'

const AsyncInfo = lazy(() => import('./Above/Async/index'))

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
    items: [{ images }],
  } = product as any

  const imageItems = useDetailsImage(images)

  return (
    <Flex variant="productPage.container">
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />
        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, 2]}>
          <ProductImageGallery allItems={imageItems} />

          <Card>
            <ProductDetailsTitle variant={variant}>
              {productName}
            </ProductDetailsTitle>

            <AsyncInfoContainer>
              <SuspenseSSR fallback={<AsyncInfoPreview />}>
                <AsyncInfo slug={slug!} />
              </SuspenseSSR>
            </AsyncInfoContainer>
          </Card>
        </Grid>
      </Container>
    </Flex>
  )
}

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/AboveTheFold'

export default AboveTheFold
