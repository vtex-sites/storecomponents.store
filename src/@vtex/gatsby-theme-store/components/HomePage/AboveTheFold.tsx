import Carousel from '@vtex/gatsby-theme-store/src/components/Carousel'
import Container from '@vtex/gatsby-theme-store/src/components/Container'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'

import { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfProducts'
import RichTextRow from './RichTextRow'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { vtexCmsPageContent, vtex } }) => (
  <>
    <Carousel
      {...vtexCmsPageContent?.blocks[0]?.props}
      height="540px"
      width="360px"
    />
    <RichTextRow />
    <Container>
      <ShelfProducts
        {...vtexCmsPageContent?.blocks[1]?.props}
        products={vtex.products}
        showArrows
        showDots
      />
    </Container>
  </>
)

export default Fold
