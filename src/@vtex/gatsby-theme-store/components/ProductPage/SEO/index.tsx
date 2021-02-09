import React from 'react'
import type { FC } from 'react'
import type { ProductPageProps } from '@vtex/gatsby-theme-store/src/templates/product'
import { graphql, useStaticQuery } from 'gatsby'
import Canonical from '@vtex/gatsby-theme-store/src/components/ProductPage/SEO/Canonical'
import StructuredData from '@vtex/gatsby-theme-store/src/components/ProductPage/SEO/StructuredData'
import SiteMetadata from '@vtex/gatsby-theme-store/src/components/ProductPage/SEO/SiteMetadata'

import type { StoreProductPageSeoQueryQuery } from './__generated__/StoreProductPageSEOQuery.graphql'

const SEO: FC<ProductPageProps> = (props) => {
  const { seo } = useStaticQuery<StoreProductPageSeoQueryQuery>(
    graphql`
      query StoreProductPageSEOQuery {
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

  const [siteMetadata, facebook] = seo!.extraBlocks[0]!.blocks!
  const subProps = {
    ...props,
    siteMetadata: {
      ...siteMetadata!.props,
      social: {
        facebook: facebook!.props,
      },
    },
  }

  return (
    <>
      <SiteMetadata {...subProps} />
      <Canonical {...subProps} />
      <StructuredData {...subProps} />
    </>
  )
}

export default SEO
