/** @jsx jsx */
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import {
  Box,
  SliderArrowLeft,
  SliderArrowRight,
  useSlider,
  jsx,
} from '@vtex/store-ui'
import { Link } from 'gatsby'
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import imagesConf from 'src/images/images.config'
import type { FC } from 'react'

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
  const pages = useMemo(() => new Array(totalPages).fill(0), [totalPages])

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
        <Box
          sx={styles.paginationDots}
          role="group"
          aria-label="Slider pagination dots"
        >
          {pages.map((_, index) => (
            <Box
              sx={
                index === page
                  ? styles.paginationDots.activeDot
                  : styles.paginationDots.dot
              }
              key={index}
              tabIndex={0}
              onKeyDown={() => setPage(index)}
              onClick={() => setPage(index)}
              role="button"
              aria-label={`Dot ${index + 1} of ${totalPages}`}
              data-testid="paginationDot"
            />
          ))}
        </Box>
      ) : null}
    </Box>
  )
}

export default Carousel
