import React from 'react'
import { Carousel, LocalizedLink, Container } from '@vtex/store-ui'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'

import ProductSummary from '../../components/ProductSummary'
import Shelf from '../../../../components/product/ProductSlider'
import RichTextRow from '../../../../components/common/RichTextRow'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'

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
      <Shelf
        {...content?.blocks[1]?.props}
        products={vtex.products}
        showArrows
        showDots
        ProductSummary={ProductSummary}
      />
    </Container>
  </>
)

export default Fold
