import React from 'react'
import type { FC } from 'react'
import type { PageProps } from 'gatsby'
import Canonical from '@vtex/gatsby-theme-store/src/components/HomePage/SEO/Canonical'
import StructuredData from '@vtex/gatsby-theme-store/src/components/HomePage/SEO/StructuredData'
import SiteMetadata from '@vtex/gatsby-theme-store/src/components/HomePage/SEO/SiteMetadata'

import type { HomePageQueryQuery } from '../../../pages/__generated__/HomePageQuery.graphql'

type Props = PageProps<HomePageQueryQuery>

const SEO: FC<Props> = (props) => {
  const { seo } = props.data
  const [siteMetadata, facebook] = seo!.extraBlocks[0]!.blocks!
  const subProps = {
    ...props,
    siteMetadata: {
      ...siteMetadata!.props,
      titleTemplate: '%s',
      social: {
        facebook: facebook!.props,
      },
    },
  }

  return (
    <>
      <SiteMetadata {...subProps} />
      <Canonical {...subProps} />
      <StructuredData {...subProps} />
    </>
  )
}

export default SEO
