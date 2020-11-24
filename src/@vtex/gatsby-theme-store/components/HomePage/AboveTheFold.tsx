import Carousel from '@vtex/gatsby-theme-store/src/components/Carousel'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'

import CAROUSEL_ITEMS from './carousel.json'
import RichTextRow from './RichTextRow'

type Props = PageProps<unknown>

const Fold: FC<Props> = () => (
  <>
    <Carousel allItems={CAROUSEL_ITEMS} />
    <RichTextRow />
  </>
)

export default Fold
