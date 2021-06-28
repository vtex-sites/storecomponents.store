import { useLocation } from '@reach/router'
import { useMemo } from 'react'
import { IMAGE_DEFAULT, useLocale } from '@vtex/gatsby-theme-store'
import { graphql, useStaticQuery } from 'gatsby'
import type { ComponentPropsWithoutRef } from 'react'
import type { ProductViewProps } from '@vtex/gatsby-theme-store/src/views/product'
import type { GatsbySeo } from 'gatsby-plugin-next-seo'

import type { StoreProductPageSeoQueryQuery } from './__generated__/StoreProductPageSEOQuery.graphql'

type Options = ProductViewProps

type Return = ComponentPropsWithoutRef<typeof GatsbySeo>

const IMAGE_SIZE = 720

export const useMetadata = (options: Options): Return => {
  const locale = useLocale()
  const { pathname, host } = useLocation()
  const {
    seo,
    site: {
      siteMetadata: { siteUrl },
    },
  }: any = useStaticQuery<StoreProductPageSeoQueryQuery>(
    graphql`
      query StoreProductPageSEOQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
        seo: vtexCmsPageContent(type: { eq: "seo" }) {
          extraBlocks {
            blocks {
              name
              props
            }
          }
        }
      }
    `
  )

  const [siteMetadata] = seo.extraBlocks[0].blocks
  const { product } = options
  const images = useMemo(
    () =>
      product.items[0].images.map((image: any) => ({
        url: image.imageUrl ?? IMAGE_DEFAULT,
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        alt: image.imageText,
      })),
    [product]
  )

  const price = product.items[0].sellers[0].commercialOffer.spotPrice
  const title = product.titleTag || siteMetadata.props.title
  const description =
    product.metaTagDescription || siteMetadata.props.description

  return {
    ...siteMetadata.props,
    language: locale,
    title,
    description,
    canonical: `https://${host}${pathname}`,
    openGraph: {
      type: 'og:product',
      url: `${siteUrl}${pathname}`,
      title,
      description,
      images,
    },
    metaTags: [
      {
        property: 'product:price:amount',
        content: price,
      },
      {
        property: 'product:price:currency',
        content: 'USD',
      },
    ],
  }
}
