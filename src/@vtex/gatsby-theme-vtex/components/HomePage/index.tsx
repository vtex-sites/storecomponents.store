import { useIntl } from '@vtex/gatsby-plugin-i18n'
import React, { FC, Fragment, lazy, Suspense } from 'react'

import { HomePageQueryQuery } from '@vtex/gatsby-theme-vtex/src/__generated__/HomePageQuery.graphql'
import Carousel from '@vtex/gatsby-theme-vtex/src/components/Carousel'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf'
import CAROUSEL_ITEMS from '@vtex/gatsby-theme-vtex/src/components/HomePage/carousel.json'

const loader = () =>
  import('@vtex/gatsby-theme-vtex/src/components/HomePage/Fold')

const Fold = lazy(loader)

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
        <Suspense fallback={null}>
          <Fold />
        </Suspense>
      </Container>
    </Fragment>
  )
}

export default HomeBlocks
