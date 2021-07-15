/**  @jsx jsx */
import { useGetThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import { jsx } from '@vtex/store-ui'
import { withArtDirection } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import type { FC } from 'react'

import styles from './styles.json'
import imagesConf from '../../../images/config'

interface Props {
  blocks: any
}

const useBanner = (blocks: any) => {
  const getImageData = useGetThumborImageData()

  return useMemo(() => {
    const block = blocks.find((b: any) => b.name === 'SearchBanner')
    const props = block?.props

    if (
      props == null ||
      props.desktop?.srcSet == null ||
      props.mobile?.srcSet == null
    ) {
      return props
    }

    const { desktop, mobile } = props

    const desktopImage = getImageData({
      baseUrl: desktop.srcSet,
      ...imagesConf['searchBanner.desktop'],
    })

    const mobileImage = getImageData({
      baseUrl: mobile.srcSet,
      ...imagesConf['searchBanner.mobile'],
    })

    const image = withArtDirection(mobileImage, [
      {
        media: '(min-width: 40em)',
        image: desktopImage,
      },
    ])

    return {
      ...props,
      image,
    }
  }, [blocks, getImageData])
}

const SearchBanner: FC<Props> = ({ blocks }) => {
  const props = useBanner(blocks)

  if (props == null) {
    return null
  }

  return (
    <div sx={styles}>
      <div sx={styles.imageContainer}>
        <div
          sx={styles.imagePlaceholder}
          style={{ backgroundColor: props.image.backgroundColor }}
        />
        <picture>
          {props.image.images.sources?.map((source: any) => (
            <source key={source.srcSet} {...source} />
          ))}
          <img
            alt={props.alt}
            sx={styles.image}
            height={props.image.height}
            width={props.image.width}
            {...props.image.images.fallback}
          />
        </picture>
      </div>

      <div sx={styles.text} style={{ color: props.color }}>
        <h1 sx={styles.text.h1}>{props.title}</h1>
        <h2
          sx={styles.text.h2}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  )
}

export default SearchBanner
