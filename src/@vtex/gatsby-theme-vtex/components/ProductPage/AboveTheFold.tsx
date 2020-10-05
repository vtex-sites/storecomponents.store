/* eslint-disable react/jsx-pascal-case */
import React, { FC, lazy } from 'react'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import ProductDetailsImage from '@vtex/gatsby-theme-vtex/src/components/ProductDetailsImage'
import SuspenseSSR from '@vtex/gatsby-theme-vtex/src/components/Suspense/SSR'
import { ProductPageProps } from '@vtex/gatsby-theme-vtex/src/templates/product'
import { Breadcrumb, Card, Flex, Grid, Heading } from '@vtex/store-ui'

import AsyncInfoPreview from './Above/Async/Preview'
import AsyncInfoContainer from './Above/Async/Container'

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/AboveTheFold'

const AsyncInfo = lazy(() => import('./Above/Async/index'))

const AboveTheFold: FC<ProductPageProps> = ({
  data: {
    vtex: { product },
  },
  slug,
}) => {
  const { categoryTree: breadcrumb = [], productName, items } = product as any

  const [{ images }] = items
  const [{ imageUrl, imageText }] = images

  return (
    <Flex variant="productPage.container">
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />
        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, 2]}>
          <ProductDetailsImage
            src={imageUrl}
            alt={imageText}
            loading="eager" // Never lazy load image in product details
          />
          <Card>
            <Heading variant="productTitle" as="h1">
              {productName}
            </Heading>

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

export default AboveTheFold
