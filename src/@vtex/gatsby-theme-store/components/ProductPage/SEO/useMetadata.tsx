import { useLocation } from '@reach/router'
import { useMemo } from 'react'
import { IMAGE_DEFAULT, scaleImage, useLocale } from '@vtex/gatsby-theme-store'
import { graphql, useStaticQuery } from 'gatsby'
import type { ComponentPropsWithoutRef } from 'react'
import type { ProductPageProps } from '@vtex/gatsby-theme-store/src/templates/product'
import type { GatsbySeo } from 'gatsby-plugin-next-seo'

import type { StoreProductPageSeoQueryQuery } from './__generated__/StoreProductPageSEOQuery.graphql'

type Options = ProductPageProps

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

  const [siteMetadata, facebook] = seo.extraBlocks[0].blocks
  const {
    data: {
      vtex: { product },
    },
  } = options

  const images = useMemo(
    () =>
      product?.items?.[0]?.images?.map((image) => ({
        url: scaleImage(
          image?.imageUrl ?? IMAGE_DEFAULT,
          IMAGE_SIZE,
          IMAGE_SIZE
        ),
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        alt: image?.imageText,
      })),
    [product]
  )

  const title = product?.titleTag || siteMetadata.props.title
  const description =
    product?.metaTagDescription || siteMetadata.props.description

  return {
    ...siteMetadata.props,
    language: locale,
    title,
    description,
    canonical: `https://${host}${pathname}`,
    openGraph: {
      ...facebook.props,
      type: 'product',
      url: `${siteUrl}${pathname}`,
      title,
      description,
      images,
    },
  }
}
