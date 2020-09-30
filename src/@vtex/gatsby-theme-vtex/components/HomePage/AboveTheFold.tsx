import Carousel from '@vtex/gatsby-theme-vtex/src/components/Carousel'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'

import CAROUSEL_ITEMS from './carousel.json'
import RichTextRow from './RichTextRow'

type Props = PageProps<unknown>

const Fold: FC<Props> = () => {
  if (true) {
    return (
      <>
        <Carousel allItems={CAROUSEL_ITEMS as any} autoplayTimeout={5e3} autoplay />
        <RichTextRow />
      </>
    )
  }
  return (
    <>
      <Carousel allItems={CAROUSEL_ITEMS} autoplayTimeout={5e3} autoplay />
      <RichTextRow />
    </>
  )
}

export default Fold
