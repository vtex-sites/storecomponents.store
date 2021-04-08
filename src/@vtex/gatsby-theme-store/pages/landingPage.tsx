import React from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { FC } from 'react'
import Container from '@vtex/gatsby-theme-store/src/components/Container'

import Layout from '../components/Layout'

type Props = PageProps<unknown>

const Page: FC<Props> = ({ data, pageContext }) => {
  const { vtexCmsPageContent } = pageContext
  const [header, richText] = data?.content?.blocks

  return (
    <Layout>
      <Container>
        <h1>{header?.props?.title}</h1>

        {JSON.stringify(richText?.props?.content)}
      </Container>
    </Layout>
  )
}

// These variables are populated via CMS in gatsby-node's onCreatePage API
export const query = graphql`
  query LandingPageQuery {
    seo: vtexCmsPageContent(type: { eq: "seo" }) {
      extraBlocks {
        blocks {
          name
          props
        }
      }
    }
    content: vtexCmsPageContent(type: { eq: "landingPage" }) {
      blocks {
        name
        props
      }
    }
  }
`

export default Page
