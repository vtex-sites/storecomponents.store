import { useIntl } from '@vtex/gatsby-plugin-i18n'
import React, { FC, Fragment } from 'react'

import { HomePageQueryQuery } from '@vtex/gatsby-theme-vtex/src/__generated__/HomePageQuery.graphql'
import Carousel from '@vtex/gatsby-theme-vtex/src/components/Carousel'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Fold from '@vtex/gatsby-theme-vtex/src/components/HomePage/Fold'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf'

import CAROUSEL_ITEMS from '@vtex/gatsby-theme-vtex/src/components/HomePage/carousel.json'

interface Props {
  data: HomePageQueryQuery
}

const HomeBlocks: FC<Props> = ({ data }) => {
  const { formatMessage } = useIntl()

  return (
    <Fragment>
      <Carousel allItems={CAROUSEL_ITEMS} autoplayTimeout={5e3} autoplay />
      <Container>
        <Shelf
          products={data.vtex.productSearch!.products!}
          title={formatMessage({ id: 'shelf.title.0' })}
          showArrows
          showDots
          autoplay={false}
          pageSizes={[1, 3, 5]}
        />
        <Fold />
      </Container>
    </Fragment>
  )
}

export default HomeBlocks
