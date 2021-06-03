import { Container } from '@vtex/store-ui'
import React from 'react'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'

import Carousel from '../../../../components/common/Carousel'
import RichTextRow from '../../../../components/common/RichTextRow'
import Shelf from '../../../../components/product/ProductSlider'
import ProductSummary from '../../components/ProductSummary'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { content, vtex } }) => (
  <>
    <Carousel {...content?.blocks[0]?.props} showArrows showDots />
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
