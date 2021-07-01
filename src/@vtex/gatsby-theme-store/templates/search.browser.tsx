import { gql } from '@vtex/gatsby-plugin-graphql'
import React from 'react'
import type { FC } from 'react'
import type { PageProps as GatsbyPageProps } from 'gatsby'
import HybridWrapper from '@vtex/gatsby-theme-store/src/components/HybridWrapper'
import {
  useQuery,
  useQueryVariablesFromSearchParams,
  useSearchParamsFromUrl,
  usePersonalizedSearchRedirect,
} from '@vtex/gatsby-theme-store'
import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import SearchView from '@vtex/gatsby-theme-store/src/views/search'
import AboveTheFoldPreview from '@vtex/gatsby-theme-store/src/views/search/AboveTheFoldPreview'

import { BrowserSearchPageQuery } from './__generated__/BrowserSearchPageQuery.graphql'
import type {
  BrowserSearchPageQueryQuery,
  BrowserSearchPageQueryQueryVariables,
} from './__generated__/BrowserSearchPageQuery.graphql'

const SearchPage: FC<PageProps> = (props) => {
  const {
    pageContext: { hideUnavailableItems },
    pageContext,
  } = props

  const searchParams = useSearchParamsFromUrl()
  const variables = useQueryVariablesFromSearchParams(searchParams)
  const redirecting = usePersonalizedSearchRedirect(searchParams)

  const { data } = useQuery<
    BrowserSearchPageQueryQuery,
    BrowserSearchPageQueryQueryVariables
  >({
    ...BrowserSearchPageQuery,
    variables: { ...variables, hideUnavailableItems },
    suspense: true,
  })

  if (data == null) {
    throw new Error('Something went wrong while fetching the data')
  }

  /** Search result is not regionalized. We need to wait for the redirect */
  if (redirecting === true) {
    return <AboveTheFoldPreview />
  }

  return (
    <SearchView
      {...props}
      data={data}
      searchParams={searchParams}
      pageContext={pageContext}
    />
  )
}

type PageProps = GatsbyPageProps<
  null,
  {
    hideUnavailableItems?: boolean
    from?: number
    to?: number
    canonicalPath: string
  }
>

const Page: FC<PageProps> = (props) => (
  <Layout>
    <HybridWrapper fallback={<AboveTheFoldPreview />}>
      <SearchPage {...props} />
    </HybridWrapper>
  </Layout>
)

export const query = gql`
  query BrowserSearchPageQuery(
    $from: Int = 0
    $to: Int = 11
    $fullText: String
    $selectedFacets: [VTEX_SelectedFacetInput!]
    $orderBy: String = ""
    $hideUnavailableItems: Boolean = false
  ) {
    vtex {
      productSearch(
        from: $from
        to: $to
        hideUnavailableItems: $hideUnavailableItems
        simulationBehavior: skip
        orderBy: $orderBy
        fullText: $fullText
        selectedFacets: $selectedFacets
      ) {
        products {
          id: productId
          productName
          linkText
          items {
            itemId
            images {
              imageUrl
              imageText
            }
          }
        }
        recordsFiltered
      }
      searchMetadata(fullText: $fullText, selectedFacets: $selectedFacets) {
        title: titleTag
        description: metaTagDescription
      }
      facets(
        fullText: $fullText
        selectedFacets: $selectedFacets
        operator: or
        behavior: "Static"
        removeHiddenFacets: true
      ) {
        breadcrumb {
          href
          name
        }
        facets {
          name
          type
          values {
            key
            name
            value
            selected
            quantity
            range {
              from
              to
            }
          }
        }
      }
      banners(fullText: $fullText, selectedFacets: $selectedFacets) {
        banners {
          id
          name
          area
          html
        }
      }
    }
  }
`

export default Page
