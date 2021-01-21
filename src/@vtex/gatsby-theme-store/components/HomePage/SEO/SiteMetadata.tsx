import { useIntl } from '@vtex/gatsby-plugin-i18n'
import Helmet from '@vtex/gatsby-theme-store/src/components/SEO/Helmet'
import { PageProps } from 'gatsby'
import React from 'react'
import type { FC } from 'react'

import type { HomePageQueryQuery } from '../../../pages/__generated__/HomePageQuery.graphql'

interface Props extends PageProps<HomePageQueryQuery> {
  siteMetadata: {
    siteUrl: string
    description: string
    title: string
  }
}

const SiteMetadata: FC<Props> = ({
  data: { vtexCmsPageContent },
  siteMetadata: { siteUrl },
}) => {
  const { locale } = useIntl()
  const [
    { props: siteMetadata },
    { props: facebook },
  ] = vtexCmsPageContent!.extraBlocks[0]!.blocks

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
          content: siteUrl,
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

export default SiteMetadata
