import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SearchSEO, useSearch } from '@vtex/gatsby-theme-store'
import type { FC } from 'react'
import type { SearchViewProps } from '@vtex/gatsby-theme-store/src/views/search/index'

import type { StoreSearchPageSeoQueryQuery } from './__generated__/StoreSearchPageSEOQuery.graphql'

const useCanonical = (canonicalPath: string | undefined) => {
  const { searchParams } = useSearch()

  // We still don't support canonalizing other pagination rather then the first one
  if (canonicalPath == null || searchParams.page !== 0) {
    return undefined
  }

  return canonicalPath
}

const Seo: FC<SearchViewProps> = (props) => {
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

  const [siteMetadata] = seo!.extraBlocks[0]!.blocks!
  const {
    data: {
      vtex: { searchMetadata, facets },
    },
    pageContext: { canonicalPath },
  } = props

  const canonical = useCanonical(canonicalPath)

  return (
    <SearchSEO
      {...siteMetadata.props}
      title={searchMetadata?.title || siteMetadata.props.title}
      description={
        searchMetadata?.description || siteMetadata.props.description
      }
      canonical={canonical}
      breadcrumb={facets?.breadcrumb as any} // this can be removed once GraphQL types are correct
    />
  )
}

export default Seo
