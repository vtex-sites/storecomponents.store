import { Carousel, LocalizedLink } from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import React from 'react'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfProducts'
import RichTextRow from './RichTextRow'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { content, vtex } }) => (
  <>
    <Carousel
      {...content?.blocks[0]?.props}
      height="540px"
      width="360px"
      link={LocalizedLink}
    />
    <RichTextRow />
    <Container>
      <ShelfProducts
        {...content?.blocks[1]?.props}
        products={vtex.products}
        showArrows
        showDots
      />
    </Container>
  </>
)

export default Fold
