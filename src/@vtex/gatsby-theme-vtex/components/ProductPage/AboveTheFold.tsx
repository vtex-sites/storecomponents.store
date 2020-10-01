/* eslint-disable react/jsx-pascal-case */
import BuyButton from '@vtex/gatsby-theme-vtex/src/components/BuyButton'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import OfferPreview from '@vtex/gatsby-theme-vtex/src/components/Offer/Preview'
import ProductDetailsImage from '@vtex/gatsby-theme-vtex/src/components/ProductDetailsImage'
import SEO from '@vtex/gatsby-theme-vtex/src/components/SEO/ProductDetails'
import SuspenseSSR from '@vtex/gatsby-theme-vtex/src/components/Suspense/SSR'
import { Props } from '@vtex/gatsby-theme-vtex/src/templates/product'
import { Breadcrumb, Card, Flex, Grid, Heading } from '@vtex/store-ui'
import React, { FC, lazy } from 'react'

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/AboveTheFold'

const AsyncOffer = lazy(() =>
  import('@vtex/gatsby-theme-vtex/src/components/Offer/Async')
)

const AboveTheFold: FC<Props> = ({
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
        <SEO title={productName} slug={slug!} />
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
            <SuspenseSSR fallback={<OfferPreview variant="detail" />}>
              <AsyncOffer slug={slug!} variant="detail" />
            </SuspenseSSR>
            <BuyButton sku={items[0] as any} />
          </Card>
        </Grid>
      </Container>
    </Flex>
  )
}

export default AboveTheFold
