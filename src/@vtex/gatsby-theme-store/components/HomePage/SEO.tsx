import React from 'react'
import Helmet from '@vtex/gatsby-theme-store/src/components/SEO/Helmet'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import type { FC } from 'react'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import { HomePageSeoQueryQuery } from './__generated__/HomePageSEOQuery.graphql'

type Props = PageProps<HomePageQueryQuery>

const SEO: FC<Props> = ({ data: { vtexCmsPageContent } }) => {
  const { locale } = useIntl()
  const [
    { props: siteMetadata },
    { props: facebook },
  ] = vtexCmsPageContent!.extraBlocks[0]!.blocks

  const { site } = useStaticQuery<HomePageSeoQueryQuery>(
    graphql`
      query HomePageSEOQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Helmet
      title={siteMetadata.title}
      htmlAttributes={{ locale, lang: locale }}
      meta={[
        {
          name: 'description',
          content: siteMetadata.description,
        },
        {
          property: 'og:url',
          content: site?.siteMetadata?.siteUrl,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: facebook.title,
        },
        {
          property: 'og:description',
          content: facebook.description,
        },
        {
          property: 'og:image',
          content: facebook.thumbnail,
        },
      ]}
    />
  )
}

export default SEO
