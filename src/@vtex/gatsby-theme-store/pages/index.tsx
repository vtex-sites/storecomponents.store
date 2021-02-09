import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import Page from '@vtex/gatsby-theme-store/src/pages/index'

import type { HomePageQueryQuery } from './__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

// These variables are populated via CMS in gatsby-node's onCreatePage API
export const query = graphql`
  query HomePageQuery(
    $from: Int!
    $to: Int!
    $collection: String!
    $orderBy: String!
    $hideUnavailableItems: Boolean!
  ) {
    seo: vtexCmsPageContent(type: { eq: "seo" }) {
      extraBlocks {
        blocks {
          name
          props
        }
      }
    }
    content: vtexCmsPageContent(type: { eq: "home" }) {
      blocks {
        name
        props
      }
    }
    vtex {
      products(
        from: $from
        to: $to
        collection: $collection
        orderBy: $orderBy
        hideUnavailableItems: $hideUnavailableItems
      ) {
        ...ProductSummary_product
      }
    }
  }
`

export default Page
