import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import type { PageProps } from 'gatsby'
import type { GatsbySeo } from 'gatsby-plugin-next-seo'
import type { ComponentPropsWithoutRef } from 'react'
import { useLocale } from '@vtex/gatsby-theme-store'

import type { StoreSearchPageSeoQueryQuery } from './__generated__/StoreSearchPageSEOQuery.graphql'

type Options = PageProps<StoreSearchPageSeoQueryQuery>

type Return = ComponentPropsWithoutRef<typeof GatsbySeo>

export const useMetadata = (options: Options): Return => {
  const language = useLocale()
  const { host } = useLocation()

  const {
    seo,
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery<StoreSearchPageSeoQueryQuery>(
    graphql`
      query StoreSearchPageSEOQuery {
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

  const [siteMetadata, facebook] = seo!.extraBlocks[0]!.blocks!
  const {
    pageContext: { canonicalPath },
    data: {
      vtex: { searchMetadata },
    },
  }: any = options

  const canonicalUrl = `https://${host}${canonicalPath}`
  const canonical =
    typeof canonicalPath === 'string'
      ? {
          canonical: canonicalUrl,
          noindex: false,
          nofollow: false,
        }
      : { canonical: undefined, noindex: true, nofollow: false }

  return {
    ...siteMetadata.props,
    ...canonical,
    title: searchMetadata?.title || siteMetadata.props.title,
    description: searchMetadata?.description || siteMetadata.props.description,
    language,
    openGraph: {
      type: 'website',
      url: `${siteUrl}${canonicalPath}`,
      ...facebook.props,
    },
  }
}
