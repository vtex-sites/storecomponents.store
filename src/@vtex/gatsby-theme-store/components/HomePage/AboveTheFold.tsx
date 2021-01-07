import Carousel from '@vtex/gatsby-theme-store/src/components/Carousel'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'

import { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import RichTextRow from './RichTextRow'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { vtexCmsPageContent } }) => {
  return (
    <>
      <Carousel
        {...vtexCmsPageContent?.blocks[0]?.props}
        height="540px"
        width="360px"
      />
      <RichTextRow />
    </>
  )
}

export default Fold
