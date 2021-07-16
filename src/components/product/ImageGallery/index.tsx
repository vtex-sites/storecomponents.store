/** @jsx jsx */
import { jsx, useSlider, YoutubeIframe, YoutubeThumb } from '@vtex/store-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import Bullets from 'src/components/ui/Bullets'
import Arrow from 'src/components/ui/Arrow'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import type { FC, ComponentPropsWithoutRef } from 'react'

import styles from './styles.json'

type ImageItem = {
  type: 'image'
  props: { image: IGatsbyImageData; alt: string }
}

type VideoItem = {
  type: 'video'
  props: ComponentPropsWithoutRef<typeof YoutubeIframe>
}

interface Props {
  allItems: Array<VideoItem | ImageItem>
  showArrows?: boolean
  showDots?: boolean
  autoplay?: number
}

const variant = 'productImageGallery'
const featuredVariant = `${variant}.featured`

const ProductImageGallery: FC<Props> = ({ allItems }) => {
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
  })

  // this is safe, since there is only one item per page
  const [item] = items

  return (
    <div sx={styles.container}>
      <div sx={styles.miniatureContainer}>
        {allItems.map((it, idx) => (
          <button
            key={`miniature-${idx}`}
            sx={
              idx === page ? styles.miniatureActive : styles.miniatureInactive
            }
            onClick={() => setPage(idx)}
            aria-label="select product image"
          >
            {it.type === 'video' ? (
              <YoutubeThumb src={it.props.src} />
            ) : (
              <img
                alt={it.props.alt}
                {...it.props.image.images.fallback}
                sizes="5vw"
              />
            )}
          </button>
        ))}
      </div>
      <div sx={styles.featured} {...dragHandlers}>
        <Arrow
          direction="left"
          sx={styles.arrowLeft}
          data-testid="previousProductImage"
          aria-label="previous image"
          onClick={setPreviousPage}
        />
        <div sx={styles.media}>
          {item.type === 'image' && (
            <GatsbyImage sx={styles.image} {...item.props} />
          )}
          {item.type === 'video' && <YoutubeIframe {...item.props} />}
        </div>
        <Arrow
          direction="right"
          sx={styles.arrowRight}
          data-testid="nextProductImage"
          aria-label="next image"
          onClick={setNextPage}
        />

        <Bullets
          totalQuantity={totalPages}
          activeBullet={page}
          onClick={(_, idx) => setPage(idx)}
        />
      </div>
    </div>
  )
}

export default ProductImageGallery
