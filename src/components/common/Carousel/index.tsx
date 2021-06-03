/** @jsx jsx */
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import {
  Box,
  SliderPaginationDots,
  SliderArrowLeft,
  SliderArrowRight,
  useSlider,
  jsx,
} from '@vtex/store-ui'
import { Link } from 'gatsby'
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import type { FC } from 'react'

import imagesConf from '../../../images.config'
import styles from './styles.json'

interface Item {
  href: string
  alt: string
  sources: Array<{
    media: string
    srcSet: string
  }>
}

interface Props {
  allItems: Item[]
  loading?: 'lazy' | 'eager'
  showArrows?: boolean
  showDots?: boolean
  autoplay?: number
}

const useImages = (item: Item) => {
  const getThumborImageData = useGetThumborImageData()

  return useMemo(() => {
    const {
      sources: [desktop, mobile],
    } = item

    const desktopImage = getThumborImageData({
      baseUrl: desktop.srcSet,
      ...imagesConf['carousel.desktop'],
    })

    const mobileImage = getThumborImageData({
      baseUrl: mobile.srcSet,
      ...imagesConf['carousel.mobile'],
    })

    return withArtDirection(mobileImage, [
      {
        media: desktop.media,
        image: desktopImage,
      },
    ])
  }, [item, getThumborImageData])
}

const Carousel: FC<Props> = ({
  allItems,
  showArrows = true,
  showDots = true,
  autoplay,
}) => {
  const {
    page,
    items,
    totalPages,
    setPage,
    setNextPage,
    setPreviousPage,
    dragHandlers,
  } = useSlider({
    allItems,
    pageSize: 1,
    autoplay,
  })

  const [item] = items
  const images = useImages(item)

  return (
    <Box sx={styles}>
      <Box {...dragHandlers}>
        {showArrows ? (
          <SliderArrowLeft
            sx={styles.arrow.left}
            aria-label="Previous Carousel Image"
            onClick={() => setPreviousPage()}
          />
        ) : null}
        <Link to={item.href}>
          <GatsbyImage
            sx={styles.image}
            alt={item.alt}
            image={images}
            loading="eager"
            objectFit="cover"
          />
        </Link>
        {showArrows ? (
          <SliderArrowRight
            sx={styles.arrow.right}
            aria-label="Next Carousel Image"
            onClick={() => setNextPage()}
          />
        ) : null}
      </Box>
      {showDots ? (
        <SliderPaginationDots
          sx={styles.paginationDots}
          onSelect={setPage}
          selectedPage={page}
          totalPages={totalPages}
        />
      ) : null}
    </Box>
  )
}

export default Carousel
