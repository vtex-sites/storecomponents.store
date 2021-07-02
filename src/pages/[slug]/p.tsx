import { gql } from '@vtex/gatsby-plugin-graphql'
import React from 'react'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import HybridWrapper from '@vtex/gatsby-theme-store/src/components/HybridWrapper'
import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import { useQuery } from '@vtex/gatsby-theme-store'
import { Card, Container, Flex, Grid, Skeleton } from '@vtex/store-ui'

import DefaultProductView from '../../views/product'
import { BrowserProductPageQuery } from '../../[slug]/__generated__/BrowserProductPageQuery.graphql'
import type {
  BrowserProductPageQueryQuery,
  BrowserProductPageQueryQueryVariables,
} from '../../[slug]/__generated__/BrowserProductPageQuery.graphql'

export type BrowserProductPageProps = PageProps & { slug: string }

const ProductPage: FC<BrowserProductPageProps> = (props) => {
  const { data } = useQuery<
    BrowserProductPageQueryQuery,
    BrowserProductPageQueryQueryVariables
  >({
    ...BrowserProductPageQuery,
    variables: { slug: props.slug },
    suspense: true,
  })

  return (
    <DefaultProductView
      {...props}
      product={data!.vtex.product}
      slug={props.slug}
    />
  )
}

const Page: FC<BrowserProductPageProps> = (props) => (
  <Layout>
    <HybridWrapper
      fallback={
        <Container>
          <Flex variant="productPage.container">
            <Skeleton width="500px" height="45px" />
            <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, 2]}>
              <Skeleton width="500px" height="500px" />
              <Card>
                <Skeleton width="500px" height="20px" />
                <Skeleton width="500px" height="20px" />
                <Skeleton width="500px" height="20px" />
                <Skeleton width="500px" height="20px" />
              </Card>
            </Grid>
          </Flex>
        </Container>
      }
    >
      <ProductPage {...props} />
    </HybridWrapper>
  </Layout>
)

export const query = gql`
  query BrowserProductPageQuery($slug: String!) {
    vtex {
      product(slug: $slug) {
        ...ProductViewFragment_product
      }
    }
  }
`

export default Page
