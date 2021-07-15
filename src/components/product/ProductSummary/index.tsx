/** @jsx jsx */
import { useLink } from '@vtex/gatsby-theme-store'
import { LocalizedLink, jsx } from '@vtex/store-ui'
import { useThumborImageData } from '@vtex/gatsby-plugin-thumbor'
import imageConf from 'src/images/config'
import type { FC } from 'react'

import Offer from './Offer'
import OfferPreview from './OfferPreview'
import BuyButton from '../../ui/BuyButton'
import styles from './styles.json'

export type Item = {
  itemId: string
  sellers: Array<{
    sellerId: string
    commercialOffer: {
      availableQuantity: number
      price: number
      listPrice: number
      maxInstallments: Array<{
        value: number
        numberOfInstallments: number
      }>
      teasers: Array<{ name?: string }>
    }
  }>
  images: Array<{ imageUrl: string; imageText: string }>
}

interface Props {
  product: {
    productName: string
    items: Item[]
  }
}

const ProductSummary: FC<Props> = ({ product }) => {
  const {
    items: [sku],
    productName,
  } = product

  const {
    images: [{ imageUrl, imageText }],
    sellers,
  } = sku

  const linkProps = useLink(product as any)
  const image = useThumborImageData({
    ...imageConf['product.summary'],
    baseUrl: imageUrl,
  })

  const itemSku = {
    ...sku,
    images: [{ imageUrl: image.images.fallback?.src }],
  }

  return (
    <LocalizedLink
      data-testid="productSummaryContainer"
      state={{ fromSummary: true }}
      sx={styles.link}
      {...linkProps}
    >
      <div sx={styles.imageContainer}>
        <img
          sx={styles.image}
          alt={imageText ?? 'Product Image'}
          loading="lazy"
          width={image.width}
          height={image.height}
          {...image.images.fallback}
        />
      </div>
      <h3 sx={styles.title} data-testid="productSummaryTitle">
        {productName}
      </h3>

      {sellers === undefined ? (
        <OfferPreview />
      ) : sellers.length > 0 ? (
        <Offer
          variant="productSummary"
          commercialOffer={sellers[0].commercialOffer}
        />
      ) : null}

      <BuyButton sku={itemSku} productName={productName} />
    </LocalizedLink>
  )
}

export default ProductSummary
