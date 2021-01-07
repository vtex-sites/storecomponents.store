import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import Page from '@vtex/gatsby-theme-store/src/pages/index'

import type { HomePageQueryQuery } from './__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

export const query = graphql`
  query HomePageQuery {
    vtexCmsPageContent(type: { eq: "home" }) {
      blocks {
        name
        props
      }
    }
  }
`

export default Page
