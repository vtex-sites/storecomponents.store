import { useDetailsVideos } from '@vtex/gatsby-theme-store'
import {
  Breadcrumb,
  Card,
  Container,
  Flex,
  Grid,
  ProductDetailsTitle,
  SuspenseViewport,
} from '@vtex/store-ui'
import React, { lazy, useMemo } from 'react'
import ImageGallery from 'src/components/product/ImageGallery'
import imageConf from 'src/images/config'
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import type { FC } from 'react'

import AsyncInfoContainer from './Above/Async/Container'
import AsyncInfoPreview from './Above/Async/Preview'
import type { ProductViewProps } from '..'

const loadAsyncInfo = () => import('./Above/Async')
const AsyncInfo = lazy(loadAsyncInfo)

const variant = 'default'

const AboveTheFold: FC<ProductViewProps> = ({ product, slug }: any) => {
  const {
    productName,
    categoryTree: breadcrumb = [],
    items: [{ images, videos }],
  } = product

  const getImageData = useGetThumborImageData()

  const imageItems = useMemo(
    () =>
      images.map((x: any) => ({
        type: 'image' as const,
        props: {
          image: getImageData({
            ...imageConf['product.details'],
            baseUrl: x.imageUrl,
          }),
          alt: x.imageText,
        },
      })),
    [getImageData, images]
  )

  const videoItems = useDetailsVideos(videos, productName)
  const galleryItems = [...imageItems, ...videoItems]

  return (
    <Flex variant="productPage.container">
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />
        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, '60% 40%']}>
          <ImageGallery allItems={galleryItems} />

          <Card>
            <ProductDetailsTitle variant={variant}>
              {productName}
            </ProductDetailsTitle>

            <AsyncInfoContainer>
              <SuspenseViewport
                preloader={loadAsyncInfo}
                fallback={<AsyncInfoPreview />}
              >
                <AsyncInfo slug={slug} />
              </SuspenseViewport>
            </AsyncInfoContainer>
          </Card>
        </Grid>
      </Container>
    </Flex>
  )
}

export default AboveTheFold
