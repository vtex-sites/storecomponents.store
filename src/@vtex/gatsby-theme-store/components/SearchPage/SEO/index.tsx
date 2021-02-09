import React from 'react'
import type { FC } from 'react'
import type { SearchPageProps } from '@vtex/gatsby-theme-store/src/templates/search'
import { graphql, useStaticQuery } from 'gatsby'
import Canonical from '@vtex/gatsby-theme-store/src/components/SearchPage/SEO/Canonical'
import StructuredData from '@vtex/gatsby-theme-store/src/components/SearchPage/SEO/StructuredData'
import SiteMetadata from '@vtex/gatsby-theme-store/src/components/SearchPage/SEO/SiteMetadata'

import type { StoreSearchPageSeoQueryQuery } from './__generated__/StoreSearchPageSEOQuery.graphql'

const SEO: FC<SearchPageProps> = (props) => {
  const { seo } = useStaticQuery<StoreSearchPageSeoQueryQuery>(
    graphql`
      query StoreSearchPageSEOQuery {
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
        facebook: facebook?.props,
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
