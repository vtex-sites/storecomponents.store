import { gql } from '@vtex/gatsby-plugin-graphql'
import React from 'react'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import HybridWrapper from '@vtex/gatsby-theme-store/src/components/HybridWrapper'
import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import { useQuery } from '@vtex/gatsby-theme-store'
import AboveTheFoldPreview from '@vtex/gatsby-theme-store/src/views/product/AboveTheFoldPreview'

import DefaultProductView from '../../@vtex/gatsby-theme-store/views/product/index'
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
    <HybridWrapper fallback={<AboveTheFoldPreview />}>
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
